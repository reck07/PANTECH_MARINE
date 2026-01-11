import { useState } from 'react'
import { Box, Container, ArrowRight, AlertTriangle, Check, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Equipment() {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' })
  const [uiState, setUiState] = useState<'STANDARD_DRY_VIEW' | 'SPECIALIZED_EQUIPMENT_VIEW' | null>(null)

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
    const height = parseInt(dimensions.height) || 0
    const STANDARD_LIMIT = 2591 // 8'6" in mm

    // Logic: Dynamic UI adaptation based on cargo dimensions
    if (height > STANDARD_LIMIT) {
      setUiState('SPECIALIZED_EQUIPMENT_VIEW')
    } else {
      setUiState('STANDARD_DRY_VIEW')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-navy-deep mb-4">Smart Equipment Selector</h1>
            <p className="text-gray-600">AI-driven container recommendation based on cargo dimensions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" /> Cargo Specs
                </CardTitle>
                <CardDescription>Enter dimensions in millimeters (mm)</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAnalyze} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="length" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Length (mm)</label>
                    <Input 
                      id="length" 
                      placeholder="e.g. 5800" 
                      value={dimensions.length}
                      onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="width" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Width (mm)</label>
                    <Input 
                      id="width" 
                      placeholder="e.g. 2300" 
                      value={dimensions.width}
                      onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="height" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Height (mm)</label>
                    <Input 
                      id="height" 
                      placeholder="e.g. 2600" 
                      value={dimensions.height}
                      onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full mt-4">Analyze Cargo</Button>
                </form>
              </CardContent>
            </Card>

            {/* Result Section (Dynamic UI) */}
            <div className="space-y-6">
              {uiState === 'STANDARD_DRY_VIEW' && (
                <Card className="border-l-4 border-l-green-500 bg-green-50/30">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <Check className="h-6 w-6" /> HMM_DRY_BOX
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Standard Dry Container is suitable for this cargo.</p>
                    <div className="mt-4 p-4 bg-white rounded border border-green-100 flex justify-center">
                      <Container className="h-24 w-24 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {uiState === 'SPECIALIZED_EQUIPMENT_VIEW' && (
                <Card className="border-l-4 border-l-amber-500 bg-amber-50/30">
                  <CardHeader>
                    <CardTitle className="text-amber-700 flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6" /> HMM_STRETCHABLE_RACK
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Cargo exceeds standard height limit (2591mm). Switching to OOG (Out of Gauge) equipment view.</p>
                    <div className="mt-4 p-4 bg-white rounded border border-amber-100 flex justify-center">
                      <Box className="h-24 w-24 text-amber-600" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {!uiState && (
                <div className="h-full flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg p-8">
                  <p>Enter dimensions to see equipment recommendation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
