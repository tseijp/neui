import React from "react";
import {Router, Link} from "@reach/router"
import * as Pages from "./pages"
import styled from "styled-components"
import {
    shadow,
    Flex,
    Box,
    Button,
} from "../src"

function App () {
  return (
    <Box dir="column" position="absolute" border={0}>
      <Flex height="50px">
        <Button><Link to="/">NEUI</Link></Button>
      </Flex>
      <Box grow={1}>
        <MainNav>
          <li>Getting Started</li>
          <SubNav>
            <Link to="/getting-started/installation">Installation</Link>
            <Link to="/getting-started/basic-usage">Basic Usage</Link>
            <Link to="/getting-started/common-api">Common API</Link>
            <Link to="/getting-started/examples">Examples</Link>
            <Link to="/getting-started/learn">Learn</Link>
          </SubNav>
          <li>Layout</li>
          <SubNav>
            <Link to="/components/layout/container">Container</Link>
            <Link to="/components/layout/box"      >Box</Link>
            <Link to="/components/layout/grid"     >Grid</Link>
            <Link to="/components/layout/hidden"   >Hidden</Link>
          </SubNav>
          <li>Input</li>
          <SubNav>
            <Link to="/components/inputs/button"   >Button</Link>
            <Link to="/components/inputs/checkbox" >CheckBox</Link>
            <Link to="/components/inputs/radio"    >Radio</Link>
            <Link to="/components/inputs/select"   >Select</Link>
            <Link to="/components/inputs/slider"   >Slider</Link>
            <Link to="/components/inputs/switch"   >Switch</Link>
            <Link to="/components/inputs/fields"   >Fields</Link>
            <Link to="/components/inputs/list"     >List</Link>
          </SubNav>
        </MainNav>
        <Main>
          <Router>
            <Pages.Installation path="/getting-started/installation"/>
            <Pages.BasicUsage   path="/getting-started/basic-usage"/>
            <Pages.CommonAPI    path="/getting-started/common-api"/>
            <Pages.Examples     path="/getting-started/examples"/>
            <Pages.Learn        path="/getting-started/learn"/>
            <Pages.Container    path="/components/layout/container"/>
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
        </Main>
      </Box>
      <Flex grow={1}>
        footer
      </Flex>
    </Box>
  )
}

const MainNav = shadow(styled.ul`
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

const SubNav = styled.ul`

`

export const Main = shadow(styled.div`
    width: 60vw;
    margin: 0px auto;
    padding: 20px;
    @media (max-width: 899px) {
        width: 100vw;
    }
`);

export default App;
