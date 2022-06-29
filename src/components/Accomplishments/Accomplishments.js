import React from 'react';

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AccomplishmentsStyles';

const data = [
    {number: 1, text: 'Open Source Projects'},
    {number: 10, text: 'Open Source Contributions'},
    {number: 100, text: 'Github Followers'},
    {number: 100, text: 'Github Stars'},
    {number: 1200, text: 'Twitter Followers'},

];

const data1 = [
    {number: 1, text: 'Open Source Projects'},
    {number: 1, text: 'Open Source Contributors'},
    {number: 0, text: 'Github Followers'},
    {number: 0, text: 'Github Stars'},
    {number: 0, text: 'LinkedIn Followers'},
    {number: 0, text: 'YouTube Subscribers'},
    {number: 0, text: 'Twitter Followers'},
    {number: 0,  text: 'Discord Community'},
    {number: 0, text: 'Telegrams Members'},
    {number: 0, text: 'Instagram Followers'}
]

const data2 = [
    {number: 1, text: 'Open Source Projects'},
    {number: 1, text: 'Open Source Contributors'},
    {number: 10, text: 'Github Followers'},
    {number: 10, text: 'Github Stars'},
    {number: 100, text: 'LinkedIn Followers'},
    {number: 1200, text: 'YouTube Subscribers'},
    {number: 1700, text: 'Twitter Followers'},
    {number: 2500,  text: 'Discord Community'},
    {number: 12000, text: 'Telegrams Members'},
    {number: 70000, text: 'Instagram Followers'}
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
    <SectionTitle>CryptoverseWeb3 Community Accomplishments</SectionTitle>
    <title></title>
    <Boxes>
        {data1.map((card, index) => (
            <Box key={index}>
                <BoxNum>{card.number}+</BoxNum>
                <BoxText>{card.text}</BoxText>
            </Box>
        ))}
    </Boxes>
</Section>
        <Section>
    <SectionDivider divider />
    <SectionTitle>thecyberw0rld Community Accomplishments</SectionTitle>
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
