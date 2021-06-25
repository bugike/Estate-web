import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import HomeOne from '../images/home-1.jpg';
import HomeTwo from '../images/home-2.jpg';

const Section = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem 1rem;
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 0rem 1rem;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    padding: 1rem 1rem;
    min-height: 350px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
    width: 140px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;



const Listing = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1>View our newest Homes</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap
                    data-aos='zoom-in'
                    data-aos-duration='1500'
                    data-aos-delay='300'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={HomeOne} alt='home' />
                        <h2>5 Bed 3 Bath House in Venice, California</h2>
                        <InfoLink to='/homes'>
                            <p>View Details</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                    data-aos-delay='300'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={HomeTwo} alt='home' css=
                        {`margin-top: 120px;
                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }
                        `} />
                        <h2>4 Bed 2 Bath House in Sacramento, California</h2>
                        <InfoLink to='/homes'>
                            <p>View Details</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    );
};

export default Listing;
