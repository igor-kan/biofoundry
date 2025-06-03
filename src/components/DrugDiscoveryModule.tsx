
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';

export const DrugDiscoveryModule = () => {
  const [selectedTarget, setSelectedTarget] = useState('spike');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMolecules, setGeneratedMolecules] = useState([]);

  const targets = {
    spike: { name: 'SARS-CoV-2 Spike', druggability: 87 },
    bcl2: { name: 'BCL-2 (Cancer)', druggability: 92 },
    amyloid: { name: 'Amyloid Beta', druggability: 73 },
    egfr: { name: 'EGFR Kinase', druggability: 95 }
  };

  const molecules = [
    {
      name: 'BF-2847',
      smiles: 'CC1=C(C=C(C=C1)C(=O)NC2=CC=C(C=C2)CN3CCN(CC3)C)OC',
      affinity: 8.7,
      toxicity: 12,
      novelty: 94,
      synthesis: 'Feasible'
    },
    {
      name: 'BF-3921',
      smiles: 'CN1CCN(CC1)C2=CC=C(C=C2)NC(=O)C3=CC=C(C=C3)F',
      affinity: 9.2,
      toxicity: 8,
      novelty: 89,
      synthesis: 'Easy'
    },
    {
      name: 'BF-1574',
      smiles: 'CC1=CC=C(C=C1)C(=O)NC2=CC=C(C=C2)S(=O)(=O)N3CCCC3',
      affinity: 7.9,
      toxicity: 15,
      novelty: 97,
      synthesis: 'Moderate'
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedMolecules(molecules);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-400" />
            Target Selection & Druggability Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(targets).map(([key, target]) => (
              <Button
                key={key}
                variant={selectedTarget === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTarget(key)}
                className={selectedTarget === key ? 
                  "bg-blue-600 hover:bg-blue-700" : 
                  "border-slate-600 text-slate-300 hover:bg-slate-700"
                }
              >
                {target.name}
              </Button>
            ))}
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">
              {targets[selectedTarget].name} Analysis
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Druggability Score</span>
                <span className="text-white">{targets[selectedTarget].druggability}%</span>
              </div>
              <Progress value={targets[selectedTarget].druggability} className="h-2" />
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-xs text-gray-500">Binding Pockets</p>
                  <p className="text-sm text-white">3 identified</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Known Inhibitors</p>
                  <p className="text-sm text-white">847 compounds</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-green-400" />
            AI Molecular Generation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Input 
              placeholder="Enter target parameters or constraints..."
              className="bg-slate-900/50 border-slate-600 text-white"
            />
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-green-600 hover:bg-green-700"
            >
              {isGenerating ? 'Generating...' : 'Generate'}
            </Button>
          </div>

          {isGenerating && (
            <div className="bg-slate-900/50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-green-400">Generating novel molecular candidates...</p>
              <p className="text-xs text-gray-500 mt-1">Processing 10M+ compounds with transformer models</p>
            </div>
          )}

          {generatedMolecules.length > 0 && !isGenerating && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-green-300">Generated Candidates</h4>
              {generatedMolecules.map((molecule, idx) => (
                <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-semibold text-white">{molecule.name}</h5>
                      <p className="text-xs text-gray-400 font-mono">{molecule.smiles}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${molecule.synthesis === 'Easy' ? 'bg-green-500/20 text-green-400' : 
                        molecule.synthesis === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' : 
                        'bg-red-500/20 text-red-400'}`}
                    >
                      {molecule.synthesis}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Binding Affinity</p>
                      <p className="text-blue-400 font-semibold">{molecule.affinity} μM</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Toxicity Risk</p>
                      <p className={`font-semibold ${molecule.toxicity < 10 ? 'text-green-400' : 
                        molecule.toxicity < 20 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {molecule.toxicity}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Novelty Score</p>
                      <p className="text-purple-400 font-semibold">{molecule.novelty}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
