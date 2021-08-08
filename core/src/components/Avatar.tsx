import React from 'react'

import { colors } from '../theme'
import { ThemeContext } from '../themeContext'
import { Noop } from '../utils/Noop'

import { Base } from '../components/Base'

import { NormalEyebrows } from '../components/eyebrows/Normal'
import { LeftLoweredEyebrows } from '../components/eyebrows/LeftLoweredEyebrows'

import { Grin } from '../components/mouths/Grin'
import { SadMouth } from '../components/mouths/Sad'
import { Lips } from './mouths/Lips'
import { SmileOpen } from './mouths/SmileOpen'

import * as LongHair from '../components/hair/LongHair'
import * as BunHair from '../components/hair/BunHair'
import * as ShortHair from '../components/hair/ShortHair'
import * as PixieCut from '../components/hair/PixieCut'
import * as BaldingHair from '../components/hair/BaldingHair'
import * as BuzzCut from '../components/hair/BuzzCut'
import * as Afro from '../components/hair/Afro'
import * as BobCut from '../components/hair/BobCut'

import * as Beanie from '../components/hats/Beanie'
import * as Turban from '../components/hats/Turban'

import * as Chest from '../components/bodies/Chest'
import * as Breasts from '../components/bodies/Breasts'

import { MediumBeard } from './facialHair/MediumBeard'

import { HappyEyes } from './eyes/HappyEyes'
import { NormalEyes } from '../components/eyes/NormalEyes'
import { LeftTwitchEyes } from '../components/eyes/LeftTwitchEyes'

import { Shirt } from './clothing/Shirt'
import { ContentEyes } from './eyes/ContentEyes'
import { SeriousEyebrows } from './eyebrows/SeriousEyebrows'
import { RoundGlasses } from './accessories/RoundGlasses'
import { AngryEyebrows } from './eyebrows/AngryEyebrows'
import { StubbleBeard } from './facialHair/Stubble'
import { RedwoodGraphic } from './clothingGraphic/Redwood'
import { GatsbyGraphic } from './clothingGraphic/Gatsby'
import * as Dress from './clothing/Dress'

import { SquintEyes } from './eyes/SquintEyes'
import { ConcernedEyebrows } from './eyebrows/ConcernedEyebrows'
import { Shades } from './accessories/Shades'
import { TankTop } from './clothing/TankTop'
import { SimpleEyes } from './eyes/SimpleEyes'
import { Vue as VueGraphics } from './clothingGraphic/Vue'
import { DizzyEyes } from './eyes/DizzyEyes'
import { WinkEyes } from './eyes/Wink'
import { HeartEyes } from './eyes/HeartEyes'
import { OpenMouth } from './mouths/OpenMouth'
import { SeriousMouth } from './mouths/SeriousMouth'
import { ReactGraphic } from './clothingGraphic/React'
import { TinyGlasses } from './accessories/TinyGlasses'
import { VNeck } from './clothing/VNeck'
import { GraphQLGraphic } from './clothingGraphic/GraphQL'
import { Tongue } from './mouths/Tongue'
import { DressShirt } from './clothing/DressShirt'

export const eyesMap = {
  normal: NormalEyes,
  leftTwitch: LeftTwitchEyes,
  happy: HappyEyes,
  content: ContentEyes,
  squint: SquintEyes,
  simple: SimpleEyes,
  dizzy: DizzyEyes,
  wink: WinkEyes,
  heart: HeartEyes,
}

export const eyebrowsMap = {
  raised: NormalEyebrows,
  leftLowered: LeftLoweredEyebrows,
  serious: SeriousEyebrows,
  angry: AngryEyebrows,
  concerned: ConcernedEyebrows,
}

export const mouthsMap = {
  grin: Grin,
  sad: SadMouth,
  openSmile: SmileOpen,
  lips: Lips,
  open: OpenMouth,
  serious: SeriousMouth,
  tongue: Tongue,
}

export const hairMap = {
  none: { Front: Noop, Back: Noop },
  long: LongHair,
  bun: BunHair,
  short: ShortHair,
  pixie: PixieCut,
  balding: BaldingHair,
  buzz: BuzzCut,
  afro: Afro,
  bob: BobCut,
}

export const facialHairMap = {
  none: Noop,
  none2: Noop,
  none3: Noop,
  stubble: StubbleBeard,
  mediumBeard: MediumBeard,
}

export const clothingMap = {
  naked: { Back: Noop, Front: Noop },
  shirt: { Back: Shirt, Front: Noop },
  dressShirt: { Back: DressShirt, Front: Noop },
  vneck: { Back: VNeck, Front: Noop },
  tankTop: { Back: TankTop, Front: Noop },
  dress: Dress,
}

export const accessoryMap = {
  none: Noop,
  roundGlasses: RoundGlasses,
  tinyGlasses: TinyGlasses,
  shades: Shades,
}

export const graphicsMap = {
  none: Noop,
  redwood: RedwoodGraphic,
  gatsby: GatsbyGraphic,
  vue: VueGraphics,
  react: ReactGraphic,
  graphQL: GraphQLGraphic,
}

export const hatMap = {
  none: { Front: Noop, Back: Noop },
  none2: { Front: Noop, Back: Noop },
  none3: { Front: Noop, Back: Noop },
  none4: { Front: Noop, Back: Noop },
  none5: { Front: Noop, Back: Noop },
  beanie: Beanie,
  turban: Turban,
}

export const bodyMap = {
  chest: Chest,
  breasts: Breasts,
}

function selectRandomKey<T extends {}>(object: T) {
  return (Object.keys(object) as Array<keyof typeof object>)[
    Math.floor(Math.random() * Object.keys(object).length)
  ]
}

export interface AvatarProps {
  skinTone?: keyof typeof colors.skin
  eyes?: keyof typeof eyesMap
  eyebrows?: keyof typeof eyebrowsMap
  mouth?: keyof typeof mouthsMap
  hair?: keyof typeof hairMap
  facialHair?: keyof typeof facialHairMap
  clothing?: keyof typeof clothingMap
  accessory?: keyof typeof accessoryMap
  graphic?: keyof typeof graphicsMap
  hat?: keyof typeof hatMap
  body?: keyof typeof bodyMap

  hairColor?: keyof typeof colors.hair
  clothingColor?: keyof typeof colors.clothing
  circleColor?: keyof typeof colors.bgColors
  lipColor?: keyof typeof colors.lipColors
  hatColor?: keyof typeof colors.clothing
  faceMaskColor?: keyof typeof colors.clothing

  mask?: boolean
  faceMask?: boolean
  lashes?: boolean
}

export const Avatar = React.forwardRef<SVGSVGElement, AvatarProps>(
  (
    {
      skinTone = selectRandomKey(colors.skin),
      eyes = selectRandomKey(eyesMap),
      eyebrows = selectRandomKey(eyebrowsMap),
      mouth = selectRandomKey(mouthsMap),
      hair = selectRandomKey(hairMap),
      facialHair = selectRandomKey(facialHairMap),
      clothing = selectRandomKey(clothingMap),
      accessory = selectRandomKey(accessoryMap),
      graphic = selectRandomKey(graphicsMap),
      hat = selectRandomKey(hatMap),
      body = selectRandomKey(bodyMap),

      hairColor = selectRandomKey(colors.hair),
      clothingColor = selectRandomKey(colors.clothing),
      circleColor = selectRandomKey(colors.bgColors),
      lipColor = selectRandomKey(colors.lipColors),
      hatColor = selectRandomKey(colors.clothing),
      faceMaskColor = selectRandomKey(colors.clothing),

      mask = true,
      faceMask = false,
      lashes = Math.random() > 0.5,

      ...rest
    },
    ref,
  ) => {
    const skin = colors.skin[skinTone]

    const Eyes = eyesMap[eyes]
    const Eyebrows = eyebrowsMap[eyebrows]
    const Mouth = mouthsMap[mouth]
    const Hair = hairMap[hair]
    const FacialHair = facialHairMap[facialHair]
    const Clothing = clothingMap[clothing]
    const Accessory = accessoryMap[accessory]
    const Graphic = graphicsMap[graphic]
    const Hat = hatMap[hat]
    const Body = bodyMap[body]

    return (
      <ThemeContext.Provider value={{ colors, skin }}>
        <Base
          ref={ref}
          eyes={Eyes}
          eyebrows={Eyebrows}
          mouth={Mouth}
          hair={Hair}
          facialHair={FacialHair}
          clothing={Clothing}
          accessory={Accessory}
          graphic={Graphic}
          hat={Hat}
          body={Body}
          hatColor={hatColor}
          hairColor={hairColor}
          clothingColor={clothingColor}
          circleColor={circleColor}
          lipColor={lipColor}
          mask={mask}
          faceMask={faceMask}
          faceMaskColor={faceMaskColor}
          lashes={lashes}
          {...rest}
        />
      </ThemeContext.Provider>
    )
  },
)
