// src/App.jsx
import MainRoutes from './routes/MainRoutes';
import { ArrowUp } from 'lucide-react';


function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <MainRoutes />

      <button
        className="absolute z-50 bottom-4 right-4 bg-yellow-400 px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    </div>
  );
}

export default App;

