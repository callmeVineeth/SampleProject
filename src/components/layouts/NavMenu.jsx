import React from "react";
import {motion} from 'framer-motion'
import { slideInLeft } from "../../utils/Variants";

import { PaddingContainer, FlexContainer } from "../../styles/Global.styles";
import { AiOutlineClose } from "react-icons/ai";
import { MenuIcon, NavMenuContainer, MenuItem } from "../../styles/Navbar.styled";
import { navLinks } from "../../utils/Data";

const NavMenu = ({ setOpenMenu }) => {
     return (
          <NavMenuContainer
               as={motion.div}
               variants={slideInLeft}
               initial="hidden"
               animate="visible"
               exit="exit"
          >
               <PaddingContainer left="5%" right="8%" top="1.5rem">
                    <FlexContainer justify="flex-end " responsiveFlex>
                         <MenuIcon
                              as={motion.a}
                              whileHover={{scale: 1.2}}
                         onClick={() => setOpenMenu(false)}>
                              <AiOutlineClose />
                         </MenuIcon>
                    </FlexContainer>
               </PaddingContainer>
               {/* menu-items */}
               <PaddingContainer top="8%">
                    <FlexContainer direction="column" align="center" responsiveFlex>
                         {navLinks.map((link) => (
                              <MenuItem
                                   as={motion.a}
                                   whileHover={{scale: 1.2}}
                              href={`#${link.href}`} onClick={() => setOpenMenu(false)} key={link.id}>
                                  {link.name}
                              </MenuItem>
                         ))}
                    </FlexContainer>
               </PaddingContainer>
          </NavMenuContainer>
     );
};

export default NavMenu;
