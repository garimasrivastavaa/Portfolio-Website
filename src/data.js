// ============================================================
//  EDIT CONTENT HERE. Everything on the site comes from this file.
//  Wrap text in **double asterisks** to make it bold.
//  To add an item, copy an existing object in a list and edit it.
//  Icon names available: see components/Icon.jsx
// ============================================================

export const site = {
  name: "Garima Srivastava",
  firstName: "Garima",
  lastName: "Srivastava",
  logo: "Garima",
  email: "workwithgarimasri@gmail.com",
  linkedin: "https://www.linkedin.com/in/garimasri", // verify handle
  location: "Bengaluru, India",
  resume: "/Garima_Srivastava_CV.pdf", // file goes in /public
  status: "Open to Product roles",
  greeting: "Hi, I'm",
  roles: [
    "Aspiring Product Manager",
    "Voice of the Customer",
    "Product Discovery",
    "Go-to-Market Thinking",
  ],
  intro:
    "Product-minded professional who turns customer pain points into product requirements. Experience across SaaS customer success, AI-powered identity verification and health-tech product discovery.",
  chips: [
    "Product Discovery",
    "User Research",
    "Feedback Analysis",
    "GTM Strategy",
    "Stakeholder Management",
    "Product Demos",
    "Excel & Sheets",
    "Customer Success",
  ],
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  main: {
    icon: "lightbulb",
    title: "Product & Customer Insights",
    tags: ["Discovery", "Feedback Analysis", "GTM", "Stakeholders"],
  },
  orbs: ["NPS", "GTM", "QBR", "MRR", "CX"],
  stats: [
    { value: 151, suffix: "", label: "Feature Requests" },
    { value: 300, suffix: "+", label: "Explainer Videos" },
  ],
  badge: { label: "1st Place · GTM Bootcamp", title: "Lex EU market-entry strategy" },
};

export const about = {
  title: "About Me",
  subtitle: "A product-minded professional who turns customer problems into product direction",
  badge: "Product · Customer Insights",
  paragraphs: [
    "Hi, I'm **Garima Srivastava**, based in Bengaluru. I graduated in Computer Science from **VIT Vellore** in 2025, and I work where customer problems meet product decisions.",
    "At **Rippling** I turned customer pain points across Recruiting, Review Cycles and HCM into **151 product feature requests**, working directly with Product Managers and Engineers. Before that, at **HyperVerge**, I managed 8 accounts worth **$3,400 MRR**, led Quarterly Business Reviews to a **10/10 NPS**, and won **1st place** in the GTM Bootcamp Challenge.",
    "Beyond work, I ran product discovery for **Cittaa**, a health-tech startup, researching 25+ institutions and holding 15+ stakeholder conversations to shape school-based mental-health solutions.",
    "I'm looking for a Product Manager / APM role where I can turn customer insight into products people actually adopt.",
  ],
  stats: [
    { icon: "message", value: 151, suffix: "", label: "Feature Requests", sub: "Raised with PMs & engineers" },
    { icon: "video", value: 300, suffix: "+", label: "Explainer Videos", sub: "Scalable customer education" },
    { icon: "star", value: 10, suffix: "/10", label: "NPS Score", sub: "Led QBRs · HyperVerge" },
    { icon: "trending", value: 50, suffix: "%", label: "NPS Response Rate", sub: "Up from 20% org-wide" },
  ],
  education: [
    {
      school: "Vellore Institute of Technology, Vellore",
      degree: "Bachelor of Computer Science & Engineering",
      meta: "2021 – 2025 · CGPA 8.81",
      color: "purple",
    },
    {
      school: "Bal Bharati Public School, Rohini, Delhi",
      degree: "CBSE Senior School (XII) · 97.4%",
      meta: "Graduated 2021",
      color: "cyan",
    },
  ],
};

export const showcase = {
  title: "Portfolio Showcase",
  subtitle:
    "Explore my product work: case studies, experience, skills and leadership. Each one is a step in how I think about customers and products.",
  stats: [
    { icon: "users", value: 8, suffix: "", label: "Accounts Managed", sub: "$3,400 combined MRR" },
    { icon: "search", value: 25, suffix: "+", label: "Institutions Researched", sub: "Cittaa product discovery" },
    { icon: "trophy", value: 1, suffix: "st", label: "Place · GTM Bootcamp", sub: "HyperVerge Challenge" },
  ],
  tabs: [
    { id: "cases", label: "Case Studies", icon: "target" },
    { id: "experience", label: "Experience", icon: "briefcase" },
    { id: "skills", label: "Skills", icon: "layers" },
    { id: "leadership", label: "Leadership", icon: "award" },
  ],
};

export const caseStudies = [
  {
    tag: "Customer Insights",
    icon: "message",
    date: "Jul 2025 – Present",
    title: "Turning Customer Pain Points into 151 Feature Requests",
    summary:
      "Closing the loop between customers and the product team across Recruiting, Review Cycles and HCM.",
    problem:
      "Customer pain points across Recruiting, Review Cycles and HCM workflows needed to reach the product team as clear, actionable requirements.",
    approach:
      "Structured requests, analysed feedback datasets in Excel and Google Sheets to find recurring themes and product gaps, and joined customer calls to capture context first-hand.",
    outcome:
      "151 feature requests raised in direct collaboration with Product Managers and Engineers, plus 300+ explainer videos driving feature adoption.",
    metrics: ["151 feature requests", "300+ explainer videos"],
    skills: ["Feedback Analysis", "Excel", "Google Sheets", "Stakeholder Comms"],
    link: "",
  },
  {
    tag: "Product Discovery",
    icon: "search",
    date: "Project",
    title: "Cittaa: Health-tech Product Discovery",
    summary: "Expanding access to mental-health support through institutional solutions.",
    problem:
      "Gaps in student mental-health accessibility, counselling availability, affordability and existing support systems at schools and institutions.",
    approach:
      "Researched 25+ schools and institutions, held 15+ stakeholder conversations, evaluated subscription-based counselling and wellness services, and explored use cases for Vocalysis, Cittaa's AI voice companion, with the founder.",
    outcome:
      "Translated stakeholder needs into school-based counselling and wellness opportunities and advanced discussions with interested institutions. Digital outreach reached 500K+ people.",
    metrics: ["25+ institutions", "15+ stakeholder interviews", "500K+ reach"],
    skills: ["User Research", "Stakeholder Interviews", "Partnerships", "Digital Outreach"],
    link: "",
  },
  {
    tag: "Go-to-Market",
    icon: "rocket",
    date: "HyperVerge · 2025",
    title: "Lex: EU Market-Entry Strategy",
    summary: "A market-entry strategy for HyperVerge's OCR product, built for the EU region.",
    problem: "Lex, HyperVerge's OCR product, needed a go-to-market plan for launch in the EU region.",
    approach: "Developed a market-entry strategy as part of HyperVerge's GTM Bootcamp Challenge.",
    outcome: "Secured 1st place in the Bootcamp Challenge and ranked 1st among GTM teams.",
    metrics: ["1st place", "1st among GTM teams"],
    skills: ["GTM Strategy", "Market Entry", "AI / OCR Product"],
    link: "",
  },
  {
    tag: "Retention",
    icon: "trending",
    date: "Jan – Jun 2025",
    title: "Reviving a Churned Brokerage Account",
    summary: "From churn research to a revenue-recovery opportunity for an AI identity-verification customer.",
    problem: "A brokerage customer had churned and stakeholder trust needed to be rebuilt.",
    approach:
      "Researched historical interactions, product usage, support issues and commercial records to find churn drivers, led revival conversations end-to-end, and designed a customised onboarding workflow.",
    outcome: "Generated a $1,500 MRR revival opportunity and contributed to the reactivation of multiple accounts.",
    metrics: ["$1,500 MRR revival", "$3,000+ upsell opportunities", "$5,000 recovered"],
    skills: ["Churn Analysis", "Onboarding Design", "Account Management"],
    link: "",
  },
];

export const experience = [
  {
    role: "Senior Recruitment Consultant",
    company: "Rippling",
    location: "Bengaluru, India",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Translated customer pain points across Recruiting, Review Cycles and HCM into **151 product feature requests**, collaborating with Product Managers and Engineers.",
      "Analysed customer feedback and feature-request datasets in Excel and Google Sheets to identify recurring themes and product gaps.",
      "Joined customer calls to understand feature enhancement requirements and communicate customer context to product teams.",
      "Created **300+ product demonstration and explainer videos**, enabling scalable customer education and feature adoption.",
      "Delivered technical presentations to HCM clients and internal teams on capabilities, integrations and troubleshooting.",
      "Trained new-hire cohorts on product functionality and case-resolution practices, tracking resolution time and email quality over their first 3 months.",
    ],
  },
  {
    role: "Business Associate Intern",
    company: "HyperVerge",
    location: "Bengaluru, India",
    period: "Jan 2025 – Jun 2025",
    current: false,
    bullets: [
      "Managed **8 active accounts** with a combined **$3,400 MRR**, aligning AI-powered identity verification products with customer workflows.",
      "Researched churned accounts and led end-to-end revival conversations, contributing to the reactivation of multiple accounts.",
      "Generated a **$1,500 MRR** revival opportunity for a churned brokerage account with a customised onboarding workflow.",
      "Identified **$3,000+** in upsell and cross-sell opportunities through demos and alignment with customer roadmaps.",
      "Led Quarterly Business Reviews on usage and business outcomes, earning a **10/10 NPS**.",
      "Recovered **$5,000** in long-pending payments by resolving disputes across 11 invoices with Finance and senior stakeholders.",
      "Led organisation-wide NPS initiatives (response rate **20% → 50%**) and authored an NBFC Playbook to standardise customer success workflows.",
      "Secured **1st place** in HyperVerge's GTM Bootcamp Challenge for the Lex EU market-entry strategy.",
    ],
  },
  {
    role: "Project Intern",
    company: "Tata Consultancy Services",
    location: "Delhi, India",
    period: "Aug 2023 – Nov 2023",
    current: false,
    bullets: [
      "Worked on enterprise client delivery using Microsoft Azure and presented business demonstrations to senior stakeholders, including the CIO.",
    ],
  },
];

export const skills = [
  { group: "Product & Strategy", items: ["Product Discovery", "Customer Research", "Feature Request Analysis", "Go-to-Market Strategy", "Market-Entry Planning"] },
  { group: "Data & Analysis", items: ["Excel", "Google Sheets", "NPS Analysis", "Churn Analysis", "Account Reporting"] },
  { group: "Customer & Stakeholders", items: ["Quarterly Business Reviews", "Stakeholder Management", "Customer Calls", "Onboarding Design", "Cross-functional Collaboration"] },
  { group: "Communication", items: ["Product Demos", "Explainer Videos", "Technical Presentations", "Training & Enablement", "Public Speaking"] },
  { group: "Technical Context", items: ["Computer Science Degree", "Microsoft Azure", "HCM / SaaS Workflows", "AI-powered Products"] },
];

export const leadership = [
  { icon: "mic", org: "Toastmasters VIT", role: "Vice President of Membership", text: "Retained 100% of members, interviewed 70+, and won a district award." },
  { icon: "globe", org: "Student Exchange", role: "Leader, Indian-German Programme", text: "Led the programme and hosted India Day in Germany." },
  { icon: "users", org: "Bal Bharati Public School", role: "President, Student Council", text: "Led 7 teams, impacting 1,200+ students through school-wide initiatives." },
  { icon: "gamepad", org: "Board Gamers VIT", role: "Management Head", text: "Coordinated 10+ events, achieving a 52% increase in reach." },
  { icon: "share", org: "LHSC VIT", role: "Social Media Head", text: "Boosted followers by 400%, with content reaching 61K people." },
];

export const contact = {
  title: "Contact Me",
  subtitle: "Hiring for a product role or want to talk product? Send a message and I'll get back to you soon.",
  formTitle: "Get in Touch",
  formSub: "Have something to discuss? Let's talk.",
  availability: { title: "Available for opportunities", sub: "Open to Product Manager & APM roles" },
};