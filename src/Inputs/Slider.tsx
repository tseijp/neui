// import {animated} from "react-spring"
import styled from "styled-components"
import {shadow} from "../components"
import {UseShadowProps} from "../hooks"

export type SliderProps = Partial<UseShadowProps & {
    min: number,
    max: number,
    step: number,
    value: number,
    disabled: boolean,
    vertical: boolean,
}>

export function Slider ({
    min= 0,
    max= 1,
    step= 0.01,
    value= 0.5,
    disabled= false,
    vertical= false,
    ...props
}: SliderProps) {
    return (
        <SliderContainer>
            <SliderBar/>
            <SliderCircle/>
            <SliderBar/>
        </SliderContainer>
    )
}

export const SliderContainer = shadow(styled.div`
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Size */
    height: 32px;
`)

export const SliderCircle = shadow(styled.button`
    /* Size */
    height: 32px;
    width: 32px;

    /* Rounded border */
    border-radius: 9999px;
`)

export const SliderBar = shadow(styled.div`
    /* Width based on the current value */
    height: 2px;
    width: 50%;
`)
