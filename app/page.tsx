'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail, ExternalLink, Code, Brain, Zap, Rocket, Cloud, Award, Trophy, Users, Icon } from 'lucide-react';
import BackgroundParticles from './components/background';
import InternshipStatus from './components/notification';
import { SocialIcon } from 'react-social-icons';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async () => {
    setIsFormSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsFormSubmitting(false);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Slique",
      link : "www.slique.vercel.app",
      photo : "Slique.png",
      description: "A platform for connecting Fashion Models to Brand recruiters. Built with features like Job posting, searching, application, real-time chatting, online contract based hiring and much more. ",
      tech: ["Next.js", "TailwindCSS", "FastAPI", "PostgreSQL", "AWS RDS", "Git"]
    },
    {
      title: "Image Colorizer",
      link : "https://github.com/YashKhairnar/ImageColorizer",
      photo : 'Image_Colorizer.jpg',
      description: "Give colors to your black and white photographs using deep learning models",
      tech: [ "Flask", "HTML/CSS", "NumPy", "OpenCv", "GAN", "Model Finetuning"]
    },
    {
      title: "4Bit",
      link : "https://github.com/YashKhairnar/4BIT",
      photo : 'Genetic-code.jpg',
      description: "A tool designed to diagnose Lung cancer with the help of multi-omics data and CT scan images.",
      tech: ["Python", "Keras", "Tensorflow", 'Multi Omics', 'Biomarkers', 'Genetic Mutations']
    },
    {
      title: "Roomie Radar",
      link : "https://github.com/YashKhairnar/RoomieRadar",
      photo : "roomieRadar.jpeg",
      description: "Roommate matching app that uses preference-based compatibility scoring to suggest the best fits.",
      tech: ["Next.js", "Machine Learning"]
    },
  ];

  const skills = [
    { name: "Machine Learning and AI", icon: Brain, tech: "Regression, Classification, Support Vector Machines, Decision Trees, Hidden Markov Models, Random Forest, Ensemble Learning, Dimensionality Reduction, Unsupervised Learning, Deep Learning, Computer Vision, Transformers, Auto-encoders & GANs, Natural Language Processing, RL Algorithms, Time series data analysis" },
    { name: "Libraries & Frameworks", icon: Zap, tech: "TensorFlow, Keras, PyTorch, ROS, Scikit-Learn, NumPy, Pandas, Matplotlib, React, Express, Node.js, Next.js, Flask, spaCy, NLTK, LangChain, Streamlit" },
    { name: "Databases & libraries", icon: Rocket, tech: "MySQL, SQL Alchemy, MongoDB, Mongoose, PostgreSQL, Prisma, Redis, AWS DynamoDB"},
    { name: "Cloud & DevOps", icon: Cloud, tech: "AWS (EC2, RDS, Amplify, API Gateway, Cognito), Cloudflare, Git, Docker, Nginx, Kubernetes" },
    { name: "Programming Languages", icon: Code, tech: "Python, C++, JavaScript, TypeScript, Go, HTML/CSS" },
  ];

  const experiences = [
    {
      company: "Accurate Industrial Controls Pvt. Ltd.",
      position: "Software Engineer",
      duration: "July 2024 - June 2025",
      location: "Pune, India",
      achievements: [
        "Led a team of 6 in developing a remote generator monitoring system with anomaly detection, remaining useful life prediction, and predictive maintenance models, achieving 93% accuracy on 500+ hours of operational data",
        "Built an ANPR application using YOLOv11 and PaddleOCR with preprocessing pipelines, improving plate detection and text extraction to 97% accuracy",
        "Eliminated 100% of manual intervention in LPG cylinder inspection by designing a ROS-based pre-filling pipeline with NVIDIA Triton Server, YOLO for defect detection, and EasyOCR for text extraction, producing 93% model"
      ],
    },
    {
      company: "Accurate Industrial Controls Pvt. Ltd.",
      position: "Artificial Intelligence Intern",
      duration: "Aug 2023 - Nov 2023",
      location: "Pune, India",
      achievements: [
       "Automated an anomaly detection pipeline for copper coils by leveraging PatchCore and YOLO for defect identification and object tracking, with image compression to optimize performance",
       "Engineered a real-time video streaming pipeline (Flask, React, Node.js, Express) with inference latency to 50ms, enabling smooth end-to-end deployment",
       "Researched and evaluated pathfinding and collision avoidance algorithms for an autonomous boat navigation system"
      ],
    },
    {
      company: "ResoluteAI Software",
      position: "Deep Learning Intern",
      duration: "Nov 2022 - Feb 2023",
      location: "Bengaluru, India",
      achievements: [
        "Built scalable computer vision systems including face recognition attendance (95% accuracy) and freezer space estimation (90% + accuracy, +30% efficiency), integrating with real-time pipelines",
        "Engineered OCR and text-processing workflows for resume parsing, improving extraction accuracy by 85% and automating 70% of manual data entry",
        "Developed and deployed YOLO models for industrial automation, achieving 92%+ detection accuracy and streamlining inventory tracking through end-to-end ML pipelines"
      ]
    },
  ];

  const achievements = [
    {
      category: "Awards",
      icon: Trophy,
      items: [
        {
          title: "Best Student Award - International Institute of Information Technology",
          description: "Recognized for both academic and extra-curricular performance throughtout the 4 years of undergraduation",
          date: "March 2024"
        },
      ]
    },
    {
      category: "Leadership",
      icon: Users,
      items: [
        {
          title: "Project Lead",
          description: "Led cross-functional team of 6 engineers in developing industrial ML solutions, managing project timelines and deliverables",
          date: "2024"
        },
        {
          title: "Chairman - CESA ( I2IT )",
          description: "Led diverse technical and social programming to give students broad exposure to technology, leadership, and community engagement.",
          date: "2023-2024"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Minimal Cursor */}
      <div 
        className="fixed w-1 h-1 bg-gray-400 rounded-full pointer-events-none z-50 transition-transform duration-150"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Particle Canvas */}
     <BackgroundParticles />
     
      {/* Minimal Navigation */}
       <nav className="fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 bg-white/60 backdrop-blur-sm border-gray-100 hover:bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 px-2 sm:px-3 py-1"
          >
            Yash <span className="text-sky-900 font-bold">Khairnar</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {section}
                  {/* Active underline accent */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      activeSection === section
                        ? 'w-6 bg-sky-900'
                        : 'w-0 bg-sky-900/0 group-hover:w-6'
                    }`}
                  />
                </button>
              )
            )}

            {/* Blog Link */}
            <a
              href="/blog"
              className="relative text-sm font-medium text-orange-500 hover:text-orange-600 transition-all duration-300 animate-pulse font-semibold px-2 sm:px-3 py-1 rounded-md shadow-[0_0_10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_20px_rgba(249,115,22,0.8)]"
            >
              Blog
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 w-0 bg-orange-500/0 group-hover:w-6" />
            </a>

            {/* Resume Button */}
            <a
              href="/Yash_Khairnar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 font-medium bg-sky-900 text-white text-xs sm:text-sm hover:bg-sky-800 transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center z-10 h-full w-full bg-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="
              relative h-full w-full
              [&>div]:absolute [&>div]:h-full [&>div]:w-full
              [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
              [&>div]:[background-size:16px_16px]
              [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
            "
          >
            <div></div>
          </div>
        </div>

        {/* 🟦 Hero Content */}
        <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-5xl relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
              Software Developer
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 font-light tracking-tight text-slate-600">
                AI/ML
                <span
                  aria-hidden="true"
                  className="mx-1 sm:mx-2 align-baseline text-slate-600"
                >
                  ×
                </span>
                Full-stack
              </span>
            </h1>
          
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-2">
              Researching, building, and deploying AI/ML applications that solve real-world problems.
            </p>
            
            <InternshipStatus />

            <div className="flex justify-center space-x-4 sm:space-x-5 pt-6 sm:pt-10">
            {[
              {href: 'https://github.com/YashKhairnar' },
              {href: 'https://www.linkedin.com/in/yashkhairnar11/' },
              {href: 'https://x.com/I_esoteric' },
              {href: 'mailto:yashkvk7@gmail.com' }
            ].map((social, index) => {
              return (
                  <SocialIcon url={social.href} key={index} className="p-2 sm:p-3 text-gray-500 hover:text-blue-500 transition-colors h-4 w-4 sm:h-5 sm:w-5" />
              );
            })}
          </div>
          </div>
        </div>
      
      </section>


      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            About me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8 lg:col-span-2 text-justify">
              <p className="text-base text-gray-600 leading-relaxed font-light">
                The world of Machine Learning and AI has always inspired me to explore how far we can push its boundaries. I love to research new ideas and continually challenge myself to learn and apply state-of-the-art techniques.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                I hold a Bachelor's in Computer Engineering from Pune University and am currently pursuing an M.S. in Computer Science at San José State University.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                My hands-on experience spans Machine Learning and Deep Learning, with applications in Computer Vision, Natural Language Processing, and multimodal AI. Beyond AI, I'm proficient in full-stack development (MERN), cloud platforms (AWS), and orchestration tools (Docker, Kubernetes).
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                As a software engineer, I'm dedicated to building impactful applications that solve real-world problems. My focus is on advancing machine learning and multimodal AI, integrating these technologies to drive innovation and deliver value.
              </p>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="border rounded-md flex items-center justify-center max-w-xs mx-auto lg:max-w-none">
                <div className="text-center">
                  <img src="Yash.jpeg" alt="Profile Picture" className="w-full h-auto"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
            
            <div className="space-y-12 sm:space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-gray-400 rounded-full -translate-x-1/2"></div>
                  
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl font-medium text-gray-900">
                          {exp.position}
                        </h3>
                        <span className="text-sm text-gray-500 tracking-wide">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
                        <span className="text-base text-gray-700 font-medium">
                          {exp.company}
                        </span>
                        <span className="text-sm text-gray-500">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3 text-justify">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600 leading-relaxed font-light">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            My Projects
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 transition-all duration-500 hover:shadow-sm"
              >
                <div className="bg-gray-100 border-b border-gray-200">
                  <img src={project.photo || " "} alt="Display Image" />
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="flex items-start sm:items-center justify-between text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    <span className="flex-1 pr-2">{project.title}</span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-xs sm:text-sm text-indigo-600 hover:text-indigo-800 transition flex-shrink-0"
                    >
                      Link <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            Skills
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-justify">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-medium mb-2 text-gray-900">
                        {skill.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                        {skill.tech}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements & Leadership Section */}
      <section id="achievements" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            Achievements & Leadership
          </h2>
          
          <div className="space-y-8 sm:space-y-12">
            {achievements.map((category, idx) => (
              <div key={idx}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 tracking-wide">
                    {category.category}
                  </h3>
                </div>

                {/* Timeline */}
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-6 sm:-left-8 w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full transform translate-x-[-3px] sm:translate-x-[-4.5px] mt-2"></div>
                        
                        <div className="pl-6 sm:pl-8">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                            <h4 className="text-base sm:text-lg font-medium text-gray-900">
                              {item.title}
                            </h4>
                            <span className="text-xs sm:text-sm text-gray-500 font-light whitespace-nowrap">
                              {item.date}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900">
            Let's Connect
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-700 tracking-wide">NAME</label>
              <input 
                type="text"
                className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors text-gray-900 text-sm sm:text-base"
              />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-700 tracking-wide">EMAIL</label>
              <input 
                type="email"
                className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors text-gray-900 text-sm sm:text-base"
              />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-700 tracking-wide">MESSAGE</label>
              <textarea 
                rows={3}
                className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none text-gray-900 text-sm sm:text-base"
              ></textarea>
            </div>
            
            <div className="pt-6 sm:pt-8">
              <button 
                onClick={handleFormSubmit}
                disabled={isFormSubmitting || formSubmitted}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm tracking-wide"
              >
                {isFormSubmitting ? 'SENDING...' : formSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs sm:text-sm text-gray-500 tracking-wide">
            © 2025 Yash Khairnar. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;