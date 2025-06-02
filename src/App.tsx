import { Drawer } from 'vaul';
import me from './assets/me.jpg'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <About />
    </>
  )
}

function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full relative p-5 sm:px-17">
      <p className="font-[Hurricane] text-6xl ml-2">Jacob Ativo</p>

      <div className="hidden sm:flex flex-row space-x-10 sm:space-x-6 text-2xl font-[Bodoni_Moda] italic mt-2 mr-2">
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>

      {/* Hamburger Menu */}
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

        {/* Drawer for Menu */}
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-2xl h-[50vh] mt-24 fixed bottom-0 left-0 right-0">
          <ul className="p-6 space-y-4 text-lg text-black text-center">
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-stretch mt-6 lg:mt-9 px-10 max-h-[82vh]">
      <div className="w-full sm:w-auto max-w-[35vw] min-w-[320px] aspect-[2/3] bg-black overflow-hidden">
        <img
          src={me}
          alt="Me at de Young in SF. Cool place."
          className="w-full h-full object-cover object-[75%_0%]"
        />
      </div>
      <div className="w-[320px] sm:w-full min-h-[480px] bg-[#211B33]">
        <p className="font-[inter] text-xl font-thin p-3.5">
          I’m a Computer Science student with a strong academic background (GPA: 3.69) and a diverse 
          portfolio of technical and community-focused experiences. I’ve developed projects ranging from 
          a Java-based chat application and a word puzzle solver to educational games and AR filters. 
          My recent coursework includes Operating Systems, Computer Networks, Software Engineering, 
          and Security & Information Assurance.<br/><br/>Outside the classroom, I’ve worked as a peer tutor, 
          simplifying complex CS concepts for fellow students, and interned with community organizations 
          to lead workshops and promote engagement. I’ve also earned recognition at hackathons and 
          contributed to open-source-style collaborations.<br/><br/>I'm particularly interested in embedded 
          systems, inspired by my deep enjoyment of Assembly language. My goal is to graduate by 
          Fall 2026 and begin a career in software development or a programming-adjacent field 
          where I can continue learning, problem-solving, and contributing meaningfully to a team.
        </p>
      </div>
    </div>
  )
}

export default App
