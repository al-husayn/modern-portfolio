import { Card } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { DATA } from "@/data";

const coderData = DATA.home.coderProfile;
const TOTAL_LINE_COUNT = 12;
const TYPING_INTERVAL_MS = 800;
const TYPING_CURSOR_DURATION_MS = 500;

type AnimatedLineProps = {
  active: boolean;
  children: ReactNode;
  className?: string;
  showCursor?: boolean;
};

const AnimatedLine = ({
  active,
  children,
  className = "",
  showCursor = false,
}: AnimatedLineProps) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0 }}
    className={className}
    initial={{ opacity: 0 }}
  >
    {children}
    {showCursor && <span className="ml-1 animate-pulse">|</span>}
  </motion.div>
);

const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let typingTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const intervalId = setInterval(() => {
      setCurrentLine((previousLine) => {
        const nextLine =
          previousLine < TOTAL_LINE_COUNT - 1 ? previousLine + 1 : 0;

        setIsTyping(previousLine < TOTAL_LINE_COUNT - 1);

        if (typingTimeoutId) {
          clearTimeout(typingTimeoutId);
        }

        typingTimeoutId = setTimeout(
          () => setIsTyping(false),
          TYPING_CURSOR_DURATION_MS,
        );

        return nextLine;
      });
    }, TYPING_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
      if (typingTimeoutId) {
        clearTimeout(typingTimeoutId);
      }
    };
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card
        className="overflow-hidden transition-all duration-500 
        bg-gradient-to-r from-zinc-100 to-zinc-200 
        dark:from-[#000000] dark:to-[#0a0d37] 
        border-zinc-300 dark:border-[#1b2c68a0] 
        relative rounded-lg border shadow-lg"
      >
        <div className="flex flex-row">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-purple-500" />
          <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <div
          className="flex items-center justify-between px-4 py-5 lg:px-8 
          bg-zinc-200 dark:bg-[#000000]"
        >
          <div className="flex flex-row space-x-2">
            <div className="w-3 h-3 transition-transform bg-red-500 rounded-full cursor-pointer hover:scale-110" />
            <div className="w-3 h-3 transition-transform bg-yellow-500 rounded-full cursor-pointer hover:scale-110" />
            <div className="w-3 h-3 transition-transform bg-green-500 rounded-full cursor-pointer hover:scale-110" />
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            coder.js
          </div>
        </div>

        <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
          <div className="absolute w-32 h-32 rounded-full bg-blue-500/10 -top-16 -left-16 animate-pulse" />
          <div
            className="absolute w-24 h-24 rounded-full bg-purple-500/10 -bottom-12 -right-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative flex">
            <div className="flex-col items-end hidden pr-4 font-mono text-xs text-zinc-600 dark:text-gray-500 md:flex">
              {Array.from({ length: TOTAL_LINE_COUNT }, (_, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: index <= currentLine ? 1 : 0.3 }}
                  className={`leading-relaxed select-none transition-all duration-300 ${
                    index <= currentLine
                      ? 'opacity-100 text-blue-500'
                      : 'opacity-30'
                  }`}
                  initial={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
              ))}
            </div>

            <code className="w-full font-mono text-xs md:text-sm lg:text-base">
              <AnimatedLine
                active={currentLine >= 0}
                className="flex items-center"
                showCursor={isTyping && currentLine === 0}
              >
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 font-semibold text-violet-500 dark:text-violet-400">
                  coder
                </span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-zinc-600 dark:text-gray-400">{"{"}</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 1}
                className="pl-6"
                showCursor={isTyping && currentLine === 1}
              >
                <span className="text-zinc-800 dark:text-white">name:</span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                <span className="text-green-600 dark:text-green-400">
                  {coderData.name}
                </span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 2}
                className="pl-6"
                showCursor={isTyping && currentLine === 2}
              >
                <span className="text-zinc-800 dark:text-white">role:</span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                <span className="text-green-600 dark:text-green-400">
                  {coderData.role}
                </span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 3}
                className="pl-6"
                showCursor={isTyping && currentLine === 3}
              >
                <span className="text-zinc-800 dark:text-white">
                  seniority:
                </span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                <span className="text-green-600 dark:text-green-400">
                  {coderData.seniority}
                </span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 4}
                className="pl-6"
                showCursor={isTyping && currentLine === 4}
              >
                <span className="text-zinc-800 dark:text-white">location:</span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                <span className="text-green-600 dark:text-green-400">
                  {coderData.location}
                </span>
                <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 5}
                className="pl-6"
                showCursor={isTyping && currentLine === 5}
              >
                <span className="text-zinc-800 dark:text-white">skills:</span>
                <span className="text-zinc-600 dark:text-gray-400">[</span>
              </AnimatedLine>

              <AnimatedLine active={currentLine >= 6} className="flex flex-wrap pl-6">
                {coderData.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    animate={{ opacity: currentLine >= 6 ? 1 : 0, scale: 1 }}
                    className="mr-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {skill}
                    </span>
                    <span className="text-zinc-600 dark:text-gray-400">
                      &#39;
                    </span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-zinc-600 dark:text-gray-400">
                        ,{' '}
                      </span>
                    )}
                  </motion.span>
                ))}
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 7}
                className="pl-6"
                showCursor={isTyping && currentLine === 7}
              >
                <span className="text-zinc-600 dark:text-gray-400">],</span>
              </AnimatedLine>

              <AnimatedLine active={currentLine >= 8} showCursor={isTyping && currentLine === 8}>
                <span className="text-zinc-600 dark:text-gray-400">{"};"}</span>
              </AnimatedLine>
            </code>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-3 pb-4 mt-4 text-xs border-t lg:px-8 border-zinc-300 dark:border-gray-800 text-zinc-600 dark:text-gray-500">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
            UTF-8
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" />
            JavaScript
          </span>
          <span>Ln {currentLine + 1}, Col 2</span>
        </div>
      </Card>
    </motion.div>
  );
};

export default CodeEditor;
