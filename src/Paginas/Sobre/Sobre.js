import React from 'react'
import CapaTopo from '../../Componentes/CapaTopo/CapaTopo'
import CapaImg from '../../Ferramentas/imagens/Capa9.jpg'
import SobreInfo from './SobreInfo/SobreInfo'
import Realizacoes from './Realizacoes/Realizacoes'



const Sobre = () => {
  return (
    <div>
    <CapaTopo CapaImg={CapaImg}
      heading={['Sobre nosso', <span> Projeto </span>]}
      text="Saiba um pouco mais sobre nosso projeto"/>
    <SobreInfo />
    <Realizacoes />
    </div>
  )
}

export default Sobre