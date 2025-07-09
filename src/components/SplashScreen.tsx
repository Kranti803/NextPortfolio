"use client";
import React, { useEffect, useState } from 'react';
import { Code, Zap, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading projects...",
    "Preparing experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, duration / 4);

    // Complete animation
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Animated Logo */}
        <div className="relative flex items-center justify-center">
          {/* Main Logo */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-white font-bold text-3xl">K</span>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <Code size={16} className="text-white" />
            </div>
            
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Zap size={16} className="text-white" />
            </div>
            
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
              <Sparkles size={12} className="text-white" />
            </div>
          </div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-emerald-500 border-r-blue-500 rounded-full animate-spin"></div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 w-40 h-40 border-2 border-emerald-200 dark:border-emerald-800 rounded-full animate-ping"></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Kranti Kumar
          </h1>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Full Stack Developer
          </p>
        </div>

        {/* Loading Text */}
        <div className="h-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm animate-pulse">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-2">
            <span>0%</span>
            <span className="font-medium">{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;