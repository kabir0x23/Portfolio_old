import React from 'react';

import {
    BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Hrx, Tag, TagList, TitleContent, UtilityList, Img
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
// import {cyberProjects} from '../../constants/constants';
import {webProjects} from '../../constants/constants';
// import {web3Projects} from '../../constants/constants';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Projects = () => (
    <Section id="projects">
        <SectionDivider/>
        <SectionTitle main>Web Projects</SectionTitle>
        <GridContainer>
            {webProjects.map(({id, image, title, description, tags, source, visit}) => (
                <BlogCard key={id}>
                    <Img src={prefix + image}/>
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    <div>
                            <Hr/>

                            {/*<TitleContent>Stack</TitleContent>*/}
                        <TagList> {tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>))}
                        </TagList>
                    </div>
                    {/*<UtilityList>*/}
                    {/*    <ExternalLinks href={visit}>Live</ExternalLinks>*/}
                    {/*    <ExternalLinks href={source}>Source Code</ExternalLinks>*/}
                    {/*</UtilityList>*/}
                </BlogCard>
            ))}
        </GridContainer>

        {/*<SectionDivider/>*/}


        {/*<SectionTitle main>Web3 Projects</SectionTitle>*/}
        {/*<GridContainer>*/}
        {/*    {web3Projects.map(({id, image, title, description, tags, source, visit}) => (*/}
        {/*        <BlogCard key={id}>*/}
        {/*            <Img src={prefix + image}/>*/}
        {/*            <TitleContent>*/}
        {/*                <HeaderThree title>*/}
        {/*                        <a href={visit} target={"_blank"} className={""}>*/}
        {/*                        {title}*/}
        {/*                        </a>*/}
        {/*                </HeaderThree>*/}
        {/*            </TitleContent>*/}
        {/*            <CardInfo>{description}</CardInfo>*/}
        {/*            <div>*/}
        {/*                    <Hr/>*/}
        {/*                /!*<TitleContent>Stack</TitleContent>*!/*/}
        {/*                <TagList> {tags.map((tag, i) => (*/}
        {/*                    <Tag key={i}>{tag}</Tag>))} </TagList>*/}
        {/*            </div>*/}
        {/*            /!*<UtilityList>*!/*/}
        {/*            /!*    <ExternalLinks href={visit}>Live</ExternalLinks>*!/*/}
        {/*            /!*    <ExternalLinks href={source}>Source Code</ExternalLinks>*!/*/}
        {/*            /!*</UtilityList>*!/*/}
        {/*        </BlogCard>*/}
        {/*    ))}*/}
        {/*</GridContainer>*/}

        {/*<SectionDivider/>*/}

        {/*<SectionTitle main>Cyber Projects</SectionTitle>*/}
        {/*<GridContainer>*/}
        {/*    {cyberProjects.map(({id, image, title, description, tags, source, visit}) => (*/}
        {/*        <BlogCard key={id}>*/}
        {/*            <Img src={prefix + image}/>*/}
        {/*            <TitleContent>*/}
        {/*                <HeaderThree title>{title}</HeaderThree>*/}
        {/*                    /!*<Hr/>*!/*/}
        {/*            </TitleContent>*/}
        {/*            <CardInfo>{description}</CardInfo>*/}
        {/*            <div>*/}
        {/*                    <Hr/>*/}

        {/*                    /!*<TitleContent>Stack</TitleContent>*!/*/}
        {/*                <TagList> {tags.map((tag, i) => (*/}
        {/*                    <Tag key={i}>{tag}</Tag>))} </TagList>*/}
        {/*            </div>*/}
        {/*            /!*<UtilityList>*!/*/}
        {/*            /!*    <ExternalLinks href={visit}>Live</ExternalLinks>*!/*/}
        {/*            /!*    <ExternalLinks href={source}>Source Code</ExternalLinks>*!/*/}
        {/*            /!*</UtilityList>*!/*/}
        {/*        </BlogCard>*/}
        {/*    ))}*/}
        {/*</GridContainer>*/}
    </Section>
);

export default Projects;
