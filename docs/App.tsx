import React from "react";
import {Router, Link} from "@reach/router"
import * as Pages from "./pages"
import styled from "styled-components"
import {
    Header,
    Footer,
    Wrapper,
    Container,
    Root,
    Button,
} from "../src"

function App() {
  return (
    <Root>
      <Header>
        <Button><Link to="/">NEUI</Link></Button>
      </Header>
      <Wrapper>
        <Container>
            <MainNav>
              <li>Getting Started</li>
              <SubNav>
                <Link to="/getting-started/install" >Install </Link>
                <Link to="/getting-started/usage"   >Usage   </Link>
                <Link to="/getting-started/examples">Examples</Link>
                <Link to="/getting-started/learn"   >Learn   </Link>
              </SubNav>
              <li>Layout</li>
              <SubNav>
                <Link to="/components/layout/container">Container </Link>
                <Link to="/components/layout/box"      >Box       </Link>
                <Link to="/components/layout/grid"     >Grid      </Link>
                <Link to="/components/layout/hidden"   >Hidden    </Link>
              </SubNav>
              <li>Input</li>
              <SubNav>
                <Link to="/components/inputs/button"   >Button    </Link>
                <Link to="/components/inputs/checkbox" >CheckBox  </Link>
                <Link to="/components/inputs/radio"    >Radio     </Link>
                <Link to="/components/inputs/select"   >Select    </Link>
                <Link to="/components/inputs/slider"   >Slider    </Link>
                <Link to="/components/inputs/switch"   >Switch    </Link>
                <Link to="/components/inputs/fields"   >Fields    </Link>
                <Link to="/components/inputs/list"     >List      </Link>
              </SubNav>
            </MainNav>
            <Main>
              <Router>
                <Pages.Install   path="/getting-started/install"/>
                <Pages.Usage     path="/getting-started/usage"/>
                <Pages.Examples  path="/getting-started/examples"/>
                <Pages.Learn     path="/getting-started/learn"/>
                <Pages.Container path="/components/layout/container"/>
                <Pages.Box       path="/components/layout/box"/>
                <Pages.Grid      path="/components/layout/grid"/>
                <Pages.Hidden    path="/components/layout/hidden"/>
                <Pages.Button    path="/components/inputs/button"/>
                <Pages.Checkbox  path="/components/inputs/checkbox"/>
                <Pages.Radio     path="/components/inputs/radio"/>
                <Pages.Select    path="/components/inputs/select"/>
                <Pages.Slider    path="/components/inputs/slider"/>
                <Pages.Switch    path="/components/inputs/switch"/>
                <Pages.Fields    path="/components/inputs/fields"/>
                <Pages.List      path="/components/inputs/list"/>
              </Router>
            </Main>
        </Container>
      </Wrapper>
      <Footer>
        footer
      </Footer>
    </Root>
  )
}

const MainNav = styled.ul`
    display: flex;
    flex-direction : column;
    width: 300px;
    li, a {
        color: black;
        display: flex;
    }
`;

const SubNav = styled.ul`

`

export const Main = styled.div`
    width: 60vw;
    padding: 20px;
    @media (max-width: 899px) {
        width: 100vw;
        padding: 0 12px;
    }
`;

export default App;
