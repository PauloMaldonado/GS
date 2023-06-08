import React from 'react'
import CapaTopo from '../../Componentes/CapaTopo/CapaTopo'
import CapaImg from '../../Ferramentas/imagens/Capa10.jpg'
import AlimentosInfo from './AlimentosInfo/AlimentosInfo'

const Alimentos = () => {
  return (
    <div>
    <CapaTopo CapaImg={CapaImg}
      heading={['Alimentos', <span> Disponiveis </span>]}
      text="Todos produtos cadastrados em nosso site estão aqui"/>  
      <AlimentosInfo />    
    </div>
  )
}

export default Alimentos