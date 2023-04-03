import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';



const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <img
        className="BgAnimation__svg"
        src="https://i.imgur.com/gja9qP8.jpg"
        alt="Your image"
        width="300"
        height="300"
        style={{ borderRadius: '50%' }}

      />
      <SectionText>
        <br/>
      Full Stack Engineer from Brazil. I moved to the USA by myself when I was 20 years old. I have encountered many challenges in life, but none of them stopped me from achieving my dreams. Throughout my life, I knew I was creative, but I never believed I was intelligent enough to build software.
        <p>  Over the past years I learned to work with my brain.
        </p>
        <p>
        I fell in love with technology once I moved to the USA because it is the only way I can stay in touch with my family back in Brazil.
        </p>
       
        Another fun fact about me is that I speak several languages, including Portuguese, Spanish, and English. Now, I can also say that I speak JavaScript, Python, and other programming languages too!

      </SectionText>

    </Section>
  );
};

export default Timeline;
