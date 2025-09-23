'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail, ExternalLink, Code, Brain, Zap, Rocket, Cloud } from 'lucide-react';
import BackgroundParticles from './components/background';

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
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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
    ]

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
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-xl font-medium text-gray-900">
            Yash Khairnar
          </div>
          
          <div className="hidden md:flex space-x-12">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 text-sm font-medium ${
                  activeSection === section ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-6 max-w-4xl">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Software Developer
              <span className="block text-4xl md:text-5xl mt-4 font-light tracking-tight text-slate-600">
                AI&nbsp;&amp;&nbsp;ML
                <span aria-hidden="true" className="mx-2 align-baseline text-slate-600 ">×</span>
                Full-stack
              </span>

            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Researching, building, and deploying AI/ML applications that solve real-world problems.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-gray-900 text-white rounded-sm font-medium transition-all duration-300 hover:bg-gray-800 text-sm tracking-wide"
            >
              VIEW WORK
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-sm font-medium transition-all duration-300 hover:border-gray-400 text-sm tracking-wide"
            >
              GET IN TOUCH
            </button>
          </div>

          <div 
            className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <ChevronDown className="w-10 h-10 text-gray-600 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-gray-900">
            About me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="space-y-8 col-span-2 text-justify">
              <p className="text-base text-gray-600 leading-relaxed font-light">
                The world of Machine Learning and AI has always inspired me to explore how far we can push its boundaries. I love to research new ideas and continually challenge myself to learn and apply state-of-the-art techniques.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                I hold a Bachelor’s in Computer Engineering from Pune University and am currently pursuing an M.S. in Computer Science at San José State University.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                My hands-on experience spans Machine Learning and Deep Learning, with applications in Computer Vision, Natural Language Processing, and multimodal AI. Beyond AI, I’m proficient in full-stack development (MERN), cloud platforms (AWS), and orchestration tools (Docker, Kubernetes).
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                As a software engineer, I’m dedicated to building impactful applications that solve real-world problems. My focus is on advancing machine learning and multimodal AI, integrating these technologies to drive innovation and deliver value.
              </p>
            </div>
            
            <div className="relative">
              <div className="border rounded-md flex items-center justify-center">
                <div className="text-center">
                  <img src="Yash.jpeg" alt="Profile Picture"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-gray-900">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-2 border-gray-400 rounded-full -translate-x-1/2"></div>
                  
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
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-gray-900">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 transition-all duration-500 hover:shadow-sm"
              >
                <div className="bg-gray-100 border-b border-gray-200">
                  <img src={project.photo || " "} alt="Display Image" />
                </div>
                
                <div className="p-8">
                  <h3 className="flex items-center justify-between text-lg font-medium mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                    <span>{project.title}</span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition"
                    >
                      Link <ExternalLink size={16} />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
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
      <section id="skills" className="py-32 px-6 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-gray-900">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-justify">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-2 text-gray-900">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
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
      
      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-gray-900">
            Let's Connect
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700 tracking-wide">NAME</label>
              <input 
                type="text"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700 tracking-wide">EMAIL</label>
              <input 
                type="email"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700 tracking-wide">MESSAGE</label>
              <textarea 
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none text-gray-900"
              ></textarea>
            </div>
            
            <div className="pt-8">
              <button 
                onClick={handleFormSubmit}
                disabled={isFormSubmitting || formSubmitted}
                className="w-full px-8 py-4 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {isFormSubmitting ? 'SENDING...' : formSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 relative z-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-8 mb-8">
            {[
              { icon: Github, href: 'https://github.com/YashKhairnar' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/yashkhairnar11/' },
              { icon: Twitter, href: 'https://x.com/I_esoteric' },
              { icon: Mail, href: 'mailto:yashkvk7@gmail.com' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <p className="text-center text-sm text-gray-500 tracking-wide">
            © 2025 Yash Khairnar. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;