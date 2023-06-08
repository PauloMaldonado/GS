import React from 'react'
import './CapaTopo.css'

const CapaTopo = (props) => {
  return (
    <div
      className="Capa-topo-principal"
      style={{
        background: `url(${props.CapaImg}) no-repeat bottom center/cover`,
        height: "60vh"
      }}
    >
      <div className='banner-conteudo'>
        <h1 className='titulo-capa-principal'>{props.heading}</h1>
        <p className='subtitulo-capa'>{props.text}</p>
      </div>
    </div>
  )
}

export default CapaTopo