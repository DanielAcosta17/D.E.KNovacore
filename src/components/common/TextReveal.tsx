import React from 'react';
import { motion, type Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: 'letters' | 'words';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  highlightGradient?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  mode = 'words',
  highlightGradient = false,
}) => {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === 'letters' ? 0.02 : 0.045,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint
      },
    },
  };

  if (mode === 'letters') {
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className={`inline-flex flex-wrap gap-x-[0.3em] ${className} ${
          highlightGradient
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400'
            : ''
        }`}
      >
        {words.map((word, wordIdx) => (
          <span key={`w-${wordIdx}`} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => (
              <motion.span
                key={`c-${wordIdx}-${charIdx}`}
                variants={itemVariants}
                className="inline-block transform-gpu will-change-transform will-change-filter"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className={`inline-flex flex-wrap gap-x-[0.26em] ${className} ${
        highlightGradient
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400'
          : ''
      }`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={itemVariants}
          className="inline-block whitespace-nowrap transform-gpu will-change-transform will-change-filter"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
