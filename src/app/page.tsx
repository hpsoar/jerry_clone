import Image from "next/image";
import Menu from "./menu";
import Header from "./header";
import Footer from "./footer";
import Main from './main';

const menuStyle: React.CSSProperties = {
  position: 'fixed',
  zIndex: 10000,
  width: '100%'
};

const headerStyle = {
  padding: '23px',
  height: '200px',
  alignItems: 'center'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="section-content">
        <Menu />
      </div>
      <Main />
      <div>

      </div>
      <Footer />
    </main>
  );
}
