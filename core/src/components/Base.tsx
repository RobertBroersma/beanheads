import React from 'react'
import { colors } from '../theme'
import { useTheme } from '../themeContext'
import { Noop } from '../utils/Noop'
import { FacialHairProps } from './facialHair/types'
import { HairProps } from './hair/types'
import { ClothingProps } from './clothing/types'
import { Mask } from './Mask'
import { BgCircle } from './BgCircle'
import { MouthProps } from './mouths/types'
import { BodyProps } from './bodies/types'
import { HatProps } from './hats/types'
import { EyeProps } from './eyes/types'
import { DressShirt } from './clothing/DressShirt'
import { FaceMask } from './FaceMask'

interface BaseProps {
  eyes: React.ComponentType<EyeProps>
  eyebrows: React.ComponentType
  mouth: React.ComponentType<MouthProps>
  hair?: {
    Front: React.ComponentType<HairProps>
    Back: React.ComponentType<HairProps>
    hatScale?: number
  }
  facialHair: React.ComponentType<FacialHairProps>
  accessory: React.ComponentType
  graphic: React.ComponentType
  hat: {
    Front: React.ComponentType<ClothingProps & HatProps>
    Back: React.ComponentType<ClothingProps & HatProps>
  }
  body: {
    Front: React.ComponentType<BodyProps>
    Back: React.ComponentType<BodyProps>
  }
  clothing: {
    Front: React.ComponentType<ClothingProps>
    Back: React.ComponentType<ClothingProps>
    braStraps?: boolean
  }

  clothingColor: keyof typeof colors.clothing
  hairColor: keyof typeof colors.hair
  circleColor: keyof typeof colors.bgColors
  lipColor: keyof typeof colors.lipColors
  hatColor: keyof typeof colors.clothing
  faceMaskColor: keyof typeof colors.clothing

  mask: boolean
  faceMask: boolean
  lashes: boolean
}

export const Base = React.forwardRef<SVGSVGElement, BaseProps>(
  (
    {
      eyes: Eyes,
      eyebrows: Eyebrows,
      mouth: Mouth,
      hair = { Front: Noop, Back: Noop },
      facialHair: FacialHair,
      clothing = { Front: Noop, Back: Noop },
      accessory: Accessory,
      graphic: Graphic,
      hat = { Front: Noop, Back: Noop },
      body,

      hairColor,
      clothingColor,
      circleColor,
      lipColor,
      hatColor,
      faceMaskColor,

      mask,
      faceMask,
      lashes,

      ...rest
    },
    ref,
  ) => {
    const { skin } = useTheme()

    const { Front: FrontHair, Back: BackHair, hatScale } = hair
    const { Front: FrontHat, Back: BackHat } = hat
    const { Front: FrontBody, Back: BackBody } = body
    const {
      Front: ClothingFront,
      Back: ClothingBack,
      braStraps = true,
    } = clothing

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 990"
        {...rest}
      >
        {mask && <Mask id="mask" />}
        <g mask={mask ? `url(#mask)` : undefined}>
          {mask && <BgCircle circleColor={circleColor} />}
          <BackHat color={hatColor} scale={hatScale} />
          <BackHair hairColor={hairColor} hasHat={FrontHat !== Noop} />
          <path
            d="M610,758.72c90.76,0,72,114.24,72.87,241.28H610Z"
            fill={skin.base}
          />
          <path
            d="M632.74,831.87,610,870l11.38,130h31.76C653.91,819.73,632.74,831.87,632.74,831.87Z"
            fill={skin.shadow}
          />
          <path
            d="M233.25,500c0-147.32,119.43-266.75,266.75-266.75S766.75,352.68,766.75,500A266.22,266.22,0,0,1,668.1,707.12q-8.21,6.68-16.94,12.69C591,758,515,758,446.39,751.89c-6.66-1-13.3-2.26-19.89-3.71-26.33-5.8-51.82-14.75-75.37-27.8Q342.4,715,334.2,708.76a199.59,199.59,0,0,1-15.8-13.38q-7.14-6.63-13.79-13.78A265.86,265.86,0,0,1,233.25,500Z"
            fill={skin.base}
          />
          <path
            d="M269.61,634.48c.7,1.2,1.39,2.4,2.11,3.58.43.72.88,1.42,1.33,2.14.66,1.07,1.32,2.14,2,3.19.48.76,1,1.5,1.46,2.24.66,1,1.32,2,2,3,.51.76,1,1.52,1.56,2.28.66,1,1.32,1.92,2,2.88.54.77,1.1,1.53,1.65,2.3s1.34,1.85,2,2.77,1.15,1.53,1.73,2.29,1.37,1.8,2.07,2.7,1.19,1.51,1.79,2.26,1.41,1.76,2.12,2.63,1.23,1.49,1.85,2.23,1.44,1.72,2.17,2.57,1.27,1.47,1.91,2.2l2.22,2.5c.65.73,1.31,1.44,2,2.16.86.94,1.73,1.87,2.6,2.79l1.21,1.28c1.29,1.34,2.59,2.68,3.91,4l.26.27c1.29,1.28,2.6,2.55,3.91,3.81l1.58,1.5c.95.89,1.9,1.78,2.86,2.66l1.16,1.06c1,.94,2.09,1.86,3.14,2.78q4.9,4.27,10,8.19,8.19,6.24,16.93,11.62c23.55,13,49,22,75.37,27.8,6.59,1.45,13.23,2.7,19.89,3.71,42.1,3.75,87,5.18,129.28-3.08C508.45,729,185.59,612.74,388.8,257.48h0c-2.72,1.25-5.4,2.54-8.06,3.88l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53c-3.76,2-7.48,4.07-11.13,6.23l-.9.53c-1.16.69-2.31,1.39-3.46,2.1l-.87.54q-5.36,3.35-10.55,6.93l-1.08.75c-1.09.76-2.16,1.52-3.23,2.29l-.66.47q-3.27,2.39-6.46,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.17.94c-1,.81-2,1.62-3,2.45l0,0c-2.11,1.75-4.19,3.55-6.24,5.37l-1.14,1-2.69,2.45L318,305q-4.28,4-8.37,8.17l-1.38,1.41c-.79.82-1.58,1.64-2.36,2.47-.46.49-.92,1-1.37,1.48q-2.06,2.2-4.06,4.46c-.45.51-.91,1-1.36,1.54-.71.81-1.41,1.63-2.11,2.45l-1.51,1.79c-.68.81-1.36,1.62-2,2.44-.54.66-1.08,1.33-1.61,2-1.07,1.33-2.12,2.66-3.16,4-.54.7-1.08,1.4-1.61,2.11s-1.2,1.59-1.79,2.4-1.07,1.45-1.59,2.18-1.13,1.55-1.68,2.33q-1.42,2-2.8,4.05c-.5.73-1,1.48-1.49,2.22s-1.1,1.66-1.64,2.5l-1.49,2.31-1.68,2.71c-.43.69-.86,1.38-1.28,2.07-.89,1.46-1.75,2.93-2.61,4.4l-1.22,2.16c-.54.95-1.08,1.91-1.61,2.87-.4.73-.8,1.46-1.19,2.19-.64,1.19-1.27,2.39-1.9,3.59l-1.2,2.34c-.64,1.28-1.28,2.55-1.91,3.84-.33.69-.67,1.39-1,2.09-.52,1.09-1,2.19-1.53,3.29-.31.66-.61,1.32-.91,2q-1.11,2.47-2.17,5c-.22.52-.43,1.05-.65,1.57-.53,1.27-1.05,2.54-1.56,3.82-.27.67-.53,1.34-.79,2-.5,1.26-1,2.53-1.45,3.8-.21.55-.42,1.1-.62,1.65q-.94,2.63-1.85,5.26l-.56,1.7q-.66,2-1.29,4l-.6,1.91c-.47,1.54-.93,3.08-1.37,4.63-.1.33-.2.66-.29,1q-.78,2.76-1.5,5.54c-.16.59-.3,1.19-.45,1.78-.35,1.39-.69,2.78-1,4.18l-.42,1.75c-.43,1.9-.85,3.8-1.24,5.71l-.15.77q-.51,2.55-1,5.1c-.11.61-.21,1.21-.32,1.82-.26,1.49-.51,3-.74,4.5-.08.51-.17,1-.24,1.52-.3,1.95-.57,3.91-.83,5.88l-.15,1.3c-.2,1.59-.38,3.19-.55,4.79-.06.6-.13,1.2-.19,1.81-.16,1.68-.31,3.37-.45,5.06,0,.35-.06.69-.08,1q-.22,3-.39,6.05c0,.53,0,1.07-.07,1.6q-.1,2.36-.18,4.71c0,.59,0,1.18,0,1.77,0,2.05-.08,4.11-.08,6.17,0,0,0,.07,0,.1,0,2.22,0,4.42.08,6.62,0,.76.06,1.52.08,2.28.05,1.47.1,2.94.17,4.41,0,.89.11,1.77.16,2.66.08,1.33.15,2.66.25,4,.07,1,.16,1.89.24,2.83.11,1.26.21,2.52.34,3.77.09,1,.21,1.94.31,2.91.14,1.21.27,2.43.42,3.64.12,1,.26,2,.39,2.95.16,1.18.32,2.37.5,3.55.15,1,.31,2,.47,3,.18,1.16.37,2.33.57,3.49.18,1,.36,2,.55,3,.21,1.15.43,2.3.65,3.44s.41,2,.62,3c.24,1.14.48,2.27.74,3.4s.44,2,.68,2.93c.26,1.13.54,2.25.82,3.36s.49,1.95.74,2.91c.3,1.12.6,2.23.91,3.34.26,1,.53,1.92.81,2.87.32,1.11.65,2.21,1,3.31s.58,1.89.88,2.84.7,2.19,1.06,3.28.62,1.87.94,2.8c.38,1.09.76,2.18,1.15,3.27.33.91.65,1.83,1,2.74l1.24,3.27c.35.89.69,1.79,1,2.68.44,1.09.89,2.19,1.34,3.28.36.86.71,1.73,1.08,2.59.47,1.12,1,2.22,1.45,3.33.37.82.73,1.65,1.1,2.47.52,1.16,1.07,2.3,1.6,3.44l1.08,2.3c.61,1.26,1.24,2.5,1.87,3.75.32.63.62,1.27.95,1.9q2.88,5.61,6,11.07C268.88,633.26,269.25,633.87,269.61,634.48Z"
            fill={skin.shadow}
          />
          <path
            d="M233.25,500c0-147.32,119.43-266.75,266.75-266.75S766.75,352.68,766.75,500A266.22,266.22,0,0,1,668.1,707.12q-8.21,6.68-16.94,12.69C591,758,515,758,446.39,751.89c-6.66-1-13.3-2.26-19.89-3.71-26.33-5.8-51.82-14.75-75.37-27.8Q342.4,715,334.2,708.76a199.59,199.59,0,0,1-15.8-13.38q-7.14-6.63-13.79-13.78A265.86,265.86,0,0,1,233.25,500Z"
            fill="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
          <path
            d="M386.12,758.72c-90.77,0-72,114.24-72.87,241.28h72.87Z"
            fill={skin.base}
          />
          <path
            d="M367.23,831.87,390,870l-11.39,130H346.88C346.07,819.73,367.23,831.87,367.23,831.87Z"
            fill={skin.shadow}
          />
          <path
            d="M619.47,1070H380.53a13.28,13.28,0,0,1-13.27-13.28V772a13.28,13.28,0,0,1,13.27-13.28H613.76c13.09,0,19,7.66,19,19.88v278.08A13.28,13.28,0,0,1,619.47,1070Z"
            fill={skin.base}
          />
          <path
            d="M629.05,766.62a19.33,19.33,0,0,1-2.51-4,17.25,17.25,0,0,0-8.28-3.51,28.88,28.88,0,0,0-4.5-.34H380.53A13.28,13.28,0,0,0,367.26,772c29,10.42,83.29,16.24,132.74,16.24C563.06,788.24,604.38,778.89,629.05,766.62Z"
            fill={skin.shadow}
          />
          <path
            d="M610,758.72c90.76,0,72,114.24,72.87,241.28H632.74"
            fill="none"
            stroke={colors.outline}
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
          <path
            d="M386.12,758.72c-90.77,0-72,114.24-72.87,241.28h50.07"
            fill="none"
            stroke={colors.outline}
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="12px"
          />

          <path
            d="M380.53,758.82l233.23-.1"
            fill="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
          <path
            d="M380.53,1070H497.15C388,1070,396.24,838.82,367.26,838.82v217.86A13.28,13.28,0,0,0,380.53,1070Z"
            fill={skin.shadow}
          />
          <path
            d="M361.26,860.85c-.19-3.67-.11-7.34.05-11s.47-7.35.86-11c.2-1.84.4-3.67.65-5.51s.49-3.67.85-5.51a44.18,44.18,0,0,1,3.59-11,44.18,44.18,0,0,1,3.59,11c.36,1.84.62,3.67.85,5.51s.45,3.67.65,5.51c.38,3.67.68,7.34.85,11s.25,7.34.06,11Z"
            fill={colors.outline}
          />
          <path
            d="M632.74,870v8c.26,34,.26,69,0,102.75,0,2.87,0,5.72,0,8.53v67.41A13.28,13.28,0,0,1,619.47,1070H380.53a13.28,13.28,0,0,1-13.27-13.28V998.52c0-2.51,0-5.07,0-7.65-.25-34.87-.25-69.87,0-105.3V860.85"
            fill="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
          <path
            d="M626.74,870c-.19-4.17-.1-8.35.06-12.53s.47-8.35.85-12.53c.2-2.09.41-4.18.65-6.27s.49-4.17.85-6.26a55.09,55.09,0,0,1,3.59-12.53,55.09,55.09,0,0,1,3.59,12.53c.36,2.09.62,4.18.85,6.26s.45,4.18.65,6.27c.38,4.18.69,8.35.85,12.53s.25,8.36.06,12.53Z"
            fill={colors.outline}
          />

          <BackBody clothingColor={clothingColor} braStraps={braStraps} />
          <ClothingBack color={clothingColor} graphic={Graphic} />
          {!(ClothingFront === Noop && ClothingBack === Noop) && (
            <FrontBody
              clothingColor={
                ClothingBack === DressShirt ? 'white' : clothingColor
              }
              braStraps={braStraps}
            />
          )}
          <ClothingFront color={clothingColor} graphic={Graphic} />
          {!faceMask && <FacialHair color={hairColor} />}
          <Eyes withLashes={lashes} />
          <Mouth lipColor={lipColor} />
          {faceMask && <FaceMask color={faceMaskColor} />}
          <FrontHair hairColor={hairColor} hasHat={FrontHat !== Noop} />
          <Eyebrows />
          <FrontHat color={hatColor} scale={hatScale} />
          <Accessory />
        </g>
      </svg>
    )
  },
)
