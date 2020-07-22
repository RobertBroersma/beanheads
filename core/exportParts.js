const React = require('react')
const RDS = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const {
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
  ThemeContext,
  Noop,
} = require('./dist')

const allMaps = {
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
}

const skinTone = theme.colors.skin.light
const hairColor = 'blonde'
const clothingColor = 'blue'
const circleColor = 'blue'
const lipColor = 'red'
const hatColor = 'blue'

// const mask = true
// const lashes = rng() > 0.5

async function renderPart(Part, mapKey, key) {
  if (Part === Noop) return

  try {
    const partString = RDS.renderToString(
      React.createElement(
        ThemeContext.Provider,
        { value: { colors: theme.colors, skin: skinTone } },
        React.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 1000 990',
          },
          React.createElement(Part, {
            skinTone,
            hairColor,
            clothingColor,
            circleColor,
            lipColor,
            hatColor,
          }),
        ),
      ),
    )

    await fs.promises.mkdir(path.join(__dirname, 'parts', mapKey), {
      recursive: true,
    })

    await fs.promises.writeFile(
      path.join(__dirname, 'parts', mapKey, `${key}.svg`),
      partString,
    )
  } catch (e) {
    console.error(e)
  }

  console.log(`${key} written`)
}

async function exportParts() {
  for (let [mapKey, map] of Object.entries(allMaps)) {
    for (let [key, Part] of Object.entries(map)) {
      if (Part.Front) {
        renderPart(Part.Front, mapKey, `${key}-front`)
        renderPart(Part.Back, mapKey, `${key}-back`)
      } else {
        renderPart(Part, mapKey, key)
      }
    }
  }
}

exportParts()
