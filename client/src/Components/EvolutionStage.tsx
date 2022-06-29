import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { Color } from "../types";
import { mapColorToHex } from "../utils";
import { usePokemonQueries } from "../hooks/usePokemon";

const Base = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DividerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Divider = styled.div`
    background-color: #d1d5db;
    border-radius: 12px;
    height: 8px;
    margin-inline: 8px;
    margin-top: 4px;
`;

const ImageWrapper = styled.div`
    text-align: center;

    a {
        color: #374151;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Text = styled.div<{ color: string }>`
    text-align: center;
    color: ${({ color }) => color};
    font-size: 12px;
`;

interface Props {
    level: number;
    color?: Color;
    from: {
        name: string;
        url: string;
    };
    to: {
        name: string;
        url: string;
    };
}

const EvolutionStage: React.FC<Props> = ({ level, color, from, to }: Props) => {
    const [prev, next] = usePokemonQueries([from.name, to.name]);
    console.log(prev);

    return (
        <Base>
            <ImageWrapper>
                <Link to={`/${prev.data?.data.id}`}>
                    <Image src={prev.isLoading ? "/assets/loading.gif" : prev.data?.data.sprites.other["official-artwork"].front_default} />
                    <span>
                        {prev.data?.data.id}. {prev.data?.data.name}
                    </span>
                </Link>
            </ImageWrapper>
            <DividerWrapper>
                {level && <Text color={mapColorToHex(color?.name)}>{`level : ${level}`}</Text>}
                <Divider></Divider>
            </DividerWrapper>
            <ImageWrapper>
                <Link to={`/${next.data?.data.id}`}>
                    <Image src={next.isLoading ? "/assets/loading.gif" : next.data?.data.sprites.other["official-artwork"].front_default} />
                    <span>
                        {next.data?.data.id}. {next.data?.data.name}
                    </span>
                </Link>
            </ImageWrapper>
        </Base>
    );
};

export default EvolutionStage;
