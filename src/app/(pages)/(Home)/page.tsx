import MainCanvas from '@components/MainCanvas';
import Mov from './Mov';
export default function Home() {
  return (
    <div className="relative w-full">
      <main className="flex w-full min-h-screen flex-col items-center justify-between relative z-[1]">
        <div id="mov" className="h-screen w-full">
          <Mov />
        </div>
        <div id="details" className=" h-screen">
          details
        </div>
        <div id="services" className=" h-screen">
          services
        </div>
        <div id="projects" className=" h-screen">
          projects
        </div>
        <div id="contact" className=" h-screen">
          contact
        </div>
      </main>
      <div className="fixed z-0 w-full h-screen top-0 left-0">
        <MainCanvas />
      </div>
    </div>
  );
}
