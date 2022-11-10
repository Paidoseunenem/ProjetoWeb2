import React from 'react'
import { Alert, Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'
import './login.jsx'

export default function Home() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>
                <img
              alt=""
              src="src\assets\logo.png"
              className="pe-3"
              width="250"
              height="150"
            />
            PaiDoSeuNenem
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            </Nav>
            <Nav>
            <button style={{ cursor: 'pointer' }} className='botao'><Link to="/login"> Sair </Link></button>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
/* teste de bootstrap- home original
export default function Home() {
    return (
        <div>

            

            <div className='home'>
                <h1>Meu P....</h1>
                <Alert variant="warning">
                    Teste de Mensagem
                </Alert>

            </div>



            <button style={{ cursor: 'pointer' }} className='botao'><Link to="/login"> Sair </Link></button>


        </div>

    )
    }*/