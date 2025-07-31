import './foto.css'

function Foto({ foto }) {
  return (
    <div className="foto">
      <img src={foto.imagem} alt={`Foto de ${foto.legenda}`} />
      <span className="data">{foto.data}</span>
      <p className="legenda">{foto.legenda}</p>
    </div>
  )
}

export default Foto
