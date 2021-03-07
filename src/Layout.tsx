import styled from "styled-components"
import {shadow} from "./components"
import {animated} from "react-spring"

type Global = "inherit" | "initial" | "unset"
type Content = "center" | "start" | "end" | "flex-start" | "flex-end"
type Baseline = "baseline" | "first baseline" | "last baseline"
type Space  = "space-between" | "space-around" | "space-evenly" | "stretch"
type Overflow = "safe center" | "unsafe center"

export type BoxProps = Partial<{
    /* flex */
    flex: "auto" | "initial" | "none" | string | number | Global,
    grow: "auto" | "initial" | "none" | string | number | Global,
    shrink: string | number | Global,
    basis: string | number | Global | "fill" | "max-content" | "min-content" | "fix-content" | "content",

    /* flex-flow */
    flow: string | Global,
    dir: "row" | "row-reverse" | "column" | "column-reverse" | Global,
    wrap: "nowrap" | "wrap" | "wrap-reverse" | Global,

    /* align */
    justify: "normal" | "left" | "right" | Space | Content | Overflow | Global,
    content: "normal" | Space     | Content | Baseline | Overflow | Global,
    items  : "normal" | "stretch" | Content | Baseline | Overflow | Global,
    self   : "normal" | "auto"    | Content | Baseline | Overflow | Global,

    /* gap */
    gap: string | Global,
    row: "normal" | string | Global,
    column: "normal" | string | Global,

    /* position */
    top: string | number,
    left: string | number,
    width: string | number,
    height: string | number,
    position: string | number,
    padding: string | number,
    margin: string | number,

    /* color */
    color: string,
    background: string,
}>

export const Flex = styled(animated.div)<BoxProps>`
    display: flex;

    /* flex */
    flex-grow: ${({grow=0}) => grow};
    flex-shrink: ${({shrink=1}) => shrink};
    flex-basis: ${({basis="auto"}) => basis};
    ${({flex=""}) => flex? `flex: ${flex};`: ""}

    /* flex-flow */
    flex-direction: ${({dir="row"}) => dir};
    flex-wrap: ${({wrap="nowrap"}) => wrap};
    ${({flow=""}) => flow? `flex-flow: ${flow};`: ""}

    /* align */
    justify-content: ${({justify="normal" }) => justify};
    align-content: ${({content="normal"}) => content};
    align-items: ${({items="normal"}) => items};
    align-self: ${({self="auto"}) => self};

    /* gap */
    row: ${({row="normal"}) => row};
    column: ${({column="normal"}) => column};
    ${({gap=""}) => gap? `gap: ${gap};`: ""}

    /* position */
    top: ${({top=0}) => top};
    left: ${({left=0}) => left};
    width: ${({width="auto"}) => width};
    height: ${({height="auto"}) => height};

    /* style */
    ${({position=""}) => position? `position: ${position};`: ""}
    ${({padding=""}) => padding? `padding: ${padding};`: ""}
    ${({margin=""}) => margin? `margin: ${margin};`: ""}
    ${({color=""}) => color? `color: ${color};`: ""}
    ${({background=""}) => background? `background: ${background};`: ""}
`

export const Box = shadow(Flex, {depth: -50})
