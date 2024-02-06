import React from "react";
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer } from "../styles/Global.styles";
import { FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"
import { ShowcaseImageCard, ShowcaseParticleContainer, Particle } from "../styles/Showcase.styled";
import ShowcaseImg from '../assets/ShowcaseImg.png'
import BackgroundImg from '../assets/particle.png'
import {motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
     return (
          <PaddingContainer id="Home" left="3%" right="10%" top="16%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem" responsiveTop="8rem">
               <FlexContainer  fullWidthChild>
                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                         <Heading as="h4" size="h4">Hello,</Heading>
                         <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                              I'm <BlueText>Anukeerth Ek</BlueText>
                         </Heading>
                         <Heading as="h3" size="h3">
                            I'm a <BlueText>Frontend Developer</BlueText>
                         </Heading>

                         <ParaText as="p" top="2rem" bottom="4rem">
                         I'm a highly skilled Frontend Developer with a passion for crafting dynamic and engaging user interfaces. With a proven track record of creating visually stunning and responsive designs.
                         </ParaText>

                         {/* SOCIAL ICONS */}
                         <FlexContainer gap="20px" responsiveFlex>

                            <IconContainer color="white" size="1.5rem">
                            <FaLinkedin/>
                            </IconContainer>

                            <IconContainer color="white" size="1.5rem">
                                <FaGithub/>
                            </IconContainer>

                            <IconContainer color="white" size="1.5rem">
                                <FaTwitter/>
                            </IconContainer>

                            <IconContainer color="white" size="1.5rem">
                                <SiLeetcode />
                            </IconContainer>

                         </FlexContainer>
                         
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <FlexContainer as={motion.div} variants={fadeInRightVariant} initial="hidden" whileInView="visible"  justify="flex-end">
                         <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg } className="header-img"/>
                        </ShowcaseImageCard>


                        <Particle 
                                   as={motion.img}
                                   animate={{
                                        x: [0, 100, 0],
                                        rotate: 360,
                                        scale: [1, 0.5, 1],
                                   }}
                                   transition={{
                                        duration: 20,
                                        repeat: Infinity
                                   }}

                              src={BackgroundImg}
                              alt="Particle"
                              top="-80px"
                              left="20px"
                              rotate="60deg"
                        />
                        <Particle 
                         as={motion.img}
                         animate={{
                              y: [0, -100, 0],
                              rotate: 360,
                              scale: [1, 0.8, 1],
                         }}
                         transition={{
                              duration: 18,
                              repeat: Infinity
                         }}
                              src={BackgroundImg}
                              alt="Particle"
                              top="50px"
                              right="-70px"
                              rotate= "0deg"
                        />
                        <Particle 
                         as={motion.img}
                         animate={{
                              y: [0, -100, 0],
                              rotate: 360,
                              scale: [1, 0.9, 1],
                         }}
                         transition={{
                              duration: 15,
                              repeat: Infinity
                         }}
                              src={BackgroundImg}
                              alt="Particle"
                              bottom="10px"
                              left="-70px"
                              rotate= "50deg"
                        />


                      </ShowcaseParticleContainer>
                    </FlexContainer>
               </FlexContainer>
          </PaddingContainer>
     );
};

export default Showcase;
