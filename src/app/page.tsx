import Image from "next/image";
import Menu from "./menu";
import Header from "./header";

const menuStyle = {
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
    <div style={menuStyle}>
      <Menu/>
    </div>
    <Header/>
    </main>
  );
}
