import React from "react";
import styled from "@emotion/styled";
import { Color, Type, Ability } from "../types";
import { mapColorToHex, mapTypeToHex } from "../utils";
import Abilities from "./Abilities";

const Base = styled.div`
    padding: 20px;
`;

const FlavorText = styled.p`
    margin: 0 auto;
    word-break: break-word;
    font-size: 14px;
    color: #374151;
`;

const TypeWrapper = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

const TypeList = styled.div`
    display: flex;
    margin-top: 8px;
    ${TypeWrapper} + ${TypeWrapper} {
        margin-left: 8px;
    }
`;

const TypeImage = styled.img`
    height: 12px;
`;

const TypeLabel = styled.span`
    margin-left: 4px;
    color: #fff;
    font-size: 10px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: c;
`;

const Image = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`;

const InfpContainerWrapper = styled.div`
    margin-top: 32px;
`;

const Title = styled.h4<{ color: string }>`
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
    color: ${({ color }) => color};
`;

const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    row-gap: 12px;
`;

const InfoItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const InfoItemLabel = styled.span`
    font-weight: bold;
    color: #374151;
    font-size: 12px;
`;

const InfoItemValue = styled.span<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 12px;
`;

interface Props {
    isLoading: boolean;
    color?: Color;
    growthRate?: string;
    flavorText?: string;
    genderRate?: number;
    isLegendary?: boolean;
    isMyhical?: boolean;
    types?: Array<Type>;
    weigth?: number;
    height?: number;
    baseExp?: number;
    abilities?: Array<Ability>;
}

const About: React.FC<Props> = ({ isLoading, color, growthRate, flavorText, genderRate, isLegendary, isMyhical, types, weigth, height, baseExp, abilities }: Props) => {
    const rarity = isLegendary ? "Legendary" : isMyhical ? "Mythical" : "Normal";

    return (
        <Base>
            <FlavorText>{flavorText}</FlavorText>
            <TypeList>
                {types?.map(({ type }, index) => (
                    <TypeWrapper key={index} color={mapTypeToHex(type.name)}>
                        <TypeImage src={`/assets/${type.name}.svg`} />
                        <TypeLabel>{type.name.toUpperCase()}</TypeLabel>
                    </TypeWrapper>
                ))}
            </TypeList>
            <InfpContainerWrapper>
                <Title color={mapColorToHex(color?.name)}>Pokemon Data</Title>
                <InfoContainer>
                    <InfoItem>
                        <InfoItemLabel>Height</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{height}</InfoItemLabel>
                    </InfoItem>
                    <InfoItem>
                        <InfoItemLabel>Weight</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{weigth}</InfoItemLabel>
                    </InfoItem>
                    <InfoItem>
                        <InfoItemLabel>Gender</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{genderRate === -1 ? "Unkown" : "Male / Female"}</InfoItemLabel>
                    </InfoItem>
                    <InfoItem>
                        <InfoItemLabel>Growth Rate</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{growthRate}</InfoItemLabel>
                    </InfoItem>
                    <InfoItem>
                        <InfoItemLabel>Base Exp</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{baseExp}</InfoItemLabel>
                    </InfoItem>
                    <InfoItem>
                        <InfoItemLabel>Rarity</InfoItemLabel>
                        <InfoItemLabel color={mapColorToHex(color?.name)}>{rarity}</InfoItemLabel>
                    </InfoItem>
                </InfoContainer>
            </InfpContainerWrapper>
            {abilities && <Abilities abilities={abilities} />}
        </Base>
    );
};

export default About;
