import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Menu, X, Github, Linkedin, Mail, FileText, 
  Trophy, GraduationCap, Code, Briefcase, Award, Target,
  ExternalLink, Calendar, MapPin, User, Heart, Star,
  ChevronDown, Filter, Eye, Download, BookOpen, Users,
  Lightbulb, TrendingUp, Activity, Coffee, Music, Camera,
} from 'lucide-react';
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('technical');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:sushrutdeshpande05@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sushrut-deshpande-6677292a1/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Sushrutritgithub', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/sushrut_05/', label: 'LeetCode' },
    { icon: SiCodeforces, href: 'https://codeforces.com/profile/Sushrut_05', label: 'Codeforces' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/user/sushrutdesqvpu/', label: 'GeeksforGeeks' },
    { icon: FileText, href: '/resume.pdf', label: 'Resume' },
  ];

  const languages = [
    { name: 'C', level: 90, color: 'bg-blue-500' },
    { name: 'C++', level: 90, color: 'bg-blue-500' },
    { name: 'Java', level: 60, color: 'bg-orange-500' },
    { name: 'Python', level: 88, color: 'bg-green-500' },
    { name: 'JavaScript', level: 82, color: 'bg-yellow-500' },
    { name: 'SQL', level: 75, color: 'bg-purple-500' }
  ];

  const achievements = [
    {
      title: 'Dean\'s List Scholar',
      description: 'Maintained CGPA above 9.0 for 4 consecutive semesters',
      date: '2023-2024',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Table Tennis Tournament Runner-Up',
      description: 'Secured 2nd position in inter-college table tennis tournament',
      date: 'September 2024',
      icon: Award, // Changed from Code to Award for better thematic fit
      color: 'text-green-500'
    }
  ];

  const education = [
    {
      level: 'Bachelor of Technology',
      institution: 'Savitribai Phule Pune University',
      department: 'Computer Science & Business Systems',
      year: '2023-2027',
      gpa: '9.57/10',
      status: 'Current'
    },
    {
      level: '12th Grade',
      institution: 'Golden Kids English Junior College',
      department: 'Science (PCMB)',
      year: '2023',
      gpa: '71%',
      status: 'Completed'
    },
    {
      level: '10th Grade',
      institution: 'Golden Kids English High School',
      department: 'All Subjects',
      year: '2021',
      gpa: '98.6%',
      status: 'Completed'
    }
  ];

  const semesterGPA = [
    { semester: 'Sem 1', gpa: '9.82', year: '2023' },
    { semester: 'Sem 2', gpa: '9.43', year: '2024' },
    { semester: 'Sem 3', gpa: '9.55', year: '2024' },
    { semester: 'Sem 4', gpa: '9.5', year: '2025' },
    { semester: 'Sem 5', gpa: 'Ongoing', year: '2025' }
  ];

  const skills = {
    'Programming Languages': ['C','C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    'Tools & Technologies': ['React', 'Node.js', 'Express.js', 'MongoDB'],
    'Domain Expertise': ['Machine Learning', 'Web Development', 'Data Science', 'Algorithm Design'],
    'Core Knowledge': ['OS','CN', 'DBMS', 'Data Structures', 'Software Engineering', 'Discrete Mathematics']
  };

  const projects = [
    {
      id: 1,
      title: 'TaskMaster',
      description: 'A simple, responsive to-do list web app with user authentication.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'web',
      status: 'Completed',
      outcome: 'Easy Management of Daily Tasks',
      github: 'https://github.com/Sushrutritgithub/Taskmaster',
      image: 'https://via.placeholder.com/400x250?text=AI+Task+Manager'
    },
    {
      id: 2,
      title: 'BioMedical-Inventory',
      description: 'A modern web-based inventory management system designed specifically for biomedical facilities and laboratories. This system helps track medical equipment, supplies, and consumables, ensuring efficient inventory control and proper stock management for critical biomedical resources.',
      tools: ['HTML', 'CSS3', 'JavaScript', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'web',
      status: 'In Progress',
      outcome: 'Streamlined Inventory Management for Biomedical Facilities',
      github: 'https://github.com/Sushrutritgithub/BioMedical-Inventory',
      image: 'https://via.placeholder.com/400x250?text=BioMedical+Inventory'
    },
    {
      id: 3,
      title: 'House Price Prediction',
      description: 'A machine learning project that predicts house prices based on various features using data analysis and regression models.',
      tools: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      category: 'data',
      status: 'Completed',
      outcome: 'Accurate House Price Predictions',
      github: 'https://github.com/Sushrutritgithub/House-price-prediction',
      image: 'https://via.placeholder.com/400x250?text=Data+Dashboard'
    }
  ];

  const certifications = [
    {
      title: 'CPP Training by IIT Bombay',
      platform: 'Spoken Tutorial IIT Bombay',
      date: 'March 2024',
      link: 'https://aws.amazon.com/certification/',
      image: 'https://via.placeholder.com/100x100?text=AWS'
    }
  ];

  const activities = {
    technical: [
      {
        title: 'Vice President Techawks',
        organization: 'Techawks Club, RSCOE',
        duration: '2025-Present',
        description: 'Organizing events and workshops for students'
      },
      {
        title: 'Technical Member CCC',
        organization: 'Competitive Coding Club, RSCOE',
        duration: '2025-Present',
        description: 'Arranging weekly discussions, coding contests and hackathons'
      },
      {
        title: 'Technical Member Algorand',
        organization: 'Algorand Blockchain Club, RSCOE',
        duration: '2025-Present',
        description: 'Developing blockchain skills'
      },
      {
        title: 'Participated in Technex hackathon held at IIT BHU ',
        organization: 'IIT BHU',
        duration: '2024',
        description: 'It was an event organised by IIT-BHU for the young entrepreneurs. In this event I participated with my team.'
      },
    ],
    nonTechnical: [
     {
        title: 'From Project to Product',
        organization: 'Techawks Club, RSCOE',
        duration: '2025',
        description: 'In this event the students having achievements in various fields were felicitated for it. Also the students were guided from the Industry Experts from various firms.'
      },
      {
        title: 'Table Tennis Tournament Runner-Up',
        organization: 'SPPU Inter-College Tournament',
        duration: '2024',
        description: 'Runner-up in table tennis inter-college competitions'
      }
    ]
  };

  const goals = {
    shortTerm: [
      'Learn web technologies',
      'Learn ML',
      'Learn cloud technologies (AWS/Azure)',
      'Build 3 major projects',
      'Contribute to open source regularly'
    ],
    longTerm: [
      'Become proefficient in my skills',
      'To work in a field to sharpen my skills',
      'Specialize in AI/ML technologies'
    ]
  };

  const learnings = [
    {
      date: 'September 2025',
      title: 'Learning web technologies',
      description: 'Exploring new terminologies, methods with Node.js'
    },
    {
      date: 'September 2025',
      title: 'Machine Learning Algorithms',
      description: 'Analysing datasets with various ml algorithms'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filterProjects = (category) => {
    setSelectedProjectFilter(category);
  };

  const filteredProjects = selectedProjectFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedProjectFilter);

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sushrut Deshpande
                </h1>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Sushrut Deshpande
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">Roll No: CB311</p>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">PRN: RBT23CB002</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Computer Science & Business Systems</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Third Year (2023-2027)</p>
              </div>
              
              <div className="flex flex-wrap justify-center space-x-2 md:space-x-6 mb-12">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 hover:scale-110"
                    title={link.label}
                  >
                    {link.icon && <link.icon className="h-6 w-6" />}
                  </a>
                ))}
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Passionate computer science student with a strong foundation in software development, 
                  machine learning, and data science. I love building innovative solutions that make a 
                  difference and am always eager to learn new technologies and tackle challenging problems.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                    <Target className="h-5 w-5 mr-2" />
                    Career Objectives
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To secure a challenging position as a Software Engineer where I can utilize my 
                    technical skills, contribute to innovative projects, and grow professionally while 
                    making meaningful contributions to the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Programming Languages</h2>
              <p className="text-gray-600 dark:text-gray-400">Languages I'm proficient in</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${lang.color} transition-all duration-1000`}
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Achievements & Awards</h2>
              <p className="text-gray-600 dark:text-gray-400">Recognition and accomplishments</p>
            </div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-6 ${achievement.color}`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academics Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Academic Background</h2>
              <p className="text-gray-600 dark:text-gray-400">My educational journey</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Education Timeline
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 mr-4"></div>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex-grow">
                        <h4 className="text-lg font-semibold">{edu.level}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-400">{edu.department}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-500">{edu.year}</span>
                          <span className="text-sm font-medium">{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* GPA Table */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Semester-wise Performance</h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-3 px-4 font-semibold">Semester</th>
                          <th className="text-left py-3 px-4 font-semibold">Year</th>
                          <th className="text-left py-3 px-4 font-semibold">GPA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semesterGPA.map((sem, index) => (
                          <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="py-3 px-4">{sem.semester}</td>
                            <td className="py-3 px-4">{sem.year}</td>
                            <td className="py-3 px-4">
                              <span className={`font-medium ${sem.gpa === 'Ongoing' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>
                                {sem.gpa}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <p className="text-gray-600 dark:text-gray-400">My technical expertise and competencies</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg px-4 py-2 text-center hover:scale-105 transition-transform duration-200">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <p className="text-gray-600 dark:text-gray-400">A showcase of my work and contributions</p>
            </div>
            
            {/* Project Filters */}
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                {['all', 'ml', 'web', 'data'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => filterProjects(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedProjectFilter === filter
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tools.map((tool, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {project.role && (
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Role:</span>
                          <span>{project.role}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Status:</span>
                        <span className={project.status === 'Completed' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Outcome:</span>
                        <span>{project.outcome}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                      <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        <Eye className="h-4 w-4 mr-2" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications & MOOCs</h2>
              <p className="text-gray-600 dark:text-gray-400">Professional certifications and online courses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={cert.image}
                      alt={cert.platform}
                      className="w-12 h-12 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.platform}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{cert.date}</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Co-curricular & Extra-curricular Activities</h2>
              <p className="text-gray-600 dark:text-gray-400">Beyond academics - leadership and engagement</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('technical')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                    activeTab === 'technical'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Code className="h-5 w-5 mx-auto mb-2" />
                  Technical Activities
                </button>
                <button
                  onClick={() => setActiveTab('nonTechnical')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                    activeTab === 'nonTechnical'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className="h-5 w-5 mx-auto mb-2" />
                  Non-Technical Activities
                </button>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {activities[activeTab].map((activity, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                      <h3 className="text-lg font-semibold">{activity.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{activity.organization}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{activity.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">My Resume</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Download my complete resume to learn more about my background, skills, and experiences.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Career Goals Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Career Goals & Learning Path</h2>
              <p className="text-gray-600 dark:text-gray-400">My roadmap for professional growth</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold">Short-term Goals</h3>
                </div>
                <ul className="space-y-3">
                  {goals.shortTerm.map((goal, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">Long-term Goals</h3>
                </div>
                <ul className="space-y-3">
                  {goals.longTerm.map((goal, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Learning Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Personal Learning & Reflections</h2>
              <p className="text-gray-600 dark:text-gray-400">My continuous learning journey</p>
            </div>
            
            <div className="space-y-6">
              {learnings.map((learning, index) => (
                <div key={index} className="flex items-start bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-2 mr-4"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{learning.title}</h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{learning.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{learning.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">More About Me</h2>
              <p className="text-gray-600 dark:text-gray-400">Beyond the technical skills</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Coffee className="h-12 w-12 text-brown-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Competitive Programming</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Passionate about problem-solving in a given time
                  </p>
                </div>
                <div className="text-center">
                  <Camera className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Painting</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Relax my mind while filling the colors to soothe the brain
                  </p>
                </div>
                <div className="text-center">
                  <Music className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Music Lover</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Finding inspiration in melodies while coding
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding or studying, you'll find me exploring new technologies,  
                  contributing to open source projects, or enjoying a good book on software engineering. 
                  I believe in continuous learning and am always excited to take on new challenges 
                  that push me to grow both professionally and personally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400">Let's connect and explore opportunities together</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-3" />
                      <span>sushrutdeshpande05@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Connect with me:</h4>
                    <div className="flex flex-wrap space-x-2 md:space-x-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200 hover:scale-110 shadow-md"
                          title={link.label}
                        >
                          {link.icon && <link.icon className="h-5 w-5" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    title={link.label}
                  >
                    {link.icon && <link.icon className="h-5 w-5" />}
                  </a>
                ))}
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">
                  © 2024 Sushrut Deshpande. All rights reserved. Built with React & TailwindCSS
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Designed and developed with <Heart className="h-4 w-4 inline text-red-500" /> for showcasing my journey
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;