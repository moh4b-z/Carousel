import { useState } from 'react'
import Foto from './foto'
import './foto.css'

function Carousel({ fotos }) {
  const [indexAtual, setIndexAtual] = useState(0);

  const proxima = () => {
    setIndexAtual((prev) => (prev + 1) % fotos.length);
  };

  const anterior = () => {
    setIndexAtual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className="carousel">
      <button onClick={anterior}>◀</button>
      <Foto foto={fotos[indexAtual]} />
      <button onClick={proxima}>▶</button>
    </div>
  );
}

export default Carousel;
