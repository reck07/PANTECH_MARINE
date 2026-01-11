import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Package, CheckCircle, AlertCircle, X, RefreshCw, Truck } from 'lucide-react';

interface TrackingStatus {
  status: 'in-transit' | 'delayed' | 'delivered' | 'not-found';
  cargoNumber: string;
  lastLocation: string;
  estimatedDelivery: string;
  currentLocation?: string;
  reason?: string;
  history?: Array<{
    location: string;
    timestamp: string;
    status: string;
  }>;
}

const mockTrackingData: { [key: string]: TrackingStatus } = {
  '12345': {
    status: 'in-transit',
    cargoNumber: '12345',
    lastLocation: 'Port of Jebel Ali, Dubai',
    estimatedDelivery: 'January 15, 2026',
    currentLocation: 'Arabian Sea',
    history: [
      { location: 'Port of Jebel Ali, Dubai', timestamp: '2026-01-10 14:30', status: 'Loaded' },
      { location: 'Port of Jebel Ali, Dubai', timestamp: '2026-01-10 16:00', status: 'Departed' },
      { location: 'Arabian Sea', timestamp: '2026-01-11 08:00', status: 'In Transit' },
    ]
  },
  '67890': {
    status: 'delayed',
    cargoNumber: '67890',
    lastLocation: 'Port of Dammam, KSA',
    estimatedDelivery: 'January 20, 2026',
    reason: 'Weather conditions',
    history: [
      { location: 'Port of Dammam, KSA', timestamp: '2026-01-08 10:00', status: 'Loaded' },
      { location: 'Port of Dammam, KSA', timestamp: '2026-01-09 12:00', status: 'Delayed' },
    ]
  },
  'DEMO': {
    status: 'delivered',
    cargoNumber: 'DEMO',
    lastLocation: 'Port of Dubai, UAE',
    estimatedDelivery: 'Delivered',
    history: [
      { location: 'Port of Singapore', timestamp: '2026-01-01 08:00', status: 'Loaded' },
      { location: 'Port of Dubai, UAE', timestamp: '2026-01-05 14:00', status: 'Arrived' },
      { location: 'Port of Dubai, UAE', timestamp: '2026-01-06 10:00', status: 'Delivered' },
    ]
  }
};

export default function CargoTracker() {
  const [cargoNumber, setCargoNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(false);

  useEffect(() => {
    if (autoRefresh && trackingResult && trackingResult.status === 'in-transit') {
      const interval = setInterval(() => {
        handleTrackCargo(cargoNumber, true);
      }, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh, cargoNumber, trackingResult]);

  const handleTrackCargo = async (number?: string, silent = false) => {
    const trackNumber = number || cargoNumber.trim();
    if (!trackNumber) {
      setError('Please enter a cargo number');
      return;
    }

    if (!silent) {
      setLoading(true);
      setError(null);
      setTrackingResult(null);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = mockTrackingData[trackNumber];
    
    if (result) {
      setTrackingResult(result);
      if (!searchHistory.includes(trackNumber)) {
        setSearchHistory(prev => [trackNumber, ...prev.slice(0, 4)]);
      }
      setError(null);
    } else {
      setTrackingResult({
        status: 'not-found',
        cargoNumber: trackNumber,
        lastLocation: 'Unknown',
        estimatedDelivery: 'N/A'
      });
      setError('Cargo number not found. Try: 12345, 67890, or DEMO');
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleTrackCargo();
    }
  };

  const getStatusIcon = (status: TrackingStatus['status']) => {
    switch (status) {
      case 'in-transit':
        return <Truck className="h-5 w-5" />;
      case 'delayed':
        return <AlertCircle className="h-5 w-5" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: TrackingStatus['status']) => {
    switch (status) {
      case 'in-transit':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'delayed':
        return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'delivered':
        return 'bg-green-100 border-green-300 text-green-800';
      default:
        return 'bg-red-100 border-red-300 text-red-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy-light to-ocean-light text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-heading font-bold mb-4">Track Your Cargo</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Enter your cargo tracking number to get real-time updates on your shipment
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl mb-6">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-ocean-teal focus:border-transparent"
                  placeholder="Enter Cargo Number (e.g., 12345, 67890, DEMO)"
                  value={cargoNumber}
                  onChange={(e) => setCargoNumber(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <button
                onClick={() => handleTrackCargo()}
                disabled={loading || !cargoNumber.trim()}
                className="px-6 py-3 bg-ocean-teal hover:bg-ocean-light text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Track
                  </>
                )}
              </button>
            </div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/70 mb-2">Recent searches:</p>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setCargoNumber(num);
                        handleTrackCargo(num);
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-300/50 rounded-lg text-red-100 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Tracking Results */}
          {trackingResult && (
            <div className={`p-6 rounded-lg border-2 ${getStatusColor(trackingResult.status)} animate-fadeIn`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(trackingResult.status)}
                  <div>
                    <h3 className="font-bold text-lg">Cargo #{trackingResult.cargoNumber}</h3>
                    <p className="text-sm opacity-80 capitalize">{trackingResult.status.replace('-', ' ')}</p>
                  </div>
                </div>
                {trackingResult.status === 'in-transit' && (
                  <button
                    onClick={() => setAutoRefresh(!autoRefresh)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      autoRefresh
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {autoRefresh ? 'Auto-refresh ON' : 'Enable Auto-refresh'}
                  </button>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Last Location</p>
                    <p className="text-sm opacity-80">{trackingResult.lastLocation}</p>
                    {trackingResult.currentLocation && (
                      <p className="text-sm opacity-70 mt-1">Current: {trackingResult.currentLocation}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Estimated Delivery</p>
                    <p className="text-sm opacity-80">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>

                {trackingResult.reason && (
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Delay Reason</p>
                      <p className="text-sm opacity-80">{trackingResult.reason}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tracking History */}
              {trackingResult.history && trackingResult.history.length > 0 && (
                <div className="mt-6 pt-4 border-t border-current/20">
                  <h4 className="font-semibold mb-3">Tracking History</h4>
                  <div className="space-y-3">
                    {trackingResult.history.map((event, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                          {idx < trackingResult.history!.length - 1 && (
                            <div className="w-px h-full bg-current opacity-20 mt-1"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-3">
                          <p className="font-medium">{event.location}</p>
                          <p className="text-sm opacity-70">{event.timestamp}</p>
                          <p className="text-sm opacity-60">{event.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

