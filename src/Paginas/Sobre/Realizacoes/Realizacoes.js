import React from 'react'
import './Realizacoes.css'

const Realizacoes = () => {
  return (
    <div className='conteudo realizacoes'>
        <div className='grid-conteudo'>
        <div>
                <h1>300</h1>
                <p className='subtitulo-realizacoes'>Cestas básicas entregues</p>
            </div>

            <div>
                <h1>4</h1>
                <p className='subtitulo-realizacoes'>Membros</p>
            </div>

            <div>
                <h1>+ de 250</h1>
                <p className='subtitulo-realizacoes'>Doadores cadastrados</p>
            </div>

            <div>
                <h1>+ de 20</h1>
                <p className='subtitulo-realizacoes'>Refeições entregues diariamente</p>
            </div>
        </div>
    </div>
  )
}

export default Realizacoes