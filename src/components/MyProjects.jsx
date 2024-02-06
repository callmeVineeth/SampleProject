import React from 'react'
import {motion} from 'framer-motion'
import { fadeInTopVariant } from '../utils/Variants'
import { PaddingContainer, Heading, BlueText } from '../styles/Global.styles'
import Project from './layouts/Project'
import { projectDetails } from '../utils/Data'
const MyProjects = () => {
  return (
    <PaddingContainer
      id='Projects'
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      size="h4">
        MY PROJECTS
      </Heading>
    <Heading as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible" size="h2">
      What <BlueText>I have build</BlueText>
    </Heading>

    {projectDetails.map((project)=> (
      <PaddingContainer key={project.id} top="5rem" bottom="5rem">
        <Project data={project}/>
      </PaddingContainer>
    ))}

    </PaddingContainer>
  )
}

export default MyProjects