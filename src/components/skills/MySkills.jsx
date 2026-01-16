import React from 'react'
import Title from '../ui/titles/Title'
import CardSkill from '../ui/cards-skills/CardSkill'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import typescript from "../../assets/typescript.png"
import docker from "../../assets/docker.png"
import aws from "../../assets/aws.png"
import git from "../../assets/git.png"
import terraform from "../../assets/terraform.png"
import nodejs from "../../assets/nodejs.png"
import './mySkills.css'

const MySkills = () => {
  return (
    <main className='my-skills'>
        <Title title="Minhas" titleSpan="Skills"/>
        <p className='text-description'>Tecnologias e ferramentas que domino para criar soluções digitais completas</p>
        <div className='cards'>
            <CardSkill icon={html} title="HTML" description="Estruturação semâtica"/>
            <CardSkill icon={css} title="CSS" description="Estilização avançada, reponsividade"/>
            <CardSkill icon={js} title="JavaScript" description="Async/await, promises, fetch, arrays, objetos"/>
            <CardSkill icon={react} title="React" description="Hooks, context API, react-router, props, components"/>
            <CardSkill icon={typescript} title="TypeScript" description="Type alias, desenvolvimento escalável"/>
            <CardSkill icon={docker} title="Docker" description="Containerização, imagens"/>
            <CardSkill icon={aws} title="AWS" description="ECR, ECS, loadBalancer, ec2, lambda, deploy automático"/>
            <CardSkill icon={git} title="Git" description="Versionamento, gitActions, push, commits"/>
            <CardSkill icon={terraform} title="Terraform" description="Automação com gitActions, Iac"/>
            <CardSkill icon={nodejs} title="NodeJS" description="Backend com express, APIs RESTful"/>
        </div>
    </main>
  )
}

export default MySkills