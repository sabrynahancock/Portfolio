import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Me</LinkTitle>
          <LinkItem href="mailto:sabrynavazus@gmail.com">sabrynavazus@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Seja quem voce quiser ser.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/sabrynahancock">

          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/sabryna-hancock/">

          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCHVNGfnwsQZzGlfzGZJPGvNRwfLKDZRdzDLVsMlkCSfdMjhtmhhdfdbvJCwTlTtSmfxBV">

          <AiFillMail size="3rem" />
        </SocialIcons>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
