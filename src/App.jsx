import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
