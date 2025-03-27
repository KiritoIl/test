import React, { useState, useEffect } from 'react';
import { Moon, Sun, Shield, Key, Globe, RefreshCw, Fingerprint, Database, Code } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HexLockLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg className={`${className} animate-glow`} viewBox="0 0 1000 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M500 100C276.142 100 94.8066 281.336 94.8066 505.194C94.8066 729.052 276.142 910.387 500 910.387C723.858 910.387 905.193 729.052 905.193 505.194C905.193 281.336 723.858 100 500 100ZM500 175.097C682.649 175.097 830.097 322.545 830.097 505.194C830.097 687.843 682.649 835.29 500 835.29C317.351 835.29 169.903 687.843 169.903 505.194C169.903 322.545 317.351 175.097 500 175.097Z" />
    <path d="M500 250.194C358.748 250.194 244.806 364.136 244.806 505.388C244.806 646.64 358.748 760.581 500 760.581C641.252 760.581 755.194 646.64 755.194 505.388C755.194 364.136 641.252 250.194 500 250.194ZM500 325.29C599.903 325.29 680.097 405.485 680.097 505.388C680.097 605.291 599.903 685.485 500 685.485C400.097 685.485 319.903 605.291 319.903 505.388C319.903 405.485 400.097 325.29 500 325.29Z" />
    <circle cx="500" cy="505" r="75" />
    <path d="M500 400C447.5 400 405 442.5 405 495C405 547.5 447.5 590 500 590C552.5 590 595 547.5 595 495C595 442.5 552.5 400 500 400ZM500 440C530.5 440 555 464.5 555 495C555 525.5 530.5 550 500 550C469.5 550 445 525.5 445 495C445 464.5 469.5 440 500 440Z" />
  </svg>
);

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? `${isDarkMode ? 'bg-[#1a1f2e]/90' : 'bg-white/90'} backdrop-blur-md shadow-lg` 
        : `${isDarkMode ? 'bg-[#1a1f2e]' : 'bg-white'}`
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <HexLockLogo className={`h-8 w-8 ${isDarkMode ? 'text-[#4169e1]' : 'text-[#2851db]'} transition-transform duration-300 group-hover:scale-110`} />
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                HexLock
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'} hover:opacity-80 transition-all duration-300`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/login"
              className="text-white bg-[#4169e1] hover:bg-[#2851db] px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Feature = ({ icon: Icon, title, description, isDarkMode }: { icon: any; title: string; description: string; isDarkMode: boolean }) => (
  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#242937]' : 'bg-white'} shadow-lg feature-card`}>
    <div className="w-12 h-12 bg-[#4169e1] rounded-lg flex items-center justify-center mb-4 animate-float">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const Landing = ({ isDarkMode }: { isDarkMode: boolean }) => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal">
            <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Secure Passwords on the <span className="text-[#4169e1] animate-glow">Internet Computer</span>
            </h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Revolutionary password management powered by Internet Computer Protocol. 
              Your credentials, secured by blockchain technology.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#4169e1] rounded-lg hover:bg-[#2851db] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Connect with Internet Identity
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          <Feature
            icon={Shield}
            title="Zero-Knowledge Encryption"
            description="Your data is encrypted before it leaves your device. We can't access your passwords."
            isDarkMode={isDarkMode}
          />
          <Feature
            icon={Database}
            title="Blockchain Storage"
            description="Passwords are stored on the decentralized Internet Computer Protocol."
            isDarkMode={isDarkMode}
          />
          <Feature
            icon={Fingerprint}
            title="Biometric Authentication"
            description="Use fingerprint or face recognition for quick access."
            isDarkMode={isDarkMode}
          />
          <Feature
            icon={Key}
            title="Password Generator"
            description="Create strong, unique passwords with our advanced generator."
            isDarkMode={isDarkMode}
          />
          <Feature
            icon={RefreshCw}
            title="Auto-Sync"
            description="Changes sync instantly across all your devices."
            isDarkMode={isDarkMode}
          />
          <Feature
            icon={Globe}
            title="Cross-Platform"
            description="Available on all major platforms and browsers."
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      {/* Enterprise Section */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#242937]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Enterprise-Grade Security
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-6 w-6 text-[#4169e1] mt-1" />
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      ICP Smart Contracts
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Powered by secure smart contracts on the Internet Computer Protocol.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-[#4169e1] mt-1" />
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Military-Grade Encryption
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      AES-256 encryption ensures your data remains private and secure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-[#4169e1] mt-1" />
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Decentralized Storage
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      No single point of failure. Your data is distributed across the network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Security Dashboard"
                className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1f2e]' : 'bg-gray-50'} flex items-center justify-center px-4`}>
    <div className={`max-w-md w-full ${isDarkMode ? 'bg-[#242937]' : 'bg-white'} rounded-xl shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02]`}>
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-[#4169e1] rounded-lg flex items-center justify-center mb-4 animate-float">
          <HexLockLogo className="w-10 h-10 text-white" />
        </div>
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Welcome to HexLock
        </h1>
        <p className={`mt-2 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Sign in to access your secure password manager
        </p>
      </div>

      <button
        className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-lg text-white bg-[#4169e1] hover:bg-[#2851db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4169e1] transition-all duration-300 hover:shadow-lg"
        onClick={() => window.location.href = "https://identity.ic0.app"}
      >
        <HexLockLogo className="w-5 h-5 text-white" />
        <span>Connect with Internet Identity</span>
      </button>

      <p className={`mt-4 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Landing isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;