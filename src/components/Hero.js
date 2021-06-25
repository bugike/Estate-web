import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.2), 
            rgba(0,0,0,0.2) 50%, 
            rgba(0,0,0,0.6) 100%
        );
    }
`;

const HeroImage = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
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
        font-size: 1.2rem;
        font-weight: 550;
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButton = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButton = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButton}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButton}
`;

function Hero({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 4500);

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]) 


    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const fadeAnimation = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 2}},
        exit: {opacity: 0}

    };

    return (
        <HeroSection>
            <HeroWrapper>
                <AnimatePresence>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage 
                                    src={slide.image} 
                                    alt={slide.alt} 
                                    initial='hidden'
                                    animate='visible'
                                    exit='exit'
                                    variants={fadeAnimation}
                                    />
                                    <HeroContent>
                                        <h1 data-aos='fade-down' data-aos-duration='600'>{slide.title}</h1>
                                        <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.price}</p>
                                        <Button 
                                        to={slide.path} 
                                        primary='true'
                                        css={`
                                            max-width: 160px;
                                        `}
                                        data-aos='zoom-out' 
                                        data-aos-duration='600' 
                                        data-aos-delay='250'
                                        >
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                </AnimatePresence>
                <SliderButton>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButton>
                
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
