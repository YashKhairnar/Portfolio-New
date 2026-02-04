'use client'
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Rocket, Cloud, Code, Trophy, Users, ArrowRight, Mail, Send } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import BackgroundParticles from './components/background';
import InternshipStatus from './components/notification';
import { SocialIcon } from 'react-social-icons';
import { ProjectCarousel } from './components/carousal';
import Typewriter from './components/typewriter';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Section from './components/ui/section';
import { cn } from '@/app/utils/cn';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mouse tracking for cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150;

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async () => {
    setIsFormSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsFormSubmitting(false);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const skills = [
    { name: "Machine Learning & AI", icon: Brain, tech: "Regression, Classification, SVM, Decision Trees, Random Forest, Deep Learning, CNNs, Transformers, NLP, RL, GANs" },
    { name: "Libraries & Frameworks", icon: Zap, tech: "TensorFlow, Keras, PyTorch, Scikit-Learn, NumPy, Pandas, React, Node.js, Next.js, Flask, LangChain" },
    { name: "Databases", icon: Rocket, tech: "MySQL, MongoDB, PostgreSQL, Redis, DynamoDB" },
    { name: "Cloud & DevOps", icon: Cloud, tech: "AWS, EC2, RDS, Amplify, Docker, Kubernetes, Git, Nginx, Distributed Systems" },
    { name: "Languages", icon: Code, tech: "Python, C++, JavaScript, TypeScript, Go, HTML/CSS" },
  ];

  const experiences = [
    {
      company: "Accurate Industrial Controls Pvt. Ltd.",
      position: "Software Engineer",
      duration: "July 2024 - June 2025",
      location: "Pune, India",
      achievements: [
        "Led a team of 6 in developing a remote generator monitoring system with anomaly detection, achieving 93% accuracy.",
        "Built an ANPR application using YOLOv11 and PaddleOCR, improving plate detection to 97% accuracy.",
        "Designed a ROS-based pre-filling pipeline for LPG cylinders, eliminating manual intervention."
      ],
    },
    {
      company: "Accurate Industrial Controls Pvt. Ltd.",
      position: "Artificial Intelligence Intern",
      duration: "Aug 2023 - Nov 2023",
      location: "Pune, India",
      achievements: [
        "Automated anomaly detection for copper coils using PatchCore and YOLO.",
        "Engineered a real-time video streaming pipeline with 50ms latency.",
        "Researched pathfinding algorithms for autonomous boat navigation."
      ],
    },
    {
      company: "ResoluteAI Software",
      position: "Deep Learning Intern",
      duration: "Nov 2022 - Feb 2023",
      location: "Bengaluru, India",
      achievements: [
        "Built scalable computer vision systems for face recognition and space estimation.",
        "Engineered OCR workflows for resume parsing, improving accuracy by 85%.",
        "Deployed YOLO models for industrial automation with 92%+ accuracy."
      ]
    },
  ];

  const achievements = [
    {
      category: "Awards",
      icon: Trophy,
      items: [
        {
          title: "Best Student Award - IIIT",
          description: "Recognized for academic and extra-curricular excellence throughout 4 years.",
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
          description: "Led cross-functional team of 6 engineers in developing industrial ML solutions.",
          date: "2024"
        },
        {
          title: "Chairman - CESA (I2IT)",
          description: "Led technical and social programming for student development.",
          date: "2023-2024"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-orange-500/30">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 border border-slate-400 dark:border-slate-500 rounded-full pointer-events-none z-[100] transition-transform duration-100 mix-blend-difference hidden sm:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="fixed w-1 h-1 bg-slate-900 dark:bg-slate-100 rounded-full pointer-events-none z-[100] hidden sm:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <BackgroundParticles />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-orange-200/20 dark:bg-orange-900/20 blur-[100px]" />
          <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-slate-200/20 dark:bg-slate-900/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Open for research collaborations</span>
                </motion.div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight h-[60px] sm:h-[80px] lg:h-[90px] flex flex-col justify-center">
                  <Typewriter
                    words={["Machine Learning", "Artificial Intelligence", "Deep Learning", "Full Stack"]}
                  />
                </h1>

                <p className="text-xl sm:text-2xl font-light text-slate-600 dark:text-slate-300 max-w-xl">
                  Specializing in <span className="font-medium text-slate-900 dark:text-white">AI/ML and DistributedSystems</span>
                </p>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Building products that matter !
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  View Work <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  Contact Me
                </button>
              </div>

              <InternshipStatus />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <TiltWrapper>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 blur-2xl opacity-20 animate-pulse" />
                  <img
                    src="/Yash.jpeg"
                    alt="Yash Khairnar"
                    className="relative w-full h-full object-cover rounded-full border-2 border-white/20 dark:border-white/10 shadow-2xl"
                  />
                </div>
              </TiltWrapper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-slate-50/50 dark:bg-slate-900/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                The world of Machine Learning and AI has always inspired me to explore how far we can push its boundaries. I like to research new ideas and continually challenge myself to learn and apply state-of-the-art techniques.
              </p>
              <p>
                I hold a Bachelor's in Computer Engineering from Pune University and I'm currently pursuing a <span className="font-semibold text-slate-900 dark:text-white">M.S. in Computer Science</span> at San José State University.
              </p>
              <p>
                My hands-on experience spans Machine Learning and Deep Learning, with applications in Computer Vision, NLP, and multimodal AI. Beyond AI, I'm proficient in full-stack development (MERN), cloud platforms (AWS), and orchestration tools.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "15+" },
              { label: "Research", value: "Active" },
              { label: "Location", value: "San Jose, CA" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-500 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} pl-12`}>
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-orange-600 transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10`} />

                <div className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-orange-500/30 transition-all shadow-sm hover:shadow-md">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.position}</h3>
                  <div className="text-orange-600 dark:text-orange-500 font-medium mb-2">{exp.company}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">{exp.duration} | {exp.location}</div>
                  <ul className={`space-y-2 text-sm text-slate-600 dark:text-slate-300 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="leading-relaxed opacity-90">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-50/50 dark:bg-slate-900/50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <ProjectCarousel />
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-6 rounded-3xl bg-white/50 dark:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-800"
              >
                <div className="md:w-64 flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                </div>

                <div className="flex-1 flex flex-wrap gap-2">
                  {skill.tech.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-orange-200 dark:hover:border-orange-900/50 hover:text-orange-700 dark:hover:text-orange-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" className="bg-slate-50/50 dark:bg-slate-900/50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Achievements & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {achievements[0].items.map((item, idx) => (
            <div key={idx} className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-orange-500" size={24} />
                <h3 className="text-2xl font-bold">Awards</h3>
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <span className="text-sm text-orange-600 dark:text-orange-500 mb-2 block">{item.date}</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          <div className="md:col-span-1 p-8 rounded-3xl bg-orange-600 text-white shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <Users size={24} />
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-6">
              {achievements[1].items.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/30 pl-4 py-1">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-orange-100 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Me</h3>
                  <a href="mailto:yashkvk7@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-orange-600 transition-colors">
                    yashkvk7@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-300 italic">
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-sm text-slate-500 mt-2">— Steve Jobs</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={isFormSubmitting || formSubmitted}
                className="w-full py-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isFormSubmitting ? (
                  'Sending...'
                ) : formSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

const TiltWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative flex items-center justify-center", className)}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Portfolio;