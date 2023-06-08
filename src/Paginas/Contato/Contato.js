import React from 'react'
import CapaTopo from '../../Componentes/CapaTopo/CapaTopo'
import CapaImg from '../../Ferramentas/imagens/Capa11.jpg'
import ContatoForm from './ContatoForm/ContatoForm'


const Contato = () => {
  return (
    <div>
    <CapaTopo CapaImg={CapaImg}
    heading={['Entre em', <span> Contato</span>]}
    text="Em caso de dúvidas entre em contato com o nosso suporte"/>
    <ContatoForm />
    </div>
  )
}

export default Contato