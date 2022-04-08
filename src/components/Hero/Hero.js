import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br/>
                My Personal Portfolio
            </SectionTitle>
            <SectionText>
                I am Cyber Security Enthusiast, a Full Stack Web Developer and a Programmer
            </SectionText>
            <Button onClick={() => window.location = 'https://linktree.com/kabir0x23'}>Learn More</Button>
        </LeftSection>
    </Section>
);

export default Hero;
