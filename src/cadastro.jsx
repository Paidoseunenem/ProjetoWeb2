import React,{useState} from 'react'
import './cadastro.css'
import { Link } from 'react-router-dom'
import FuncaoCadastrar from './funcaocadastrar'
import Firebase from './FirebasaConfig';

import { getAuth } from "firebase/auth";
export default function Cadastro() {

const [email, setEmail ] = useState('')
const [password, setPassword] = useState('')
const auth = getAuth(Firebase);

    return (
        <div className='cadastro'>
            <h1>Cadastro</h1>
            <div>
                <input type='text' placeholder='Nome' />

            </div>
            <div>
                <input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='e-mail' />
            </div>
            <div>
                <input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='senha' />
            </div>
            <button style={{ cursor: 'pointer' }} className='botao' onClick={() => FuncaoCadastrar(email,password)}>Cadastrar</button>
        
            <button style={{ cursor: 'pointer' }} className='botao' onClick={() => console.log(auth)}>teste</button>
        </div>
    )
}