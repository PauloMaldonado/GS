import React, { useState } from 'react';
import './ContatoForm.css';
import emailjs from '@emailjs/browser'

const ContatoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e){
    e.preventDefault();
    if(name === '' || email === '' || message ===''){
        alert("Preencha todos os campos");
        return
    }
    
    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    emailjs.send("service_4vpbvnc", "template_z23apc8", templateParams,"hxX_WReoYj6ZgA4hv")
    .then((response)=> {
        console.log("Email Enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    
    }, (err)=> {
        console.log("Erro: ", err)
    })
}

  return (
    <div className="conteudo-formulario">
      <h1 className="titulo-form heading-secondary">
        Contate-<span>nos</span>
      </h1>

      <form className='formulario' onSubmit={sendEmail}>
        <div className="form-campos">
          <div>
            <label>Nome</label>
            <input
              className="dados"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              className="dados"
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>

        <div className="form-campos">
          <div>
            <label>Assunto</label>
            <input type="text" name="assunto" />
          </div>
        </div>

        <div className="form-campos">
          <div>
            <label>Mensagem</label>
            <textarea
              className="textarea"
              type="text"
              name="message"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <input className="bttn" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContatoForm;
