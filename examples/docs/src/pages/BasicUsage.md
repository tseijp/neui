# Basic Usage
There are 1 hooks in react-spring currently:
  - `useShadow` a hook to style shadow

### First, you fetch your imports

```js
import { useShadow } from "@tsei/neui"
import {animated} from "react-spring"
```

### Next, define your spring
```js
const style = useShadow()
```

### Finally, tie the animated values to your view
```js
return <animated.div style={props}>Hello World</animated.div>
```

```js
// @tsei/neui
const ShadowStyle = shadow(Button)
// React components
const AnimatedDonut = animated(Donut)

// React-native
const AnimatedView = animated(View)

// styled-components, emotion, etc.
const AnimatedHeader = styled(animated.h1)\`\`
```
