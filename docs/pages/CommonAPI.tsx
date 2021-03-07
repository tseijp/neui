import React, { useState } from "react";
import { PagesProps } from "./types";
import { Page, Code } from '../components'
import { useAtom } from "jotai"
import {
    colorAtom,
    useShadow,
    Flex,
    Box,
    Slider,
} from '../../src'

const {PI} = Math

const target = (fn: {(v: any): void}) => (e: any) => fn(e.target.value)

export function CommonAPI (_: PagesProps) {
    const [color, setColor] = useAtom(colorAtom),
        [border, setBorder] = useState(50),
            [size, setKize] = useState(250)
    // light
    const [radius, setR] = useState(10),
           [theta, setT] = useState(PI / 4),
             [phi, setP] = useState(0)
    // shadow
    const [depth, setD] = useState(10),
         [lambda, setL] = useState(PI / 6),
          [kappa, setK] = useState(2)
    const style = useShadow({border, radius, theta, phi, depth, lambda, kappa})
    return (
        <Page>
            {`# Common API
                useShadow({ ... })

                Property | Default | Description
                :------- | :------ | :----------
                color    | #212121 |
                border   | 0       |
                radius   | 10      |
                theta    | 45      |
                phi      | 0       |
                depth    | 10      |
                lambda   | PI/6    |
                kappa    | 0       |
                `}
            <Code></Code>
            <Flex padding="50px 0px">
                <Flex dir="column" width="200px" justify="center">
                    <Box>
                        Pick a Color:
                            <input type="color" value={color} onChange={target(setColor)}/>
                        or  <input type="text"  value={color} onChange={target(setColor)} style={{width: "2rem", height:"1.5rem"}}/>
                    </Box>
                    <Slider label="border:" min={0} max={size} value={border} onChange={target(setBorder)}/>
                    <Slider label="size:  " min={0} max={500} value={size}  onChange={target(setKize)}/>
                    <Flex style={{paddingTop: "1rem"}}>Light</Flex>
                    <Slider label="radius:" value={radius} onChange={target(setR)} min={0} max={100} step={100 / 100}/>
                    <Slider label="theta: " value={theta}  onChange={target(setT)} min={0} max={PI * 2} step={PI * 2 / 100}/>
                    <Slider label="phi    " value={phi}    onChange={target(setP)} min={0} max={PI / 6} step={PI / 6 / 100}/>
                    <Flex style={{paddingTop: "1rem"}}>Shadow</Flex>
                    <Slider label="depth: "  value={depth}  onChange={target(setD)}  min={-100} max={100} step={100 / 100}/>
                    <Slider label="lambda:"  value={lambda} onChange={target(setL)}  min={0} max={PI / 6} step={PI / 6 /100}/>
                    <Slider label="kappa: "  value={kappa}  onChange={target(setK)}  min={0} max={5} step={5 / 100}/>
                </Flex>
                <Flex dir="column" width="100%" justify="center" items="center">
                    <Box width={size+"px"} height={size+"px"} style={style} justify="center" items="center"
                        onMouseUp={() => setD(p => -p)}
                        onMouseDown={() => setD(p => -p)}
                        onMouseEnter={() => setD(p => p / 2)}
                        onMouseLeave={() => setD(p => p * 2)}>
                            CLICK ME
                    </Box>
                </Flex>
            </Flex>
        </Page>
    )
}
