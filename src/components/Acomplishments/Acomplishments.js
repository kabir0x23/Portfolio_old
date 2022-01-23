import React from 'react';

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';

const data = [
    {number: 1, text: 'Open Source Projects'},
    {number: 10, text: 'Open Source Contributors',},
    {number: 40, text: 'Github Followers',},
    {number: 80, text: 'Github Stars',}

];

const data2 = [
    {number: 0, text: 'Open Source Projects'},
    {number: 0, text: 'Open Source Contributors',},
    {number: 0, text: 'Github Followers',},
    {number: 0, text: 'Github Stars',},
    {number: 10, text: 'LinkedIn Followers',},
    {number: 1000, text: 'YouTube Subscribers',},
    {number: 1000, text: 'Twitter Followers',},
    {number: 2000,  text: 'Discord Community',},
    {number: 10000, text: 'Telegrams Members',},
    {number: 10000, text: 'TheDevilsWorld\'s Instagram Followers',},
    {number: 20000, text: 'CyberSecCommunity\'s Instagram Followers',},
    {number: 60000, text: 'TheCyberWorld\'s Instagram Followers',}
]

const Accomplishments = () => (
    <>
    <Section>
        <SectionTitle>Personal Accomplishments</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}+</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
<Section>
    <SectionDivider divider />
    <SectionTitle>Community Accomplishments</SectionTitle>
    <Boxes>
        {data2.map((card, index) => (
            <Box key={index}>
                <BoxNum>{card.number}+</BoxNum>
                <BoxText>{card.text}</BoxText>
            </Box>
        ))}
    </Boxes>
</Section>
    </>
);

export default Accomplishments;
