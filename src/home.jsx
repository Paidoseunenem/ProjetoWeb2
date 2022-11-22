import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import './login.jsx'

export default function Home() {
    return (
        <div>
            <div className='home'>
        <ul>
            <li><a className='active' href='http://127.0.0.1:5173/home'>Home</a></li>
            <li><a>Configuração</a></li>
            <li><a href='http://127.0.0.1:5173/cadastro'>Alterar dados</a></li>
            <li><a className='sair' href='http://127.0.0.1:5173/login'>Sair</a> </li>
       
        </ul>
            <div className='corpo'>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
            </div>
            <div className='kk'>
                
            </div>
        </div>
    )
}