<p align="center" >
  <img alt="Big Heads Demo" src="demo/demo.gif" />
</p>

Easily generate avatars for your projects with Big Heads. https://bigheads.io

### Getting Started

```shell
yarn add @bigheads/core
```

or

```shell
npm install @bigheads/core --save
```

then, in your app:

```jsx
import { BigHead } from '@bigheads/core'

const Example = () => (
  <BigHead
    accessory="shades"
    body="chest"
    circleColor="blue"
    clothing="tankTop"
    clothingColor="black"
    eyebrows="angry"
    eyes="wink"
    facialHair="mediumBeard"
    graphic="vue"
    hair="short"
    hairColor="black"
    hat="none"
    hatColor="green"
    lashes="false"
    lipColor="purple"
    mask="true"
    mouth="open"
    skinTone="brown"
  />
)
```
