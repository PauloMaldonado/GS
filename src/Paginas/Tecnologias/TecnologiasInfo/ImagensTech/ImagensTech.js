import React from 'react'
import './ImagensTech.css'
import Imagem1 from '../../../../Ferramentas/imagens/img1.jpg' 
import Imagem2 from '../../../../Ferramentas/imagens/img8.jpg' 
import Imagem3 from '../../../../Ferramentas/imagens/img3.jpg' 
import Imagem4 from '../../../../Ferramentas/imagens/img4.jpg' 
import Imagem5 from '../../../../Ferramentas/imagens/img5.jpg' 
import Imagem6 from '../../../../Ferramentas/imagens/img9.jpg' 
import Imagem7 from '../../../../Ferramentas/imagens/img7.jpg' 
import Imagem8 from '../../../../Ferramentas/imagens/img2.jpg' 
import Imagem9 from '../../../../Ferramentas/imagens/img6.jpeg' 
import Imagem10 from '../../../../Ferramentas/imagens/img10.jpg' 

const ImagensTech = () => {
  return (
    <div className='imagensia'>
        <figure className='foto-ia foto-ia-1'>
            <img src={Imagem1} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-2'>
            <img src={Imagem2} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-3'>
            <img src={Imagem3} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-4'>
            <img src={Imagem4} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-5'>
            <img src={Imagem5} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-6'>
            <img src={Imagem6} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-7'>
            <img src={Imagem7} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-8'>
            <img src={Imagem8} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-9'>
            <img src={Imagem9} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
        <figure className='foto-ia foto-ia-10'>
            <img src={Imagem10} alt='inteligencia artificial' className='galeria_ia'/>
        </figure>
    </div>
  )
}

export default ImagensTech