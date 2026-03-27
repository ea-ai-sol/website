/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Network, 
  Layers, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  Bot,
  Database,
  Code,
  ExternalLink,
  ShieldCheck,
  Lock,
  Scale,
  Eye
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI & AaaS', href: '#ai' },
    { name: 'Governance', href: '#governance' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Brain className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">Neurovi@</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0b] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,#0a0a0b_100%)"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            <span>Agentic AI & AaaS</span>
          </div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[120px] pointer-events-none"></div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
            Neurovi@ <br />
            <span className="text-blue-500">Agentic</span> Intelligence.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Transforming productivity with Agent-as-a-Service and Agent Fusion. A strategic framework for autonomous, collaborative, and adaptable AI agents.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#ai" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 group">
              Explore AaaS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#architecture" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all">
              View Architecture
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 hidden lg:block pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          {/* Central AI Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/5 backdrop-blur-sm"
              >
                <Brain className="w-24 h-24 text-blue-500 opacity-80" strokeWidth={1} />
              </motion.div>
              
              {/* Orbiting Agents */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <motion.div 
                    style={{ transform: `translateY(-120px)` }}
                    className="w-10 h-10 bg-[#0a0a0b] border border-blue-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  >
                    {i === 0 ? <Bot className="w-5 h-5 text-blue-400" /> : 
                     i === 1 ? <Cpu className="w-5 h-5 text-purple-400" /> : 
                     <Database className="w-5 h-5 text-blue-400" />}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AISection = () => {
  return (
    <section id="ai" className="py-24 bg-[#0a0a0b] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Agentic AI Strategy</h2>
            <p className="text-gray-400 text-lg">The next productivity revolution driven by intelligent software agents that plan, decide, and act autonomously.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-sm font-mono text-blue-500/60">
              <span>0x01 // AGENT FUSION</span>
              <div className="w-12 h-px bg-blue-500/20"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Featured Article */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-2 p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bot className="w-48 h-48 text-blue-400" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-4 h-4" />
                <span>Strategic Framework</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">AaaS & Agent Fusion: <br />Transforming Organizational Productivity</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Modern organizations are on the cusp of a productivity revolution. Agentic AI enables autonomous, collaborative, and adaptable AI agents across organizational processes, moving beyond simple automation to intelligent decision-making.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    Autonomous Planning
                  </h4>
                  <p className="text-xs text-gray-500">Agents that can decompose complex goals into actionable steps without human intervention.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Network className="w-4 h-4 text-purple-400" />
                    Agent Fusion
                  </h4>
                  <p className="text-xs text-gray-500">Multi-agent systems where specialized agents collaborate to solve cross-functional challenges.</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                Read Full Blueprint
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Sidebar Insights */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                <Database className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Data-Centric AI</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Beyond APIs: Data Fusion</h4>
              <p className="text-gray-400 text-sm">Conceptual Architecture – Enabling AaaS and Agent Fusion on Data, not just static APIs.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 opacity-60">
              <div className="flex items-center gap-3 mb-4 text-gray-400">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">R.A.G Frameworks</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">RAG Architectures</h4>
              <p className="text-gray-500 text-sm">Coming soon: Deep dive into Retrieval-Augmented Generation for enterprise knowledge.</p>
            </div>
          </div>
        </div>

        {/* Conceptual Architecture Visual */}
        <div id="architecture" className="p-12 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Conceptual Architecture</h3>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Multi-Agent Systems & Agent Fusion</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Agent 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 p-6 bg-[#0a0a0b] border border-blue-500/30 rounded-2xl text-center relative z-10"
            >
              <Bot className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-sm">Planning Agent</h4>
              <p className="text-[10px] text-gray-500 mt-2">Goal Decomposition & Task Orchestration</p>
            </motion.div>

            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>

            {/* Fusion Core */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border-2 border-dashed border-purple-500/30 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl"></div>
              <Cpu className="w-12 h-12 text-purple-400" />
            </motion.div>

            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>

            {/* Agent 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 p-6 bg-[#0a0a0b] border border-blue-500/30 rounded-2xl text-center relative z-10"
            >
              <Code className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-sm">Execution Agent</h4>
              <p className="text-[10px] text-gray-500 mt-2">Tool Interaction & API Execution</p>
            </motion.div>

            {/* Connector Lines (Visual only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-0 w-full h-px bg-blue-500/50"></div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-purple-500/50"></div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm italic">"Agent Fusion Architecture: Enabling AaaS on Data (Not Just APIs)"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white/2 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              The Architect
            </div>
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Farrukh Iqbal</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                A seasoned Enterprise and Solution Architect with over 19 years of international experience spanning banking, education, telecommunications, healthcare, and aviation sectors.
              </p>
              <p>
                Currently strategizing and architecting cutting-edge Generative AI, Agentic AI, and RAG-based solutions. Farrukh has a strong track record of delivering complex digital transformations at organizations like Westpac NZ and Air New Zealand.
              </p>
              <p>
                His expertise bridges strategic vision and technical execution, underpinned by skills in Azure, AWS, CI/CD, and enterprise integration.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-3">
              {['BBA-ITM(Hons)', 'MBA-IT', 'PMI-ACP', 'ICAgile', 'Azure', 'AWS'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/800')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 p-12 text-center">
                <Layers className="w-24 h-24 text-blue-500 mx-auto mb-6 opacity-50" />
                <p className="text-white font-mono text-sm opacity-60">Architecting the Future</p>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 p-6 bg-[#0a0a0b] border border-white/10 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-500">19+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years of <br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Let's Ideate Together</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm keen to hear about what you think or share if something you read here was useful.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:farrukh.newzealand@outlook.com" 
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Brain className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white">Neurovi@</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Neurovi@. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const StrategicFramework = () => {
  const steps = [
    { title: "Ideation", desc: "Identifying high-impact use cases for agentic AI within organizational workflows." },
    { title: "Architecture", desc: "Designing multi-agent systems that leverage Agent Fusion for complex problem solving." },
    { title: "Implementation", desc: "Deploying autonomous agents using AaaS models on enterprise data." },
    { title: "Evolution", desc: "Continuous monitoring and refinement of agent performance and collaboration." }
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Strategic Framework</h2>
          <p className="text-gray-400">A structured approach to implementing Agentic AI at scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">0{idx + 1}</div>
              <div className="relative z-10 p-8 rounded-2xl bg-[#0a0a0b] border border-white/10 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Generative AI", icon: Brain },
    { name: "Agentic AI", icon: Bot },
    { name: "RAG Systems", icon: Database },
    { name: "Azure AI", icon: Cpu },
    { name: "AWS Bedrock", icon: Network },
    { name: "Multi-Agent Systems", icon: Layers }
  ];

  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <tech.icon className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIGovernance = () => {
  const pillars = [
    { 
      title: "Ethical AI", 
      icon: Scale, 
      desc: "Ensuring fairness, transparency, and bias mitigation in autonomous agent decision-making." 
    },
    { 
      title: "Compliance", 
      icon: ShieldCheck, 
      desc: "Adhering to global standards (GDPR, ISO/IEC 42001) and industry-specific regulatory requirements." 
    },
    { 
      title: "Security & Privacy", 
      icon: Lock, 
      desc: "Protecting enterprise data and model integrity through robust encryption and access controls." 
    },
    { 
      title: "Observability", 
      icon: Eye, 
      desc: "Comprehensive audit trails and real-time monitoring of agentic behaviors and performance." 
    }
  ];

  return (
    <section id="governance" className="py-24 bg-[#0a0a0b] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">AI Governance & Ethics</h2>
            <p className="text-gray-400 text-lg">Building trust through responsible AI implementation and robust governance frameworks.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-sm font-mono text-purple-500/60">
              <span>0x02 // RESPONSIBLE AI</span>
              <div className="w-12 h-px bg-purple-500/20"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 text-center">
          <p className="text-gray-400 italic">
            "Governance is not a blocker to innovation; it is the foundation that makes innovation sustainable and safe."
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <AISection />
        <AIGovernance />
        <StrategicFramework />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
