import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const Content = styled.div`
    position: relative;
    left: 5%;
    top: 60%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 550;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const HomeDisplay = ({title, price, rent, image, alt}) => {
    return (
        <Section>
            <Image src={image} alt={alt} />
            <Content>
                <h1 data-aos='fade-down' data-aos-duration='600'>{title}</h1>
                <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>Price: {price}</p>
                <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='400'>Rent: {rent}</p>
            </Content>
        </Section>
    )
}

export default HomeDisplay;
