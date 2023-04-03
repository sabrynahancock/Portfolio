import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin, AiOutlineBug } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    {/* <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <AiOutlineBug size="3rem" /> <span> Portfolio</span>
        </a>
      </Link>
    </Div1> */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="https://docs.google.com/document/d/1EBnmoFUmRr3S7MTyUFjh-062_2LFI8UMU9Xw4nbbFxE/edit?usp=sharing">
        <span>Resume</span>
      </SocialIcons>

      <SocialIcons href="https://github.com/sabrynahancock">

        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/sabryna-hancock/">

        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCHVNGfnwsQZzGlfzGZJPGvNRwfLKDZRdzDLVsMlkCSfdMjhtmhhdfdbvJCwTlTtSmfxBV">

        <AiFillMail size="3rem" />
      </SocialIcons>

    </Div3>
    </Container>
);

export default Header;
