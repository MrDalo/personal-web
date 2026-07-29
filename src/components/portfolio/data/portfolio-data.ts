export const projects = [
  {
    number: '01',
    title: 'CloakForge',
    category: 'Web3 product',
    year: '2025',
    description:
      'A unified Solana workspace for token minting, liquidity-pool creation, batch transfers, token burning, and authority revocation—without relying on CLI tools or multiple dashboards.',
    result: 'Product design · On-chain workflows · Web3',
    tech: [
      'Next.js',
      'TypeScript',
      'Solana Web3.js',
      'Solana Kit',
      'TanStack Query',
    ],
    liveUrl: 'https://cloakforge.app',
    githubUrl: '',
    tone: 'acid',
  },
  {
    number: '02',
    title: 'Front-end Testing Framework',
    category: 'Research & tooling',
    year: '2025',
    description:
      'My master’s thesis turned modern testing strategies, tooling, pitfalls, and code examples into a practical PDF guide and a Next.js template preconfigured for every testing phase.',
    result: 'Research · Testing strategy · Developer experience',
    tech: ['Vitest', 'Cypress', 'RTL', 'Lighthouse'],
    liveUrl:
      'https://www.researchgate.net/publication/389435761_Front-end_Testing_Framework_A_Practical_Guide',
    githubUrl:
      'https://github.com/MrDalo/frontend-testing-framework/tree/master',
    tone: 'paper',
  },
  {
    number: '03',
    title: 'Statsly',
    category: 'Analytics platform',
    year: '2024',
    description:
      'A full-stack analytics product that connects multiple social platforms through OAuth2, transforms account data into useful insights, and generates media kits for creators.',
    result: 'Data UI · OAuth flows · Full-stack product',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'OAuth2'],
    liveUrl: 'https://statsly.vercel.app/',
    githubUrl: '',
    tone: 'violet',
  },
  {
    number: '04',
    title: 'BrainFree v2',
    category: 'Team product',
    year: '2023',
    description:
      'A full-stack priority-management application designed and delivered by a three-person team, combining authenticated workflows with structured, type-safe task management.',
    result: 'Product engineering · Collaboration · UX',
    tech: ['Next.js', 'TypeScript', 'NextAuth', 'Zod'],
    liveUrl: 'https://brainfree-v2.vercel.app/',
    githubUrl: 'https://github.com/MrDalo/BrainfreeV2',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'JINAG Hackathon 2023',
    category: 'Client event website',
    year: '2023',
    description:
      'Designed the event experience in Figma from the client brief, then developed a responsive, animated landing page for a Brno hackathon in close collaboration with the client.',
    result: 'UX/UI design · Client delivery · Front-end',
    tech: ['Figma', 'Vite', 'Sass', 'JavaScript', 'Lottie'],
    liveUrl: '',
    githubUrl: '',
    tone: 'paper',
  },
  {
    number: '06',
    title: 'Dny AI 2022',
    category: 'Client event website',
    year: '2022',
    description:
      'Developed and scaled the public website for a Brno AI event from supplied UI/UX designs, working directly with the designer and client through delivery.',
    result: 'Design implementation · Client delivery · Events',
    tech: ['HTML', 'Sass', 'PHP', 'JavaScript'],
    liveUrl: 'https://2022.dny-ai.cz/',
    githubUrl: '',
    tone: 'violet',
  },
] as const

export const experiences = [
  {
    period: '2026 — now',
    role: 'Senior Software Developer',
    company: 'SONET · Payten',
    location: 'Brno, Czech Republic',
    summary:
      'I own front-end technology decisions for new applications, lead the move from legacy stacks to React and TypeScript, and integrate practical AI tooling into the software development lifecycle.',
    highlights: [
      'Lead the development of an internal component library with comprehensive test coverage, CI/CD delivery, and npm distribution across projects',
      'Drive application modernization with security, accessibility, and developer experience as core requirements',
      'Design multi-agent workflows and deliver MCP servers for Microsoft SQL Server databases and Redmine',
    ],
  },
  {
    period: '2024 — 2026',
    role: 'Front-end Developer',
    company: 'Deutsche Telekom Services Europe',
    location: 'Brno, Czech Republic',
    summary:
      'As the primary front-end engineer in AI Shared Services, I translated research into reliable production tools and temporarily coordinated delivery and code quality for a four-person front-end team.',
    highlights: [
      'Built and scaled an internal chatbot to hundreds of users, owning performance, reliability, and UX',
      'Designed a Storybook component library adopted across the team’s projects',
      'Worked directly with data scientists and AI researchers to ship production AI tools',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'SAP BW Software Developer',
    company: 'CVIS BUT',
    location: 'Brno, Czech Republic',
    summary:
      'Built data warehousing and business intelligence solutions with a three-person database team, university analysts, and stakeholders across eleven faculties and departments.',
    highlights: [
      'Designed ETL pipelines that structured institutional data for reporting',
      'Implemented OLAP data cubes for enterprise analysis',
      'Worked across SAP BW/4HANA, Business Objects, ABAP, and SQLScript',
    ],
  },
] as const

export const capabilities = [
  {
    index: 'A',
    title: 'Front-end product engineering',
    text: 'Production React and Next.js applications with deliberate architecture, reliable data flows, and close attention to performance, accessibility, and UX.',
    tools: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Zod'],
  },
  {
    index: 'B',
    title: 'Quality engineering',
    text: 'Tested component libraries and layered quality strategies that make accessibility, performance, and maintainability part of everyday delivery.',
    tools: ['Vitest', 'Cypress', 'RTL', 'Storybook', 'Lighthouse'],
  },
  {
    index: 'C',
    title: 'AI-enabled teams',
    text: 'Practical multi-agent workflows and MCP integrations that connect AI assistants to real engineering systems instead of isolated demos.',
    tools: ['Codex', 'MCP', 'Redmine', 'Claude Code', 'CI/CD'],
  },
] as const

export const skillLoop = [
  'React',
  'Next.js',
  'TypeScript',
  'GSAP',
  'Accessibility',
  'Testing',
  'Design systems',
  'AI workflows',
] as const
