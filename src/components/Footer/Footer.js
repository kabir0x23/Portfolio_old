import React from 'react';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle
} from 'react-icons/ai';

// import {FaDiscord} from 'react-icons/fa';
// import {GiCyberEye} from 'react-icons/gi';

import {SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                {/*<LinkColumn>*/}
                {/*    <LinkTitle>Call</LinkTitle>*/}
                {/*    <LinkItem href={"tel:111-111-111"}>111-111-111</LinkItem>*/}
                {/*</LinkColumn>*/}
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href={"mailto:contact@kabir0x23.io"}>contact@kabir0x23.io</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Your 🔐 security is in your hands</Slogan>
                </CompanyContainer>

                <SocialContainer>
                    <SocialIcons href="https://Twitter.com/kabir0x23">
                        <AiFillTwitterCircle size="3rem"/>
                    </SocialIcons>

                    <SocialIcons href="https://github.com/kabir0x23">
                        <AiFillGithub size="3rem"/>
                    </SocialIcons>

                    <SocialIcons href="https://www.linkedin.com/in/kabir0x23/">
                        <AiFillLinkedin size="3rem"/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>

    );
};

export default Footer;
