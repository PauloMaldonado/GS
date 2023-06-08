import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='section footer'>
      <div className='grid-conteudo'>
          <div className='footer-equipe'>
            <p className='nome'>Paulo Roberto</p>
            <p className='materia'>Responsive Web</p>
            <p className='materia'>Software Design</p>
            <p className='rm'>RM 96877</p>
          </div>
          <div className='footer-equipe'>
            <p className='nome'>Leonardo Sagara</p>
            <p className='materia'>Database</p>
            <p className='materia'>AI Chatbot</p>
            <p className='rm'>RM 96934</p>
          </div>
          <div className='footer-equipe'>
            <p className='nome'>Raquel Calmon</p>
            <p className='materia'>Domain Drive Design</p>
            <p className='materia'>Software Design</p>
            <p className='rm'>Software Design</p>
          </div>
          <div className='footer-equipe'>
            <p className='nome'>Igor Queiroz</p>
            <p className='materia'>Python</p>
            <p className='rm'>RM 97027</p>
            </div>
          </div>
        </div>

    
  )
}

export default Footer