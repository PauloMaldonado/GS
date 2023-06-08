import React from 'react'
import "./AlimentosInfo.css"
import ListItem from '../AlimentosDados/ListAlimentos'
import alimento1 from '../../../Ferramentas/imagens/Cesta2.jpg'
import alimento2 from '../../../Ferramentas/imagens/Carne.jpg'
import alimento3 from '../../../Ferramentas/imagens/Farinha.jpg'
import alimento4 from '../../../Ferramentas/imagens/Feijao.jpg'
import alimento5 from '../../../Ferramentas/imagens/Penne.jpg'
import alimento6 from '../../../Ferramentas/imagens/Espagueti.jpg'
import alimento7 from '../../../Ferramentas/imagens/biscoitos.jpg'
import alimento8 from '../../../Ferramentas/imagens/Frango.jpg'
import alimento9 from '../../../Ferramentas/imagens/Ensopado1.jpg'

const menuDataEsquerda = [
    {
      titulo: "5 Cestas Básicas 12 itens", 
      descricao: "Mantimentos essenciais.",
      img: alimento1,
    },
    {
      titulo: "Marmita de carne moida com arroz e feijão",
      descricao: "Validade: 10/06/2023",
      img: alimento2,
    },
    {
      titulo: "3 Pacotes Farinha de mandioca Gabi",
      descricao: "Validade: 05/06/2023",
      img: alimento3,
    },
    {
      titulo: "3 Pacotes de feijão preto 1Kg",
      descricao: "Validade: 06/06/2023",
      img: alimento4,
    },
  ];
  
  const menuDataDireita = [
    {
      titulo: "4 pacotes Macarrão com Ovos Penne Qualitá 500g",
      descricao: "Validade: 14/06/2023",
      img: alimento5,
    },
    {
      titulo: " 2 Cestas básicas 15 itens",
      descricao: "Mantimentos essenciais.",
      img: alimento1,
    },
    {
      titulo: "5 pacotes Biscoito Maizena 360g",
      descricao: "Validade: 07/06/2023",
      img: alimento7,
    },
    {
      titulo: "10 Marmita de frango com arroz e feijão",
      descricao: "Validade: 11/06/2023",
      img: alimento8,
    },
  ];
  
  const menuDataDireitaBaixo = [
    {
      titulo: "Marmita de frango com arroz e feijão",
      descricao: "Validade: 11/06/2023",
      img: alimento8,
    },
    {
      titulo: "10 Marmitas Macarrão Espagueti",
      descricao: "Validade: 03/06/2023",
      img: alimento6,
    },
    {
      titulo: "5 Pacotes de Arroz Parboilizado 1Kg",
      descricao: "Validade: 07/06/2023",
      img: alimento1,
    },
    {
      titulo: "5 Marmitas de Macarrão",
      descricao: "Validade: 04/06/2023",
      img: alimento6,
    },
  ];
  const menuDataEsquerdaBaixo = [
    {
      titulo: "10 Marmitas de Ensopado de Carne",
      descricao: "Validade: 03/06/2023",
      img: alimento9,
    },
    {
      titulo: "15 Marmitas de Frango Assado",
      descricao: "Validade: 03/06/2023",
      img: alimento8,
    },
    {
      titulo: "20 Cestas básicas 12 itens",
      descricao: "Mantimentos essenciais.",
      img: alimento1,
    },
    {
      titulo: "5 Pacotes de Macarrão Espaguetti 500g",
      descricao: "Validade: 12/06/2023",
      img: alimento6,
    },
  ];
  

const AlimentosInfo = () => {
  return (
    <div className="conteudo disponivel-entrega">
          <h1 className="heading-secundaria-entrega">
            <span>Disponivel para Entrega </span> 
          </h1>
    
          <div className="grid-conteudo">
            <div>
              {menuDataEsquerda.map((data, i) => (
                <ListItem
                  titulo={data.titulo}
                  descricao={data.descricao}
                  imgAlimento={data.img}
                />
              ))}
            </div>
    
            <div>
              {menuDataDireita.map((data, i) => (
                <ListItem
                  titulo={data.titulo}
                  descricao={data.descricao}
                  imgAlimento={data.img}
                />
              ))}
            </div>
          </div>

          <h1 className="heading-secundaria-retirada">
            <span>Disponivel para Retirada </span> 
          </h1>
          <div className="grid-conteudo">
            <div>
              {menuDataEsquerdaBaixo.map((data, i) => (
                <ListItem
                  titulo={data.titulo}
                  descricao={data.descricao}
                  imgAlimento={data.img}
                />
              ))}
            </div>
    
            <div>
              {menuDataDireitaBaixo.map((data, i) => (
                <ListItem
                  titulo={data.titulo}
                  descricao={data.descricao}
                  imgAlimento={data.img}
                />
              ))}
            </div>
          </div>
    </div>
  )
}

export default AlimentosInfo