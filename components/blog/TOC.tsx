"use client";

import { useEffect, useState } from "react";

const TOC = () => {
    const [headings, setHeadings] = useState<{ id: string; text: string }[]>(
      []
    );

     useEffect(() => {
       const hs = Array.from(document.querySelectorAll('h2, h3')).map((h) => ({
         id: h.id,
         text: h.textContent || '',
       }));

       setHeadings(hs);
     }, []);

  return (
    <aside className='sticky p-4 text-sm top-20'>
      <h3 className='mb-2 font-semibold'>Table of Contents</h3>
      <ul className='space-y-2'>
        {headings.map((h) => (
          <li key={h.id}>
            <a className='transition hover:text-blue-500' href={`#${h.id}`}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TOC;