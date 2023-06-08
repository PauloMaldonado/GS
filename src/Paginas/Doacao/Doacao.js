import React from 'react'
import CapaTopo from '../../Componentes/CapaTopo/CapaTopo'
import CapaImg from '../../Ferramentas/imagens/Capa13.jpg'
import DoacaoForm from './DoacaoForm/DoacaoForm'

const Doacao = () => {
  return (
    <div>
    <CapaTopo CapaImg={CapaImg}
    heading={[<span> Doação </span>]}
    text="Contribua com a nossa campanha e doe agora mesmo"/>
    <DoacaoForm />
    </div>
  )
}

export default Doacao