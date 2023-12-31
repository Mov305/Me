// Components
import Nav from '@components/nav';
import Wheel from '@components/Wheel';
import Particles from '@components/Particles';
// font
import { teko } from '@/utils/font';

export const metadata = {
  title: 'ABDELRHMAN (MOV)',
  description: 'Abdelrhman (MOV) is a full-stack developer and a UI/UX designer.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }) {
  return (
    <div
      className="flex flex-col items-center w-full text-slate-50 relative overflow-hidden"
      style={{
        // space gradient background
        background: 'fixed radial-gradient(#041f3d, #07070c)',
      }}
    >
      <Nav />
      <Particles />
      <main className={`relative md:pl-32 md:w-full z-0 ${teko.className}`}>{children}</main>
      <div className="absolute top-[88vh] sm:top-[90vh] z-10 left-[50vw] -translate-x-1/2 flex items-center justify-center">
        <Wheel />
      </div>
    </div>
  );
}
