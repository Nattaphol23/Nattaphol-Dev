"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaDownload,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaMicrochip,
  FaCheckCircle,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaPhone,
  FaBriefcase,
  FaTerminal,
  FaProjectDiagram,
} from "react-icons/fa";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  const skills = [
    { name: "Laravel", category: "Backend", level: 90 },
    { name: "PHP", category: "Backend", level: 88 },

    { name: "Next.js", category: "Frontend", level: 75 },
    { name: "React", category: "Frontend", level: 72 },
    { name: "Vue.js", category: "Frontend", level: 85 },
    { name: "Vuetify", category: "Frontend", level: 82 },

    { name: "SQL Server", category: "Database", level: 92 },
    { name: "MySQL", category: "Database", level: 85 },
    { name: "PostgreSQL", category: "Database", level: 40 },

    { name: "API Integration", category: "Integration", level: 90 },
    { name: "SharePoint", category: "Enterprise", level: 80 },
    { name: "Power BI", category: "Enterprise", level: 78 },
    { name: "PowerApps", category: "Enterprise", level: 75 },

    { name: "Docker", category: "DevOps", level: 65 },
    { name: "CI/CD", category: "DevOps", level: 68 },

    { name: "System Design", category: "Architecture", level: 85 },
    { name: "Business Analysis", category: "Architecture", level: 88 },
  ];

  const projects = [
    {
      title: "Production Management Support System",
      desc: "Business workflow support system for production tracking, stock movement, and operational reporting.",
      stack: ["Laravel", "SQL Server", "Vue.js", "Power BI"],
      role: "Full Stack Developer & Business Analyst",
      achievement:
        "Improved reporting accuracy and reduced manual workflow by optimizing SQL reports and system processes.",
    },
    {
      title: "Warehouse Management System (WMS)",
      desc: "Smart inventory tracking system with automated SKU management and logistics integration.",
      stack: ["Next.js", "MySQL", "Node.js", "Redis"],
      role: "Backend Specialist",
      achievement:
        "Optimized inventory accuracy to 99.9% and cut fulfillment time by 15%.",
    },
    {
      title: "Production Monitoring & Reporting System",
      desc: "Production data tracking and reporting system for monitoring manufacturing status, daily production output, and yearly production performance analysis.",
      stack: ["SQL Server", "Laravel", "Vue.js", "Power BI"],
      role: "Business Analyst & Production Data Support",
      achievement:
        "Improved production visibility by developing SQL reports and dashboards for tracking production status, output performance, and yearly manufacturing analysis.",
    },
    {
      title: "Enterprise HR System",
      desc: "HR system for managing employee data, organization structure, training records, and leave management.",
      stack: ["Vue.js", "Laravel", "MySQL"],
      role: "Full Stack Developer",
      achievement:
        "Improved HR data management by centralizing employee records, organization structure, training history, and leave workflow into a single system.",
    },
  ];

  const timeline = [
    {
      year: "March 2026 - Present",
      title: "Full Stack Developer & Business Analyst",
      company: "Empower / Permsin Steel Works Public Company Limited",
      description:
        "Responsible for developing and supporting enterprise production and business systems, focusing on production data tracking, reporting, and system integration across departments.",
      highlights: [
        "Production monitoring and reporting system (daily & yearly output analysis)",
        "SQL Server reporting for manufacturing and operational data",
        "Business process analysis and requirement gathering (BA role)",
        "System development using Laravel, Vue.js, and Next.js",
        "Data integration and reporting with Power BI",
        "Test case design and bug tracking for system validation",
        "Issue identification, bug list management, and system documentation",
        "Improved production visibility and decision-making through structured reporting systems",
      ],
    },
    {
      year: "June 2021 - March 2026",
      title: "Full Stack Developer",
      company: "Boonchuay Industry Co., Ltd.",
      location: "10/12 Moo 2, Sai 7, Tha Talat, Sam Phran, Nakhon Pathom 73110",
      description:
        "Developed and maintained web applications using Laravel and Vue.js. Designed and managed SQL databases, built and integrated RESTful APIs with GitHub version control. Worked with Microsoft SharePoint and PowerApps for internal business systems.",
      highlights: [
        "Internal business application development",
        "SQL database design & optimization",
        "API integration & system connectivity",
        "Microsoft SharePoint & PowerApps solutions",
        "Basic UI/UX improvement using Figma",
        "Automation and AI features using Python",
        "Exposure to IoT and image processing (OpenCV)",
      ],
    },

    {
      year: "May 2020 - Nov 2020",
      title: "IT Support / Helpdesk",
      company: "eMerchant Co., Ltd.",
      description:
        "Provided IT support including Windows installation, basic system setup, troubleshooting, and user assistance for internal operations at enterprise level.",
    },
    // {
    //   year: "2016 - 2018",
    //   title: "Junior Web Developer",
    //   company: "StartUp Hub",
    //   description:
    //     "Focused on frontend optimization and database management for high-traffic web applications.",
    // },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-800">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <FaCode size={24} />
            </div>
            <span>
              Nattaphol <span className="text-blue-600">PORTFOLIO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ),
            )}
            {/* <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
              Resume <FaDownload size={16} />
            </button> */}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for senior roles
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
              Architecting{" "}
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                Robust
              </span>{" "}
              Digital Infrastructure.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              I'm{" "}
              <span className="font-semibold text-slate-900 text-2xl">
                Nattaphol Maninium
              </span>
              , a Full Stack Developer & Business Analyst specializing in
              building scalable business systems, optimizing workflows, and
              transforming requirements into efficient digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all"
              >
                Let's Build Together
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/Nattaphol23", "_blank")
                }
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                View GitHub
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <a
                href="https://github.com/Nattaphol23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nattaphol-maninium-58b6803a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 transition-colors" />
              </a>
              {/* <FaEnvelope className="cursor-pointer" /> */}
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group">
              {/* Profile Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      5+ Years Experience
                    </h4>
                    <p className="text-sm text-slate-500">
                      Enterprise Solutions Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                Core Strengths
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a deep background in PHP/Laravel and modern JavaScript
                frameworks, I bridge the gap between complex business logic and
                intuitive user experiences. My focus is on **Clean
                Architecture**, **System Reliability**, and **Performance
                Optimization**.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  {
                    icon: <FaServer size={20} />,
                    title: "Backend Systems",
                    text: "Complex logic & DB optimization",
                  },
                  {
                    icon: <FaLayerGroup size={20} />,
                    title: "System Design",
                    text: "Scalable enterprise architecture",
                  },
                  {
                    icon: <FaDatabase size={20} />,
                    title: "Data Integration",
                    text: "ETL & API orchestration",
                  },
                  {
                    icon: <FaCheckCircle size={20} />,
                    title: "Process Improvement",
                    text: "Workflow Automation & Business Analysis",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="text-blue-600 mb-2">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-xs font-mono text-slate-400">
                  engineering_philosophy.json
                </span>
              </div>
              <pre className="font-mono text-sm leading-relaxed text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
                <code>{`{
  "focus": "Enterprise Business Solutions",
  "methodology": "System Analysis, Business Process Improvement & Scalable Architecture",

  "preferred_stack": {
    "backend": [
      "Laravel",
      "PHP",
      "Node.js"
    ],

    "frontend": [
      "Next.js",
      "React",
      "Vue.js",
      "Vuetify",
      "Tailwind CSS"
    ],

    "database": [
      "SQL Server",
      "MySQL",
      "PostgreSQL"
    ],

    "enterprise_tools": [
      "Power BI",
      "SharePoint",
      "PowerApps",
      "API Integration"
    ]
  },

  "principles": [
    "Clean Code",
    "Maintainable Systems",
    "Performance Optimization",
    "Workflow Automation",
    "Business-Driven Development"
  ],

  "commit_standard": "Conventional Commits"
}`}</code>
              </pre>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Technical Arsenal</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Expertise across the full development lifecycle, from initial
              system architecture to production deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-sm font-mono text-slate-400 group-hover:text-blue-500 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-4 text-slate-800">
                  {skill.name}
                </h3>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white relative flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">
                Engineering Reliable Business Systems
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                I build business systems by combining development and business
                analysis to improve workflow and solve real problems.
              </p>
              <ul className="space-y-4">
                {[
                  "GitFlow Branching Model for parallel development",
                  "Clean system architecture and maintainable code structure",
                  "Cross-platform integration using APIs and enterprise tools",
                  "SQL reporting, data validation, and workflow automation",
                  "Long-term system scalability and operational efficiency",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-blue-300" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur p-6 rounded-3xl border border-white/20 text-center">
                <FaTerminal className="mx-auto mb-4" />
                <h4 className="font-bold mb-1">System Design</h4>
                <p className="text-xs text-blue-100">
                  Database structure & workflow planning
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-3xl border border-white/20 text-center">
                <FaProjectDiagram className="mx-auto mb-4" />
                <h4 className="font-bold mb-1">Business Analysis</h4>
                <p className="text-xs text-blue-100">
                  Requirement gathering & process improvement
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-3xl border border-white/20 text-center">
                <FaGithub className="mx-auto mb-4" />
                <h4 className="font-bold mb-1">API Integration</h4>
                <p className="text-xs text-blue-100">
                  Cross-system connectivity & automation
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-3xl border border-white/20 text-center">
                <FaMicrochip className="mx-auto mb-4" />
                <h4 className="font-bold mb-1">Enterprise Tools</h4>
                <p className="text-xs text-blue-100">
                  Power BI, SharePoint & PowerApps solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Enterprise Projects</h2>
              <p className="text-slate-500 max-w-md">
                Real-world production systems deployed for corporate clients.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-50">
                <FaChevronRight className="rotate-180" />
              </div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                <FaChevronRight />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 flex flex-col h-full hover:border-blue-400 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-100"
              >
                <div className="p-8 space-y-6 flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-slate-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <FaLayerGroup size={24} />
                    </div>
                    <div className="flex gap-2">
                      {project.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500 uppercase tracking-widest"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-xs font-semibold text-slate-400 uppercase">
                        Role:
                      </span>
                      <span className="text-sm font-bold text-slate-700">
                        {project.role}
                      </span>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xs text-blue-800 leading-relaxed italic">
                        " {project.achievement} "
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Career Journey
          </h2>
          <div className="max-w-4xl mx-auto relative space-y-12 before:absolute before:left-0 md:before:left-1/2 before:h-full before:w-px before:bg-slate-200">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] w-3 h-3 bg-blue-600 rounded-full z-10 border-4 border-white"></div>
                <div className="md:w-1/2 ml-6 md:ml-0">
                  <div
                    className={`p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all ${i % 2 === 0 ? "text-left" : "md:text-right"}`}
                  >
                    <span className="text-blue-600 font-bold text-sm mb-2 block">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium mb-4">
                      {item.company}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">
                Building systems that solve{" "}
                <span className="text-blue-400 italic font-light">
                  real business problems.
                </span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Specialized in Full Stack Development, Database Design, and
                Business Process Improvement. Experienced in Laravel, Next.js,
                SQL Server, and Enterprise Workflow Solutions. Focused on
                building scalable, maintainable, and efficient business systems.
              </p>

              <div className="space-y-4 pt-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      Email
                    </p>
                    <p className="text-xl">jackcafe12322@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FaPhone size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      Contact
                    </p>
                    <p className="text-xl font-medium text-white">
                      +66 83 197 3900
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FaCode size={18} />
            </div>
            <span>
              Nattaphol <span className="text-blue-600">PORTFOLIO</span>
            </span>
          </div>
          <p className="text-sm">@ Full Stack Developer</p>
          {/* <div className="flex gap-6">
            <FaGithub size={20} className="hover:text-white cursor-pointer" />
            <FaLinkedin size={20} className="hover:text-white cursor-pointer" />
            <FaExternalLinkAlt
              size={20}
              className="hover:text-white cursor-pointer"
            />
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
