'use client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Icon } from '@iconify/react';
import { useState } from 'react';

type CodeBlockProps = { language: string; value: string };

export default function CodeBlock({ language, value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative group'>
      <button
        className='absolute p-2 text-sm text-white transition bg-gray-800 rounded-lg opacity-0 top-2 right-2 group-hover:opacity-100'
        onClick={handleCopy}>
        <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} />
      </button>
      <SyntaxHighlighter showLineNumbers language={language} style={atomDark}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
