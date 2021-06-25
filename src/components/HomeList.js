import React from 'react';
import styled from 'styled-components';
import ListRow from './ListRow';

const Section = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 1rem 1rem;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const HomeList = ({heading, dataOne, dataTwo}) => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1>{heading}</h1>
                </Heading>
                <ListRow homeData={dataOne} />
                <ListRow homeData={dataTwo} />
            </Container>
        </Section>
    );
}

export default HomeList;
