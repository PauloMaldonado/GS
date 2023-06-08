import React, { useState } from 'react'
import "./Alimentos.css"
import foto1 from "../../../Ferramentas/imagens/comida1.jpg"
import foto2 from "../../../Ferramentas/imagens/comida2.jpg"
import foto3 from "../../../Ferramentas/imagens/comida3.jpg"
import foto4 from "../../../Ferramentas/imagens/comida4.jpg"
import foto5 from "../../../Ferramentas/imagens/comida5.jpg"
import Cesta from "../../../Ferramentas/imagens/Cesta.jpg"
import foto6 from "../../../Ferramentas/imagens/desperdicio.jpg"
import {BsFillStarFill} from 'react-icons/bs'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Alimentos = () => {

    const [items] = useState([
        {id:1, url:foto1},
        {id:2, url:foto2},
        {id:3, url:foto3},
        {id:4, url:foto4},
        {id:5, url:foto5},
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed:5000,
      };
  return (
    <div className='section'>
        <div className='conteudo'>
            <div className='alimentos-conteudo'>
                <div className='alimentos-carrossel'>
                    <div>
                        <Slider {...settings}>
                        {items.map(item => (
                            <div key={item.id}>
                                <img src={item.url} alt='carossel img'/>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>


                <div className='alimentos-texto'>
                    <h2 className='heading-secundaria'>
                        Alimentando bem <span className='ampersand'>&#38;</span>
                        <br />
                        <span>
                        Evitando <br />Desperdício
                        </span>
                        </h2>

                        
                        <p>
                        Atualmente, o desperdício de alimentos se tornou um dos principais aliados da fome no Brasil. É alarmante constatar que, em média, cerca de 50% dos alimentos produzidos no país são descartados. Essa realidade se repete em diversas feiras livres, onde toneladas de verduras, legumes e vegetais são jogados fora semanalmente. No estado de São Paulo, uma triste estatística revela que aproximadamente 33 mil toneladas de alimentos são desperdiçadas anualmente, alimentos estes que ainda estariam aptos para o consumo.
                            <br />
                            <br />
                            Combater o desperdício de comida é uma ação fundamental para enfrentar a fome em São Paulo, por isso lançamos o Mercado Humanitário, onde buscamos conectar restaturantes, produtores, e distribuidores, dando fim a esse desperdicio de comida reaproveitando tudo que for possivel em prol de alimentar familias em situação de fome.
                        </p>

                    <blockquote>
                        Segundo pesquisas divulgadas pela CNN, entre 2020 e 2022 haviam 6,8 milhões de familias passando fome no estado de São Paulo
                    </blockquote>
                 </div>
            </div>
            <div className='alimentos-card-conteudo'>
                <div className='alimentos-card alimentos-card-esquerda'>
                    <img src={Cesta} alt='cesta-basica' className='alimentos-card-img'/>
                    <div className='alimentos-card-texto'>
                    <div className='alimentos-card-titulo'>
                          <BsFillStarFill color='#c3512f'/>    

                          <h3 className='heading-terceira'>Cestas Básicas <span> rechadas </span></h3>     
                    </div>
                    <p> Recebemos diariamente doações de alimentos para montar cestas básicas que são distribuídas em parceria com projetos sociais, visando alcançar famílias em situações críticas de São Paulo.                        
                    </p>
                    </div>
           
                </div>
                
                <div className='alimentos-card alimentos-card-meio'>
                    <img src={foto1} alt='refeicao' className='alimentos-card-img'/>
                    <div className='alimentos-card-texto'>
                    <div className='alimentos-card-titulo'>
                          <BsFillStarFill color='#c3512f'/>    

                          <h3 className='heading-terceira'>Refeições <span> Saborosas </span></h3>     
                    </div>
                    <p> 
                        Em parceria com restaurantes e projetos sociais, oferecemos refeições preparadas com produtos próximos à data de validade ou pratos excedentes que seriam descartados, tentando reduzir o desperdício alimentar e alimentar pessoas necessitadas                      
                    </p>
                    </div>
           
                </div>
                
                <div className='alimentos-card alimentos-card-direita'>
                    <img src={foto6} alt='refeicao' className='alimentos-card-img'/>
                    <div className='alimentos-card-texto'>
                    <div className='alimentos-card-titulo'>
                          <BsFillStarFill color='#c3512f'/>    

                          <h3 className='heading-terceira'>Seguimos a <span> LEI Nº 14.016 </span></h3>     
                    </div>
                    <p> Todas nossas refeições/alimentos que são cadastradas em nosso site são cuidadosamente preparadas com alimentos que atendem a três critérios fundamentais. Primeiro, garantimos que estejam dentro do prazo de validade e nas condições de conservação adequadas, seguindo as orientações dos fabricantes. Em segundo lugar, mesmo que haja danos à embalagem, não comprometemos a integridade e a segurança sanitária dos alimentos. Por fim, asseguramos que as propriedades nutricionais e a segurança sanitária sejam mantidas, mesmo que os alimentos tenham sofrido algum dano parcial ou apresentem um aspecto comercialmente indesejável                     
                    </p>
                    </div>
           
                </div>

            </div>
        </div>

    </div>
  )
}

export default Alimentos