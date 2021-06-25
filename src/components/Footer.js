import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Section = styled.section`
    background: #000d1a;
    color: #fff;
    width: 100%;
    min-height: 600px;
    padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;

const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Quote = styled.div`
    flex: 1;
    padding: 2rem 0rem;

    h3 {
        font-size: clamp(2rem, 8vw, 5rem);
    }
`;

const FooterInfo = styled.div`
    padding: 2rem;
    line-height: 3;
    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 0rem;
    }
`;

const FooterBottom = styled.div`
    display: flex;
    padding: 2rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    
`;

const SocialIcons = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        width: 100%;
    }
`;

const Icons = css`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-right: 1.5rem;
    color: #cd853f;
`;


const Instagram = styled(FaInstagram)`
    ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
    ${Icons}
`;

const Facebook = styled(FaFacebook)`
    ${Icons}
`;

const Youtube = styled(FaYoutube)`
    ${Icons}
`;

const Contact = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>
                            Let's find <br /> your Dream Home
                        </h3>
                    </Quote>
                    <FooterInfo>
                        <h4>Contact Us</h4>
                        <Link to='/contact'>FAQ</Link>
                        <Link to='/contact'>Support</Link>
                        <Link to='/homes'>Questions</Link>
                    </FooterInfo>
                    <FooterInfo>
                        <h4>Offices</h4>
                        <Link to='/contact'>United States</Link>
                        <Link to='/contact'>Europe</Link>
                        <Link to='/contact'>Canada</Link>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href='//www.youtube.com' rel='noopener noreferrer' target='_blank'>
                            <Youtube />
                        </a>
                        <a href='//www.instagram.com' rel='noopener noreferrer' target='_blank'>
                            <Instagram />
                        </a>
                        <a href='//www.facebook.com' rel='noopener noreferrer' target='_blank'>
                            <Facebook />
                        </a>
                        <a href='//www.linkedin.com' rel='noopener noreferrer' target='_blank'>
                            <LinkedIn />
                        </a>
                    </SocialIcons>
                    <Contact>
                        <Button to='/contact'>
                            Let's Chat <IoMdArrowRoundForward />
                        </Button>
                    </Contact>
                </FooterBottom>
            </Container>
        </Section>
    );
}

export default Footer;
