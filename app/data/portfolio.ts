export const links = [
  { label: "GitHub", href: "https://github.com/YashKhairnar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yashkhairnar11/" },
  { label: "Writing", href: "/blog" },
  { label: "CV", href: "/Yash_Khairnar_Resume.pdf" },
  { label: "Email", href: "mailto:yashkvk7@gmail.com" },
];

export const headerLinks = links.filter(({ label }) =>
  ["GitHub", "LinkedIn", "CV", "Email"].includes(label)
);

export const researchInterests = [
  "World Models",
  "Core ML/DL, Computer Vision, LLMs, RL and Multimodal systems",
  "Agentic AI Systems",
  "Retrieval-Augmented Generation",
  "Game Theory"
];

export const coursework = [
  "Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Reinforcement Learning",
  "Distributed Systems",
  "Data Structure & Algorithms",
  "DBMS, OS, Computer Networks",
  "Cloud Computing, Software Engineering",

];

export const education = [
  {
    school: "San Jose State University",
    degree: "M.S. Computer Science",
    location: "San Jose, CA",
    detail: "Graduate study focused on AI/ML systems, distributed systems, and applied software engineering.",
    logo: "/logos/sjsu.svg",
    logoAlt: "San Jose State University",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.E. Computer Engineering",
    location: "Pune, India",
    detail: "Undergraduate foundation in computer engineering, algorithms, databases, systems, and applied machine learning.",
    logo: "/logos/sppu.png",
    logoAlt: "Savitribai Phule Pune University",
  },
];

export const papers = [
  {
    year: "2026",
    title: "Paper Reproductions & Labs",
    detail: "A collection of my implementations and reproductions of various AI/ML research papers.",
    link: "https://github.com/YashKhairnar/papers",
  }
];

export const projects = [
  {
    year: "2026",
    slug: "documentation-assistant",
    title: "Documentation Assistant",
    description:
      "RAG application that indexes technical documentation URLs and answers questions with retrieved context.",
    stack: "Python, FastAPI, LangChain, RAG",
    image: "/chatwindow.png",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/Document-Assistant" },
    ],
    caseStudy: {
      problem:
        "Developer docs are long, versioned, and scattered. The goal was to make a support assistant that can answer with grounded context instead of hallucinating a confident paragraph.",
      architecture: [
        "User submits one or more documentation URLs.",
        "Backend crawls and chunks the pages into retrievable passages.",
        "Embeddings are stored with source metadata for later attribution.",
        "Query flow retrieves relevant chunks before sending the prompt to the model.",
        "Responses are returned with enough source context to debug the answer.",
      ],
      highlights: [
        "Built the indexing and chat loop as a full-stack RAG workflow.",
        "Separated retrieval context from answer generation so failures are easier to inspect.",
        "Focused the interface around technical support instead of general chat.",
      ],
      lessons: [
        "Chunk boundaries often matter more than the model choice.",
        "A useful answer needs provenance, especially when the source is technical documentation.",
        "The first version of a RAG system should make retrieval failures visible.",
      ],
      next:
        "Add evaluation sets for common documentation questions and compare retrieval strategies across chunk sizes, rerankers, and citation quality.",
    },
  },
  {
    year: "2026",
    slug: "nook",
    title: "Nook",
    description:
      "Cafe discovery platform with personalized recommendations, location-aware search, and a mobile/web product surface.",
    stack: "Next.js, React Native, AWS, collaborative filtering",
    image: "/nook.png",
    links: [
      { label: "site", href: "https://nookstudio.online" },
      { label: "code", href: "https://github.com/YashKhairnar" },
    ],
  },
  {
    year: "2025",
    slug: "thinkflow",
    title: "ThinkFlow",
    description:
      "EEG-to-text translation system using VQ-VAE, BART Transformer, and LSTM Seq2Seq with attention.",
    stack: "PyTorch, Hugging Face, Flask, Next.js",
    image: "/ThinkFlow.gif",
    links: [
      { label: "code", href: "https://github.com/yashkhairnar/ThinkFlow" },
    ],
    caseStudy: {
      problem:
        "EEG signals are noisy, sparse, and hard to align with language. The project explored whether learned discrete representations can support a text-generation pipeline.",
      architecture: [
        "Preprocess raw EEG signals into model-ready temporal features.",
        "Train representation models to compress noisy signal patterns.",
        "Use sequence models to map learned representations toward language tokens.",
        "Serve inference through a lightweight Flask and Next.js application.",
      ],
      highlights: [
        "Compared VQ-VAE plus transformer decoding against an LSTM Seq2Seq baseline.",
        "Explored attention mechanisms for a signal-to-language task.",
        "Built a working interface around an experimental research pipeline.",
      ],
      lessons: [
        "Signal preprocessing can dominate downstream model behavior.",
        "Baselines are essential when the task itself is uncertain.",
        "Experimental ML projects need careful language around what the system can and cannot infer.",
      ],
      next:
        "Build stronger evaluation around subject splits, noise robustness, and representation quality before expanding model complexity.",
    },
  },
  {
    year: "2025",
    slug: "sentinel",
    title: "Sentinel",
    description:
      "Serverless email marketing platform with analytics, AI-assisted content generation, and multi-region AWS deployment.",
    stack: "AWS Lambda, S3, API Gateway, DynamoDB, SQS, SNS, SES, Terraform",
    image: "/sentinel.png",
    links: [
      { label: "site", href: "https://dashboard.thesentinel.site" },
      { label: "code", href: "https://github.com/YashKhairnar/sentinel" },
    ],
    caseStudy: {
      problem:
        "Email products need to coordinate content, audiences, event delivery, analytics, and failures. The project focused on serverless primitives rather than a monolithic backend.",
      architecture: [
        "Next.js dashboard manages campaigns and analytics views.",
        "API Gateway routes requests into Lambda functions.",
        "DynamoDB stores campaign and recipient state.",
        "SQS and SNS decouple asynchronous delivery workflows.",
        "SES handles outbound email while analytics events flow back into the dashboard.",
      ],
      highlights: [
        "Designed a multi-service AWS architecture with infrastructure-as-code.",
        "Used queues to isolate slow or failure-prone delivery work.",
        "Added real-time analytics and AI-assisted content generation.",
      ],
      lessons: [
        "Serverless systems still need explicit backpressure and retry thinking.",
        "The hard part is rarely one Lambda function; it is the contract between services.",
        "Operational visibility should be part of the product, not an afterthought.",
      ],
      next:
        "Add deeper observability around delivery failures, campaign-level retry policies, and cost profiling under load.",
    },
  },
  {
    year: "2025",
    slug: "malware-classification",
    title: "Malware Classification",
    description:
      "Classified malware into 12 families using DenseNet121 CNNs on 10K+ samples, reaching 95% accuracy.",
    stack: "PyTorch, DenseNet121, SVM, grid search",
    image: "/malware.png",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/Malware-Classification" },
    ],
  },
  {
    year: "2025",
    slug: "aetherforge",
    title: "AetherForge",
    description:
      "Multi-agent collaborative IDE where humans and AI agents can edit the same codebase with CRDT-backed sync.",
    stack: "CrewAI, Gemini orchestration, Automerge, React",
    image: "/AetherForge.png",
    links: [
      { label: "demo", href: "https://www.loom.com/share/0916e2bfdd9e4918a204b51bcea43627" },
      { label: "code", href: "https://github.com/YashKhairnar/Agies" },
    ],
    caseStudy: {
      problem:
        "Most AI coding interfaces assume one human and one assistant. AetherForge explored what changes when multiple people and specialized agents edit the same workspace together.",
      architecture: [
        "React client exposes a shared coding surface.",
        "Automerge keeps edits conflict-free across collaborators.",
        "Specialized agents operate on focused coding tasks.",
        "Gemini orchestration coordinates agent responsibilities and context.",
        "Human users retain visibility into changes instead of receiving opaque patches.",
      ],
      highlights: [
        "Used CRDTs to make collaboration a first-class system concern.",
        "Separated agent responsibilities instead of using one general assistant.",
        "Built around simultaneous editing, review, and iteration.",
      ],
      lessons: [
        "Agent collaboration is a distributed-systems problem wearing a UX hat.",
        "Conflict-free state matters before polish when edits are concurrent.",
        "Trust improves when users can see how agent changes are produced.",
      ],
      next:
        "Add stronger task provenance, per-agent diff review, and replayable collaboration history.",
    },
  },
];

export const projectArchive = [
  {
    year: "2025",
    title: "Agies",
    description:
      "AI-powered automated bug-fixing agent that analyzes Sentry errors, identifies problematic code, proposes fixes, tests them in a sandbox, and creates draft pull requests.",
    stack: "Agentic AI, LangGraph, Streamlit, Sentry, CodeRabbit, Daytona Sandbox, GitHub API",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/Agies" },
    ],
  },
  {
    year: "2025",
    title: "CuriosityAI",
    description:
      "Agentic research system that identifies innovation gaps using embedding inversion and retrieval-augmented generation, producing invention abstracts, sketches, and proposals.",
    stack: "CalHacks 12.0, agentic AI, voice agent, embedding inversion, RAG",
    links: [
      { label: "demo", href: "https://vimeo.com/1130720129?share=copy&fl=sv&fe=ci" },
      { label: "code", href: "https://github.com/YashKhairnar/curiosityAI" },
    ],
  },
  {
    year: "2025",
    title: "ResuMatch",
    description:
      "RL-based resume optimizer using a two-agent architecture with an editor and judge, plus reward shaping for tailoring resumes to job postings.",
    stack: "Next.js, Tavily, reinforcement learning, LangGraph, Flask",
    links: [
      { label: "demo", href: "https://drive.google.com/file/d/14aywsnvRjfeiIVkjFd6e3aDEQWGt9f9K/view" },
      { label: "code", href: "https://github.com/YashKhairnar/ResuMatch" },
    ],
  },
  {
    year: "2024",
    title: "Slique",
    description:
      "Hiring platform connecting fashion models with brand recruiters through job posting, search, applications, real-time chat, and contract-based hiring.",
    stack: "Next.js, Tailwind CSS, FastAPI, PostgreSQL, AWS RDS",
    links: [
      { label: "site", href: "https://www.slique.vercel.app" },
      { label: "code", href: "https://github.com/YashKhairnar/Slique" },
    ],
  },
  {
    year: "2023",
    title: "Image Colorizer",
    description:
      "Deep learning app for colorizing black-and-white photographs using a GAN-based image translation workflow.",
    stack: "Flask, HTML/CSS, NumPy, OpenCV, GANs, model fine-tuning",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/ImageColorizer" },
    ],
  },
  {
    year: "2023",
    title: "4Bit",
    description:
      "Diagnostic tool for lung cancer analysis using multi-omics data, CT scan images, biomarkers, and genetic mutation signals.",
    stack: "Python, Keras, TensorFlow, multi-omics, biomarkers",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/4BIT" },
    ],
  },
  {
    year: "2023",
    title: "Roomie Radar",
    description:
      "Roommate matching app that uses preference-based compatibility scoring to recommend better roommate fits.",
    stack: "Next.js, machine learning",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/RoomieRadar" },
    ],
  },
];

export const notes = [
  {
    title: "Transformers: The Idea That Changed AI Forever",
    detail:
      "Deep dive into the transformer architecture that revolutionized machine learning, from attention mechanisms to practical implementations.",
    href: "https://yashkhairnar.medium.com/every-time-you-ask-an-ai-a-question-get-a-translation-or-watch-captions-auto-appear-on-a-video-a-f23450787beb",
    image: "https://miro.medium.com/v2/da:true/resize:fill:320:214/0*iSbo3pWXNR59nY2q",
  },
  {
    title: "Neural Machine Translation: The Mathematics of Attention",
    detail:
      "Exploring how the RNNSearch mechanism solved the information bottleneck in sequence-to-sequence models for translation tasks.",
    href: "https://yashkhairnar.medium.com/neural-machine-translation-2026288eed7d",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*MFNxy9jpq521ZBwhOFMdWA.jpeg",
  },
  {
    title: "Performance Analysis: LSTM vs RNN",
    detail:
      "Comparative study using Google Speech Commands dataset. Understanding the trade-offs between architectural choices in recurrent networks.",
    href: "https://yashkhairnar.medium.com/performance-analysis-lstm-vs-rnn-c79fb99214e5",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*-8N-i_R4TBh7gqRYCwCJJA.jpeg",
  },
  {
    title: "Why the Best Neural Network Is the One You Can Compress",
    detail:
      "On model efficiency, pruning strategies, and the importance of optimization for production ML systems and edge deployment.",
    href: "https://yashkhairnar.medium.com/why-the-best-neural-network-is-the-one-you-can-compress-ab6a2260f973",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*fgDckFqhGIp10rwXJuMZCg.jpeg",
  },
];

export const experience = [
  {
    role: "Graduate Mentor | AI4ALL",
    org: "Stanford University",
    dates: "June 2026 - August 2026",
    logo: "/logos/stanford.avif",
    points: [
      "Mentored 20+ students in AI/ML concepts, Python programming, and project development through hands-on workshops and technical mentorship.",
      "Guided student teams in designing and implementing end-to-end machine learning projects across Computer Vision, NLP, and Robotics domains.",
      "Collaborated with Stanford faculty and co-mentors to deliver AI curriculum, support project execution, and cultivate an inclusive learning environment.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Accurate Industrial Controls Pvt. Ltd.",
    dates: "July 2024 - June 2025",
    logo: "/logos/accurate.jpeg",
    points: [
      "Engineered an end-to-end predictive maintenance system for industrial generators using anomaly detection and RUL prediction models, achieving 93% accuracy across 500+ hours of telemetry data.",
      "Built an Automatic Number Plate Recognition pipeline using YOLOv11 and PaddleOCR with image preprocessing modules, improving plate detection and text extraction to 97% accuracy.",
      "Designed a ROS-based inspection pipeline integrating YOLO, EasyOCR, and NVIDIA Triton Server, eliminating manual intervention in LPG cylinder inspection with 93% detection accuracy.",
      "Deployed optimized ML pipelines with ONNX and Triton, reducing inference latency by 40% and increasing throughput for real-time systems.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Accurate Industrial Controls Pvt. Ltd.",
    dates: "August 2023 - November 2023",
    logo: "/logos/accurate.jpeg",
    points: [
      "Built an anomaly detection system for copper coil inspection using PatchCore and YOLO, integrating object tracking and image compression to improve inference efficiency.",
      "Reduced video inference latency to 50 ms using GPU acceleration, multi-threading, frame skips, and pipeline-level optimizations.",
      "Evaluated and implemented classical AI search algorithms including A* and potential fields for autonomous navigation.",
    ],
  },
  {
    role: "Deep Learning Intern",
    org: "ResoluteAI Software",
    dates: "November 2022 - February 2023",
    logo: "/logos/resoluteAI.png",
    points: [
      "Developed a facial recognition attendance system using MTCNN for detection and a custom ANN classifier for embeddings, achieving 90% accuracy with less than 2% FPR.",
      "Engineered a PDF resume parser using PyPDF2 and regex to extract structured data into JSON, automating 70% of manual data entry.",
    ],
  },
];
