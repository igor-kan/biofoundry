
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus } from 'lucide-react';

export const ClinicalTrialsOptimizer = () => {
  const [trialPhase, setTrialPhase] = useState('phase2');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const trialData = {
    phase1: { participants: 30, duration: 6, successRate: 68 },
    phase2: { participants: 150, duration: 18, successRate: 42 },
    phase3: { participants: 800, duration: 36, successRate: 28 }
  };

  const optimizations = [
    {
      category: 'Patient Stratification',
      improvement: '+23%',
      description: 'AI-powered biomarker-based enrollment',
      impact: 'High'
    },
    {
      category: 'Endpoint Selection',
      improvement: '+18%',
      description: 'Digital biomarkers + traditional measures',
      impact: 'Medium'
    },
    {
      category: 'Site Selection',
      improvement: '+15%',
      description: 'Predictive enrollment modeling',
      impact: 'Medium'
    },
    {
      category: 'Protocol Design',
      improvement: '+31%',
      description: 'Adaptive trial design optimization',
      impact: 'High'
    }
  ];

  const syntheticControls = [
    {
      condition: 'Non-Small Cell Lung Cancer',
      realWorldData: '45,000 patients',
      matchQuality: 94,
      timeReduction: '8 months'
    },
    {
      condition: 'Rheumatoid Arthritis',
      realWorldData: '23,000 patients',
      matchQuality: 89,
      timeReduction: '12 months'
    },
    {
      condition: 'Type 2 Diabetes',
      realWorldData: '78,000 patients',
      matchQuality: 96,
      timeReduction: '6 months'
    }
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-purple-400" />
            Trial Design Optimization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Trial Phase</label>
              <Select value={trialPhase} onValueChange={setTrialPhase}>
                <SelectTrigger className="bg-slate-900/50 border-slate-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="phase1">Phase I</SelectItem>
                  <SelectItem value="phase2">Phase II</SelectItem>
                  <SelectItem value="phase3">Phase III</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Therapeutic Area</label>
              <Input 
                placeholder="e.g., Oncology, Cardiology"
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Target Population</label>
              <Input 
                placeholder="e.g., Advanced NSCLC"
                className="bg-slate-900/50 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-300 mb-3">Current Trial Parameters</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Participants</p>
                <p className="text-lg font-semibold text-white">{trialData[trialPhase].participants}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration (months)</p>
                <p className="text-lg font-semibold text-white">{trialData[trialPhase].duration}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Predicted Success</p>
                <p className="text-lg font-semibold text-green-400">{trialData[trialPhase].successRate}%</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            {isOptimizing ? 'Optimizing Trial Design...' : 'Optimize Trial Design'}
          </Button>

          {isOptimizing && (
            <div className="bg-slate-900/50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-purple-400">Analyzing 100,000+ historical trials...</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI-Powered Optimizations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {optimizations.map((opt, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-white">{opt.category}</h5>
                  <div className="flex gap-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-400"
                    >
                      {opt.improvement}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`${opt.impact === 'High' ? 'border-red-500/50 text-red-400' : 
                        'border-yellow-500/50 text-yellow-400'}`}
                    >
                      {opt.impact} Impact
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{opt.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-cyan-400" />
            Synthetic Control Arms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-400 text-sm">
            Generate synthetic control groups from real-world data to reduce trial costs and accelerate timelines.
          </p>
          
          <div className="space-y-3">
            {syntheticControls.map((control, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-semibold text-white">{control.condition}</h5>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                    -{control.timeReduction}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">RWD Source</p>
                    <p className="text-white">{control.realWorldData}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Match Quality</p>
                    <p className="text-green-400">{control.matchQuality}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time Saved</p>
                    <p className="text-cyan-400">{control.timeReduction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
