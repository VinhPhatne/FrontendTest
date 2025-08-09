"use client"

import { useEffect, useMemo, useState } from "react"
import {
  HomeIcon,
  InfoIcon,
  BriefcaseBusiness,
  FolderOpen,
  Code2,
  MailIcon,
  GraduationCap,
  Calendar,
  MapPin,
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react"

// helper: smooth scroll with offset for sticky nav
function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 96 // height buffer for top pill nav
  const y = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: "smooth" })
}

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
    [],
  )

  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { root: null, rootMargin: "0px 0px -55% 0px", threshold: [0.2, 0.5, 0.75] },
    )
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [NAV_ITEMS])

  return (
    <div className="sticky top-4 z-50 flex w-full justify-center">
      <nav className="flex items-center gap-2 rounded-full border bg-white px-8 py-3 shadow-md">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo(id)
              }}
              className={[
                "group mr-2 flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors",
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
              <span className="hidden sm:inline text-sm font-medium">{label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

// Hero (English + social links + typing effect badge)
function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 scroll-mt-24" aria-label="Introduction">
      {/* typing effect styles */}
      <style>{`
        .typewriter {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid #111;
          white-space: nowrap;
          animation: typing 2.8s steps(18, end) 0.2s both, blink 1s step-end infinite;
        }
        @keyframes typing { from { width: 0 } to { width: 18ch } }
        @keyframes blink { 50% { border-color: transparent } }
      `}</style>

      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="mx-auto inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
          <span className="typewriter text-gray-800 text-sm font-medium">Frontend Developer</span>
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{"Hi, I'm Nguyen Vinh Phat"}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {
            "Web developer focused on ReactJS/Redux, clean UI with Ant Design and Tailwind CSS, and solid CI/CD practices."
          }
        </p>

        <div className="mt-3 flex items-center justify-center gap-3 text-sm text-gray-500">
          <span>{"Ho Chi Minh City"}</span>
          <span>{"•"}</span>
          <a href="mailto:nguyenvinhphat123@gmail.com" className="hover:text-gray-700">
            {"nguyenvinhphat123@gmail.com"}
          </a>
          <span>{"•"}</span>
          <a href="tel:0886815356" className="hover:text-gray-700">
            {"0886 815 356"}
          </a>
        </div>

        {/* Only here: LinkedIn & GitHub */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/ngvinhphat/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/VinhPhatne"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo("contact")
            }}
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
          >
            Contact me
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo("projects")
            }}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  )
}

// About (light theme, replace certificates with a portrait image like the reference site)
function About() {
  return (
    <section id="about" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xl mb-4 text-gray-800">Profile</p>
            <p className="text-gray-700 leading-relaxed">
              {
                "As a web development student, my goal is to become a professional Frontend Engineer. I enjoy building clean, accessible, and performant interfaces, and continuously improve through real-world projects."
              }
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm">
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">Name:</strong> Nguyen Vinh Phat
              </div>
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">Location:</strong> Ho Chi Minh City
              </div>
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">Education:</strong> HCMUTE (2021–2025)
              </div>
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">GPA:</strong> 3.15/4
              </div>
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">Email:</strong> nguyenvinhphat123@gmail.com
              </div>
              <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                <strong className="text-gray-900">Phone:</strong> 0886 815 356
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Interests & Focus</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Frontend Development", "ReactJS / Redux", "UI/UX & Ant Design", "Tailwind CSS"].map((t) => (
                  <span key={t} className="rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-xs sm:text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait image card (replace certificates) */}
          <div className="rounded-xl bg-white p-3 ring-1 ring-gray-200">
            <img
              src="https://placehold.co/560x520/png?text=Your+Photo"
              alt="Portrait of Nguyen Vinh Phat"
              className="h-[320px] sm:h-[360px] md:h-[420px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience with Tabs (Work Experience / Education). Achievements omitted per request.
function Experience() {
  const [tab, setTab] = useState("work")

  const workItems = [
    {
      title: "Front-End Developer",
      org: "DVMS · Ilms",
      period: "09/2024 – 12/2024",
      location: "Ho Chi Minh City, Vietnam",
      description: "Project management web app for tracking tasks, assignments, and progress.",
      bullets: [
        "Maintained and optimized existing features for performance and usability.",
        "Implemented task, HR, and salary status modules.",
        "Integrated RESTful APIs to render dynamic data.",
      ],
      tech: ["ReactJS", "Redux", "Ant Design"],
    },
    {
      title: "Front-End Developer",
      org: "DVMS · HQ‑SPOS",
      period: "12/2024 – 03/2025",
      location: "Ho Chi Minh City, Vietnam",
      description: "Restaurant management website (menus and settings) supporting POS machines.",
      bullets: [
        "Developed restaurant, menu, and settings management for POS workflow.",
        "Maintained core modules and enhanced features per business needs.",
      ],
      tech: ["ReactJS", "Redux", "Ant Design"],
    },
    {
      title: "Front-End Developer",
      org: "DVMS · HQ‑NAILS",
      period: "12/2024 – 06/2025",
      location: "Ho Chi Minh City, Vietnam",
      description: "Multi-branch nail salon platform (admin dashboard, branch users, customizable sites).",
      bullets: [
        "Built pixel-perfect UI for admin/branch/customer roles from Figma designs.",
        "Developed appointment booking, service management, and profile customization.",
        "Integrated APIs for multi-branch data synchronization.",
      ],
      tech: ["ReactJS", "Redux", "Ant Design"],
    },
  ]

  const educationItems = [
    {
      title: "Web Developer (B.E.)",
      org: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      period: "2021 – 2025",
      location: "Ho Chi Minh City, Vietnam",
      description: "Coursework focused on web development and software engineering.",
      bullets: ["GPA: 3.15/4", "TOEIC 705 (07/2024 – 07/2026)"],
      tech: ["HTML/CSS/SCSS", "JavaScript", "React", "Git"],
    },
  ]

  const items = tab === "work" ? workItems : educationItems

  return (
    <section id="experience" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>

        {/* Tabs like reference site */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1 shadow-inner">
            <button
              onClick={() => setTab("work")}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                tab === "work" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200",
              ].join(" ")}
              aria-pressed={tab === "work"}
            >
              <BriefcaseBusiness className="h-4 w-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setTab("education")}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                tab === "education" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200",
              ].join(" ")}
              aria-pressed={tab === "education"}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline list (dark left rail + dots like screenshot) */}
        <div className="border-l-[4px] border-gray-800 pl-5 space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <span className="absolute -left-7 top-0 h-3 w-3 rounded-full bg-gray-900 ring-4 ring-white" />
              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                    <p className="text-blue-600">{item.org}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-gray-800">{item.description}</p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-1">
                    {item.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                )}
                {item.tech && item.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="rounded-full bg-gray-900/90 px-3 py-1 text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects
function Projects() {
  const projects = [
    {
      title: "Order Food Web",
      type: "Web Application",
      status: "Team size: 2",
      period: "2024 – 2025",
      description:
        "A food ordering website where users can browse restaurants, manage accounts, cart, delivery tracking, and purchase history. Store owners manage restaurants and menus.",
      skills: ["React", "Tailwind CSS", "NodeJS", "MongoDB"],
      repo: "https://github.com/VinhPhatne/FastFood_Frontend_KhoaLuan",
      live: "https://fast-food-zeta-five.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
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
                {project.skills.map((s) => (
                  <span key={s} className="rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills
function Skills() {
  const skills = [
    { name: "ReactJS", level: 90 },
    { name: "Redux", level: 85 },
    { name: "HTML / CSS / SCSS", level: 88 },
    { name: "Tailwind CSS", level: 86 },
    { name: "Ant Design", level: 82 },
    { name: "Java / Spring Boot (Basic)", level: 60 },
    { name: "MySQL", level: 72 },
    { name: "MongoDB", level: 72 },
    { name: "Git / SourceTree", level: 85 },
    { name: "GitHub Actions", level: 62 },
    { name: "GitLab CI/CD", level: 62 },
    { name: "Docker", level: 60 },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-blue-600">{s.level}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-200">
                <div className="h-2.5 rounded-full bg-gray-700" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          {"Leave me a message — I'll get back to you as soon as possible."}
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
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                required
                className="h-10 rounded-md border px-3 outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="h-10 rounded-md border px-3 outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                required
                className="rounded-md border p-3 outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 rounded-md bg-gray-900 text-white hover:bg-black transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Or email me directly:{" "}
            <a className="underline hover:text-gray-800" href="mailto:nguyenvinhphat123@gmail.com">
              nguyenvinhphat123@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Floating "scroll to top" button
function ScrollToTopButton() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-black transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

const Home = () => {
  // Global smooth scrolling for any in-page anchor links (fallback)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const hash = a.getAttribute("href") || ""
      const id = hash.replace("#", "")
      if (id) {
        e.preventDefault()
        smoothScrollTo(id)
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [])

  return (
    <div className="scroll-smooth">
      <TopNav />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        {"© "} {new Date().getFullYear()} {"Nguyen Vinh Phat. All rights reserved."}
      </footer>

      <ScrollToTopButton />
    </div>
  )
}

export default Home
