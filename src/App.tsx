import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import { ModeProvider } from '@/context/ModeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Assistant from '@/pages/Assistant';
import Standards from '@/pages/Standards';
import StandardDetails from '@/pages/StandardDetails';
import Certification from '@/pages/Certification';
import Services from '@/pages/Services';
import Industry from '@/pages/Industry';
import Consumer from '@/pages/Consumer';
import About from '@/pages/About';

export default function App() {
  return (
    <LanguageProvider>
      <ModeProvider>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assistant" element={<Assistant />} />
                <Route path="/standards" element={<Standards />} />
                <Route path="/standards/:id" element={<StandardDetails />} />
                <Route path="/certification" element={<Certification />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/consumer" element={<Consumer />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ModeProvider>
    </LanguageProvider>
  );
}
