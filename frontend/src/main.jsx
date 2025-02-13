import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MovieDetails from './pages/movieDetails.jsx';
import SerieDetails from './pages/serieDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/serie/:id' element={<SerieDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
