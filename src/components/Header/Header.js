import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => (
    <Container>
        <Div1>
            <Link href={"/"}>
                <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom:'20'}}>
                    <DiCssdeck size={"3rem"}/> <Span>Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href={prefix+'/#projects'}>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href={prefix+'/#tech'}>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href={prefix+'/#about'}>
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://Twitter.com/kabir0x17">
                <AiFillTwitterCircle size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://github.com/kabir0x17">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/kabir0x17/">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>

        </Div3>
    </Container>
);

export default Header;