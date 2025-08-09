"use client"

import { useEffect, useMemo, useState, useRef } from "react"
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
  Server,
  Wrench,
  Code,
} from "lucide-react"
import { motion, useInView } from "framer-motion"

// helper: smooth scroll with offset for sticky nav
function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 96 // height buffer for top pill nav
  const y = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: "smooth" })
}

/* Animated wrapper that reveals when in view (reference: user's AppBody motion.div pattern) */
function AnimatedInView({ children, variant = "up", delay = 0, duration = 0.7, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    zoom: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  }
  const v = variants[variant] || variants.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={v.initial}
      animate={isInView ? v.animate : v.initial}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Floating top pill navigation with scrollspy ---------- */
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

/* ---------- Typewriter with delete-and-type loop ---------- */
function useTypewriterLoop(text, { typeSpeed = 90, deleteSpeed = 60, pause = 900 } = {}) {
  const [output, setOutput] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const indexRef = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    function tick() {
      if (isTyping) {
        const next = text.slice(0, indexRef.current + 1)
        setOutput(next)
        indexRef.current++
        if (next.length === text.length) {
          setIsTyping(false)
          timeoutRef.current = setTimeout(tick, pause)
          return
        }
        timeoutRef.current = setTimeout(tick, typeSpeed)
      } else {
        const next = text.slice(0, indexRef.current - 1)
        setOutput(next)
        indexRef.current--
        if (indexRef.current === 0) {
          setIsTyping(true)
          timeoutRef.current = setTimeout(tick, pause / 2)
          return
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed)
      }
    }
    tick()
    return () => clearTimeout(timeoutRef.current)
  }, [text, typeSpeed, deleteSpeed, pause])

  return output
}

/* ---------- Hero (7/3 split, image smaller on the right) ---------- */
function Hero() {
  const typed = useTypewriterLoop("Frontend Developer")

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 scroll-mt-24">
      {/* caret blink style for the typing badge */}
      <style>{`
        .typing-caret {
          border-right: 2px solid #111;
          white-space: nowrap;
          overflow: hidden;
          animation: caret-blink 1s step-end infinite;
        }
        @keyframes caret-blink { 50% { border-color: transparent } }
      `}</style>

      <div className="max-w-6xl mx-auto grid items-center gap-8 px-4 md:grid-cols-10">
        {/* Text 7/10 */}
        <AnimatedInView variant="up" className="md:col-span-7">
          

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{"Hi, I'm Nguyen Vinh Phat"}</h1>

          <div className="inline-flex items-center rounded-full mt-3 py-2">
            <span className="typing-caret text-gray-800 text-xl font-medium">{typed}</span>
          </div>

          <p className="mt-4 max-w-xl text-lg text-gray-600">
            {
              "Web developer focused on ReactJS/Redux, clean UI with Ant Design and Tailwind CSS, and solid CI/CD practices."
            }
          </p>

          <div className="mt-5 flex items-center gap-3">
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

          {/* <div className="mt-6 flex items-center gap-3">
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
          </div> */}
        </AnimatedInView>

        {/* Image 3/10 */}
        <AnimatedInView variant="left" className="md:col-span-3">
          <img
            src="https://placehold.co/520x380/png?text=Frontend+Developer"
            alt="Hero illustration"
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover md:h-[320px]"
          />
        </AnimatedInView>
      </div>
    </section>
  )
}

/* ---------- About (7/3 split, image on the LEFT) ---------- */
function About() {
  return (
    <section id="about" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedInView variant="zoom">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        </AnimatedInView>

        <div className="grid md:grid-cols-10 gap-10 items-start">
          {/* Image 3/10 on the left */}
          <AnimatedInView variant="right" className="md:col-span-3">
            <div className="rounded-xl bg-white p-3 ring-1 ring-gray-200">
              <img
                src="https://placehold.co/560x520/png?text=Your+Photo"
                alt="Portrait of Nguyen Vinh Phat"
                className="h-[320px] sm:h-[360px] md:h-[420px] w-full rounded-lg object-cover"
              />
            </div>
          </AnimatedInView>

          {/* Text 7/10 */}
          <AnimatedInView variant="up" className="md:col-span-7">
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
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 font-medium text-xs sm:text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  )
}

/* ---------- Experience with Tabs (Work / Education) ---------- */
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
        <AnimatedInView variant="zoom">
          <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
        </AnimatedInView>

        {/* Tabs */}
        <AnimatedInView variant="up" className="mb-8 flex justify-center">
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
        </AnimatedInView>

        {/* Timeline list */}
        <AnimatedInView variant="left" className="border-l-[4px] border-gray-800 pl-5 space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-7 top-0 h-3 w-3 rounded-full bg-gray-900 ring-4 ring-white" />
              <AnimatedInView variant="up" delay={idx * 0.08}>
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
                  {item.bullets?.length > 0 && (
                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-1">
                      {item.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {item.tech?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="rounded-full bg-gray-900/90 px-3 py-1 text-xs text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </AnimatedInView>
            </div>
          ))}
        </AnimatedInView>
      </div>
    </section>
  )
}

/* ---------- Projects ---------- */
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
        <AnimatedInView variant="zoom">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        </AnimatedInView>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedInView key={i} variant="zoom" delay={i * 0.08}>
              <article className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-blue-600">{project.type}</p>
                <p className="text-sm text-gray-500">
                  {project.status}
                </p>
                <p className="mt-3 text-gray-800">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 font-medium text-xs">
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
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Skills with Tabs (no % bars, framed cards like screenshot) ---------- */
function Skills() {
  const TABS = [
    { id: "programming", label: "Programming", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Server },
    { id: "tools", label: "Tools", icon: Wrench },
  ]

  const SKILLS = {
    programming: ["JavaScript", "Java"],
    frontend: ["ReactJS", "Redux", "HTML", "CSS", "SCSS", "Tailwind CSS", "Ant Design"],
    backend: ["Spring Boot", "MySQL"],
    tools: ["Git", "SourceTree", "GitHub Actions", "GitLab CI/CD", "Docker"],
  }

  const [tab, setTab] = useState("programming")
  const items = SKILLS[tab] || []

  return (
    <section id="skills" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedInView variant="zoom">
          <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>
        </AnimatedInView>

        {/* Tabs bar (pill style like Experience) */}
        <AnimatedInView variant="up" className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1 shadow-inner">
            {TABS.map(({ id, label, icon: Icon }) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              )
            })}
          </div>
        </AnimatedInView>

        {/* Framed cards grid (no percentage bars) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((skill, i) => (
            <AnimatedInView key={skill} variant="up" delay={i * 0.06}>
              <div className="rounded-xl bg-white p-5 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{skill}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">Skill</span>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-24 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <AnimatedInView variant="zoom">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        </AnimatedInView>
        <AnimatedInView variant="up">
          <p className="text-center text-gray-600 mb-8">
            {"Leave me a message — I'll get back to you as soon as possible."}
          </p>
        </AnimatedInView>

        <AnimatedInView variant="right">
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
        </AnimatedInView>
      </div>
    </section>
  )
}

/* ---------- Floating "scroll to top" button ---------- */
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

/* ---------- Home (global smooth anchors) ---------- */
const Home = () => {
  // Global smooth scrolling for any in-page anchor links (fallback)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = (a.getAttribute("href") || "").replace("#", "")
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
