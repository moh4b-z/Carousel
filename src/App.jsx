import { useEffect, useState } from 'react'
import getFotos from './services/getFotos'
import Carousel from './componetes/carrossel'
import './App.css'

function App() {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    async function carregar() {
      try {
        const lista = await getFotos()
        setFotos(lista)
      } catch (error) {
        console.error('Erro ao carregar fotos:', error)
      }
    }

    carregar()
  }, [])

  return (
    <div>
      {fotos.length > 0 ? (
        <Carousel fotos={fotos} />
      ) : (
        <p>Carregando imagens...</p>
      )}
    </div>
  )
}

export default App
