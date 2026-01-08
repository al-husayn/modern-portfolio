export const DATA = {
  home: {
    hero: {
      name: 'Al-Hussein A.',
      title: 'Full stack developer, Social Scientist & Blockchain Enthusiast',
      subtitle:
        'I build fast, accessible and visually engaging web experiences.',
    },
    coderProfile: {
      name: 'Al-Hussein A.',
      role: 'Frontend Developer',
      seniority: 'Mid-Level',
      location: 'Ghana',
      skills: [
        // Frontend
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'TailwindCSS',
        // Backend
        'Node.js',
        // Tools & Others
        'Wordpress',
      ],
    },
    skills: {
      sectionTitle: 'Services',
      sectionDescription:
        ' I deliver modern, reliable web solutions tailored to your needs',
        services: [
            { name: 'Modern Web Applications', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/960px-React_Logo_SVG.svg.png', description:"Fast, responsive apps built with React, Next.js, and Tailwind CSS."  },
            { name: 'Full-Stack Development', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/full-stack-developer-icon.svg', description: 'End-to-end solutions with Node.js backend and modern frontend.' }, 
            { name: 'Landing Pages & Marketing Sites', logo: 'https://static.vecteezy.com/system/resources/previews/031/011/848/non_2x/landing-page-icon-vector.jpg', description:"SEO-friendly landing pages and marketing sites with optimized performance."  },
            { name: 'Performance & Maintenance', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/speed-icon.svg', description:"Speed audits, refactoring, and ongoing maintenance."  },
            { name: 'Consulting & Code Reviews', logo: 'https://ui.shadcn.com/apple-touch-icon.png', description:"Expert guidance and code reviews to ensure your project's success."  }, // Closest official
            // { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/500px-Node.js_logo.svg.png' },
            { name: 'WordPress Development', logo: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png', description:"Professional themes and plugins with performance and SEO focus."  },
          ],
    },
    testimonials: {
      sectionTitle: 'Client Testimonials',
      sectionDescription: 'What clients say about working together',
      items: [
        {
          id: 1,
          name: 'Sarah Johnson',
          role: 'Product Manager at TechNova',
          content:
            'The design system created for our SaaS platform reduced our development time by 40% while improving consistency across all our products. The attention to accessibility standards was particularly impressive.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=1',
        },
        {
          id: 2,
          name: 'Michael Chen',
          role: 'CTO at StartUpGrid',
          content:
            "Working with this team transformed our mobile app's user retention by 35% in just three months. Their data-driven design approach helped us identify pain points we didn't even know existed.",
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=2',
        },
        {
          id: 3,
          name: 'David Rodriguez',
          role: 'UX Director at FinTech Global',
          content:
            'The dashboard redesign resulted in a 50% reduction in support tickets. Their ability to balance complex financial data with clean visualization is unmatched in the industry.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=3',
        },
        {
          id: 4,
          name: 'Priya Patel',
          role: 'E-commerce Manager at StyleHub',
          content:
            'Our conversion rate increased by 28% after implementing their checkout flow redesign. They understood our international user base better than our internal team.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=4',
        },
        {
          id: 5,
          name: 'James Wilson',
          role: 'Head of Product at HealthTrack',
          content:
            'The healthcare app we built together received FDA approval largely due to its intuitive patient interface. Their understanding of regulatory requirements saved us months of rework.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=5',
        },
        {
          id: 6,
          name: 'Lisa Nguyen',
          role: 'Marketing Director at EduTech Solutions',
          content:
            'Our user onboarding completion rate went from 65% to 92% after their redesign. The way they simplified complex educational concepts into clear interfaces was remarkable.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=6',
        },
        {
          id: 7,
          name: 'Thomas Okafor',
          role: 'Founder at AgriTech Africa',
          content:
            'They designed an agricultural monitoring app that works perfectly even in low-connectivity rural areas. Cultural sensitivity and technical innovation in perfect balance.',
          avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=7',
        },
      ],
    },
  },
  about: {
    profile: {
      name: 'Al-Hussein A.',
      title: 'Software Developer',
      image:
        'https://al-drake.netlify.app/static/media/profile.211cb621e39afe112f2a.png',
      description: [
        'Frontend Developer based in Kumasi, Ghana, with 3 years of hands-on experience building modern, performant web applications.',
        ' I specialize in React, Next.js, and TypeScript, Tailwind CSS, and Shadcn UI - crafting clean, accessible, and scalable interfaces that solves real problems.',' From startups to client projects, I deliver pixel-perfect UIs with a focus on speed, user experience, and maintainable code.',
        'Currently open to new opportunities.'
      ],
    },
    education: [
      {
        title: 'AmaliTech Training Academy',
        programme: 'Software Engineering',
        date: '2021 - 2021',
        icon: 'mdi:school-outline',
        description:
          'Completed an extensive graduate software engineering training specializing in Fullstack Development. Merged technical expertise with visual communication to design user-centered digital products and prototypes.',
      },

      {
        title: 'University of Cape Coast',
        programme: 'Bachelor of Arts(Geography & Sociology)',
        date: '2013 - 2017',
        icon: 'mdi:school',
        description:
          "Earned a Bachelor's degree in Social Science with a combined major of both Geography and Sociology. Gained strong skills and foundation in research, critical thinking, and communication, alongside specialized knowledge in spatial analysis and social structures human interaction.",
      },
      {
        title: 'Kumasi Academy',
        programme: 'General Arts',
        date: '2008 - 2012',
        icon: 'mdi:palette',
        description:
          'Focused on general arts and visual design principles, which sparked my early interest in creative problem solving. Explored traditional media, digital illustration, and visual storytelling.',
      },
    ],
    experience: [
      {
        title: 'Creative Director',
        company: 'Freelance',
        date: '2024 - Present',
        icon: 'mdi:briefcase',
        description:  [  
        '● Led creative and development teams to build 2+ digital experiences for tech startups, combining innovation with user empathy and reducing project delivery time by 25% through efficient UI/UX strategies.',
        '● Oversaw branding,Frontend Dev Twam,  UI/UX strategy, and development pipelines for clients, resulting in 2 completed projects with 100% client satisfaction and improved user engagement metrics by 30%.' 
        ]
      },
      {
        title: 'Associate Software Engineer',
        company: 'AmaliTech Services',
        date: '2022 - 2024',
        icon: 'mdi:monitor-dashboard',
        description:[
          '● Designed and implemented 5+ high-fidelity web interfaces using React, Nextjs, Figma, and Tailwind CSS, reducing code smell by 35% and bugs by 80% through collaborative cross-functional reviews.',
          '● Collaborated with developers and designers to craft intuitive user flows and interactions, delivering complex changes within deadlines for 4 different projects with zero major revisions.',
          '● Led the development of 3+ responsive web applications using React, TypeScript, and Redux, resulting in a 20% increase in user engagement and a 30% reduction in development time.',
          '● Mentored junior developers, providing constructive feedback and guidance, resulting in a 25% increase in team productivity and a 15% reduction in project delivery time.',
          '● Acted as a coding ambassador for UCC coding club, mentoring and guiding students in coding projects.',
          '● Led the development of 2+ internal projects using React, TypeScript, and Redux, resulting in saving the company $100,000.'
          
        ]
      },
      {
        title: 'Junior Associate Developer',
        company: 'AmaliTech Services',
        date: '2021 - 2022',
        icon: 'mdi:code-tags',
        description:[
          '● Contributed to 3+ projects using React and JavaScript, implementing components and state management with Redux/React Query.',          
          '● Reviewed requirements and tested features, collaborating to deliver changes within deadlines.',
          '● Developed responsive websites and applications with a focus on accessibility, visual aesthetics, and performance, shipping 3+ pixel-perfect interfaces from wireframes to production code.',
          '● Transformed app designs into frontend code using React, CSS, and JavaScript for  client projects, implementing features like delivery tracking and ensuring 100% adaptability across devices.',
        ]
      },
    ],
    technologies: {
      frontend: {
        description:
          'I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.',
        tools: [
          { name: 'React', icon: 'logos:react' },
          { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
          { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
          { name: 'Redux', icon: 'logos:redux' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'javascript', icon: 'logos:javascript' },
          { name: 'HTML5', icon: 'logos:html-5' },
          { name: 'CSS3', icon: 'logos:css-3' },
        ],
      },
      backend: {
        description:
          'I build fast APIs and scalable backends using Node.js, Bun, and Python.',
        tools: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Prisma', icon: 'logos:prisma' },
          { name: 'Python', icon: 'logos:python' },
          { name: 'Sanity', icon: 'logos:sanity' },
          { name: 'PostgresSQL', icon: 'logos:postgresql' },
          { name: 'OpenAI', icon: 'simple-icons:openai' },
        ],
      },
      uiux: {
        description:
          'I design smooth, user-centered interfaces and high-fidelity prototypes.',
        tools: [
          { name: 'Figma', icon: 'logos:figma' },
          { name: 'Framer', icon: 'simple-icons:framer', color: '#0055FF' },
          { name: 'Notion', icon: 'logos:notion-icon' },
        ],
      },
      graphicDesign: {
        description:
          'My graphic work includes logos, branding, and posters using Adobe Suite.',
        tools: [
          { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
          { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
        ],
      },
      motionDesign: {
        description:
          'I animate UI flows and cinematic intros using After Effects and Blender.',
        tools: [
          { name: 'After Effects', icon: 'logos:adobe-after-effects' },
          { name: 'Premiere Pro', icon: 'logos:adobe-premiere' },
          { name: 'Blender', icon: 'logos:blender' },
        ],
      },
    },
  },
  projects: {
    sectionTitle: 'Recent Projects',
    sectionDescription:
      'A selection of my recent projects showcasing software development expertise',
    work: [
      {
        id: 1,
        title: 'Digital Banking App',
        description:
          'A streamlined digital banking interface emphasizing clarity, speed, and intuitive design.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=1',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3',
        ],
        category: 'Applications',
        details:
          'A feature-rich digital banking app built with React and TailwindCSS, integrating seamless animations via Framer Motion. Designed with a mobile-first approach and a modular component system powered by TypeScript and Vite.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'Expo', icon: 'simple-icons:expo' },
        ],
      },
      {
        id: 2,
        title: 'E-commerce Platform',
        description:
          'Scalable and responsive online store with dynamic product filtering and intuitive cart management.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=2',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3',
        ],
        category: 'Web Development',
        details:
          'A fully functional e-commerce platform built with React and TailwindCSS. Features product listings, advanced filters, cart and checkout system, and a modern UI with responsive design for all devices.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
        ],
      },
      {
        id: 3,
        title: 'Travel Booking System',
        description:
          'Comprehensive booking platform for flights, hotels, and rentals with live availability.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=3',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=3',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3',
        ],
        category: 'Web Development',
        details:
          'A modern travel booking system built with Next.js and TailwindCSS. Users can search and book flights, hotels, and car rentals with real-time availability and intuitive UI components powered by HeroUI.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
        ],
      },
      {
        id: 4,
        title: 'AI Chat Assistant',
        description:
          'Smart customer support assistant with contextual awareness and real-time replies.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=4',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=4',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3',
        ],
        category: 'Applications',
        details:
          'AI-powered chat assistant developed with React and TailwindCSS. Integrated with OpenAI’s GPT API for contextual conversations, deployed via Vercel with real-time response and adaptive UI.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'OpenAI API', icon: 'simple-icons:openai' },
          { name: 'Vercel', icon: 'simple-icons:vercel' },
        ],
      },
      {
        id: 5,
        title: 'Portfolio API & CMS',
        description:
          'Headless API backend with admin-friendly CMS capabilities.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=5',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=5',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-3',
        ],
        category: 'Backend Services',
        details:
          'A modular REST API built with Node.js and Express, powering dynamic portfolio websites. It includes JWT-based authentication, MySQL integration, and a Swagger-documented CMS interface for easy content management by non-developers.',
        github: 'https://github.com',
        tech: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'MySQL', icon: 'logos:mysql-icon' },
          { name: 'JWT', icon: 'simple-icons:jsonwebtokens' },
          { name: 'Swagger', icon: 'simple-icons:swagger' },
        ],
      },
      {
        id: 6,
        title: 'Fitness Tracker App',
        description:
          'Monitor workouts, calorie intake, and goals in one place.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=6',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=6',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-3',
        ],
        category: 'Applications',
        details:
          'A cross-platform fitness application developed with React Native and styled using TailwindCSS via Expo. It offers calorie tracking, workout logging, analytics via charts, and custom goal-setting—all within a mobile-optimized interface.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'React Native', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'Expo', icon: 'simple-icons:expo' },
        ],
      },
      {
        id: 7,
        title: 'Content Scheduler',
        description:
          'Plan, schedule, and automate your social media posts effortlessly.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=7',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=7',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-3',
        ],
        category: 'Applications',
        details:
          'A productivity app designed for content creators featuring calendar syncing, automated post publishing, rich media previews, and cloud synchronization for seamless cross-device access.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'Next.js', icon: 'skill-icons:nextjs-dark' },
          { name: 'MySQL', icon: 'logos:mysql-icon' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
        ],
      },
      {
        id: 8,
        title: 'Real Estate Dashboard',
        description:
          'Comprehensive dashboard to manage properties, leads, and sales pipelines effectively.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=8',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=8',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-3',
        ],
        category: 'Web Development',
        details:
          'An admin panel tailored for real estate professionals featuring interactive data visualizations, lead tracking, and CRM system integrations to streamline client and property management.',
        github: 'https://github.com',
        live: 'https://example.com',
        tech: [
          { name: 'React', icon: 'logos:react' },
          { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
          { name: 'Chart.js', icon: 'simple-icons:chartdotjs' },
        ],
      },
      {
        id: 9,
        title: 'Crypto Wallet API',
        description:
          'Robust backend API for secure cryptocurrency operations and blockchain interactions.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=9',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=9',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-3',
        ],
        category: 'Backend Services',
        details:
          'Secure Node.js API supporting Ethereum and Bitcoin transactions. Features transaction signing, wallet address creation, and real-time blockchain event monitoring using Web3.js. Enhanced with hardware security module (HSM) integration for secure key management.',
        github: 'https://github.com',
        tech: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Ethereum', icon: 'logos:ethereum' },
          { name: 'Web3.js', icon: 'simple-icons:web3dotjs' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
          { name: 'JWT', icon: 'simple-icons:jsonwebtokens' },
        ],
      },
      {
        id: 10,
        title: 'SaaS Subscription API',
        description:
          'Backend API managing SaaS subscriptions, billing, and user accounts.',
        image: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=10',
        gallery: [
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=10',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-1',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-2',
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-3',
        ],
        category: 'Backend Services',
        details:
          'RESTful API supporting SaaS subscription workflows with Stripe integration, usage metering, tiered pricing, webhook handling, trial periods, and analytics. Optimized for high concurrency with Redis caching.',
        github: 'https://github.com',
        tech: [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Stripe', icon: 'logos:stripe' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
          { name: 'Redis', icon: 'logos:redis' },
          { name: 'JWT', icon: 'simple-icons:jsonwebtokens' },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Let's Build Something Amazing",
      tagline: "Have a project in mind? I'm currently open to new opportunities and excited to work on impactful web applications.",
    location: {
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126804.83195594409!2d-1.6985081585617445!3d6.690078643880363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi!5e0!3m2!1sen!2sgh!4v1753379131472!5m2!1sen!2sgh',
      address: 'Kumasi, Ghana',
    },
  },
  morphingTexts: {
    about: ['Creative', 'Passionate', 'Developer'] as const,
    projects: ['My Work', 'Creations', 'Experiments', 'Innovations'] as const,
    contact: ["Let's", 'Build', 'Together'] as const,
  },
  navigation: [
    { name: 'Home', href: '/', icon: 'lucide:home' },
    { name: 'About', href: '/about', icon: 'lucide:user' },
    { name: 'Projects', href: '/projects', icon: 'lucide:folder-code' },
    { name: 'Contact', href: '/contact', icon: 'lucide:send' },
    {
      name: 'Blog',
      href: 'https://blog.al-husayn.dev/',
      icon: 'lucide:rss',
    },
  ],
  footer: {
    name: 'Al-Hussein A.',
    description: 'Always interested in new projects and collaborations.',
    contact: {
      email: 'alhusayn532@gmail.com',
      phone: '+233 (024) 904-6210',
      location: 'Kumasi, Ghana',
    },
    socialLinks: [
      { platform: 'X', url: 'https://x.com/al_drake3', icon: 'simple-icons:x' },
      {
        platform: 'GitHub',
        url: 'https://github.com/al-husayn',
        icon: 'mdi:github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/al-hussein-abubakar/',
        icon: 'mdi:linkedin',
      },
      {
        platform: 'Website',
        url: 'https://www.al-husayn.dev/',
        icon: 'mdi:web',
      },
      {
        platform: 'RSS',
        url: 'https://blog.al-husayn.dev/',
        icon: 'mdi:rss',
      },
    ],
    services: [
      'Modern Web Applications',
      'Full-Stack Development',
      'Performance & Maintenance',
      'Consulting & Code Reviews',
      'Landing Pages & Marketing Sites',
    ],
  },
} as const;
