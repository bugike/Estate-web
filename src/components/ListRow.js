import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    flex: 1;
    padding: 0rem 1rem;
    min-height: 400px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    p {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 250px;
    margin-bottom: 1rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        max-width: 600px;
        max-height: 350px;
    }

    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const InfoLink = styled(Link)`
    display: inline-flex;
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


const ListRow = ({ homeData }) => {
    return (
        <Row>
            {homeData.map((home, index) => {
                return (
                    <InfoWrap 
                    key={index}
                    data-aos='zoom-out'
                    data-aos-duration='1500'
                    data-aos-delay={home.delay}
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <ImageWrap>
                            <img src={home.image} alt={home.alt} />
                        </ImageWrap>
                        <h2>{home.title}</h2>
                        <p>{home.price}</p>
                        <InfoLink to={home.path}>
                            <p>{home.label}</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                );
            })}
            
        </Row>
    );
}

export default ListRow
