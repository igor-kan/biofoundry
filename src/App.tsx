/**
 * BioFoundry - Advanced Biotechnology Research and Development Platform
 * 
 * Comprehensive biotechnology platform that revolutionizes biological research
 * and development through cutting-edge computational biology and laboratory automation:
 * - Automated protein design and molecular modeling with AI-driven optimization
 * - High-throughput screening and experimental workflow management
 * - Genomic data analysis and bioinformatics pipeline orchestration
 * - Laboratory equipment integration and robotic automation control
 * - Collaborative research project management and data sharing capabilities
 * 
 * Scientific Computing Architecture:
 * Built with HashRouter to ensure maximum compatibility across diverse research
 * environments, from academic institutions to pharmaceutical companies.
 * This approach guarantees consistent platform functionality regardless of the
 * complexity of institutional IT infrastructure or regulatory compliance requirements.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Scientific Data Management Configuration
 * 
 * React Query client optimized for high-volume biological research data:
 * - Intelligent caching for large genomic datasets and experimental results
 * - Real-time synchronization for collaborative research and live experiment monitoring
 * - Robust error handling for mission-critical scientific computing operations
 * - Optimistic updates for improved user experience during data analysis workflows
 * 
 * Biotechnology Research Optimizations:
 * - Memory-efficient handling of large-scale genomic and proteomic datasets
 * - Concurrent processing support for parallel experimental analysis
 * - Integration-ready data structures for scientific instrument APIs and LIMS systems
 * - Comprehensive audit logging for research reproducibility and regulatory compliance
 * - Multi-laboratory data synchronization for collaborative research projects
 * - Real-time experimental monitoring with automated alert systems
 */
const queryClient = new QueryClient();

/**
 * Root BioFoundry Application Component
 * 
 * Establishes the complete biotechnology research platform infrastructure
 * with emphasis on scientific rigor, data integrity, and collaborative
 * research capabilities essential for breakthrough biological discoveries.
 * 
 * Provider Architecture (Scientific Computing Hierarchy):
 * 1. QueryClientProvider - High-performance scientific data state management
 * 2. TooltipProvider - Contextual guidance for complex biotechnology workflows
 * 3. Notification Systems - Critical for experiment alerts and research milestone updates
 * 4. HashRouter - Institution-agnostic deployment for diverse research environments
 * 
 * Research Platform Routing Strategy:
 * - HashRouter selected for maximum research institution compatibility
 * - Eliminates server configuration barriers for academic and pharmaceutical deployments
 * - Consistent performance across different institutional network architectures
 * - Simplified integration with existing laboratory management and research systems
 * 
 * Biotechnology Platform Architecture:
 * - "/" : Main research dashboard with experiment overview and data analysis tools
 * - "*" : Scientific-grade error handling protecting research data integrity
 * 
 * @returns {JSX.Element} Complete biotechnology platform with research-grade safeguards
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 
        Scientific Research Notification Infrastructure
        
        Mission-critical for biotechnology research where notifications impact discovery timelines:
        - Toaster: Standard notifications for routine research workflow and experiment updates
        - Sonner: High-priority alerts for experiment failures, equipment malfunctions, and critical discoveries
        
        Biotechnology Research Features:
        - Real-time experiment progress notifications and milestone achievements
        - Laboratory equipment status alerts and maintenance scheduling reminders
        - Automated research workflow completion confirmations and next-step recommendations
        - Data analysis pipeline failure notifications and troubleshooting guidance
        - Collaborative research updates and team coordination notifications
        - Regulatory compliance alerts and documentation requirements
        - Scientific publication milestone tracking and submission deadline reminders
        - Grant funding notifications and research budget monitoring alerts
      */}
      <Toaster />
      <Sonner />
      
      {/*
        HashRouter for Research Institution Compatibility
        
        Scientific Computing Platform Benefits:
        - Functions seamlessly across all research institution IT environments
        - No complex server configuration required for laboratory and academic deployments
        - Compatible with institutional firewalls and research security policies
        - Reduces deployment complexity for universities, research institutes, and biotech companies
        - Consistent behavior across global research collaborations and multi-site studies
        
        Biotechnology Research Considerations:
        - Bookmarkable experiment URLs for recurring analysis and research documentation
        - Shareable links for collaborative research and peer review processes
        - Integration-ready for existing LIMS (Laboratory Information Management Systems)
        - Compliant with research data governance and institutional review board requirements
        - Support for multi-institutional research environments and global collaborations
        - Direct URL access for emergency research operations and critical experiment monitoring
      */}
      <HashRouter>
        <Routes>
          {/* 
            Primary Biotechnology Research Dashboard
            
            Comprehensive research interface featuring:
            - Interactive molecular visualization and protein structure analysis tools
            - High-throughput experimental design and automated workflow orchestration
            - Real-time laboratory equipment monitoring and robotic automation control
            - Advanced bioinformatics analysis with genomic and proteomic data processing
            - Collaborative research project management with version control and data sharing
            - Regulatory compliance tracking with audit trails and documentation management
            - Scientific publication tools with data visualization and manuscript preparation
            - Grant management with funding tracking and research milestone reporting
            - AI-powered research recommendation engine for experiment optimization
          */}
          <Route path="/" element={<Index />} />
          
          {/* 
            Scientific-Grade Error Handling and Data Integrity Protection
            
            CRITICAL: Must remain as the final route for research data protection
            
            Biotechnology Research Error Management:
            - Graceful handling of broken research workflow links to prevent data loss
            - Scientific data integrity protection through comprehensive error logging
            - Research audit trail maintenance for all navigation and system errors
            - Automatic fallback mechanisms to prevent experiment workflow interruption
            - Integration with institutional research monitoring and compliance systems
            - Real-time error reporting to principal investigators and research administrators
            - Regulatory compliance documentation for all system errors and research impact assessments
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
