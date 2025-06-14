import me from '../assets/me.webp'
import '../index.css'
import { type JSX } from 'react';
// import { Drawer } from 'vaul';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#2B2036] to-[#5c4a80] min-h-screen overflow-y-auto">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

function Header(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between w-full relative p-5 sm:px-17">
      <h1 className="fancy text-6xl ml-2 break-words">
        <span className="sr-only">Portfolio of Jacob Ativo</span>
        Jacob Ativo
      </h1>
      <a
        href="/Jacob-Ativo-Resume.pdf"
        target="_blank"
        className="
  border-2 border-white rounded-lg 
  hover:bg-white active:bg-white transition-colors 
  font-[inter] text-white 
  hover:text-[#211B33] active:text-[#211B33] 
  flex items-center justify-center px-6 py-2
"
        aria-label="Download Jacob Ativo Résumé"
      >
        Résumé
      </a>

      {/* Page too short for ts. Keeping it here just in case
      <div className="hidden sm:flex flex-row space-x-10 sm:space-x-6 text-2xl font-[Bodoni_Moda] italic mt-2 mr-2">
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>

      {// Hamburger Menu }
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className="sm:hidden mr-2 mt-3 p-2">
            <div className="space-y-1 [&>*]:block [&>*]:w-6 [&>*]:h-0.5 [&>*]:bg-white">
              <span />
              <span />
              <span />
            </div>
          </button>
        </Drawer.Trigger>

        {// Drawer for Menu}
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-[#2B2036] flex flex-col rounded-t-2xl h-[50vh] mt-24 fixed bottom-0 left-0 right-0">
          <ul className="p-6 text-white text-center font-[bodoni_moda] italic [&>*]:text-3xl space-y-[8vh]">
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </Drawer.Content>
      </Drawer.Root> */}
    </div>
  );
}

// WIP: ai slop
function About(): JSX.Element {
  return (
    <section
      className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-stretch mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="About Jacob Ativo – Computer Science Student, Software Developer, Embedded Systems Enthusiast"
    >
      <div className="w-full min-w-[320px] max-w-[35vw] max-h-[62vh] aspect-[2/3] bg-black overflow-hidden rounded-2xl">
        <img
          src={me}
          alt="Jacob Ativo at de Young Museum in San Francisco"
          className="w-full h-full object-cover object-[75%_0%]"
          loading="lazy"
        />
      </div>
      <div className="w-[320px] sm:w-full min-h-[480px] bg-[#211B33] rounded-2xl">
        <p className="font-[inter] text-2xl font-thin p-3.5">
          I'm a Computer Science major at Cal State East Bay with a strong foundation in Java, C++, and systems programming. I enjoy building tools that help people communicate, learn, or play—from multiplayer chat apps to interactive web tools. Alongside technical projects, I've worked as a CS tutor and supplemental instructor, helping peers improve their coding skills. I’ve also led tech workshops through community organizations, reinforcing my belief that code is a tool for inclusion.<br /><br />

          Lately, I've been diving deeper into low-level development—exploring NASM, bootloaders, and Linux internals—while continuing to grow my experience in team-based software projects. My long-term goal is to work on embedded systems, security, and tooling that make technology more secure, transparent, and teachable. Whether through open-source work or community education, I want to help others better understand the systems they rely on.

        </p>
      </div>
    </section>
  );
}



function Projects(): JSX.Element {
  type Project = {
    title: string;
    description: string;
    demo: string;
    source: string;
  };

  const projects: Project[] = [
    {
      title: "Communication App",
      description: "Built a multi-user chat application in Java with a team of 5, implementing messaging features and unit tests using JUnit. Followed the SDLC from planning to deployment.",
      demo: "https://youtu.be/TQXtQrqO0D8",
      source: "https://github.com/yoshiyahoo/Communication-App",
    },
    {
      title: "MESA U Hackathon",
      description: "Developed an educational game using Pygame that simulates scam emails in a mock inbox. Won “Best Use of GitHub” for effective version control and team collaboration.",
      demo: "https://youtu.be/x8ZUAvUPp0o",
      source: "https://github.com/BigBoySanchez/Mesa-U",
    },
    {
      title: "Clown Cafe",
      description: "Browser-based decoration simulator using Phaser.js and arcade physics. Entirely coded in JavaScript and deployed on itch.io as a fun, interactive project.",
      demo: "https://bigboysanchez.itch.io/clown-cafe",
      source: "https://github.com/BigBoySanchez/Clown-Cafe",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="Portfolio Projects – Java, Python, JavaScript"
    >
      <h1 className="text-3xl font-bold text-white mb-8 font-[inter]">
        <span className="sr-only">
          Software Development Projects in Java, Python, JavaScript, Game Development
        </span>
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#211B33] rounded-2xl shadow-md p-6 hover:shadow-xl active:shadow-xl transition-all duration-300 
        hover:-translate-y-2 active:-translate-y-2 hover:bg-[#2B2036] active:bg-[#2B2036] transform text-white flex flex-col justify-between"
            aria-label={`View details for ${project.title} project`}
          >
            <div>
              <h2 className="text-xl font-semibold font-[inter]">{project.title}</h2>
              <p className="text-gray-300 mt-2 font-[inter]">{project.description}</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
                <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label={`Open ${project.title} demo`}
                title="View Demo"
                onClick={e => e.stopPropagation()}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                </a>
                <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label={`View ${project.title} on GitHub`}
                title="View Source Code"
                onClick={e => e.stopPropagation()}
                >
                <FaGithub className="w-5 h-5" />
                </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills(): JSX.Element {
  const skills = {
    "Programming Languages": ["Java", "JavaScript/TypeScript", "Python", "C/C++", "Assembly"],
    "Development Tools": ["Git", "GitHub", "Phaser.js", "Pygame", "Lens Studio", "JUnit", "HTML/CSS"],
    "Soft Skills": ["Team Collaboration", "Public Speaking", "Workshop Facilitation", "Tutoring", "Adaptability"]
  };

  return (
    <section
      className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto"
      aria-label="Skills – Programming Languages, Development Tools, Soft Skills"
    >
      <div className="w-full max-w-5xl bg-[#211B33] rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-white mb-8 font-[inter]">
          <span className="sr-only">
            Skills in Programming Languages, Development Tools, and Soft Skills
          </span>
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white mb-4 font-[inter]">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full font-[inter] whitespace-nowrap"
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact(): JSX.Element {
  return (
    <footer
      className="flex flex-col items-center justify-end mt-6 lg:mt-9 mb-0 h-auto"
      aria-label="Contact Jacob Ativo – Email, LinkedIn, GitHub"
    >
      <div className="w-full bg-[#211B33] p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 font-[inter]">
            <span className="sr-only">Copyright Jacob Ativo</span>
            &copy; {new Date().getFullYear()} Jacob Ativo
          </p>
          <div className="flex gap-6 text-lg text-gray-300">
            <a
              href="mailto:jacobmath3@gmail.com"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Email Jacob Ativo"
              title="Email Jacob Ativo"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-ativo-awesome-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Jacob Ativo LinkedIn Profile"
              title="Jacob Ativo LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BigBoySanchez/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white active:text-white transition-colors"
              aria-label="Jacob Ativo GitHub Portfolio"
              title="Jacob Ativo GitHub Portfolio"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomePage;
