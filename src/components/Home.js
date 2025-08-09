import React, { useEffect, useMemo, useState } from "react"
import { HomeIcon, InfoIcon, BriefcaseBusiness, FolderOpen, Code2, MessageSquareQuote, MailIcon } from 'lucide-react'

// Floating top pill navigation with scrollspy
function TopNav() {
  const NAV_ITEMS = useMemo(
    () => [
      { id: "home", label: "Home", icon: HomeIcon },
      { id: "about", label: "About", icon: InfoIcon },
      { id: "experience", label: "Experience", icon: BriefcaseBusiness },
      { id: "projects", label: "Projects", icon: FolderOpen },
      { id: "skills", label: "Skills", icon: Code2 },
      { id: "contact", label: "Contact", icon: MailIcon },
    ],
    []
  )

  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { root: null, rootMargin: "0px 0px -55% 0px", threshold: [0.2, 0.5, 0.75] }
    )

    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [NAV_ITEMS])

  return (
    <div className="sticky top-4 z-50 flex w-full justify-center">
      <nav className="flex items-center gap-2 rounded-full border bg-white px-2 py-2 shadow-md">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className={[
                "group flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors",
                isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className={[
                  "h-4 w-4 transition-transform",
                  isActive ? "scale-110" : "opacity-80 group-hover:opacity-100",
                ].join(" ")}
              />
              <span className="hidden sm:inline">{label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

// Light Hero section (replaces old dark Header)
function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 scroll-mt-24" aria-label="Introduction">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {"Hi, I'm Hizkia Siahaan"}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {"I create beautiful, functional, and user-centered digital experiences."}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {"Medan, Indonesia | Available for freelance work"}
        </p>

        <div className="mt-5 flex justify-center gap-4 text-sm">
          <a className="text-blue-600 underline-offset-4 hover:underline" href="#">
            LinkedIn
          </a>
          <a className="text-blue-600 underline-offset-4 hover:underline" href="#">
            GitHub
          </a>
          <a className="text-blue-600 underline-offset-4 hover:underline" href="#">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}

/* KEEP EXACT About FROM YOUR CURRENT FILE (unchanged) */
function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6 text-gray-300">
              Passionate about creating innovative solutions through technology.
            </p>
            <p className="text-lg mb-8 text-gray-400 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika di Universitas Sumatera Utara yang memiliki passion dalam pengembangan web dan teknologi. Saya senang mempelajari hal-hal baru dan selalu berusaha untuk mengembangkan kemampuan saya dalam bidang programming, khususnya dalam frontend development dan UI/UX design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Nama:</strong> Hizkia Siahaan
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Domisili:</strong> Medan, Indonesia
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Pendidikan:</strong> Teknik Informatika USU
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Email:</strong> hizkia@example.com
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Phone:</strong> +62 812-3456-7890
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <strong className="text-blue-400">Status:</strong> Available for Work
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interests & Focus</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">Frontend Development</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">React.js</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">UI/UX Design</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">Web Technologies</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Hello There!</h3>
              <p className="text-lg text-gray-300">
                {"I'm Hizkia Siahaan, a Computer Science student at USU with a passion for web development."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Light Experience section
function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Startup Indonesia",
      period: "Jun 2025 - Aug 2025",
      location: "Medan, Indonesia",
      description:
        "Developed responsive web applications using React.js and Tailwind CSS. Collaborated with design team to implement pixel-perfect UI components and improved website performance by 30%.",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "Git"],
    },
    {
      title: "Web Developer",
      company: "Freelance Projects",
      period: "Jan 2025 - Present",
      location: "Remote",
      description:
        "Created custom websites for local businesses and startups. Specialized in modern web technologies and responsive design principles.",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX Design"],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Medan",
      period: "Sep 2025 - Dec 2025",
      location: "Medan, Indonesia",
      description:
        "Assisted in developing client websites and maintaining existing web applications. Gained experience in team collaboration and agile development methodologies.",
      skills: ["HTML", "CSS", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <article key={i} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <header className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-blue-600">{" · "}{exp.company}</span>
              </header>
              <p className="text-sm text-gray-500">
                {exp.period} {" | "} {exp.location}
              </p>
              <p className="mt-3 text-gray-800">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map(s => (
                  <span key={s} className="rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Light Projects section
function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      type: "Full Stack Web Application",
      status: "Completed",
      period: "May 2025 - Jun 2025",
      description:
        "Modern e-commerce platform built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      skills: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      type: "Web Application",
      status: "Completed",
      period: "Mar 2025 - Apr 2025",
      description:
        "Collaborative task management application with real-time updates. Built with modern web technologies and features drag-and-drop functionality, team collaboration, and project tracking.",
      skills: ["Vue.js", "Firebase", "Socket.io"],
    },
    {
      title: "Portfolio Website",
      type: "Static Website",
      status: "Completed",
      period: "Jan 2025 - Feb 2025",
      description:
        "Responsive personal portfolio website showcasing projects and skills. Built with modern design principles and optimized for performance and SEO.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article key={i} className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-blue-600">{project.type}</p>
              <p className="text-sm text-gray-500">
                {project.status} {" | "} {project.period}
              </p>
              <p className="mt-3 text-gray-800">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map(s => (
                  <span key={s} className="rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Light Skills section
function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-blue-600">{s.level}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-200">
                <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Light Contact section
function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-XL md:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          {"Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."}
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks! Your message has been sent.")
            }}
            className="space-y-4"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" placeholder="Your name" required className="h-10 rounded-md border px-3 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" placeholder="Your email" required className="h-10 rounded-md border px-3 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows="4" placeholder="Your message" required className="rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full h-10 rounded-md transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="scroll-smooth">
      <TopNav />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About /> {/* kept from your file */}
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        {"© "}{new Date().getFullYear()} {"Nguyễn Vĩnh Phát. All rights reserved."}
      </footer>
    </div>
  )
}

export default Home