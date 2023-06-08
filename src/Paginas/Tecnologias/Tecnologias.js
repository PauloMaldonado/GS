import React from 'react'
import CapaTopo from '../../Componentes/CapaTopo/CapaTopo'
import CapaImg from '../../Ferramentas/imagens/Capa12.jpg'
import TechInfo from './TecnologiasInfo/TechInfo'
import ImagensTech from './TecnologiasInfo/ImagensTech/ImagensTech'

const Tecnologias = () => {
  return (
    <div>
     <CapaTopo CapaImg={CapaImg}
      heading={['IAs e outras', <span> Tecnologias</span>]}
      text="Como IAs generativas e outras tecnologias podem ser nossas aliadas no combate a fome"/>
    <TechInfo />
    <ImagensTech />
    </div>
  )
}

export default Tecnologias