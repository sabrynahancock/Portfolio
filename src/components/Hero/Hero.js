import React from 'react';
import { GoLocation } from 'react-icons/go';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Sabryna Hancock
      </SectionTitle>
      <SectionText> 
      Software Engineer ~ 
      <GoLocation size="2rem"/><span>  Wheeling, WV</span>
      </SectionText>
      

      <Button onClick={ () => window.location ='#about'}>Learn More</Button>
    </LeftSection>

  </Section>
  
);

export default Hero;