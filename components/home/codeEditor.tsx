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
        relative rounded-lg border border-default-200
        bg-content1/90 shadow-lg backdrop-blur"
      >
        <div className="flex flex-row">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary-500 to-secondary-500" />
          <div className="h-[2px] w-full bg-gradient-to-r from-secondary-500 to-transparent" />
        </div>

        <div className="flex items-center justify-between bg-content2/80 px-4 py-5 lg:px-8">
          <div className="flex flex-row space-x-2">
            <div className="w-3 h-3 transition-transform bg-red-500 rounded-full cursor-pointer hover:scale-110" />
            <div className="w-3 h-3 transition-transform bg-yellow-500 rounded-full cursor-pointer hover:scale-110" />
            <div className="w-3 h-3 transition-transform bg-green-500 rounded-full cursor-pointer hover:scale-110" />
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-foreground-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
            coder.js
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-default-200 px-4 py-4 lg:px-8 lg:py-8">
          <div className="absolute -left-16 -top-16 h-32 w-32 animate-pulse rounded-full bg-primary-500/10" />
          <div
            className="absolute -bottom-12 -right-12 h-24 w-24 animate-pulse rounded-full bg-secondary-500/10"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative flex">
            <div className="hidden flex-col items-end pr-4 font-mono text-xs text-foreground-400 md:flex">
              {Array.from({ length: TOTAL_LINE_COUNT }, (_, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: index <= currentLine ? 1 : 0.3 }}
                  className={`leading-relaxed select-none transition-all duration-300 ${
                    index <= currentLine
                      ? "opacity-100 text-blue-500"
                      : "opacity-30"
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
                <span className="mr-2 font-semibold text-secondary-500">
                  coder
                </span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-foreground-500">{"{"}</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 1}
                className="pl-6"
                showCursor={isTyping && currentLine === 1}
              >
                <span className="text-foreground">name:</span>
                <span className="text-foreground-500">&#39;</span>
                <span className="text-success-500">{coderData.name}</span>
                <span className="text-foreground-500">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 2}
                className="pl-6"
                showCursor={isTyping && currentLine === 2}
              >
                <span className="text-foreground">role:</span>
                <span className="text-foreground-500">&#39;</span>
                <span className="text-success-500">{coderData.role}</span>
                <span className="text-foreground-500">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 3}
                className="pl-6"
                showCursor={isTyping && currentLine === 3}
              >
                <span className="text-foreground">seniority:</span>
                <span className="text-foreground-500">&#39;</span>
                <span className="text-success-500">{coderData.seniority}</span>
                <span className="text-foreground-500">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 4}
                className="pl-6"
                showCursor={isTyping && currentLine === 4}
              >
                <span className="text-foreground">location:</span>
                <span className="text-foreground-500">&#39;</span>
                <span className="text-success-500">{coderData.location}</span>
                <span className="text-foreground-500">&#39;,</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 5}
                className="pl-6"
                showCursor={isTyping && currentLine === 5}
              >
                <span className="text-foreground">skills:</span>
                <span className="text-foreground-500">[</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 6}
                className="flex flex-wrap pl-6"
              >
                {coderData.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    animate={{ opacity: currentLine >= 6 ? 1 : 0, scale: 1 }}
                    className="mr-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-foreground-500">&#39;</span>
                    <span className="text-primary-500">{skill}</span>
                    <span className="text-foreground-500">&#39;</span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-foreground-500">, </span>
                    )}
                  </motion.span>
                ))}
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 7}
                className="pl-6"
                showCursor={isTyping && currentLine === 7}
              >
                <span className="text-foreground-500">],</span>
              </AnimatedLine>

              <AnimatedLine
                active={currentLine >= 8}
                showCursor={isTyping && currentLine === 8}
              >
                <span className="text-foreground-500">{"};"}</span>
              </AnimatedLine>
            </code>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-default-200 px-4 pb-4 pt-3 text-xs text-foreground-500 lg:px-8">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-success-500" />
            UTF-8
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
            JavaScript
          </span>
          <span>Ln {currentLine + 1}, Col 2</span>
        </div>
      </Card>
    </motion.div>
  );
};

export default CodeEditor;
