import React from 'react'
import './ListAlimentos.css'

const ListAlimentos = ({titulo, descricao, imgAlimento}) => {
  return (
    <div className='list-alimentos'>
        <ul>
            <li>
                {imgAlimento && <img src={imgAlimento} alt="hero" />}

                <div>
                    <h3>{titulo}</h3>
                    {descricao && <p>{descricao}</p>}
                </div>

                
            </li>
        </ul>
    </div>
  )
}

export default ListAlimentos