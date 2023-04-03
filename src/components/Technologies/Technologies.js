import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () => {
  return (
    <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Javascript, HTML, Next.js and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Flask and PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineHeart size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Design/Animation</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma and Procreate
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
  );
};

export default Technologies;
