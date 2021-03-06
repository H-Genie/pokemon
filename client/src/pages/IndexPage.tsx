import React from "react";
import styled from "@emotion/styled";
import PokemonList from "../Components/PokemonList";

const Base = styled.div`
    padding: 12px 18px;
    overflow: hidden;
    position: relative;
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: #d34f49;
    font-weight: bold;
`;

const Description = styled.small`
    color: #6b7280;
    padding: 0;
    margin: 16px 0 0 0;
    display: block;
`;

const ImageWrapper = styled.div`
    position: absolute;
    width: 288px;
    height: 288px;
    top: 0;
    right: 0;
    opacity: 0.4;
    transform: translate(96px, -96px);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const IndexPage: React.FC = () => {
    return (
        <Base>
            <Title>Pocketmon</Title>
            <Description>The Pocketmon contains detailed stats for every creature from the Pokémon games.</Description>
            <PokemonList />
            <ImageWrapper>
                <Image src="/assets/pocketball.svg" />
            </ImageWrapper>
        </Base>
    );
};

export default IndexPage;
