import React, { useEffect, useState, useCallback, useMemo } from 'react'
import qs from 'query-string'
import { Link } from 'gatsby'
import {
  BigHead,
  theme,
  eyesMap,
  eyebrowsMap,
  mouthsMap,
  hairMap,
  facialHairMap,
  clothingMap,
  accessoryMap,
  graphicsMap,
  hatMap,
  bodyMap,
} from '@bigheads/core'
import { useInView } from 'react-intersection-observer'

import '../index.css'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'

function selectRandomKey<T extends {}>(object: T) {
  return (Object.keys(object) as Array<keyof typeof object>)[
    Math.floor(Math.random() * Object.keys(object).length)
  ]
}

const RandomAvatar = () => {
  const skinTone = selectRandomKey(theme.colors.skin)
  const eyes = selectRandomKey(eyesMap)
  const eyebrows = selectRandomKey(eyebrowsMap)
  const mouth = selectRandomKey(mouthsMap)
  const hair = selectRandomKey(hairMap)
  const facialHair = selectRandomKey(facialHairMap)
  const clothing = selectRandomKey(clothingMap)
  const accessory = selectRandomKey(accessoryMap)
  const graphic = selectRandomKey(graphicsMap)
  const hat = selectRandomKey(hatMap)
  const body = selectRandomKey(bodyMap)

  const hairColor = selectRandomKey(theme.colors.hair)
  const clothingColor = selectRandomKey(theme.colors.clothing)
  const circleColor = selectRandomKey(theme.colors.bgColors)
  const lipColor = selectRandomKey(theme.colors.lipColors)
  const hatColor = selectRandomKey(theme.colors.clothing)

  const mask = true
  const lashes = Math.random() > 0.5

  const queryString = qs.stringify({
    skinTone,
    eyes,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    circleColor,
    lipColor,
    hatColor,
    mask,
    lashes,
  })

  return (
    <Link to={`/editor/?${queryString}`} aria-label="Big Head">
      <BigHead
        skinTone={skinTone}
        eyes={eyes}
        eyebrows={eyebrows}
        mouth={mouth}
        hair={hair}
        facialHair={facialHair}
        clothing={clothing}
        accessory={accessory}
        graphic={graphic}
        hat={hat}
        body={body}
        hairColor={hairColor}
        clothingColor={clothingColor}
        circleColor={circleColor}
        lipColor={lipColor}
        hatColor={hatColor}
        mask={mask}
        lashes={lashes}
      />
    </Link>
  )
}

const RandomAvatars = React.memo(
  ({ onReachEnd, page }: { onReachEnd(page: number): void; page: number }) => {
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        onReachEnd(page)
      }
    }, [inView])

    return useMemo(
      () => (
        <>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
          <div ref={ref} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <RandomAvatar />
          </div>
        </>
      ),
      [],
    )
  },
)

const Home = () => {
  const onReachEnd = useCallback(page => {
    setPages(current => {
      if (page === current.length) {
        return [
          ...current,
          <RandomAvatars
            key={page + 1}
            page={page + 1}
            onReachEnd={onReachEnd}
          />,
        ]
      }

      return current
    })
  }, [])

  const [pages, setPages] = useState([
    <RandomAvatars key={1} page={1} onReachEnd={onReachEnd} />,
  ])

  if (typeof window === 'undefined') return 'Loading...'

  return (
    <>
      <SEO />
      <div className="px-4">
        <Hero />
        <div className="pt-12">
          <h1 className="text-4xl font-semibold text-center">More Big Heads</h1>
          <p className="text-xl text-center">
            Click on any character to edit, save or embed!
          </p>
          <div className="pt-12 flex flex-wrap justify-center container mx-auto">
            {pages}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
