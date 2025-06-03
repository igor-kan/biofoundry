
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProteinViewer } from '@/components/ProteinViewer';
import { DrugDiscoveryModule } from '@/components/DrugDiscoveryModule';
import { GenomicsAnalyzer } from '@/components/GenomicsAnalyzer';
import { ClinicalTrialsOptimizer } from '@/components/ClinicalTrialsOptimizer';
import { Search, ArrowDown, Circle } from 'lucide-react';

const Index = () => {
  const [activeModule, setActiveModule] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
        <div className="relative z-10 px-6 py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-8">
              <Circle className="w-2 h-2 fill-green-400 text-green-400 mr-2 animate-pulse" />
              <span className="text-sm text-purple-200">Foundation Models for Biological Systems</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 animate-fade-in">
              BioFoundry
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI platform that accelerates biological discovery through 
              <span className="text-purple-300 font-semibold"> foundation models</span> trained on 
              massive biological datasets
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => setActiveModule('drug-discovery')}
              >
                Explore Drug Discovery
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => setActiveModule('genomics')}
              >
                Analyze Genomics
              </Button>
            </div>

            <ArrowDown className="w-6 h-6 text-purple-400 mx-auto animate-bounce" />
          </div>
        </div>
      </div>

      {/* Platform Modules */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Biological Intelligence Platform</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Harness the power of AI across genomics, proteomics, drug discovery, and clinical research
            </p>
          </div>

          <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 border border-slate-700">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600/50">Overview</TabsTrigger>
              <TabsTrigger value="drug-discovery" className="data-[state=active]:bg-purple-600/50">Drug Discovery</TabsTrigger>
              <TabsTrigger value="genomics" className="data-[state=active]:bg-purple-600/50">Genomics</TabsTrigger>
              <TabsTrigger value="clinical" className="data-[state=active]:bg-purple-600/50">Clinical Trials</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Drug Discovery</h3>
                    <p className="text-gray-400 mb-4">
                      Generate novel molecular candidates and predict binding affinities with our AI models trained on millions of compounds.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/20"
                      onClick={() => setActiveModule('drug-discovery')}
                    >
                      Explore Module
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Genomics Analysis</h3>
                    <p className="text-gray-400 mb-4">
                      Analyze genomic variants, predict disease associations, and understand gene-disease relationships at scale.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-green-500 text-green-400 hover:bg-green-500/20"
                      onClick={() => setActiveModule('genomics')}
                    >
                      Explore Module
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Clinical Optimization</h3>
                    <p className="text-gray-400 mb-4">
                      Optimize clinical trial design, predict outcomes, and generate synthetic control arms for faster research.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
                      onClick={() => setActiveModule('clinical')}
                    >
                      Explore Module
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-gradient-to-r from-slate-800/50 to-purple-900/30 border-purple-700/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Platform Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Foundation Model Core</h4>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Multimodal training on genomic, proteomic, and metabolomic data</li>
                        <li>• Protein structure prediction and drug-target interactions</li>
                        <li>• Scientific literature integration (PubMed, patents)</li>
                        <li>• Gene-disease association discovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2">AI-Powered Discovery</h4>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Novel molecular candidate generation</li>
                        <li>• In silico clinical trial simulation</li>
                        <li>• Precision medicine recommendations</li>
                        <li>• Synthetic biology pathway design</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drug-discovery" className="mt-8">
              <DrugDiscoveryModule />
            </TabsContent>

            <TabsContent value="genomics" className="mt-8">
              <GenomicsAnalyzer />
            </TabsContent>

            <TabsContent value="clinical" className="mt-8">
              <ClinicalTrialsOptimizer />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            BioFoundry - Revolutionizing biological discovery through AI foundation models
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
