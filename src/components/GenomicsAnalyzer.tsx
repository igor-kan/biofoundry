
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, FileText } from 'lucide-react';

export const GenomicsAnalyzer = () => {
  const [analysisType, setAnalysisType] = useState('variant');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const variants = [
    {
      gene: 'BRCA1',
      variant: 'c.5266dupC',
      type: 'Frameshift',
      pathogenicity: 'Pathogenic',
      confidence: 99.2,
      disease: 'Breast/Ovarian Cancer',
      frequency: '0.1%'
    },
    {
      gene: 'APOE',
      variant: 'rs429358',
      type: 'Missense',
      pathogenicity: 'Risk Factor',
      confidence: 87.5,
      disease: "Alzheimer's Disease",
      frequency: '13.7%'
    },
    {
      gene: 'CFTR',
      variant: 'p.Phe508del',
      type: 'Deletion',
      pathogenicity: 'Pathogenic',
      confidence: 100.0,
      disease: 'Cystic Fibrosis',
      frequency: '3.9%'
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-green-400" />
            Genomic Analysis Pipeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {[
              { key: 'variant', label: 'Variant Analysis' },
              { key: 'gwas', label: 'GWAS Study' },
              { key: 'pathway', label: 'Pathway Analysis' },
              { key: 'expression', label: 'Gene Expression' }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={analysisType === key ? "default" : "outline"}
                size="sm"
                onClick={() => setAnalysisType(key)}
                className={analysisType === key ? 
                  "bg-green-600 hover:bg-green-700" : 
                  "border-slate-600 text-slate-300 hover:bg-slate-700"
                }
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="flex gap-3">
            <Input 
              placeholder="Upload VCF file or enter variant (e.g., rs1234567)"
              className="bg-slate-900/50 border-slate-600 text-white"
            />
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-green-600 hover:bg-green-700"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze'}
            </Button>
          </div>

          {isAnalyzing && (
            <div className="bg-slate-900/50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-green-400">Processing genomic data...</p>
              <p className="text-xs text-gray-500 mt-1">Cross-referencing against 50M+ variants</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            Variant Impact Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {variants.map((variant, idx) => (
              <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-semibold text-white">{variant.gene}</h5>
                    <p className="text-sm text-gray-400">{variant.variant}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge 
                      variant="secondary" 
                      className={`${variant.pathogenicity === 'Pathogenic' ? 'bg-red-500/20 text-red-400' : 
                        'bg-yellow-500/20 text-yellow-400'}`}
                    >
                      {variant.pathogenicity}
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                      {variant.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Disease Association</p>
                    <p className="text-white font-medium">{variant.disease}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Population Frequency</p>
                    <p className="text-cyan-400">{variant.frequency}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Confidence</p>
                    <p className="text-green-400">{variant.confidence}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Clinical Significance</p>
                    <Progress value={variant.confidence} className="h-2 mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/50">
            <CardContent className="p-4">
              <h4 className="text-lg font-semibold text-green-300 mb-2">AI Insights</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 3 high-impact variants detected in cancer-related genes</li>
                <li>• Polygenic risk score: 2.3x elevated for cardiovascular disease</li>
                <li>• Pharmacogenomic profile suggests standard warfarin dosing</li>
                <li>• No rare disease associations identified</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
