import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  ShieldCheck,
  Database,
  Globe,
  Gamepad2,
  Terminal,
  Moon,
  FlaskConical,
  Wrench,
  MapPin,
  Code2,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Settings,
  GraduationCap,
  BookOpen,
  Zap,
  Beaker,
  Cpu,
  Trophy,
  Award,
  Medal,
  Linkedin,
  Github,
  Heart
} from 'lucide-react';

const portfolioItems = [
  {
    id: 'education',
    title: 'Education',
    label: 'Academic Background',
    icon: GraduationCap,
    iconColor: 'var(--accent-blue)',
    className: 'border-t-4 border-t-[var(--accent-blue)]',
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li><strong>Master of Data Science</strong> - Universiti Teknologi PETRONAS</li>
        <li><strong>B.A.Sc. Occupational Health & Safety</strong> - Toronto Metropolitan University</li>
        <li><strong>B.Sc. Honours Science</strong> (Psychology Minor) - University of Waterloo</li>
      </ul>
    ),
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><GraduationCap size={150} /></div>
  },
  {
    id: 'projects',
    title: 'Projects',
    label: 'Applied Research',
    icon: Cpu,
    iconColor: 'var(--accent-orange)',
    className: 'border-t-4 border-t-[var(--accent-orange)]',
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Accidents data analysis system for Amusement rides</li>
        <li>Microbial Fuel Cell research</li>
        <li>Magnetorheological Fluids study</li>
        <li>Alfred - Smart cane for navigation and safety</li>
      </ul>
    ),
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Cpu size={150} /></div>
  },
  {
    id: 'honors',
    title: 'Honors & Awards',
    label: 'Recognition',
    icon: Trophy,
    iconColor: 'var(--accent-blue)',
    className: 'border-t-4 border-t-[var(--accent-blue)]',
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>1st Place in Social Innovation Summit</li>
        <li>BCRSP & James McLellan OHS Awards</li>
        <li>Canada Millennium & QEII Scholarships</li>
        <li>Bronze & Silver Medals (Canadian National Science Fair)</li>
      </ul>
    ),
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Trophy size={150} /></div>
  }
  /* Temporarily disabled cards:
  ,
  {
    id: 'travel',
    title: 'Travel',
    label: 'Wanderlust',
    icon: Globe,
    iconColor: 'var(--accent-orange)',
    className: 'border-t-4 border-t-[var(--accent-orange)]',
    content: 'Exploring the world, experiencing new cultures, and broadening perspectives. Recently: Karakoram Highway.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Globe size={150} /></div>
  },
  {
    id: 'gaming',
    title: 'Video Games',
    label: 'Gaming',
    icon: Gamepad2,
    iconColor: 'var(--accent-blue)',
    className: 'border-t-4 border-t-[var(--accent-blue)]',
    content: 'Interactive storytelling and strategic problem solving. Current Session: Elite Dangerous / Satisfactory.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Gamepad2 size={150} /></div>
  },
  {
    id: 'coding',
    title: 'Coding',
    label: 'Vibe Coding',
    icon: Terminal,
    iconColor: 'var(--accent-orange)',
    className: 'border-t-4 border-t-[var(--accent-orange)]',
    content: 'Building software by feeling the rhythm of the logic. Experimenting with AI agents and modern web tech.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Terminal size={150} /></div>
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    label: 'Community',
    icon: Heart,
    iconColor: 'var(--accent-blue)',
    className: 'border-t-4 border-t-[var(--accent-blue)]',
    content: 'Deeply committed to community development and health-focused charitable work.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Heart size={150} /></div>
  },
  {
    id: 'science',
    title: 'Science',
    label: 'Experiments',
    icon: FlaskConical,
    iconColor: 'var(--accent-orange)',
    className: 'border-t-4 border-t-[var(--accent-orange)]',
    content: 'Hands-on experimentation and scientific inquiry. Exploring the physical world through empirical testing.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><FlaskConical size={150} /></div>
  },
  {
    id: 'diy',
    title: 'DIY',
    label: 'Maker',
    icon: Wrench,
    iconColor: 'var(--accent-blue)',
    className: 'border-t-4 border-t-[var(--accent-blue)]',
    content: 'Building custom IoT air quality sensors, water electrolysis rigs, and hands-on engineering projects.',
    bgElement: <div className="absolute -bottom-10 -right-10 opacity-10"><Wrench size={150} /></div>
  }
  */
];

const conveyorItems = Array(10).fill(portfolioItems).flat();

const FactoryBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
      <svg viewBox="0 0 1200 800" className="w-full h-full min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
        {/* Voxel Grid Floor */}
        <g opacity="0.03">
          {Array.from({length: 60}).map((_, i) => (
            <path key={`v-grid-${i}`} d={`M ${i*20} 0 L ${i*20} 800`} stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({length: 40}).map((_, i) => (
            <path key={`h-grid-${i}`} d={`M 0 ${i*20} L 1200 ${i*20}`} stroke="white" strokeWidth="0.5" />
          ))}
        </g>

        {/* TOP ASSEMBLY LINE (Above Bento) */}
        <g transform="translate(0, 50)">
          {/* Conveyor Rail */}
          <rect width="1200" height="10" fill="#222" stroke="black" strokeWidth="2" />
          
          {/* Robot Assembly Stations */}
          {[100, 300, 500, 700, 900, 1100].map((x, i) => (
            <g key={`station-top-${i}`} transform={`translate(${x}, 0)`}>
              {/* Station Base */}
              <rect x="-40" y="0" width="80" height="40" fill="#2a2a3a" stroke="black" strokeWidth="2" />
              {/* Robot Arm (Top-down) */}
              <g transform="translate(0, 40)">
                <rect x="-5" y="0" width="10" height="30" fill="#555" stroke="black" strokeWidth="1">
                  <animateTransform attributeName="transform" type="rotate" values="-20;20;-20" dur={`${3+i}s`} repeatCount="indefinite" />
                </rect>
                <rect x="-15" y="30" width="30" height="10" fill="var(--accent-blue)" stroke="black" strokeWidth="1" />
              </g>
              {/* Spark Effect */}
              <circle r="2" fill="white">
                <animate attributeName="opacity" values="0;1;0" dur="0.2s" repeatCount="indefinite" begin={`${i*0.5}s`} />
                <animate attributeName="cy" values="70;75" dur="0.2s" repeatCount="indefinite" />
                <animate attributeName="cx" values="-2;2" dur="0.1s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* BOTTOM ASSEMBLY LINE (Below Bento) */}
        <g transform="translate(0, 650)">
          {/* Heavy Duty Rail */}
          <rect width="1200" height="15" fill="#1a1a1a" stroke="black" strokeWidth="2" />
          
          {/* Moving Robot Chassis */}
          {Array.from({length: 8}).map((_, i) => (
            <motion.g
              key={`chassis-${i}`}
              animate={{ x: [-100, 1300] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 4 }}
            >
              {/* Robot Base */}
              <rect width="60" height="30" fill="#333" stroke="black" strokeWidth="2" />
              <rect x="10" y="-10" width="40" height="10" fill="var(--accent-orange)" opacity="0.6" />
              {/* Wheels */}
              <circle cx="15" cy="30" r="5" fill="black" />
              <circle cx="45" cy="30" r="5" fill="black" />
            </motion.g>
          ))}

          {/* Welding Robots (Bottom) */}
          {[200, 450, 700, 950].map((x, i) => (
            <g key={`welder-bot-${i}`} transform={`translate(${x}, 0)`}>
              <rect x="-20" y="15" width="40" height="60" fill="#2a2a3a" stroke="black" strokeWidth="3" />
              {/* 3D Top */}
              <path d="M -20 15 L 0 -5 L 40 -5 L 20 15 Z" fill="#3a3a4a" stroke="black" strokeWidth="2" />
              {/* Arm */}
              <g transform="translate(0, 15)">
                <rect x="-5" y="-40" width="10" height="40" fill="#555" stroke="black" strokeWidth="1">
                  <animateTransform attributeName="transform" type="rotate" values="0;-45;0" dur="4s" repeatCount="indefinite" />
                </rect>
              </g>
            </g>
          ))}
        </g>

        {/* SIDE EQUIPMENT (Concentrated & Detailed) */}
        <g transform="translate(40, 180)">
          {/* Main Console */}
          <rect width="100" height="160" fill="#1e1e2a" stroke="black" strokeWidth="4" />
          <path d="M 0 0 L 20 -20 L 120 -20 L 100 0 Z" fill="#2e2e3a" stroke="black" strokeWidth="2" />
          <path d="M 100 0 L 120 -20 L 120 140 L 100 160 Z" fill="#0e0e1a" stroke="black" strokeWidth="2" />
          
          {/* Screen */}
          <rect x="10" y="10" width="80" height="40" fill="#000" stroke="#333" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="30" fill="var(--accent-blue)" opacity="0.2">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
          </rect>
          
          {/* Blinking Lights */}
          {[0, 1, 2].map(i => (
            <circle key={`light-l-${i}`} cx={20 + i*30} cy="65" r="4" fill={i === 0 ? 'var(--accent-orange)' : 'var(--accent-blue)'}>
              <animate attributeName="opacity" values="1;0.2;1" dur={`${1 + i*0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Vents */}
          <g transform="translate(10, 85)">
            {[0, 1, 2, 3].map(i => (
              <rect key={`vent-l-${i}`} y={i*12} width="80" height="4" fill="#111" />
            ))}
            {/* Steam/Smoke effect */}
            <rect x="20" y="-20" width="40" height="20" fill="white" opacity="0">
              <animate attributeName="opacity" values="0;0.2;0" dur="4s" repeatCount="indefinite" />
              <animate attributeName="y" values="-20;-60" dur="4s" repeatCount="indefinite" />
            </rect>
          </g>
          
          <text x="10" y="145" fill="var(--accent-blue)" fontSize="8" fontFamily="monospace" fontWeight="bold">SYS_L_ACTIVE</text>
        </g>

        <g transform="translate(1060, 180)">
          {/* Secondary Console */}
          <rect width="100" height="160" fill="#1e1e2a" stroke="black" strokeWidth="4" />
          <path d="M 0 0 L 20 -20 L 120 -20 L 100 0 Z" fill="#2e2e3a" stroke="black" strokeWidth="2" />
          <path d="M 100 0 L 120 -20 L 120 140 L 100 160 Z" fill="#0e0e1a" stroke="black" strokeWidth="2" />

          {/* Pipes */}
          <g transform="translate(-20, 40)">
            <rect width="20" height="80" fill="#444" stroke="black" strokeWidth="2" />
            <rect x="5" y="10" width="10" height="60" fill="#333" />
          </g>

          {/* Gauges */}
          <circle cx="50" cy="40" r="25" fill="#111" stroke="#333" strokeWidth="2" />
          <line x1="50" y1="40" x2="50" y2="20" stroke="var(--accent-orange)" strokeWidth="2">
            <animateTransform attributeName="transform" type="rotate" from="0 50 40" to="180 50 40" dur="5s" repeatCount="indefinite" />
          </line>

          {/* Buttons */}
          <g transform="translate(15, 80)">
            {[0, 1, 2, 3].map(i => (
              <rect key={`btn-${i}`} x={(i%2)*40} y={Math.floor(i/2)*30} width="30" height="20" fill="#333" stroke="black" strokeWidth="2" />
            ))}
          </g>

          <text x="10" y="145" fill="var(--accent-orange)" fontSize="8" fontFamily="monospace" fontWeight="bold">SYS_R_SYNC</text>
        </g>

        {/* DATA FLOW (Scattered in clear areas) */}
        <g opacity="0.3">
          {[150, 400, 650, 900].map((x, i) => (
            <rect key={`v-data-${i}`} x={x} width="2" height="150" fill="var(--accent-blue)">
              <animate attributeName="y" values="-150; 800" dur={`${10+i}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(16);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle expansion after movement
  useEffect(() => {
    setIsExpanded(false);
    const expandTimeout = setTimeout(() => {
      setIsExpanded(true);
    }, 800); // Wait for track to finish moving
    return () => clearTimeout(expandTimeout);
  }, [activeIndex]);

  // Handle auto-play
  useEffect(() => {
    let nextTimeout: ReturnType<typeof setTimeout>;
    if (isAutoPlaying && isExpanded) {
      // Once expanded, wait a bit then move to next
      nextTimeout = setTimeout(() => {
        setIsExpanded(false);
        setTimeout(() => {
          setActiveIndex(prev => (prev + 1) % conveyorItems.length);
        }, 500); // Wait for shrink before moving
      }, 3500);
    }
    return () => clearTimeout(nextTimeout);
  }, [isExpanded, isAutoPlaying]);

  const changeIndex = (delta: number) => {
    setIsAutoPlaying(false);
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => {
        setActiveIndex(prev => {
          const next = prev + delta;
          if (next < 0) return conveyorItems.length - 1;
          return next % conveyorItems.length;
        });
      }, 500);
    } else {
      setActiveIndex(prev => {
        const next = prev + delta;
        if (next < 0) return conveyorItems.length - 1;
        return next % conveyorItems.length;
      });
    }
  };

  const isMobile = windowWidth < 768;
  const expandedWidth = Math.min(windowWidth - 48, 500);
  const expandedHeight = isMobile ? 420 : 560;
  const scannerWidth = Math.min(windowWidth - 32, 380);
  const scannerHeight = isMobile ? 320 : 440;

  const { scrollY } = useScroll();
  const tickerRef = React.useRef<HTMLDivElement>(null);

  const trackX = (windowWidth / 2) - (activeIndex * 232 + (isExpanded ? expandedWidth / 2 : 100));

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-main)] selection:bg-[var(--accent-orange)] selection:text-black overflow-x-hidden">
      {/* Fixed Header (Navigation) */}
      <nav className="fixed top-0 left-0 right-0 z-[120] h-16 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="h-10 px-3 bg-black text-[var(--crane-yellow)] border-4 border-[var(--voxel-shadow)] flex items-center justify-center font-bold shadow-[4px_4px_0px_0px_var(--voxel-shadow)] whitespace-nowrap">Hassan S</div>
        </div>
        
        <div className="flex gap-6 text-sm font-mono uppercase tracking-widest pointer-events-auto bg-black/60 backdrop-blur-sm px-4 py-2 border border-white/10">
          <a href="#about" className="hover:text-[var(--accent-orange)] transition-colors">About</a>
          <a href="#portfolio" className="hover:text-[var(--accent-orange)] transition-colors">Portfolio</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12 relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto w-full z-10">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-bold text-[14vw] md:text-[10vw] leading-[0.85] uppercase tracking-tight mb-6">
              Data Science <br />
              <span className="text-[var(--crane-yellow)] drop-shadow-md" style={{ textShadow: '4px 4px 0px var(--voxel-shadow)' }}>& Safety</span> <br />
              Innovation
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 border-t border-[var(--border)] pt-8"
          >
            <h2 className="text-xl md:text-2xl text-[var(--accent-orange)] font-medium max-w-3xl leading-snug">
              I am an OHS Specialist and Data Scientist with over 10 years of industry experience.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-16 max-w-4xl text-[var(--text-dim)] text-lg leading-relaxed space-y-6"
          >
            <p>
              I help workplaces solve complex safety challenges through a strategic blend of domain expertise, technical acumen, and forward-thinking vision.
            </p>
            <p>
              My background spans the full spectrum of occupational health and safety. With over a decade of experience in construction—including bridge, rail, tunneling, high-rise, and utilities—I specialize in inspections, regulatory investigations, policy reviews, risk assessments, and evaluating safety systems.
            </p>
            <p>
              I believe the future of workplace safety lies at the intersection of domain expertise and emerging technology. Currently, I am focused on how innovations in autonomous systems, digital simulation, and predictive analytics can revolutionize harm prevention and operational excellence.
            </p>
            <p>
              Beyond my professional life, I am deeply committed to community development and health-focused charitable work. I am always open to discussing the evolution of OHS, data-driven innovations, or potential collaborations. Let's connect.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://www.linkedin.com/in/hassanonline" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] border-4 border-[var(--voxel-shadow)] shadow-[4px_4px_0px_0px_var(--voxel-shadow)] hover:bg-[var(--accent-blue)] hover:text-black transition-colors">
                <Linkedin size={20} />
                <span className="font-mono text-xs uppercase tracking-wider">LinkedIn</span>
              </a>
              <a href="https://github.com/HS-devo" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] border-4 border-[var(--voxel-shadow)] shadow-[4px_4px_0px_0px_var(--voxel-shadow)] hover:bg-[var(--accent-orange)] hover:text-black transition-colors">
                <Github size={20} />
                <span className="font-mono text-xs uppercase tracking-wider">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[var(--accent-orange)]/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
      </header>

      {/* Marquee */}
      <div ref={tickerRef} className="py-4 border-y border-[var(--border)] overflow-hidden bg-white/5 relative">
        <div className="marquee-track font-mono text-sm uppercase tracking-widest flex gap-8 items-center">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Data Science</span>
              <span className="text-[var(--accent-orange)]">///</span>
              <span>Occupational Health & Safety</span>
              <span className="text-[var(--accent-orange)]">///</span>
              <span>Technology</span>
              <span className="text-[var(--accent-orange)]">///</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Conveyor Belt Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden bg-[var(--bg)] min-h-[800px] flex flex-col justify-center">
        <FactoryBackground />
        
        <div className="text-center mb-16 relative z-30">
          <h2 className="font-bold text-4xl md:text-5xl uppercase mb-4 text-[var(--text-main)]">Data Pipeline</h2>
          <p className="text-[var(--text-dim)] font-mono text-sm">Processing multifaceted experience...</p>
        </div>

        {/* Conveyor Belt Container */}
        <div className="relative w-full h-[600px] flex items-center z-20">
          {/* Scanner Overlay */}
          <motion.div 
            animate={{ opacity: isExpanded ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scanner-voxel pointer-events-none z-20 flex flex-col items-center justify-center"
            style={{ width: scannerWidth, height: scannerHeight }}
          >
            <div className="absolute -top-6 bg-[var(--bg)] px-4 text-[var(--accent-orange)] font-sans text-[10px] tracking-widest uppercase border-4 border-[var(--voxel-shadow)] py-1 whitespace-nowrap shadow-[4px_4px_0px_var(--voxel-shadow)]">
              EXPERIENCE_SCANNER_v1.0
            </div>
            <motion.div
              animate={{ top: ['5%', '95%', '5%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-[8px] bg-[var(--accent-orange)] shadow-[0_0_20px_var(--accent-orange)] opacity-80"
            />
          </motion.div>

          {/* Track */}
          <motion.div
            className="flex gap-8 absolute left-0 items-center cursor-grab active:cursor-grabbing"
            animate={{ x: trackX }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            onPanEnd={(e, info) => {
              if (info.offset.x < -50) changeIndex(1);
              else if (info.offset.x > 50) changeIndex(-1);
            }}
          >
            {conveyorItems.map((item, index) => {
              const isActive = index === activeIndex;
              const expanded = isActive && isExpanded;

              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  animate={{
                    width: expanded ? expandedWidth : 200,
                    height: expanded ? expandedHeight : 200,
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.85,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className={`bento-card shrink-0 ${item.className} ${isActive ? 'z-10 shadow-2xl shadow-[var(--accent-blue)]/10' : 'z-0'}`}
                >
                  <div className="flex items-center gap-3 relative z-10 pt-1 mb-2">
                    <motion.div 
                      animate={{ scale: expanded ? (isMobile ? 1.2 : 1.4) : 1, originX: 0, originY: 0.5 }} 
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.iconColor }} />
                    </motion.div>

                    <motion.h3
                      animate={{ fontSize: expanded ? (isMobile ? '24px' : '32px') : '18px' }}
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                      className="font-bold uppercase"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                        transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
                        className={`mt-2 flex-1 text-[#f5f5fa] bg-black/50 p-4 rounded backdrop-blur-sm border border-white/5 font-sans ${isMobile ? 'text-sm' : 'text-base'} font-medium leading-relaxed relative z-10 overflow-y-auto scrollbar-thin pr-2 shadow-inner`}
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {item.bgElement}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40">
          <button 
            onClick={() => changeIndex(-1)}
            className="w-12 h-12 border-4 border-[var(--voxel-shadow)] flex items-center justify-center hover:bg-[var(--accent-blue)] transition-colors bg-[var(--bg)] shadow-[4px_4px_0px_0px_var(--voxel-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-12 h-12 border-4 border-[var(--voxel-shadow)] flex items-center justify-center hover:bg-[var(--accent-orange)] transition-colors bg-[var(--bg)] shadow-[4px_4px_0px_0px_var(--voxel-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button 
            onClick={() => changeIndex(1)}
            className="w-12 h-12 border-4 border-[var(--voxel-shadow)] flex items-center justify-center hover:bg-[var(--accent-blue)] transition-colors bg-[var(--bg)] shadow-[4px_4px_0px_0px_var(--voxel-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto w-full">
        <div className="font-bold text-2xl uppercase">Hassan S</div>
        <div className="text-[var(--text-dim)] text-sm font-mono text-center md:text-left">
          © {new Date().getFullYear()} Data Science & Safety Innovation
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/hassanonline" target="_blank" rel="noreferrer" className="w-12 h-12 border-4 border-[var(--voxel-shadow)] flex items-center justify-center hover:bg-[var(--accent-blue)] transition-colors shadow-[4px_4px_0px_0px_var(--voxel-shadow)]">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/HS-devo" target="_blank" rel="noreferrer" className="w-12 h-12 border-4 border-[var(--voxel-shadow)] flex items-center justify-center hover:bg-[var(--accent-orange)] transition-colors shadow-[4px_4px_0px_0px_var(--voxel-shadow)]">
            <Github size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
