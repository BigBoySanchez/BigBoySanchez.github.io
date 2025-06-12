import me from './assets/me.webp'
import './index.css'
import { useEffect, type JSX } from 'react';
// import { Drawer } from 'vaul';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  useEffect(() => {
    document.documentElement.classList.add('invisible');
    document.fonts.ready.then(() => {
      document.documentElement.classList.remove('invisible');
    });
  }, []);

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
      <p className="font-[hurricane] text-6xl ml-2 break-words">Jacob Ativo</p>
      <div className="border-2 border-white rounded-lg p-2 hover:bg-white transition-colors">
        <a href="/Jacob-Ativo-Resume.pdf" target="_blank" className="font-[inter] text-white hover:text-[#211B33] px-4 py-2 rounded-lg transition-colors">
          Résumé
        </a>
      </div>

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
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-stretch mt-6 lg:mt-9 mb-9 px-10 h-auto">
      <div className="w-full min-w-[320px] max-w-[35vw] max-h-[62vh] aspect-[2/3] bg-black overflow-hidden rounded-2xl">
        <img
          src={me}
          alt="Me at de Young in SF. Cool place."
          className="w-full h-full object-cover object-[75%_0%]"
        />
      </div>
      <div className="w-[320px] sm:w-full min-h-[480px] bg-[#211B33] rounded-2xl">
        <p className="font-[inter] text-xl font-thin p-3.5">
          I’m a Computer Science student with a strong academic background (GPA: 3.69) and a diverse
          portfolio of technical and community-focused experiences. I’ve developed projects ranging from
          a Java-based chat application and a word puzzle solver to educational games and AR filters.
          My recent coursework includes Operating Systems, Computer Networks, Software Engineering,
          and Security & Information Assurance.<br /><br />

          Outside the classroom, I’ve worked as a peer tutor,
          simplifying complex CS concepts for fellow students, and interned with community organizations
          to lead workshops and promote engagement. I’ve also earned recognition at hackathons and
          contributed to open-source-style collaborations.<br /><br />

          I'm particularly interested in embedded
          systems, inspired by my deep enjoyment of Assembly language. My goal is to graduate by
          Fall 2026 and begin a career in software development or a programming-adjacent field
          where I can continue learning, problem-solving, and contributing meaningfully to a team.
        </p>
      </div>
    </div>
  )
}



function Projects(): JSX.Element {
  type Project = {
    title: string;
    description: string;
    link: string;
  };

  const projects: Project[] = [
    {
      title: "Communication App",
      description: "Built a multi-user chat application in Java with a team of 5, implementing messaging features and unit tests using JUnit. Followed the SDLC from planning to deployment.",
      link: "https://github.com/yoshiyahoo/Communication-App",
    },
    {
      title: "MESA U Hackathon",
      description: "Developed an educational game using Pygame that simulates scam emails in a mock inbox. Won “Best Use of GitHub” for effective version control and team collaboration.",
      link: "https://github.com/BigBoySanchez/Mesa-U",
    },
    {
      title: "Clown Cafe",
      description: "Browser-based decoration simulator using Phaser.js and arcade physics. Entirely coded in JavaScript and deployed on itch.io as a fun, interactive project.",
      link: "https://bigboysanchez.itch.io/clown-cafe",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto">
      <h1 className="text-3xl font-bold text-white mb-8 font-[inter]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#211B33] rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 
            hover:-translate-y-2 hover:bg-[#2B2036] active:-translate-y-2 active:bg-[#2B2036] transform text-white"
          >
            <h2 className="text-xl font-semibold font-[inter]">{project.title}</h2>
            <p className="text-gray-300 mt-2 font-[inter]">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function Skills(): JSX.Element {
  const skills = {
    "Languages": ["Java", "JavaScript", "Python", "C", "Assembly", "HTML/CSS"],
    "Tools": ["Git", "GitHub", "Phaser.js", "Pygame", "Lens Studio", "JUnit"],
    "Soft Skills": ["Team Collaboration", "Public Speaking", "Workshop Facilitation", "Tutoring", "Adaptability"]
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 lg:mt-9 mb-9 px-10 h-auto">
      <div className="w-full max-w-5xl bg-[#211B33] rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-white mb-8 font-[inter]">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white mb-4 font-[inter]">{category}</h3>
              <ul className="space-y-2 text-gray-300 font-[inter]">
                {items.map((skill, idx) => (
                  <li key={idx} className="border-b border-gray-500 pb-1">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact(): JSX.Element {
  return (
    <footer className="flex flex-col items-center justify-end mt-6 lg:mt-9 mb-0 h-auto">
      <div className="w-full bg-[#211B33] p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 font-[inter]">&copy; {new Date().getFullYear()} Jacob Ativo</p>
          <div className="flex gap-6 text-lg text-gray-300">
            <a
              href="mailto:jacobmath3@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-ativo-awesome-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/BigBoySanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
