
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ProteinViewer = () => {
  const [selectedProtein, setSelectedProtein] = useState('spike');

  const proteins = {
    spike: {
      name: 'SARS-CoV-2 Spike Protein',
      pdbId: '6VYB',
      description: 'Critical for viral entry into host cells',
      confidence: 95.2,
      foldingEnergy: -1847.3
    },
    insulin: {
      name: 'Human Insulin',
      pdbId: '1MSO',
      description: 'Hormone regulating glucose metabolism',
      confidence: 98.7,
      foldingEnergy: -923.1
    },
    hemoglobin: {
      name: 'Hemoglobin Alpha Chain',
      pdbId: '1GZX',
      description: 'Oxygen transport protein',
      confidence: 97.4,
      foldingEnergy: -1156.8
    }
  };

  const protein = proteins[selectedProtein];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">3D Protein Structure Prediction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {Object.entries(proteins).map(([key, p]) => (
            <Button
              key={key}
              variant={selectedProtein === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedProtein(key)}
              className={selectedProtein === key ? 
                "bg-purple-600 hover:bg-purple-700" : 
                "border-slate-600 text-slate-300 hover:bg-slate-700"
              }
            >
              {p.name.split(' ')[0]}
            </Button>
          ))}
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 min-h-[300px] flex items-center justify-center relative overflow-hidden">
          {/* Simulated 3D protein visualization */}
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/50">
              AlphaFold Prediction
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-purple-300">Structure Info</h4>
            <p className="text-xs text-gray-400">PDB ID: {protein.pdbId}</p>
            <p className="text-xs text-gray-400">Confidence: {protein.confidence}%</p>
            <p className="text-xs text-gray-400">Folding Energy: {protein.foldingEnergy} kcal/mol</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-cyan-300">Function</h4>
            <p className="text-xs text-gray-400">{protein.description}</p>
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs">
              Validated Structure
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
