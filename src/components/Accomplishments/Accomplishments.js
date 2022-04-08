import React from 'react';

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AccomplishmentsStyles';

const data = [
    {number: 1, text: 'Open Source Projects'},
    {number: 10, text: 'Open Source Contributions',},
    {number: 100, text: 'Github Followers',},
    {number: 100, text: 'Github Stars',}
];

const data2 = [
    // {number: 0, text: 'Open Source Projects'},
    // {number: 0, text: 'Open Source Contributors',},
    // {number: 0, text: 'Github Followers',},
    // {number: 0, text: 'Github Stars',},
    {number: 50, text: 'LinkedIn Followers',},
    {number: 1000, text: 'YouTube Subscribers',},
    {number: 1500, text: 'Twitter Followers',},
    {number: 2000,  text: 'Discord Community',},
    {number: 2500, text: 'Telegrams Members',},
    {number: 125000, text: 'Instagram Followers',}
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
