export type ProjectLink = { label: string; href: string };
export type CaseStudy = {
  problem: string;
  architecture: string[];
  highlights: string[];
  lessons: string[];
  next: string;
  results?: { headers: string[]; rows: string[][]; note?: string };
};
export type Project = {
  year: string;
  slug: string;
  title: string;
  description: string;
  stack: string;
  image?: string;
  links: ProjectLink[];
  caseStudy?: CaseStudy;
};

export const links = [
  { label: "GitHub", href: "https://github.com/YashKhairnar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yashkhairnar11/" },
  { label: "Writing", href: "/blog" },
  { label: "Email", href: "mailto:yashkvk7@gmail.com" },
];

export const headerLinks = links.filter(({ label }) =>
  ["GitHub", "LinkedIn", "Email"].includes(label)
);

export const researchInterests = [
  "World Models",
  "Core ML/DL, Computer Vision, LLMs, RL and Multimodal systems",
  "Agentic AI Systems"
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
    logo: "/brands/sjsu.svg",
    logoAlt: "San Jose State University",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.E. Computer Engineering",
    location: "Pune, India",
    detail: "Undergraduate foundation in computer engineering, algorithms, databases, systems, and applied machine learning.",
    logo: "/brands/sppu.png",
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

export const projects: Project[] = [
  {
    year: "2026",
    slug: "vlm-zoom-agent",
    title: "VLM Zoom Agent",
    description:
      "On-device \"thinking with images\": Qwen2.5-VL-7B calls a zoom tool to inspect tiny details in high-res photos. Evaluated on all 191 V*Bench questions on an M4 Pro with MLX.",
    stack: "Qwen2.5-VL-7B, MLX, mlx-vlm, V*Bench, Python",
    image: "/vlm-zoom-agent.png",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/vlm-zoom-agent" },
    ],
    caseStudy: {
      problem:
        "Vision-language models downsample high-resolution images to a fixed token budget, so small details such as a distant person or a sign get lost. The question was whether a training-free agent that zooms into the original image can recover them, running entirely on a laptop.",
      architecture: [
        "The full image is downsampled to about 1024 visual tokens and shown with the question.",
        "Qwen2.5-VL replies with either ZOOM {bbox_2d: [x1, y1, x2, y2]} or ANSWER: <letter>, reusing its native grounding format so no fine-tuning is needed.",
        "The box is mapped back to original-resolution pixels, padded by 15%, cropped from the original image, and resized to the same ~1024-token budget.",
        "The crop is appended to the conversation as a new image, with earlier images kept in context, for up to N zooms.",
        "A robust parser handles code fences, extra JSON fields and mixed outputs; every step, box and token count is logged per question.",
      ],
      results: {
        headers: ["Condition", "Accuracy", "Attribute", "Spatial", "Latency"],
        rows: [
          ["Full image only", "68.6%", "67.8%", "69.7%", "3.8 s"],
          ["Zoom agent, max 1", "69.6%", "67.8%", "72.4%", "10.9 s"],
          ["Zoom agent, max 3", "70.7%", "70.4%", "71.1%", "11.1 s"],
          ["Fixed 2×2 grid + full image", "76.4%", "81.7%", "68.4%", "20.9 s"],
        ],
        note: "Qwen2.5-VL-7B-Instruct 4-bit, greedy decoding, all 191 V*Bench questions on an Apple M4 Pro (24 GB).",
      },
      highlights: [
        "When the agent's crop contains the target, attribute questions are answered correctly 90.5% of the time; when it misses, accuracy falls to 46.2%.",
        "Measured target coverage using V*Bench's annotated boxes, which showed that only 43.5% of final crops contained every target.",
        "Ran paired sign tests against the baseline: the 2×2 grid's +15 net gain is significant (p = 0.008); the agent's +4 is not (p = 0.45).",
      ],
      lessons: [
        "Localization, not perception, is the bottleneck: the model sees well once it looks in the right place.",
        "Crops are very tight (median 0.25% of the image), so a small grounding error drops the target out of view.",
        "The model almost never re-zooms (188 of 191 trajectories used exactly one zoom), so it cannot recover from a bad first crop.",
      ],
      next:
        "Train a better zoom policy with RL or SFT using a \"crop contains target\" reward, add a minimum crop size or wider margin, and try a hybrid that uses grid views to choose where to zoom.",
    },
  },
  {
    year: "2026",
    slug: "echo",
    title: "Echo",
    description:
      "Communication-efficient world models for connected driving: a self-driving car learns when to ask other cars for information, and whom to ask, when every question has a cost.",
    stack: "PyTorch, HighwayEnv, world models, model-based planning, DQN",
    image: "/echo.png",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/Echo" },
      { label: "timeline", href: "https://yashkhairnar.github.io/Echo/timeline.html" },
    ],
    caseStudy: {
      problem:
        "The ego car's lane is blocked, so it must merge into a line of traffic where each car is secretly yielding or aggressive. They look identical until you try to merge, so the only way to know in advance is to ask. Asking costs bandwidth, so the car should only ask when the answer would change how it drives.",
      architecture: [
        "MLPx, a world model, predicts the next state from the car's observations plus any received messages, including whether a crash happens within 3 steps.",
        "A planner rolls out candidate action sequences inside MLPx and executes the first action of the best plan.",
        "A request policy decides each step whether to ask one nearby car or nobody, trained with a DQN on driving reward minus communication cost.",
        "A value-of-information rule asks a car only when the planner, imagining both possible answers, would drive differently than without asking.",
      ],
      results: {
        headers: ["Policy", "Score", "Crashes", "Questions / ep"],
        rows: [
          ["Ask nobody", "5.79", "18%", "0"],
          ["Ask everyone", "2.03", "0%", "152"],
          ["Rear-car rule (hand-written)", "8.47", "0%", "6.7"],
          ["Request DQN (mean of 3 runs)", "7.09", "3%", "18.2"],
          ["Value-of-information rule", "8.52", "4%", "9.5"],
        ],
        note: "200 unseen episodes, cost 0.05 per question.",
      },
      highlights: [
        "The value-of-information rule needs no training, matches or beats the hand-written rule at every question cost tested (0 to 0.5), and asks less as questions get more expensive.",
        "Showed the world model learns to use messages: knowing whether a car yields cuts crashes from 18% (ask nobody) to near zero.",
        "Built the full stack: custom merge scenario, vehicle behaviours and messaging on HighwayEnv, world-model training, planner and evaluation scripts.",
      ],
      lessons: [
        "Communication only helps when the hidden information actually changes the best action; early highway experiments showed asking never helped there.",
        "Planning with a learned world model gives a principled value for information without learning a separate policy.",
        "The learned request DQN learned to ask, but far too often, because the reward signal for a single question is noisy.",
      ],
      next:
        "Use the value-of-information rule as a teacher and distil it into the DQN, investigate the remaining 2–4% crashes, and extend the idea to a 4-lane highway with normal traffic.",
    },
  },
  {
    year: "2026",
    slug: "leap",
    title: "LEAP",
    description:
      "AI tutor that teaches ML tasks through Java connections or everyday examples, collecting learner histories to train a learner-state world model for adaptive teaching.",
    stack: "Next.js, FastAPI, PyTorch, Docker, world models",
    links: [
      { label: "site", href: "https://leap-nine-mu.vercel.app" },
      { label: "code", href: "https://github.com/YashKhairnar/LEAP" },
    ],
  },
  {
    year: "2026",
    slug: "open-paper-lab",
    title: "Open Paper Lab",
    description:
      "From-scratch implementations of research papers: Transformers, LoRA, SimCLR, neural machine translation, RNNs/LSTMs, and more.",
    stack: "PyTorch, Jupyter",
    links: [
      { label: "code", href: "https://github.com/YashKhairnar/open-paper-lab" },
    ],
  },
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
    role: "Graduate Student Researcher",
    org: 'San Jose State University',
    dates: 'August 2026 - Present',
    logo: '/brands/sjsu.svg',
    points: [
      'Working on a JEPA-inspired, action-conditioned learner world model that predicts student knowledge-state transitions from programming trajectories and supports adaptive instructional planning.'
    ],
  },
  {
    role: "Graduate Mentor | AI4ALL",
    org: "Stanford University",
    dates: "June 2026 - July 2026",
    logo: "/brands/stanford.avif",
    points: [
      "Mentored 30+ students in AI/ML concepts, Python programming, and project development through hands-on workshops and technical mentorship.",
      "Guided student teams in designing and implementing end-to-end machine learning projects across Computer Vision, NLP, and Robotics domains.",
      "Collaborated with Stanford faculty and co-mentors to deliver AI curriculum, support project execution, and cultivate an inclusive learning environment.",
    ],
  },
  {
    role: "AI/ML Engineer",
    org: "Accurate Industrial Controls Pvt. Ltd.",
    dates: "July 2024 - June 2025",
    logo: "/brands/accurate.jpeg",
    points: [
      "Engineered an end-to-end predictive maintenance system for industrial generators using anomaly detection and RUL prediction models, achieving 93% accuracy across 500+ hours of telemetry data.",
      "Built an Automatic Number Plate Recognition pipeline using YOLOv11 and PaddleOCR with image preprocessing modules, improving plate detection and text extraction to 97% accuracy.",
      "Designed a ROS-based inspection pipeline integrating YOLO, EasyOCR, and NVIDIA Triton Server, eliminating manual intervention in LPG cylinder inspection with 93% detection accuracy.",
      "Deployed optimized ML pipelines with ONNX and Triton, reducing inference latency by 40% and increasing throughput for real-time systems.",
    ],
  },
  {
    role: "AI Intern",
    org: "Accurate Industrial Controls Pvt. Ltd.",
    dates: "August 2023 - November 2023",
    logo: "/brands/accurate.jpeg",
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
    logo: "/brands/resoluteAI.png",
    points: [
      "Developed a facial recognition attendance system using MTCNN for detection and a custom ANN classifier for embeddings, achieving 90% accuracy with less than 2% FPR.",
      "Engineered a PDF resume parser using PyPDF2 and regex to extract structured data into JSON, automating 70% of manual data entry.",
    ],
  },
];
