import React, { useState, useCallback, useMemo } from 'react'
import qs from 'query-string'
import startCase from 'lodash/startCase'
import { Link, navigate } from 'gatsby'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

import {
  Avatar,
  bodyMap,
  hairMap,
  AvatarProps,
  clothingMap,
  eyesMap,
  eyebrowsMap,
  mouthsMap,
  facialHairMap,
  accessoryMap,
  hatMap,
  graphicsMap,
  theme,
} from '@bigheads/core'
import { Download, Code, Image, ArrowLeft, RefreshCw } from 'react-feather'
import { SEO } from '../components/SEO'
import { getRandomOptions } from '../utils/getRandomOptions'

type SettingMaps = {
  [key in keyof AvatarProps]: any
}

const settingMaps: SettingMaps = {
  mask: { true: 'true', false: 'false' },
  body: bodyMap,
  lipColor: theme.colors.lipColors,
  skinTone: theme.colors.skin,
  hair: hairMap,
  hairColor: theme.colors.hair,
  clothing: clothingMap,
  clothingColor: theme.colors.clothing,
  graphic: graphicsMap,
  eyes: eyesMap,
  eyebrows: eyebrowsMap,
  mouth: mouthsMap,
  facialHair: facialHairMap,
  accessory: accessoryMap,
  hat: hatMap,
  hatColor: theme.colors.clothing,
  lashes: { true: 'true', false: 'false' },
}

function Editor({ location }: { location: Location }) {
  const props = useMemo(
    () => (location.search ? qs.parse(location.search) : getRandomOptions()),
    [location.search],
  )

  const updateProp = useCallback(
    e => {
      const name = e.target.name
      const value = e.target.value

      navigate(
        `/editor?${qs.stringify({
          ...props,
          [name]: value,
        })}`,
      )
    },
    [props],
  )

  const randomize = useCallback(() => {
    navigate(`/editor?${qs.stringify(getRandomOptions())}`)
  }, [])

  const [activeTab, setActiveTab] = useState<'react' | 'img'>('react')

  const svgUrl = useMemo(
    () =>
      `/svg?${qs.stringify(
        Object.entries(props).reduce(
          (total, [key, value]) =>
            value === 'false' ? total : { ...total, [key]: value },
          {},
        ),
      )}`,
    [props],
  )

  const reactCode = `import { BigHead } from '@bigheads/core'

const Example = () => (
  <BigHead
    ${Object.entries(props)
      .map(([key, value]) =>
        [
          key,
          value === 'true'
            ? undefined
            : value === 'false'
            ? '{false}'
            : `"${value}"`,
        ]
          .filter(Boolean)
          .join('='),
      )
      .join('\n    ')}
  />
)
  `

  const imgCode = `<img src="https://bigheads.io${svgUrl}" alt="Big Head" />`

  if (typeof window === 'undefined') {
    return <SEO title="Big Head Editor" />
  }

  return (
    <>
      <SEO title="Big Head Editor" />
      <a
        href="https://www.producthunt.com/posts/big-heads?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-big-heads"
        target="_blank"
        className="absolute top-0 right-0 mt-2 mr-2"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=213860&theme=light"
          alt="Big Heads - Easily generate characters for your projects | Product Hunt Embed"
          style={{ width: 250, height: 54 }}
          width="250px"
          height="54px"
        />
      </a>
      <div className="px-4 py-16 md:py-12">
        <div className="flex flex-col container mx-auto">
          <h1 className="text-4xl font-semibold text-center relative flex flex-col justify-center">
            <Link to="/" className="absolute">
              <ArrowLeft className="mr-4 h-8 w-8" />
            </Link>
            <span>Edit Big Head</span>
            <span className="ml-auto" />
          </h1>

          <div className="max-w-xs w-full self-center mt-8">
            {/* @ts-ignore */}
            <Avatar
              {...props}
              lashes={props.lashes === 'true'}
              mask={props.mask === 'true'}
            />
          </div>

          <div className="flex flex-col lg:flex-row w-full pt-12">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold uppercase tracking-tight">
                Settings{' '}
                <button
                  onClick={randomize}
                  className="text-white text-lg bg-indigo-400 hover:bg-indigo-500 font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span>Random</span>
                </button>
              </h2>
              {Object.entries(settingMaps).map(([key, map]) => (
                <div key={key} className="flex items-center mt-4">
                  <label className="w-1/3 font-semibold" htmlFor="body">
                    {startCase(key)}
                  </label>
                  <select
                    id={key}
                    name={key}
                    defaultValue={`${props[key as keyof AvatarProps]}`}
                    onChange={updateProp}
                    className="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  >
                    {Object.keys(map).map(value => (
                      <option key={value} value={value}>
                        {startCase(value)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className="w-16 h-16" />
            <div className="flex-1">
              <h2 className="text-3xl font-semibold uppercase tracking-tight">
                Usage
              </h2>
              <div className="w-full pb-12">
                <div className="sticky top-0 flex flex-col items-center">
                  <div className="w-full pt-4">
                    <div className="flex">
                      <button
                        onClick={() => setActiveTab('react')}
                        className="text-white text-lg bg-indigo-400 hover:bg-indigo-500 font-bold py-2 px-4 rounded inline-flex items-center"
                      >
                        <Code className="w-4 h-4 mr-2" />
                        <span>React</span>
                      </button>
                      <div className="w-2 h-2" />
                      <button
                        onClick={() => setActiveTab('img')}
                        className="text-white text-lg bg-indigo-400 hover:bg-indigo-500 font-bold py-2 px-4 rounded inline-flex items-center"
                      >
                        <Image className="w-4 h-4 mr-2" />
                        <span>Image</span>
                      </button>
                      <div className="w-2 h-2" />
                      <a
                        href={svgUrl}
                        download="bighead.svg"
                        className="ml-auto text-white text-lg bg-indigo-400 hover:bg-indigo-500 font-bold py-2 px-4 rounded inline-flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span>SVG</span>
                      </a>
                    </div>

                    {activeTab === 'react' && (
                      <div className="pt-2">
                        <SyntaxHighlighter style={atomDark}>
                          {`yarn add @bigheads/core`}
                        </SyntaxHighlighter>
                        or
                        <SyntaxHighlighter style={atomDark}>
                          {`npm install @bigheads/core --save`}
                        </SyntaxHighlighter>
                        then
                        <SyntaxHighlighter
                          style={atomDark}
                          language="javascript"
                        >
                          {reactCode}
                        </SyntaxHighlighter>
                      </div>
                    )}

                    {activeTab === 'img' && (
                      <div className="pt-2">
                        <SyntaxHighlighter
                          style={atomDark}
                          language="javascript"
                          wrapLines
                          codeTagProps={{
                            className: 'whitespace-pre-wrap break-all',
                          }}
                        >
                          {imgCode}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Editor
