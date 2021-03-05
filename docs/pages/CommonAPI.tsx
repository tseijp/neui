import React, { useState } from "react";
import { PagesProps } from "./types";
import { Page, Code } from '../components'
import {
    Flex,
    Box,
    Slider,
} from '../../src'
export function CommonAPI (_: PagesProps) {
    const//[color, setColor] = useState("#212121"),
          [shape, setShape] = useState(4),
            [size, setSize] = useState(250),
            [blur, setBlur] = useState(60),
        [radius, setRadius] = useState(50),
        [distance, setDist] = useState(20),
         [rotation, setRot] = useState(45),
       onChage = (fn: {(v: number): void}) => (e: any) => fn(e.target.value)
    return (
        <Page>
            {`# Common API
                useShadow({ config: { duration: 250 }, ... })

                Property | Default | Description
                :------- | :------ | :----------
                color    | null    | background color
                blur     | 60      |
                radius   | 50      |
                distance | 20      |
                border   | 1       |
                shape    | 2       |
                rotation | 0       |
                intensity| 0.15    |
                `}
            <Code></Code>
            <Box padding="auto" height="300px">
                <Flex dir="column" justify="center" items="center">
                    <Slider min={0} max={4}   onChange={onChage(setShape)} value={shape} label="shape"/>
                    <Slider min={0} max={500} onChange={onChage(setSize)} value={size} label="size"/>
                    <Slider min={0} max={100} onChange={onChage(setBlur)} value={blur} label="blur"/>
                    <Slider min={0} max={100} onChange={onChage(setRadius)} value={radius} label="radius"/>
                    <Slider min={0} max={100} onChange={onChage(setDist)} value={distance} label="distance"/>
                    <Slider min={0} max={100} onChange={onChage(setRot)} value={rotation} label="rotation"/>
                </Flex>
                <Flex dir="column" justify="center" items="center">
                    <Box width={size+"px"} height={size+"px"} {...{shape, blur, radius, distance}}/>
                </Flex>
            </Box>
        </Page>
    )
}
