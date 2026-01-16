import React from 'react'
import "./myProjects.css"
import Title from '../ui/titles/Title'
import CardProjects from '../ui/cards-projects/CardProjects'
import multistep from "../../assets/form-multistep.png"
import monitoringProducts from "../../assets/monitoring-products.png"
import eduSystem from "../../assets/edu-system.png"
import carteiraApp from "../../assets/carteira-app.png"
import gameSphere from "../../assets/game-sphere.png"
import catalogo from "../../assets/catalogo.png"

const MyProjects = () => {
  return (
    <main className='my-projects'>
        <Title title="Meus" titleSpan="Projetos"/>
        <p className='text-description'>Alguns dos projetos que desenvolvi recentemente</p>
        <div className='cards-projects'>
            <CardProjects img={multistep}
             title="Form Multistep" 
             description="Formulário multi-step em TypeScript, criado para consolidar boas práticas de componentização, tipagem forte, validação de dados e controle de estado com persistência entre etapas." 
             skills={["Html", "Css", "JavaScript", "React", "TypeScript"]}/>
            <CardProjects img={monitoringProducts} 
            title="Monitoring Products" 
            description="Aplicação full stack de monitoramento de produtos da Amazon, com login e rotas protegidas, sistema de alertas de preço e foco em segurança, organização de código e observabilidade." 
            skills={["React", "NodeJs", "ApiREST", "MongoDB", "JWT", "Observabilidade"]}/>
            <CardProjects img={eduSystem} 
            title="Edu System" 
            description="Sistema full stack de gerenciamento escolar, focado no CRUD completo de alunos, permitindo criar, listar, atualizar e remover registros de forma organizada e eficiente." 
            skills={["React", "NodeJs", "ApiREST", "MongoDB"]}/>
            <CardProjects img={carteiraApp} 
            title="CarteiraApp" 
            description="Aplicação de gerenciamento financeiro desenvolvida para controle de gastos pessoais, permitindo registrar um saldo inicial, adicionar despesas e acompanhar a redução do valor disponível, auxiliando na organização e consciência financeira" 
            skills={["JavaScript", "React", "Req.Http", "Backend"]}/>
            <CardProjects img={gameSphere} 
            title="GameSphere" 
            description="Aplicação em React que simula uma loja de games com carrinho de compras, permitindo adicionar e remover produtos, além da atualização automática dos preços em tempo real, com foco em gerenciamento de estado e experiência do usuário" 
            skills={["Html", "Css", "JavaScript", "React"]}/>
            <CardProjects img={catalogo} 
            title="Catálogo de Filmes" 
            description="Aplicação front-end desenvolvida com HTML, CSS e JavaScript, que consome uma API para exibição de filmes em destaque, mais bem avaliados e lançamentos, contando também com autenticação via Local Storage." 
            skills={["Html", "Css", "JavaScript", "Api"]}/>
        </div>
    </main>
  )
}

export default MyProjects