'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail, ExternalLink, Code, Brain, Zap, Rocket, Cloud, Award, Trophy, Users, Calendar, Clock, ArrowLeft } from 'lucide-react';
import BackgroundParticles from '../components/background';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable ML Pipelines with MLOps Best Practices",
    excerpt: "Learn how to design and implement production-ready machine learning pipelines that can scale with your data and user base.",
    content: `# Building Scalable ML Pipelines with MLOps Best Practices

Machine Learning Operations (MLOps) has become crucial for organizations looking to deploy and maintain ML models at scale. In this comprehensive guide, I'll walk you through the key principles and practices that have helped me build robust ML pipelines in production environments.

## The Foundation: Data Pipeline Design

The first step in building scalable ML pipelines is designing a robust data pipeline. This involves:

- **Data Ingestion**: Implementing automated data collection from various sources
- **Data Validation**: Ensuring data quality and consistency
- **Feature Engineering**: Creating reusable feature transformation pipelines
- **Data Storage**: Choosing appropriate storage solutions for different data types

## Model Training and Versioning

Effective model management is critical for scalable ML operations:

- **Experiment Tracking**: Using tools like MLflow or Weights & Biases
- **Model Versioning**: Implementing proper version control for models
- **Hyperparameter Optimization**: Automated tuning for better performance
- **Model Validation**: Comprehensive testing before deployment

## Deployment Strategies

Deploying ML models at scale requires careful consideration of:

- **Containerization**: Using Docker for consistent environments
- **Orchestration**: Kubernetes for managing containerized applications
- **Load Balancing**: Distributing inference requests efficiently
- **Monitoring**: Real-time performance and drift detection

## Monitoring and Maintenance

The journey doesn't end with deployment:

- **Performance Monitoring**: Tracking model accuracy and latency
- **Data Drift Detection**: Identifying when input data changes
- **Model Retraining**: Automated retraining pipelines
- **A/B Testing**: Comparing model versions in production

## Key Takeaways

Building scalable ML pipelines requires a holistic approach that combines technical expertise with operational best practices. The key is to start simple and gradually add complexity as your needs grow.

Remember, the goal is not just to build models that work, but to build systems that can evolve and scale with your organization's needs.`,
    author: "Yash Khairnar",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["MLOps", "Machine Learning", "DevOps", "Production"],
    featured: true
  },
  {
    id: 2,
    title: "Computer Vision in Industrial Automation: A Deep Dive",
    excerpt: "Exploring how computer vision technologies are revolutionizing manufacturing and industrial processes.",
    content: `# Computer Vision in Industrial Automation: A Deep Dive

Industrial automation has been transformed by computer vision technologies, enabling unprecedented levels of precision, efficiency, and quality control. In this article, I'll share insights from my experience building computer vision systems for industrial applications.

## The Evolution of Industrial Vision Systems

Traditional industrial inspection relied heavily on human operators, which was:
- Prone to human error
- Limited by fatigue and attention span
- Inconsistent across different shifts
- Expensive to scale

Modern computer vision systems address these challenges by providing:
- Consistent 24/7 operation
- Sub-pixel accuracy
- Real-time processing capabilities
- Integration with existing manufacturing systems

## Key Applications in Manufacturing

### Quality Control and Inspection
- Defect detection in products
- Dimensional measurement
- Surface quality assessment
- Assembly verification

### Process Monitoring
- Real-time production monitoring
- Equipment condition assessment
- Safety compliance checking
- Workflow optimization

### Robotics Integration
- Visual guidance for robotic systems
- Object recognition and classification
- Path planning and obstacle avoidance
- Human-robot collaboration

## Technical Implementation

Building effective industrial vision systems requires:

### Hardware Considerations
- High-resolution cameras with appropriate lenses
- Lighting systems for consistent illumination
- Processing units capable of real-time inference
- Robust enclosures for harsh environments

### Software Architecture
- Preprocessing pipelines for image enhancement
- Deep learning models for feature extraction
- Post-processing for decision making
- Integration with existing MES/ERP systems

## Challenges and Solutions

### Environmental Factors
- Variable lighting conditions
- Vibration and movement
- Temperature fluctuations
- Dust and debris

### Data Quality
- Limited training data
- Class imbalance
- Annotation consistency
- Domain adaptation

## Future Trends

The future of industrial computer vision looks promising with:
- Edge computing for real-time processing
- Federated learning for privacy-preserving model training
- Augmented reality for operator assistance
- Integration with IoT and Industry 4.0 initiatives

## Conclusion

Computer vision is not just a technology—it's a transformative force in industrial automation. As we continue to push the boundaries of what's possible, the key to success lies in understanding both the technical capabilities and the practical requirements of industrial applications.`,
    author: "Yash Khairnar",
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["Computer Vision", "Industrial Automation", "Manufacturing", "AI"],
    featured: false
  },
  {
    id: 3,
    title: "The Future of Multimodal AI: Beyond Text and Images",
    excerpt: "Exploring the next frontier of artificial intelligence that combines multiple data modalities for more intelligent systems.",
    content: `# The Future of Multimodal AI: Beyond Text and Images

Multimodal AI represents the next frontier in artificial intelligence, where systems can process and understand information from multiple modalities simultaneously. As someone deeply involved in this field, I'm excited to share insights about where this technology is heading.

## What is Multimodal AI?

Multimodal AI systems can process and integrate information from various sources:
- Text and natural language
- Images and visual content
- Audio and speech
- Video and temporal sequences
- Sensor data and IoT streams
- Structured data and databases

## Current Applications

### Healthcare
- Medical image analysis combined with patient records
- Voice-based symptom assessment
- Multimodal drug discovery

### Autonomous Vehicles
- Camera, LiDAR, and radar data fusion
- Natural language interaction with passengers
- Environmental understanding

### Content Creation
- AI-generated videos with synchronized audio
- Multimodal chatbots and virtual assistants
- Interactive media experiences

## Technical Challenges

### Data Alignment
- Synchronizing different data streams
- Handling temporal misalignment
- Managing different sampling rates

### Model Architecture
- Designing effective fusion mechanisms
- Balancing computational efficiency
- Ensuring robust performance

### Training Complexity
- Multi-task learning objectives
- Handling missing modalities
- Transfer learning across domains

## Emerging Technologies

### Large Multimodal Models (LMMs)
- GPT-4V and similar vision-language models
- Unified architectures for multiple modalities
- Few-shot learning capabilities

### Multimodal Embeddings
- Cross-modal representation learning
- Semantic alignment across modalities
- Efficient similarity search

### Real-time Processing
- Edge computing for multimodal systems
- Streaming data processing
- Low-latency inference

## Future Possibilities

### Human-AI Collaboration
- Natural multimodal interaction
- Context-aware assistance
- Personalized AI companions

### Scientific Discovery
- Multimodal data analysis in research
- Cross-domain knowledge transfer
- Automated hypothesis generation

### Creative Applications
- AI-generated multimedia content
- Interactive storytelling
- Immersive experiences

## Getting Started

For those interested in multimodal AI:

1. **Learn the Fundamentals**: Start with computer vision and NLP
2. **Experiment with Datasets**: Work with multimodal datasets
3. **Study Existing Models**: Understand current architectures
4. **Build Projects**: Create your own multimodal applications

## Conclusion

Multimodal AI is not just a technological advancement—it's a paradigm shift that will fundamentally change how we interact with machines and how machines understand our world. The future is multimodal, and it's happening now.`,
    author: "Yash Khairnar",
    date: "2024-12-05",
    readTime: "7 min read",
    tags: ["Multimodal AI", "Machine Learning", "Future Tech", "Research"],
    featured: false
  }
];

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedPost) {
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
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 bg-white/60 backdrop-blur-sm border-gray-100 hover:bg-white/80">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-900"
            >
              Yash <span className="text-sky-900 font-bold">Khairnar</span>
            </Link>

            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </div>
        </nav>

        {/* Blog Post Content */}
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <span>By {selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm tracking-wide rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: selectedPost.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<br><br>') 
                }}
              />
            </article>
          </div>
        </div>
      </div>
    );
  }

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
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 bg-white/60 backdrop-blur-sm border-gray-100 hover:bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center">
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900"
          >
            Yash <span className="text-sky-900 font-bold">Khairnar</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/"
              className="relative text-xs sm:text-sm font-medium text-orange-500 hover:text-orange-600 transition-all duration-300 animate-pulse font-semibold px-2 sm:px-3 py-1 rounded-md shadow-[0_0_10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_20px_rgba(249,115,22,0.8)]"
            >
              Portfolio
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Portfolio
              </Link>
              <div className="pt-2">
                <span className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-slate-900 bg-gray-100">
                  Blog
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10 h-full w-full bg-white overflow-hidden">
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

        <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-5xl relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="p-6 sm:p-8 lg:p-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
              Insights
            </h1>
          
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-2">
                My thoughts in a written form as explore the technology and the world.
            </p>
            
            {/* Scroll down indicator */}
            <div className="mt-12 sm:mt-16 animate-bounce">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-white border border-gray-200 transition-all duration-500 hover:shadow-sm cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  {post.featured && (
                    <div className="mb-3 sm:mb-4">
                      <span className="px-2 sm:px-3 py-1 bg-sky-100 text-sky-800 text-xs font-medium tracking-wide rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <h2 className="text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs sm:text-sm text-gray-500 tracking-wide">
            © 2025 Yash Khairnar. ALL RIGHTS RESERVED.
          </p>
          
          {/* Scroll up indicator */}
          <div className="mt-6 sm:mt-8 animate-bounce">
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mx-auto rotate-180" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
