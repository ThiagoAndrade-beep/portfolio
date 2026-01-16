import React from 'react'
import "./cardProjects.css"
import Buttons from '../buttons/Buttons'
import { FiExternalLink } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const CardProjects = ({ img, title, description, skills, linkDemo, linkProject }) => {
  return (
    <div className='card-project'>
      <div className='card-project-img'>
        <img src={img} alt="imagem do projeto" />
      </div>
      <div className='card-project-content'>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className='project-skills'>
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>

        <div className='project-btn'>
          <Buttons
            variant="view-demo"
            href={linkDemo}
            target="_blank"
          >
            Ver Demo <FiExternalLink size={18} />
          </Buttons>

          <Buttons
            variant="view-project"
            href={linkProject}
            target="_blank"
          >
            Ver Projeto <VscGithubAlt size={18} />
          </Buttons>
        </div>
      </div>
    </div>
  )
}

export default CardProjects