import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navegacao from "./Componentes/Navegacao/Navegacao";
import Home from '../src/Paginas/Home/Home';
import Sobre from '../src/Paginas/Sobre/Sobre';
import Tecnologias from '../src/Paginas/Tecnologias/Tecnologias';
import Alimentos from '../src/Paginas/Alimentos/Alimentos';
import Contato from '../src/Paginas/Contato/Contato';
import Doacao from '../src/Paginas/Doacao/Doacao';
import Footer from "./Componentes/Footer/Footer";


function App() {
  return (
    <div >
    <Navegacao />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/tecnologias" element={<Tecnologias/>}/>
      <Route path="/alimentos" element={<Alimentos/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/doacao" element={<Doacao/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
