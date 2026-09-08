import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },  
    },
  };

  // Animated bars for premium loader
  const barVariants = {
    animate: (custom) => ({
      height: [40, 120, 40],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: custom * 0.1,
        ease: 'easeInOut',
      },
    }),
  };

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0a2014] via-[#0f2d1a] to-[#1a3d25] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient Glow - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1a5c30]/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.img
            src={logo}
            alt="Currymia"
            className="h-16 sm:h-20 w-auto drop-shadow-lg"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Premium Animated Loader */}
      

        {/* Brand Text */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
         
          <motion.p
            variants={textVariants}
            animate="animate"
            className="text-xs sm:text-sm text-[#FFD700]  font-bold tracking-[3px] uppercase"
          >
            Loading Excellence
          </motion.p>
        </motion.div>

        {/* Animated Progress Line */}
        <motion.div
          variants={itemVariants}
          className="w-56 sm:w-72 h-1 bg-white/10 rounded-full overflow-hidden border border-[#FFD700]/30 shadow-lg shadow-yellow-500/20"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Loading Status */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse shadow-lg shadow-yellow-500/50" />
          <p className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
            Preparing authentic flavours
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
