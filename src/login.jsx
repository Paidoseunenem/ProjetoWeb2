import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import LoginGoogle from './api'


export default function Login() {
    return (
        <div className='login'>
            <h1>Login</h1>
            <div>
                <input type='text' placeholder='Nome' />
            </div>
            <div>
                <input type='password' placeholder='senha' />
            </div>

            <button style={{cursor: 'pointer'}} onClick={()=>LoginGoogle()}>login </button>
            <button style={{cursor: 'pointer'}}> <Link to="/cadastro"> Cadastro </Link> </button>

        </div>
    )
}