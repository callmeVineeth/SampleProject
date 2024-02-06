import React from 'react'
import {motion} from 'framer-motion'
// IMGPORTING GLOBAL STYLES HERE
import { PaddingContainer, Heading, FlexContainer, ParaText, IconContainer, Button } from '../../styles/Global.styles'
import { FaGithub } from 'react-icons/fa'
import { TechStackCard, ProjectImage } from '../../styles/MyProject.styled'
import Project1 from '../../assets/E-commerce.png'
import { ProjectImageContainer } from '../../styles/MyProject.styled'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'

const Project = ({data}) => {
 
  return (
    <FlexContainer
     direction={data.reverse ? 'row-reverse' : false}
     fullWidthChild>
        {/* LEFT SECTION PROJECT-CONTENT */}
        <motion.div
          variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
            <FlexContainer  gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                   {data.project_name}
                </Heading>
                <IconContainer color='blue' size="2rem">
                    <FaGithub/>
                </IconContainer>
            </FlexContainer>
            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                  {data.tech_stack.map((stack, index)=> (
                    <TechStackCard key={index}>{stack}</TechStackCard>
                  ))}
    
                </FlexContainer>
            </PaddingContainer>
            <ParaText top="1.5rem" bottom="2rem">
                    {data.project_desc}
            </ParaText>
            <Button>Visit Website</Button>
        </motion.div>

        {/* RIGHT SECTION PROJECT-IMAGE */}
        <ProjectImageContainer
        //   as={motion.div}
        // variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        // initial="hidden"
        // whileInView="visible"
        >
            <ProjectImage src={data.project_img}/>
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
