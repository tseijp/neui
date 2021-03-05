import React from "react"
import styled from "styled-components"
import {UseShadowProps} from "../hooks"
import {Box} from "../Layout"

export type SliderProps = Partial<UseShadowProps & {
    ref: React.Ref<any>,
    min: number,
    max: number,
    step: number,
    value: number,
    disabled: boolean,
    vertical: boolean,
    onChange: (...args: any) => void,
    label: string,
}>

export function Slider ({
    disabled= false,
    vertical= false,
    label= "",
    ...props
}: SliderProps) {
    return (
        <Box height="auto">
            <SliderLabel htmlFor={label}>{label}: </SliderLabel>
            <SliderInput {...props} type="range"/>
        </Box>
    )
}

const SliderLabel = styled.label``
const SliderInput = styled.input<any>`
    margin: 10px 0px;
    height: 0;
    width: 100%;
    background-color: transparent;
    position: relative;
    &:hover, &:active, &:focus, &:focus-within {
        &::after {
            position: absolute;
            left: 105%;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 3px;
            padding: 10px;
        }
        &::before {
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            z-index: 222;
            content: " ";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 103%;

            @media only screen and (max-width: 410px) {
            display: none;
            }
        }
    }
`;
