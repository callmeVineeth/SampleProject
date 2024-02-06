import React from "react";
import {motion} from 'framer-motion'
import { fadeInRightVariant } from "../utils/Variants";
import { fadeInLeftVariant } from "../utils/Variants";
import { FlexContainer, PaddingContainer, Heading, IconContainer, ParaText, BlueText } from "../styles/Global.styles";
// IMPORTING MY SKILLS STYLES
import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";

const MySkills = () => {
     return (
          <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
               <FlexContainer fullWidthChild responsiveFlex responsiveDirection="column-reverse" >
                {/* LEFT SIDE SECTION */}
                    <SkillsCardContainer
                        as={motion.div}
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                         {Skills.map((skill) => (
                              <SkillsCard>
                                <IconContainer size="5rem" color="blue">
                                    {skill.icon}
                                </IconContainer >
                                  <Heading as="h4" size="h4">
                                        {skill.tech}
                                </Heading>
                              </SkillsCard>
                         ))}
                    </SkillsCardContainer>
                    {/* RIGHT SIDE SECTION */}
                    <motion.div 
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <Heading as="h4" size="h4">
                            MY SKILLS
                        </Heading>

                        <Heading as="h2" size="h2" top="0.5rem">
                            What <BlueText>I can do</BlueText>
                        </Heading>
                            <ParaText top="2rem" bottom="1.5rem">
                            As a Developer, I have a wide range of experience in front-end development. Iam proficient in Javascript, React, SCSS, CSS, HTML. My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.
                            </ParaText>
                            <ParaText>
                                I have experience in using React for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adept to the changing needs of a bussiness
                            </ParaText>
                    </motion.div>
               </FlexContainer>
          </PaddingContainer>
     );
};

export default MySkills;
