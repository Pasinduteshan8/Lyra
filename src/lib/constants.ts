// lib/constants.ts — Single source of truth for all static data

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Utility", href: "#utility" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "How to Get Lyra", href: "#how-to-get" },
  { label: "Ecosystem & Partners", href: "#ecosystem" },
  { label: "Community", href: "#community" },
  { label: "FAQs", href: "#faq" },
];

export const FEATURES = [
  {
    id: "fast-payments",
    icon: "Zap",
    title: "Fast Payments",
    description: "Send and receive payments instantly with near-zero fees across the globe.",
  },
  {
    id: "staking-rewards",
    icon: "TrendingUp",
    title: "Staking Rewards",
    description: "Earn passive income by staking your Lyra tokens and growing your holdings.",
  },
  {
    id: "access-control",
    icon: "Shield",
    title: "Access Control",
    description: "Unlock exclusive services, dApps, and premium features with Lyra tokens.",
  },
  {
    id: "governance",
    icon: "Users",
    title: "Governance",
    description: "Vote on protocol decisions and shape the future of the Lyra ecosystem.",
  },
];

export const TOKENOMICS_DATA = [
  { label: "Team & Advisors", value: 20, color: "#616b7c" },
  { label: "Partnerships", value: 10, color: "#40495b" },
  { label: "Reserve", value: 5, color: "#98a4b6" },
  { label: "Community Rewards", value: 40, color: "#94a2b7" },
  { label: "Ecosystem Development", value: 25, color: "#6d788b" },
];

export const TOKENOMICS_STATS = [
  { label: "Total Supply", value: "1,000,000,000", unit: "LYRA" },
];

export const ROADMAP_ITEMS = [
  {
    id: "q1-2024",
    quarter: "Q1 2024",
    title: "Foundation",
    description: "Token launch, smart contract deployment, and initial exchange listings.",
    value: "01.20%",
    status: "completed",
  },
  {
    id: "q2-2024",
    quarter: "Q2 2024",
    title: "Growth",
    description: "Partnership integrations, staking platform launch, and community building.",
    value: "02.50%",
    status: "completed",
  },
  {
    id: "q3-2024",
    quarter: "Q3 2024",
    title: "Expansion",
    description: "DeFi integrations, governance launch, and cross-chain bridges.",
    value: "03.30%",
    status: "active",
  },
  {
    id: "q4-2024",
    quarter: "Q4 2024",
    title: "Ecosystem",
    description: "Full ecosystem deployment, NFT marketplace, and enterprise partnerships.",
    value: "04.20%",
    status: "upcoming",
  },
];

export const HOW_TO_GET_STEPS = [
  {
    step: "01",
    title: "Create a Wallet",
    description: "Download a compatible crypto wallet like MetaMask or Trust Wallet.",
    cta: "Get Wallet",
  },
  {
    step: "02",
    title: "Fund Your Account",
    description: "Purchase ETH or USDT from any exchange and transfer to your wallet.",
    cta: "Learn More",
  },
  {
    step: "03",
    title: "Buy Lyra",
    description: "Swap for Lyra tokens on our supported DEX or CEX partners.",
    cta: "Buy Now",
  },
];

export const PARTNERS = [
  { name: "Lapixy", logo: "🔷" },
  { name: "Scalit", logo: "⚡" },
  { name: "Animoon", logo: "🌙" },
  { name: "Proexi", logo: "🔵" },
  { name: "Widgets", logo: "🔧" },
  { name: "MetaChain", logo: "⛓️" },
  { name: "DeFi Hub", logo: "🏦" },
  { name: "CryptoBase", logo: "💎" },
];

export const SOCIAL_LINKS = [
  { name: "Twitter", icon: "Twitter", href: "#" },
  { name: "Telegram", icon: "Send", href: "#" },
  { name: "Discord", icon: "MessageSquare", href: "#" },
  { name: "Instagram", icon: "Instagram", href: "#" },
];

export const FAQS = [
  {
    id: "faq-1",
    question: "Is a profit to use?",
    answer:
      "Yes! Lyra is designed to generate passive income through staking rewards, governance participation incentives, and ecosystem utility bonuses. Token holders can earn up to 15% APY through our staking program.",
  },
  {
    id: "faq-2",
    question: "Where do I store Lyra?",
    answer:
      "Lyra tokens can be stored in any ERC-20 compatible wallet, including MetaMask, Trust Wallet, Ledger hardware wallets, and our official Lyra mobile wallet available on iOS and Android.",
  },
  {
    id: "faq-3",
    question: "Can I stake Lyra?",
    answer:
      "Absolutely! Lyra staking is available directly through our platform. Simply connect your wallet, choose your staking duration (7, 30, 90, or 365 days), and start earning rewards immediately.",
  },
  {
    id: "faq-4",
    question: "How did Lyra work?",
    answer:
      "Lyra operates on the Ethereum blockchain using a proof-of-stake mechanism. Smart contracts handle all token transactions, staking rewards, and governance votes automatically and transparently.",
  },
  {
    id: "faq-5",
    question: "Can I transfer Lyra to another wallet?",
    answer:
      "Yes, Lyra tokens are fully transferable at any time. Simply use the send function in your wallet app, enter the recipient's Ethereum address, and confirm the transaction.",
  },
];

export const FOOTER_LINKS = {
  quicklinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Utility", href: "#utility" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  company: [
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
