import React from 'react'
import './SobreInfo.css'

const SobreInfo = () => {
  return (
    <div className="section">
    <div className="conteudo grid-conteudo">
      <div>
        <div className="sobre-info-content">
          <h2 className="titulo-sobre">
            Um pouco mais <span> sobre nós </span>
          </h2>

          <h4 className='subtitulo-sobre'> por dentro do Mercado Humanitário </h4>

          <p>
          Apresentamos nosso projeto {" "}
            <span className="especial">inovador</span> uma solução abrangente para combater tanto a fome quanto o desperdício de alimentos em São Paulo. 
            Somos um marketplace que conecta produtores, distribuidores, restaurantes e projetos sociais a pessoas em situação de vulnerabilidade. 
            Nosso objetivo principal é ser o elo que direciona doações para aqueles que realmente necessitam, facilitando o acesso a alimentos essenciais. 
            Oferecemos diferentes formas de assistência, como cestas básicas, refeições prontas e uma variedade de alimentos, 
            visando tornar a chegada dos alimentos mais acessível para as pessoas em situação de fome, Além disso buscamos disponibilizar informações relevantes aos consumidores finais sobre os alimentos disponíveis, incluindo informações sobre validade, valor nutricional, alergenicidade.
            
            
          </p>

        
        </div>
      </div>

      <div>
        <div className="sobre-info-content">
          <h2 className="titulo-sobre">
           Quer participar mas não sabe como? A gente <span> explica</span>
          </h2>

          <h4 className='subtitulo-sobre'>Comece a doar agora mesmo!</h4>

          <p>
            Para doar é simples, basta cadastrar seu endereço, informar a válidade, e se deseja doar Cestas básicas, refeições completas, ou apenas alimentos, e informar se a entrega será feita direto ao consumidor ou se é necessário a retirada.
            Após isso sua doação é cadastrada no nosso banco de dados. Caso seja necessária a retirada do produto, ele é repassado a projetos sociais para que possa ser entregue a familias vulneraveis, em caso de entrega após a confirmação do consumidor nós recebemos o produto e repassamos ao consumidor. 
            Mas vale ressaltar devido a  Lei nº 14.016, só aceitamos doações de Empresas, hospitais, supermercados, cooperativas, restaurantes, lanchonetes e todos os demais estabelecimentos que forneçam alimentos preparados prontos para o consumo de trabalhadores, de empregados, de colaboradores, de parceiros, de pacientes e de clientes em geral, 
            e os produtos doados devem ter sua segurança sanitária e integridade mantidas, além da sua propriedade nutricional.
            
          </p>

       
        </div>
      </div>
    </div>
</div>
  )
}

export default SobreInfo