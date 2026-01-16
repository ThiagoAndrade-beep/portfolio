import React from 'react'
import "./myExperience.css"
import Title from '../ui/titles/Title'
import CardExperience from '../ui/cards-experience/CardExperience'

const MyExperience = () => {
    return (
        <main className='my-experience'>
            <Title title="Minha" titleSpan="Experiência" />
            <p className='text-description'>Minha trajetória profissional e conquistas</p>
            <div className='timeline'>
                <div className='timeline-item'>
                    <span className='timeline-dot'></span>
                    <div className='timeline-card'>
                        <CardExperience
                            title="DevOps Engineer"
                            name="DevSkin - Consultoria de TI"
                            description="Atuo como responsável pela infraestrutura de projetos em produção, garantindo observabilidade, provisionamento, automação, confiabilidade e manutenção dos serviços.
                                No dia a dia, trabalho com Docker, Terraform, AWS, ArgoCD e pipelines de CI/CD, aplicando práticas de infraestrutura como código e entrega contínua."
                            date="2024"
                            currentDate="Presente"
                            achievements={["Redução de custos na AWS", "Provisionamento de infraestrutura completa com Terraform", "Implementação de estratégia de acesso seguro a domínios" ]} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyExperience