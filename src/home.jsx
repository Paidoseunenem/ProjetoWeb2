import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import './login.jsx'

export default function Home() {
    return (
        <div>

            

            <div className='home'>
                <h1>Resumo</h1>

            </div>



            <button style={{ cursor: 'pointer' }} className='botao'><Link to="/login"> Sair </Link></button>


        </div>

    )
}