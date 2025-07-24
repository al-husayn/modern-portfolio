'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

import { Hole } from '@/components/backgrounds/hole/hole';
import { DATA } from '@/data';

// Self-contained SVG icon
const DotIcon = () => (
  <svg
    fill='none'
    height='8'
    viewBox='0 0 8 8'
    width='8'
    xmlns='http://www.w3.org/2000/svg'>
    <circle cx='4' cy='4' fill='currentColor' r='4' />
  </svg>
);

const coderData = DATA.home.coderProfile;

const CoderProfileCard = () => (
  <div className='w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg'>
    {/* header */}
    <div className='flex flex-row'>
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600' />
      <div className='h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent' />
    </div>
    <div className='px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]'>
      <div className='flex flex-row space-x-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-orange-400 rounded-full' />
        <div className='w-3 h-3 bg-green-400 rounded-full' />
      </div>
      <div className='font-mono text-xs text-zinc-600 dark:text-gray-400'>
        coder.js
      </div>
    </div>

    {/* code body */}
    <div className='overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative'>
      <div className='absolute w-56 h-56 bg-blue-600 rounded-full -top-24 -left-24 opacity-10 filter blur-3xl' />
      <div className='absolute w-56 h-56 bg-pink-600 rounded-full -bottom-24 -right-24 opacity-10 filter blur-3xl' />
      <div className='relative flex'>
        <div className='flex-col items-end hidden pr-4 font-mono text-xs md:flex text-zinc-600 dark:text-gray-500'>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className='leading-relaxed select-none opacity-70'>
              {i + 1}
            </div>
          ))}
        </div>
        <code className='w-full font-mono text-xs md:text-sm lg:text-base'>
          <div>
            <span className='mr-2 text-pink-500 dark:text-pink-400'>const</span>
            <span className='mr-2 text-violet-500 dark:text-violet-400'>
              coder
            </span>
            <span className='mr-2 text-pink-500 dark:text-pink-400'>=</span>
            <span className='text-zinc-600 dark:text-gray-400'>{'{'}</span>
          </div>
          <div className='pl-6'>
            <span className='text-zinc-800 dark:text-white'>name:</span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;</span>
            <span className='text-green-600 dark:text-green-400'>
              {coderData.name}
            </span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;,</span>
          </div>
          <div className='pl-6'>
            <span className='text-zinc-800 dark:text-white'>role:</span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;</span>
            <span className='text-green-600 dark:text-green-400'>
              {coderData.role}
            </span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;,</span>
          </div>
          <div className='pl-6'>
            <span className='text-zinc-800 dark:text-white'>seniority:</span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;</span>
            <span className='text-green-600 dark:text-green-400'>
              {coderData.seniority}
            </span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;,</span>
          </div>
          <div className='pl-6'>
            <span className='text-zinc-800 dark:text-white'>location:</span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;</span>
            <span className='text-green-600 dark:text-green-400'>
              {coderData.location}
            </span>
            <span className='text-zinc-600 dark:text-gray-400'>&#39;,</span>
          </div>
          <div className='pl-6'>
            <span className='text-zinc-800 dark:text-white'>skills:</span>
            <span className='text-zinc-600 dark:text-gray-400'>{'['}</span>
            <div className='flex flex-wrap pl-6'>
              {coderData.skills.map((skill, index) => (
                <span key={skill} className='mr-1'>
                  <span className='text-zinc-600 dark:text-gray-400'>
                    &#39;
                  </span>
                  <span className='text-cyan-600 dark:text-cyan-400'>
                    {skill}
                  </span>
                  <span className='text-zinc-600 dark:text-gray-400'>
                    &#39;
                  </span>
                  {index < coderData.skills.length - 1 && (
                    <span className='text-zinc-600 dark:text-gray-400'>, </span>
                  )}
                </span>
              ))}
            </div>
            <span className='text-zinc-600 dark:text-gray-400'>{'],'}</span>
          </div>
          <div>
            <span className='text-zinc-600 dark:text-gray-400'>{'};'}</span>
          </div>
        </code>
      </div>
    </div>

    {/* footer */}
    <div className='flex items-center justify-between px-4 pt-3 pb-4 mt-4 text-xs border-t lg:px-8 border-zinc-300 dark:border-gray-800 text-zinc-600 dark:text-gray-500'>
      <span>UTF-8</span>
      <span>JavaScript</span>
      <span>Ln 12, Col 2</span>
    </div>
  </div>
);

const scrollToWork = () => {
  const workSection = document.getElementById('work-section');

  if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
};

const PortfolioHero = () => {
  return (
    <section className='min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background'>
      <Hole />
      <div className='absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent' />
      <div className='container z-10 px-4 mx-auto'>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='grid items-center grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12 xl:gap-16'
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          {/* Left Side */}
          <div className='flex flex-col items-start gap-4 text-left sm:gap-6'>
            <div className='inline-flex items-center gap-2 px-3 py-1 text-xs text-gray-200 border border-gray-700 rounded-full bg-gray-900/80 dark:bg-white/10 dark:border-gray-600 sm:text-sm dark:text-gray-300 backdrop-blur-sm'>
              <DotIcon />
              Welcome to my universe
            </div>
            <h1 className='text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white'>
              Hello
              <br />
              I&apos;m{' '}
              <span className='text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text'>
                Al-Hussein A.
              </span>
            </h1>
            <div className='flex flex-wrap gap-2'>
              <span className='inline-flex items-center px-3 py-1 text-xs font-semibold text-white border rounded-full shadow-sm bg-gradient-to-r from-blue-500 to-purple-500 border-blue-600/30 dark:border-purple-400/30'>
                Crypto & Blockchain Lover
              </span>
              <span className='inline-flex items-center px-3 py-1 text-xs font-semibold text-white border rounded-full shadow-sm bg-gradient-to-r from-pink-500 to-yellow-500 border-pink-400/30 dark:border-yellow-400/30'>
                Clean Code
              </span>
              <span className='inline-flex items-center px-3 py-1 text-xs font-semibold text-white border rounded-full shadow-sm bg-gradient-to-r from-green-500 to-cyan-500 border-green-400/30 dark:border-cyan-400/30'>
                Innovation
              </span>
            </div>
            <p className='max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl'>
              JavaScript lover 🖋️ | Crypto & Blockchain ⚡ | Crafting frameworks
              and coding the future ✨
            </p>

            {/* Replaced Buttons from HeroSection */}
            <div className='flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row sm:gap-4'>
              <Link
                download
                aria-label='Download CV in PDF format'
                className='w-full sm:w-auto'
                href='/new CV.pdf'>
                <Button
                  fullWidth
                  aria-label='Download CV'
                  color='primary'
                  endContent={<Icon icon='lucide:download' />}
                  size='lg'
                  variant='shadow'>
                  Download CV
                </Button>
              </Link>
              <Button
                fullWidth
                aria-label='View Work'
                className='w-full sm:w-auto'
                color='primary'
                endContent={<Icon icon='lucide:arrow-down' />}
                size='lg'
                variant='bordered'
                onPress={scrollToWork}>
                View Work
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <CoderProfileCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
