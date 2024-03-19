const React = require('react')
const RDS = require('react-dom/server')
const seedrandom = require('seedrandom')

const {
  BeanHead,
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
} = require('beanheads')

function getRandomOptions(rng) {
  function selectRandomKey(object) {
    return Object.keys(object)[Math.floor(rng() * Object.keys(object).length)]
  }

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
  const faceMaskColor = selectRandomKey(theme.colors.clothing)

  const mask = true
  const faceMask = false
  const lashes = rng() > 0.5

  return {
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
    faceMaskColor,
    mask,
    faceMask,
    lashes,
  }
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
  try {
    let { seed, ...props } = event.queryStringParameters

    for (let [key, value] of Object.entries(props)) {
      if (value === 'false') {
        props[key] = false
      }

      if (value === 'true') {
        props[key] = true
      }
    }

    const rng = seed ? seedrandom(seed) : Math.random

    const mergedProps = {
      ...getRandomOptions(rng),
      ...props,
    }

    const avatarString = RDS.renderToString(
      React.createElement(BeanHead, mergedProps),
    )

    return {
      statusCode: 200,
      body: avatarString,
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
