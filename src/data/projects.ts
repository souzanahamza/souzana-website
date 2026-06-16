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
  {
    slug: 'arabic-spelling-correction',
    title: 'Arabic Spelling Correction',
    category: 'NLP',
    tagline:
      'A hybrid Arabic text-correction system that fixes both spelling and grammatical errors by pairing fine-tuned deep-learning models with a classic edit-distance algorithm.',
    icon: Type,
    technologies: [
      'Python',
      'AraBART',
      'Seq2Seq',
      'LSTM',
      'Levenshtein Distance',
      'Hugging Face',
      'PyTorch',
      'Arabic NLP',
    ],
    codeLink: 'https://github.com/souzana-hamza/Arabic-Spelling-Correction',
    overview: {
      problem:
        'Arabic is morphologically rich and syntactically complex, which makes automatic spelling and grammar correction genuinely hard. A single word can take many valid forms, and uncorrected errors quietly degrade everything downstream — search, readability, and any NLP pipeline that consumes the text. No single technique handles spelling, grammar, and fluency well at once.',
      summary:
        'This project improves Arabic text quality by combining three complementary approaches, each targeting a different class of error: a fine-tuned AraBART Seq2Seq model for grammatical correction, an LSTM next-word predictor for coherence and flow, and the Levenshtein distance algorithm for word-level spelling fixes. Together they cover errors that any one method alone would miss.',
      highlights: [
        'Three complementary models, each specialized for a different error type',
        'Fine-tuned AraBART for complex grammatical correction',
        'LSTM next-word prediction for smoother, more coherent text',
        'Levenshtein distance for precise word-level spelling fixes',
        'Trained and evaluated on three purpose-built Arabic datasets',
      ],
    },
    architecture: {
      description:
        'Rather than forcing one model to do everything, the system splits correction into specialized stages. Word-level spelling errors are resolved with the Levenshtein distance algorithm over the morphological forms in the Jamid dataset; grammatical errors are corrected by an AraBART Seq2Seq model fine-tuned on the Copy-GEC Arabic dataset (tokenized via Hugging Face); and overall fluency is improved by an LSTM trained on cleaned Arabic newspaper text to predict the next word. AraBART was evaluated with ROUGE and proved the strongest at complex sentence-level grammar.',
      diagram: `Arabic Input Text
        ↓
┌──────────────────┬──────────────────┬──────────────────┐
│ Spelling Errors  │ Grammatical Err. │ Flow / Coherence │
│        ↓         │        ↓         │        ↓         │
│   Levenshtein    │  AraBART (S2S)   │  LSTM Next-Word  │
│  (Jamid forms)   │  (Copy-GEC FT)   │ (Newspaper data) │
└──────────────────┴──────────────────┴──────────────────┘
        ↓
 Corrected, Higher-Quality Arabic Text`,
      components: [
        {
          name: 'AraBART (Fine-Tuned Seq2Seq)',
          detail:
            'A pre-trained Arabic sequence-to-sequence model fine-tuned on the Copy-GEC dataset for grammatical error correction, evaluated with the ROUGE metric and strongest on complex sentence structures.',
        },
        {
          name: 'LSTM Next-Word Predictor',
          detail:
            'A recurrent network trained on cleaned Arabic newspaper text (Al-Sabah, Hespress, Akhbaruna) that predicts the next word to improve coherence and flow.',
        },
        {
          name: 'Levenshtein Distance',
          detail:
            'A classic edit-distance algorithm that corrects word-level spelling by finding the minimum insertions, deletions, and substitutions against valid morphological forms.',
        },
        {
          name: 'Copy-GEC Arabic Dataset',
          detail:
            'Paired uncorrected/corrected Arabic sentences for grammatical error correction, preprocessed and tokenized with the Hugging Face library to fine-tune AraBART.',
        },
        {
          name: 'Arabic Newspaper Corpus',
          detail:
            'Real-world Arabic text cleaned and formatted to train the LSTM language model for next-word prediction.',
        },
        {
          name: 'Jamid Morphological Dataset',
          detail:
            'A collection of different morphological forms of Arabic words used as the reference vocabulary for Levenshtein-based spelling correction.',
        },
      ],
    },
    challenges: [
      {
        challenge:
          'Arabic\'s rich morphology means a single word has many valid forms, so naive spell-checkers flag correct words or miss real errors.',
        solution:
          'Levenshtein distance is computed against the Jamid dataset of morphological forms, correcting spelling at the word level even for complex variations.',
      },
      {
        challenge:
          'Grammatical errors span whole sentences and depend on context that word-level methods cannot capture.',
        solution:
          'AraBART, a pre-trained Arabic Seq2Seq model, is fine-tuned on the Copy-GEC dataset to rewrite sentences correctly — and proved most effective on complex structures.',
      },
      {
        challenge:
          'Even spelling- and grammar-correct text can read awkwardly, hurting overall quality and coherence.',
        solution:
          'An LSTM trained on Arabic newspaper text predicts likely next words, helping smooth the flow and coherence of the corrected output.',
      },
      {
        challenge:
          'Raw training data (especially scraped newspaper text) is noisy and inconsistently formatted.',
        solution:
          'A preprocessing stage cleans and normalizes the corpora, and Hugging Face tokenization converts Copy-GEC text into model-ready numerical representations.',
      },
      {
        challenge:
          'No single technique handles spelling, grammar, and fluency equally well.',
        solution:
          'The project deliberately combines modern deep learning (AraBART, LSTM) with a traditional algorithm (Levenshtein), letting each handle the error type it is best suited for.',
      },
      {
        challenge:
          'Model quality has to be measured objectively to justify the chosen approach.',
        solution:
          'AraBART was evaluated with ROUGE and the models compared on F1, precision, and recall, confirming AraBART as the top performer for grammatical correction.',
      },
    ],
    impact: {
      summary:
        'By correcting spelling, grammar, and fluency in one hybrid system, the project meaningfully raises the quality of Arabic text — enabling cleaner downstream NLP pipelines, automated proofreading, and a better reading experience. The combination of fine-tuned models and a classic algorithm shows a pragmatic path to handling a language whose morphological complexity defeats single-method solutions.',
      metrics: [
        { value: '3', label: 'Complementary correction models' },
        { value: '3', label: 'Purpose-built Arabic datasets' },
        { value: 'Word + Sentence', label: 'Correction at every level' },
        { value: 'ROUGE / F1', label: 'Objectively evaluated quality' },
      ],
    },
  },
  {
    slug: 'financial-analysis-bankruptcy-prediction',
    title: 'Comprehensive Financial Analysis & Bankruptcy Risk Prediction',
    category: 'AI/Finance',
    tagline:
      'A unified decision-support tool that reads a company\'s 10-Q filing and predicts bankruptcy risk by blending expert financial scoring, machine learning, and sentiment analysis.',
    icon: TrendingUp,
    technologies: [
      'Python',
      'Machine Learning',
      'Knowledge-Based System',
      'FinBERT',
      'NLP',
      'scikit-learn',
      'experta',
      'Gradio',
      'ReportLab',
    ],
    codeLink:
      'https://github.com/souzana-hamza/Comprehensive-Financial-Analysis-and-Bankruptcy-Risk-Prediction',
    overview: {
      problem:
        'Assessing a company\'s financial health and bankruptcy risk is slow, manual, and inconsistent. Analysts must wade through dense 10-Q filings, extract the right figures, compute ratios by hand, apply competing scoring models, and form a judgment about the tone of the disclosures — and different analysts often reach different conclusions.',
      summary:
        'This project unifies Knowledge-Based Systems, Machine Learning, and NLP into a single decision-support tool. It extracts financial data straight from 10-Q PDF filings, computes profitability, solvency, and liquidity ratios, applies established bankruptcy-scoring models, predicts risk with a trained ML model, and analyzes the sentiment of the report text — then presents everything in an interactive dashboard and an exportable PDF report.',
      highlights: [
        'Reads financial figures directly from 10-Q PDF filings',
        'Expert scoring: Beneish M-Score, Piotroski F-Score, Springate model',
        'ML bankruptcy prediction benchmarked across multiple models',
        'Financial-domain sentiment via Loughran-McDonald & FinBERT',
        'Interactive Gradio dashboard plus a full exported PDF report',
      ],
    },
    architecture: {
      description:
        'A 10-Q PDF is parsed with PyPDF2 and regex-based text cleaning to capture key metrics (net income, assets, equity, debt, and more). Those figures feed three parallel analysis tracks: a rule-based Knowledge-Based System (built with experta) that encodes financial theory into scores, a scikit-learn ML model that predicts bankruptcy status, and an NLP track that scores the tone of the disclosures. Results converge in a Gradio dashboard and a ReportLab-generated PDF report with charts and interpretations.',
      diagram: `10-Q PDF Filing
        ↓
PDF Extraction (PyPDF2 + regex)
        ↓
┌─────────────────┬─────────────────┬─────────────────┐
│  Ratios + KBS   │  Bankruptcy ML  │  Sentiment NLP  │
│ (M / F /        │  Prediction     │ (Loughran-      │
│  Springate)     │ (scikit-learn)  │  McDonald +     │
│                 │                 │  FinBERT)       │
└─────────────────┴─────────────────┴─────────────────┘
        ↓
 Gradio Dashboard  +  Exported PDF Report`,
      components: [
        {
          name: 'PDF Data Extraction',
          detail:
            'PyPDF2 with text cleaning and regex matching pulls structured financial figures (net income, assets, equity, debt) out of unstructured 10-Q filings.',
        },
        {
          name: 'Knowledge-Based System (experta)',
          detail:
            'Encodes financial theory into rule-based scores: Beneish M-Score for earnings manipulation, Piotroski F-Score for financial health, and the Springate model for bankruptcy prediction.',
        },
        {
          name: 'Financial Ratio Engine',
          detail:
            'Computes profitability (ROA, ROE, margins), solvency (debt-to-equity, equity ratio), and liquidity (current, quick, cash ratios) with charts and explanations.',
        },
        {
          name: 'Machine Learning Predictor',
          detail:
            'A scikit-learn model — selected via benchmarking and saved as best_model.pkl — predicts whether a company is "Good" or "Bankrupt".',
        },
        {
          name: 'Sentiment Analysis (NLP)',
          detail:
            'Scores the tone of report text using the finance-specific Loughran-McDonald dictionary and the FinBERT transformer for domain-aware sentiment.',
        },
        {
          name: 'Gradio UI & PDF Reports',
          detail:
            'An interactive dashboard visualizes every result, and ReportLab exports a comprehensive PDF report with charts, tables, and interpretations.',
        },
      ],
    },
    challenges: [
      {
        challenge:
          '10-Q filings are long, unstructured PDFs where the same figure can appear in many formats and locations.',
        solution:
          'A PyPDF2 extraction stage with text cleaning and regex matching reliably captures the key financial metrics needed for downstream analysis.',
      },
      {
        challenge:
          'Established financial theory (manipulation, health, bankruptcy) lives in formulas and expert heuristics, not in code.',
        solution:
          'A Knowledge-Based System built with experta encodes the Beneish M-Score, Piotroski F-Score, and Springate model into transparent, rule-based scoring.',
      },
      {
        challenge:
          'Rule-based scores alone can miss patterns that emerge from historical data across many companies.',
        solution:
          'Multiple ML models are trained and benchmarked (model_comparison_results.csv), and the best performer is saved and used to predict bankruptcy status.',
      },
      {
        challenge:
          'Numbers don\'t tell the whole story — the tone of management\'s disclosures carries real signal.',
        solution:
          'An NLP track combines the finance-tuned Loughran-McDonald dictionary with FinBERT to score sentiment in a domain-aware way.',
      },
      {
        challenge:
          'A black-box risk verdict is hard for analysts to trust or act on.',
        solution:
          'Interactive Gradio dashboards pair every result with charts and plain-language explanations, and a ReportLab PDF report documents the full analysis.',
      },
      {
        challenge:
          'Three very different techniques (rules, ML, NLP) have to work together coherently.',
        solution:
          'A unified workflow chains PDF extraction → ratios & KBS → ML prediction → sentiment → visualization & export, so the signals reinforce one decision.',
      },
    ],
    impact: {
      summary:
        'The tool turns hours of manual financial review into a fast, repeatable analysis that standardizes how bankruptcy risk is assessed. By combining transparent expert scores, data-driven ML prediction, and domain-aware sentiment — all explained in dashboards and a polished PDF report — it helps analysts prioritize reviews, justify conclusions, and improve transparency in credit and investment decisions.',
      metrics: [
        { value: '3', label: 'Expert scoring models (M / F / Springate)' },
        { value: '3', label: 'Analysis lenses: KBS, ML & NLP' },
        { value: '10-Q', label: 'Filings parsed end-to-end' },
        { value: 'PDF', label: 'Auto-generated analysis reports' },
      ],
    },
  },
  {
    slug: 'nyc-311-service-requests',
    title: 'NYC 311 Service Requests Analysis & Modeling',
    category: 'AI/Public',
    tagline:
      'An end-to-end data science project that cleans, explores, and models millions of NYC 311 service requests to predict how long each one will take to resolve.',
    icon: Database,
    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Prophet',
      'statsmodels',
      'Seaborn',
    ],
    codeLink: 'https://github.com/souzana-hamza/NYC-311-Service-Requests',
    overview: {
      problem:
        'New York City\'s 311 system handles a massive volume of service requests, but residents and agencies have little visibility into how long a given request will take to resolve. Without reliable wait-time estimates, it is hard to set expectations, allocate resources, or spot the boroughs, complaint types, and times of day that drive delays.',
      summary:
        'This project builds an end-to-end pipeline over the NYC 311 dataset to predict resolution wait time (in days). It cleans and filters the raw records, engineers rich temporal, spatial, and interaction features, explores the data visually, and benchmarks a full ladder of models — from a dummy baseline up to tuned gradient boosting and a stacking ensemble — alongside time-series forecasting of daily complaint volume.',
      highlights: [
        'Predicts request resolution wait time in days',
        'Rich feature engineering: temporal, spatial (geo-clusters), and interaction features',
        'Model ladder from baselines to tuned XGBoost, LightGBM & stacking',
        'Best test RMSE ≈ 0.1466 with a stacking regressor',
        'Time-series forecasting of complaint volume with Prophet & ETS',
      ],
    },
    architecture: {
      description:
        'The workflow moves from raw data to predictions in clear stages. Records are loaded and cleaned, then the target (days between created and closed dates) is derived. A feature-engineering stage adds temporal, spatial, and interaction signals, EDA surfaces patterns by borough/type/time, and a benchmarking stage trains progressively stronger regressors. Tuned XGBoost and LightGBM are combined in a stacking ensemble, while Prophet and ETS forecast daily complaint volume.',
      diagram: `Raw NYC 311 Data
        ↓
Cleaning & Target (waittime = closed - created)
        ↓
Feature Engineering (temporal · spatial · interaction)
        ↓
Exploratory Data Analysis
        ↓
┌─────────────────────────┬─────────────────────────┐
│   Wait-Time Regression  │   Volume Forecasting    │
│  Baseline → Trees →     │   Prophet · ETS         │
│  XGBoost / LightGBM →   │                         │
│  Stacking (RidgeCV)     │                         │
└─────────────────────────┴─────────────────────────┘
        ↓
 RMSE Evaluation & Insights`,
      components: [
        {
          name: 'Data Cleaning & Targeting',
          detail:
            'Loads the raw dataset, handles missing values, renames columns, filters invalid records, and derives the target waittime as the days between created_date and closed_date.',
        },
        {
          name: 'Feature Engineering',
          detail:
            'Temporal features (hour, day, month, quarter, rush-hour, weekend, night), spatial features (lat/long binning + KMeans geo-clusters), interaction features (borough × complaint type), and cyclical sin/cos encodings.',
        },
        {
          name: 'Exploratory Data Analysis',
          detail:
            'Complaint distributions by borough, type, and location; wait-time trends over time; correlation heatmaps, boxplots, geographic density plots, and borough-level clustering.',
        },
        {
          name: 'Model Ladder',
          detail:
            'Benchmarks a Dummy baseline, Linear Regression (log target), Decision Tree, and Random Forest against boosting models XGBoost, LightGBM, and CatBoost.',
        },
        {
          name: 'Tuning & Stacking',
          detail:
            'Hyperparameter tuning for XGBoost and LightGBM, then a stacking regressor that combines them with a RidgeCV meta-learner for the lowest RMSE.',
        },
        {
          name: 'Time-Series Forecasting',
          detail:
            'Daily complaint aggregation and smoothing forecast future volume using Prophet and Exponential Smoothing (ETS), evaluated with RMSE.',
        },
      ],
    },
    challenges: [
      {
        challenge:
          'The raw 311 dataset is large and messy, with missing values, inconsistent columns, and invalid records.',
        solution:
          'A dedicated cleaning stage handles missing data, renames and filters fields, and derives a reliable waittime target from the created and closed timestamps.',
      },
      {
        challenge:
          'Raw request fields carry little predictive signal about how long resolution will take.',
        solution:
          'Extensive feature engineering adds temporal, spatial (KMeans geo-clusters), and interaction features, plus cyclical encodings so the models can learn time-of-day and seasonal patterns.',
      },
      {
        challenge:
          'Wait times are highly skewed, so naive regression is dominated by long-tail outliers.',
        solution:
          'A log transform on the target and a progression from simple baselines to robust gradient-boosting models keep error low and comparable across approaches.',
      },
      {
        challenge:
          'It is unclear up front which model family best fits this noisy, high-volume tabular data.',
        solution:
          'A full model ladder is benchmarked on RMSE; tuned XGBoost (≈0.1467) and LightGBM (≈0.1468) lead, and a RidgeCV stacking ensemble edges ahead at ≈0.1466.',
      },
      {
        challenge:
          'Predicting per-request time doesn\'t tell agencies how overall demand will evolve.',
        solution:
          'A separate time-series track aggregates daily complaints and forecasts future volume with Prophet and ETS, capturing seasonality and trend.',
      },
      {
        challenge:
          'Insights need to be interpretable for non-technical city stakeholders.',
        solution:
          'Rich EDA — distributions, heatmaps, time-series, and geographic density plots — turns the modeling into clear, borough- and time-level operational insights.',
      },
    ],
    impact: {
      summary:
        'By accurately estimating how long service requests take to resolve and forecasting future demand, the project gives city agencies a data-driven basis to set resident expectations, allocate resources, and target the boroughs, complaint types, and times of day that drive delays — improving both transparency and the efficiency of public services.',
      metrics: [
        { value: '≈0.1466', label: 'Best test RMSE (stacking ensemble)' },
        { value: '8+', label: 'Models benchmarked end-to-end' },
        { value: '3', label: 'Feature families: temporal, spatial, interaction' },
        { value: 'Prophet + ETS', label: 'Demand forecasting models' },
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
