import { Workflow } from "./components/Workflow";
import { Feature } from "./components/Feature";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { Pircing } from "./components/Pircing";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
        <Pircing />
      </main>
    </>
  );
}

export default App;
