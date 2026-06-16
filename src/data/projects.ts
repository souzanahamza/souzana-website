import {
  FileText,
  ShoppingBag,
  Printer,
  TrendingUp,
  BarChart3,
  Type,
  Database,
  type LucideIcon,
} from 'lucide-react';

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ArchitectureBlock {
  description: string;
  /** Optional ASCII / text diagram rendered in a monospace block. */
  diagram?: string;
  /** Key models, services, or building blocks of the system. */
  components?: { name: string; detail: string }[];
}

export interface BusinessImpact {
  summary: string;
  /** Optional headline metrics rendered in a prominent highlight box. */
  metrics?: { value: string; label: string }[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  icon: LucideIcon;
  technologies: string[];
  /** Optional — render safely when missing. */
  liveLink?: string;
  /** Optional — render safely when missing. */
  codeLink?: string;
  /** Optional gallery of screenshots — render safely when missing. */
  images?: { src: string; alt: string; caption?: string; tall?: boolean }[];
  overview: {
    problem: string;
    summary: string;
    highlights?: string[];
  };
  architecture: ArchitectureBlock;
  challenges: ChallengeSolution[];
  impact: BusinessImpact;
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: 'seluze-ai-agent',
    title: 'Seluze AI Agent',
    category: 'AI/GenAI & E-commerce',
    tagline:
      'Shopping that finally understands you. Describe it, show a photo, or both — Seluze instantly finds the perfect products, answers your questions, and guides every choice like the best sales associate you\'ve ever had.',
    icon: ShoppingBag,
    technologies: [
      'Agentic RAG',
      'FastAPI',
      'Qdrant',
      'E5 Embeddings',
      'CLIP ViT',
      'Cross-Encoder Reranking',
      'Gemini',
      'Claude',
      'Supabase',
      'React',
      'TypeScript',
      'SSE Streaming',
    ],
    liveLink: 'https://seluze.vercel.app/',
    images: [
      {
        src: '/projects/seluze/chat-search.png',
        alt: 'Seluze chat widget recommending pink party dresses with product cards in response to a shopper request',
        caption:
          'Conversational shopping — a shopper simply asks for "pink dresses for a birthday party" and Seluze searches the catalog, then replies with a warm, on-brand recommendation and shoppable product cards (with names and prices) right inside the chat.',
        tall: true,
      },
      {
        src: '/projects/seluze/chat-clarify.png',
        alt: 'Seluze answering a follow-up size question and offering accessory suggestions with quick-reply buttons',
        caption:
          'Context-aware follow-ups — the shopper taps a product to ask about sizing, and Seluze answers from real measurement data, then proactively offers to style the look with quick-reply buttons (Bags & Clutches, Jewelry, Glasses) — just like a real sales associate upselling a complete outfit.',
        tall: true,
      },
      {
        src: '/projects/seluze/analytics.png',
        alt: 'Seluze Control Center analytics dashboard showing query metrics, latency breakdown and intent distribution',
        caption:
          'Analytics dashboard — operators get a live view of total queries, unique sessions, and average latency, plus a step-by-step pipeline latency breakdown, an intent-distribution donut, and the top recommended products.',
      },
      {
        src: '/projects/seluze/persona.png',
        alt: 'Seluze persona editor for configuring the assistant name, tone, language and system prompt',
        caption:
          'Persona editor — store teams shape how the assistant introduces itself: name, tone, and reply language (with Arabic/English auto-detect), alongside a live preview of the exact system prompt the backend will load.',
      },
      {
        src: '/projects/seluze/ai-descriptions.png',
        alt: 'Seluze AI Descriptions view generating retrieval-optimized product descriptions across a catalog',
        caption:
          'AI Descriptions — generate retrieval-optimized product copy at scale from each item\'s image and metadata. Operators can batch-process a full catalog (here 265 products), track generation status per item, and regenerate individual descriptions on demand.',
      },
      {
        src: '/projects/seluze/ai-settings.png',
        alt: 'Seluze AI Settings view with a CLIP similarity threshold slider and feature-flag toggles for reranking, streaming and agent mode',
        caption:
          'AI Settings — tune the assistant\'s behavior without touching code: a CLIP similarity-threshold slider trades precision against recall for image matches, while feature flags toggle reranking, response streaming, and autonomous agent mode to balance quality, speed, and cost.',
      },
      {
        src: '/projects/seluze/customer-memory.png',
        alt: 'Seluze Customer Memory view showing auto-built shopper profiles with preferred size, colors, style and budget',
        caption:
          'Customer Memory — the assistant automatically builds a CRM-style profile for every shopper from past conversations, capturing preferred size, colors, style, and budget. With thousands of profiles (and a 58% returning-shopper rate here), it personalizes recommendations and recognizes customers on repeat visits.',
      },
    ],
    overview: {
      problem:
        'Online shoppers struggle to find the right product: keyword search misses intent, customers often want to show a photo rather than describe it, and rigid recommendation pipelines cannot ask follow-up questions or refine across a conversation. Stores also need this to work across multiple catalogs, in multiple languages, without exploding latency and LLM cost.',
      summary:
        'Seluze is an agentic, multimodal shopping assistant exposed as a clean API. A tool-calling agent brain drives every conversation — deciding which tools to call, chaining several per turn, asking clarifying questions, and presenting curated picks. It searches by text, image, or both, reranks for relevance, reasons with a flexible multi-provider LLM layer, and streams its thinking back in real time, all while persisting conversation memory in Supabase.',
      highlights: [
        'Tool-calling agent that chains search, lookup, and clarification tools per turn',
        'Multimodal search: text (E5), visual (CLIP), hybrid fusion, and "more like this"',
        'Cross-encoder reranking with fail-safe fallback for sharper relevance',
        'Multilingual — Arabic queries answered in the customer\'s own language',
        'Real-time SSE streaming of tool calls and incremental replies',
        'Multi-store catalogs with a full operator dashboard',
      ],
    },
    architecture: {
      description:
        'An API-first FastAPI backend exposes /v1/chat, driven by a tool-calling agent brain rather than a fixed pipeline. The agent routes intent, then calls multimodal search tools backed by per-store Qdrant collections (E5 text vectors + CLIP image vectors). A cross-encoder reranks candidates before a per-stage, multi-provider LLM layer synthesizes a sales-agent reply, streamed back over SSE. Supabase persists chat history and a full interaction-log audit trail, and a React/TypeScript dashboard SPA gives operators control over personas, catalog, and the search index.',
      diagram: `Customer (text / image / both)
        ↓
   FastAPI  ·  /v1/chat
        ↓
  Tool-Calling Agent Brain
        ↓
┌───────────────┬────────────────┬────────────────┐
│  Text Search  │  Image Search  │  Hybrid Search │
│  (E5 + Qdrant)│ (CLIP + Qdrant)│ (fused vectors)│
└───────────────┴────────────────┴────────────────┘
        ↓
  Cross-Encoder Reranking (MiniLM)
        ↓
  Multi-Provider LLM (Gemini · Claude · Fashion)
        ↓
  present_products  →  SSE stream  →  Customer
        ↓
  Supabase (chat history · interaction_logs)`,
      components: [
        {
          name: 'Tool-Calling Agent Brain',
          detail:
            'Decides which tools to call and chains them per turn — text/image/hybrid search, find-similar, product & store lookup, clarification, and a final present_products step. Records an ordered tool_trace for transparency.',
        },
        {
          name: 'Multimodal Search (E5 + CLIP)',
          detail:
            'intfloat/e5-base-v2 for semantic text retrieval and openai/clip-vit-base-patch32 for visual search, with hybrid fusion ("this jacket but in blue") over Qdrant named vectors.',
        },
        {
          name: 'Cross-Encoder Reranker',
          detail:
            'A ms-marco-MiniLM-L-6-v2 post-retrieval layer reorders Qdrant candidates for sharper relevance, with a fail-safe fallback to the original order on error.',
        },
        {
          name: 'Multi-Provider LLM Layer',
          detail:
            'Query routing, synthesis, and the agent brain can each use a different provider — Gemini, Claude, or a vision-capable Fashion LLM — with native function-calling, streaming, and Gemini key rotation.',
        },
        {
          name: 'Streaming Engine (SSE)',
          detail:
            'POST /v1/chat/stream emits tool_call, tool_result, delta, final, error, and done events so the frontend can show live thinking and tool activity.',
        },
        {
          name: 'Supabase Persistence & Caching',
          detail:
            'Per-session chat history (products as JSONB) with a write-through in-memory TTL cache, plus an interaction_logs audit trail powering analytics and missed-query insights.',
        },
        {
          name: 'Operator Dashboard SPA',
          detail:
            'A React 18 + TypeScript + Vite + Tailwind control center for analytics, chat-history auditing, persona/policy config, catalog management, AI descriptions, and Qdrant index sync.',
        },
        {
          name: 'Multi-Store Qdrant',
          detail:
            'Products are partitioned into per-store Qdrant collections selectable by store_id, each with its own store-info markdown for policy and contact answers.',
        },
      ],
    },
    challenges: [
      {
        challenge:
          'Customers express what they want inconsistently — sometimes a description, sometimes a photo, sometimes both ("this, but in blue").',
        solution:
          'A multimodal search layer fuses E5 text embeddings and CLIP image embeddings over Qdrant, supporting text, visual, hybrid, and "more like this" modes from a single agent toolbox.',
      },
      {
        challenge:
          'Fixed retrieve-then-synthesize pipelines are rigid: they cannot ask follow-ups, refine across turns, or pick the cheapest path per request.',
        solution:
          'A tool-calling agent brain dynamically chooses and chains tools per turn, asks clarifying questions with quick-reply buttons, and injects prior turns as memory so suggestions refine ("in red", "cheaper", "what sizes?").',
      },
      {
        challenge:
          'Vector similarity alone often surfaces near-misses, hurting the perceived quality of recommendations.',
        solution:
          'A cross-encoder reranking layer reorders candidates for sharper relevance, with a fail-safe fallback to the original ranking so a reranker error never breaks a response.',
      },
      {
        challenge:
          'LLM synthesis on every request adds latency and cost, even when the answer is obvious from the images.',
        solution:
          'High-confidence visual matches are returned directly — skipping the synthesis LLM — and an intent router sends greetings, vague asks, and policy questions down the cheapest appropriate path.',
      },
      {
        challenge:
          'Shoppers ask in different languages (e.g. Arabic), but the catalog and retrieval quality are strongest in English.',
        solution:
          'Non-English queries are translated into rich English product descriptions for retrieval, while replies are returned in the customer\'s original language.',
      },
      {
        challenge:
          'A single LLM provider means rate limits, outages, and no flexibility to tune cost vs. quality per stage.',
        solution:
          'A multi-provider layer lets routing, synthesis, and the agent each use Gemini, Claude, or a Fashion LLM independently, with round-robin Gemini key rotation on rate limits.',
      },
    ],
    impact: {
      summary:
        'Seluze turns product discovery into a guided, conversational experience that converts the way a great in-store sales associate does — understanding intent from words or images, refining across a conversation, and answering policy and sizing questions in the shopper\'s own language. Its API-first, multi-store design lets a single deployment serve many catalogs, while the operator dashboard and full interaction-log audit trail give teams the observability to continuously improve relevance, latency, and cost.',
      metrics: [
        { value: '4', label: 'Search modes: text, visual, hybrid & similar' },
        { value: '3', label: 'Pluggable LLM providers per stage' },
        { value: 'Multi-store', label: 'Per-store Qdrant catalogs & policies' },
        { value: 'Real-time', label: 'SSE streaming of agent reasoning' },
      ],
    },
  },
  {
    slug: 'invoice-processing-pipeline',
    title: 'Invoice Processing Pipeline',
    category: 'AI / Computer Vision',
    tagline:
      'A comprehensive AI-powered system that turns scanned and mobile-captured Arabic invoices into clean, structured business data.',
    icon: FileText,
    technologies: [
      'PyTorch',
      'Surya OCR',
      'BiLSTM',
      'CNN',
      'Graph Neural Networks',
      'Google Gemini 1.5 Flash',
      'OpenCV',
      'Gradio',
      'Arabic NLP',
    ],
    codeLink:
      'https://github.com/souzanahamza/information-extraction-from-arabic-invoice',
    liveLink: 'https://youtu.be/HmUvnCJaaaY',
    overview: {
      problem:
        'Finance teams spend countless hours manually keying invoice data, and the work is slow and error-prone — especially for Arabic invoices, where right-to-left text, inconsistent layouts, and a mix of high-quality scans and casual phone photos break most off-the-shelf OCR tools.',
      summary:
        'This system automates invoice understanding end to end using multiple deep-learning models working together. It accepts both scanned documents and mobile phone images, classifies each input, applies the right processing pipeline, extracts structured fields, and exports clean JSON and CSV — all through an interactive web interface built for real-time use.',
      highlights: [
        'Handles both high-quality scans and mobile phone captures',
        'Purpose-built for Arabic invoices with full RTL text support',
        'Extracts 14 distinct structured fields per invoice',
        'Real-time interactive interface with JSON & CSV export',
      ],
    },
    architecture: {
      description:
        'Incoming images are first routed by a CNN classifier into one of two specialized pipelines. Mobile captures pass through a full image-preprocessing stage and are interpreted by Google Gemini, while clean scans go straight to OCR, a BiLSTM extractor, and a GNN-based structure analysis. The two paths converge into a shared aggregation and export layer.',
      diagram: `Input Images
    ↓
Image Classification (CNN)
    ↓
┌─────────────────┬─────────────────┐
│   Mobile Images │ Scanned Images  │
│        ↓        │        ↓        │
│  Preprocessing  │   Direct OCR    │
│        ↓        │        ↓        │
│   Gemini API    │  LSTM Model     │
└─────────────────┴─────────────────┘
    ↓
Data Aggregation & Export`,
      components: [
        {
          name: 'CNN Image Classifier',
          detail:
            'Distinguishes scanned documents from mobile-captured images to route each input to the optimal pipeline.',
        },
        {
          name: 'Surya OCR',
          detail:
            'Advanced OCR engine for accurate text extraction, paired with arabic_reshaper and python-bidi for correct RTL rendering.',
        },
        {
          name: 'BiLSTM Extractor',
          detail:
            'Bidirectional LSTM that classifies tokens into 14 structured field types such as supplier, customer, invoice ID, and line items.',
        },
        {
          name: 'Graph Neural Network',
          detail:
            'Models and visualizes document structure to better understand spatial relationships between fields.',
        },
        {
          name: 'Google Gemini 1.5 Flash',
          detail:
            'Performs intelligent, context-aware analysis of harder mobile captures where rigid pipelines fall short.',
        },
        {
          name: 'Gradio Interface',
          detail:
            'Interactive web UI for multi-file upload, live processing status, and one-click JSON/CSV export.',
        },
      ],
    },
    challenges: [
      {
        challenge:
          'Inputs arrive in wildly different quality — crisp scans alongside skewed, noisy phone photos — and no single pipeline handles both well.',
        solution:
          'A CNN classifier inspects every image up front and routes it to a dedicated pipeline, so each input is processed by the approach best suited to its quality.',
      },
      {
        challenge:
          'Mobile photos suffer from perspective distortion, uneven lighting, and background clutter that wreck OCR accuracy.',
        solution:
          'A full OpenCV preprocessing pipeline (grayscale, Gaussian blur, morphology, Canny edge detection, contour analysis, and perspective correction) flattens and cleans the receipt before extraction.',
      },
      {
        challenge:
          'Arabic text is right-to-left with connected glyphs, which most OCR and NLP tooling renders or tokenizes incorrectly.',
        solution:
          'Surya OCR combined with arabic_reshaper and python-bidi preserves correct character shaping and RTL ordering throughout the pipeline.',
      },
      {
        challenge:
          'Raw extracted text is unstructured — turning it into usable business records requires identifying each field type.',
        solution:
          'A bidirectional LSTM classifies every token into one of 14 field classes (supplier, customer, invoice ID, dates, totals, and per-item attributes) to assemble structured records.',
      },
      {
        challenge:
          'Complex or unusual layouts confuse rigid extraction logic and break the structured output.',
        solution:
          'Graph Neural Networks visualize document structure while Google Gemini 1.5 Flash provides flexible, context-aware reasoning as an intelligent fallback.',
      },
      {
        challenge:
          'Extracted data needs to flow into finance tools without encoding or formatting headaches.',
        solution:
          'Results export to structured JSON per invoice and consolidated CSV reports encoded as UTF-8 with BOM for clean Excel compatibility.',
      },
    ],
    impact: {
      summary:
        'By automating extraction across mixed-quality, Arabic-language invoices, the pipeline removes the manual data-entry bottleneck in finance operations. It cuts processing time, reduces costly human errors, and produces audit-ready structured data that flows directly into downstream accounting and analytics workflows.',
      metrics: [
        { value: '14', label: 'Structured fields extracted per invoice' },
        { value: '2-in-1', label: 'Scanned & mobile inputs in one system' },
        { value: 'Real-time', label: 'Interactive processing & export' },
        { value: 'JSON + CSV', label: 'Finance-ready export formats' },
      ],
    },
  },
];

export const getProjectBySlug = (slug?: string): ProjectCaseStudy | undefined =>
  projectCaseStudies.find((project) => project.slug === slug);

// Icons re-exported for any project section that wants to stay in sync.
export const projectIcons = {
  FileText,
  ShoppingBag,
  Printer,
  TrendingUp,
  BarChart3,
  Type,
  Database,
};
