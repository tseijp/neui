import React from "react";
import { useAtom } from "jotai";
import { animated } from "react-spring"
import { Router, Link } from "@reach/router"
import * as Pages from "./pages"
import styled, { createGlobalStyle } from "styled-components"
import {
    themeAtom,
    shadow,
    Flex,
    Box,
    Button,
} from "../src"

function App () {
  const [theme] = useAtom(themeAtom)
  return (
    <Flex dir="column" width="auto">
      <GlobalStyle background={theme.color}/>
      <Box border={50} depth={10} height="50px" margin="0 0 50px 0">
        <Button><Link to="/">NEUI</Link></Button>
      </Box>
      <Main border={50} depth={10}>
        <Left border={50} depth={-10}>
          <li>Getting Started</li>
          <ul>
            <Link to="/getting-started/installation">Installation</Link>
            <Link to="/getting-started/basic-usage">Basic Usage</Link>
            <Link to="/getting-started/common-api">Common API</Link>
            <Link to="/getting-started/documents">Documents</Link>
            <Link to="/getting-started/examples">Examples</Link>
          </ul>
          <li>Layout</li>
          <ul>
            <Link to="/components/layout/box"      >Box</Link>
            <Link to="/components/layout/grid"     >Grid</Link>
            <Link to="/components/layout/hidden"   >Hidden</Link>
          </ul>
          <li>Input</li>
          <ul>
            <Link to="/components/inputs/button"   >Button</Link>
            <Link to="/components/inputs/checkbox" >CheckBox</Link>
            <Link to="/components/inputs/radio"    >Radio</Link>
            <Link to="/components/inputs/select"   >Select</Link>
            <Link to="/components/inputs/slider"   >Slider</Link>
            <Link to="/components/inputs/switch"   >Switch</Link>
            <Link to="/components/inputs/fields"   >Fields</Link>
            <Link to="/components/inputs/list"     >List</Link>
          </ul>
        </Left>
        <Right border={50} depth={-10}>
          <Router>
            <Pages.Installation path="/getting-started/installation"/>
            <Pages.BasicUsage   path="/getting-started/basic-usage"/>
            <Pages.CommonAPI    path="/getting-started/common-api"/>
            <Pages.Documents    path="/getting-started/documents"/>
            <Pages.Examples     path="/getting-started/examples"/>
            <Pages.Box          path="/components/layout/box"/>
            <Pages.Grid         path="/components/layout/grid"/>
            <Pages.Hidden       path="/components/layout/hidden"/>
            <Pages.Button       path="/components/inputs/button"/>
            <Pages.Checkbox     path="/components/inputs/checkbox"/>
            <Pages.Radio        path="/components/inputs/radio"/>
            <Pages.Select       path="/components/inputs/select"/>
            <Pages.Slider       path="/components/inputs/slider"/>
            <Pages.Switch       path="/components/inputs/switch"/>
            <Pages.Fields       path="/components/inputs/fields"/>
            <Pages.List         path="/components/inputs/list"/>
          </Router>
        </Right>
      </Main>
      <Box border={50} depth={10} height="100px" margin="50px 0 0 0" grow={1}>
        footer
      </Box>
    </Flex>
  )
}

const Main = shadow(styled(animated.main)`
    display: flex;
    padding: 50px 0px;
    @media (max-width: 899px) {
        flex-direction: column;
    }
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`)

const Left = shadow(styled(animated.ul)`
    display: flex;
    margin: 0px auto;
    flex-direction : column;
    padding: 20px;
    width: 300px;
    height: auto;
    li, a {
        color: black;
        display: flex;
    }
`);

export const Right = shadow(styled(animated.div)`
    width: 60vw;
    margin: 0px auto;
    padding: 20px;
    @media (max-width: 899px) {
        width: 100vw;
    }
`);

const GlobalStyle = createGlobalStyle<any>`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    body {
        position: fixed;
        overflow: hidden;
        overscroll-behavior-y: none;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        color: black;
        background: ${({background="#fff"}) => background};
    }
`

export default App;
