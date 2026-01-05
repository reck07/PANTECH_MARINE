import React, { useState } from 'react';

export default function CargoTracker() {
  const [cargoNumber, setCargoNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrackCargo = async () => {
    setLoading(true);
    setTrackingResult(null);

    // Simulate API call to a cargo tracking service
    // In a real application, you would replace this with an actual API call
    // to a service that aggregates cargo tracking from various carriers.
    // Given the provided seacargotracking.net is a directory, a direct API
    // integration with it is not feasible without a dedicated API from them
    // or from the individual shipping lines.
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

    if (cargoNumber === '12345') {
      setTrackingResult(`
        <div class="p-4 bg-green-100 border border-green-300 rounded-md">
          <h3 class="font-bold text-green-800">Tracking Information for ${cargoNumber}</h3>
          <p class="text-green-700">Status: In Transit</p>
          <p class="text-green-700">Last Location: Port of Jebel Ali, Dubai</p>
          <p class="text-green-700">Estimated Delivery: January 15, 2026</p>
        </div>
      `);
    } else if (cargoNumber === '67890') {
        setTrackingResult(`
            <div class="p-4 bg-orange-100 border border-orange-300 rounded-md">
                <h3 class="font-bold text-orange-800">Tracking Information for ${cargoNumber}</h3>
                <p class="text-orange-700">Status: Delayed</p>
                <p class="text-orange-700">Reason: Weather conditions</p>
                <p class="text-orange-700">New Estimated Delivery: January 20, 2026</p>
            </div>
        `);
    }
    else {
      setTrackingResult(`
        <div class="p-4 bg-red-100 border border-red-300 rounded-md">
          <h3 class="font-bold text-red-800">Tracking Information for ${cargoNumber}</h3>
          <p class="text-red-700">Status: Not Found</p>
          <p class="text-red-700">Please double-check your cargo number.</p>
        </div>
      `);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy-light to-ocean-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold mb-8">Track Your Cargo</h2>
        <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg shadow-xl">
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-ocean-teal"
              placeholder="Enter Cargo Number"
              value={cargoNumber}
              onChange={(e) => setCargoNumber(e.target.value)}
            />
          </div>
          <button
            onClick={handleTrackCargo}
            disabled={loading}
            className="w-full bg-ocean-teal hover:bg-ocean-light text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Tracking...' : 'Track Cargo'}
          </button>
          {trackingResult && (
            <div className="mt-6" dangerouslySetInnerHTML={{ __html: trackingResult }} />
          )}
        </div>
      </div>
    </section>
  );
}

