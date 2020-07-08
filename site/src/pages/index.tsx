import React, { useEffect, useState, useCallback, useMemo } from 'react'
import qs from 'query-string'
import { Link } from 'gatsby'
import { BigHead } from '@bigheads/core'
import { useInView } from 'react-intersection-observer'

import '../index.css'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import { getRandomOptions } from '../utils/getRandomOptions'
import { colors } from 'core/dist/theme'

const RandomAvatar = () => {
  const options = getRandomOptions()

  const queryString = qs.stringify(options)

  return (
    <Link to={`/editor/?${queryString}`} aria-label="Big Head">
      <BigHead {...options} />
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

  return (
    <>
      <SEO />
      <Hero />
      {typeof window === 'undefined' ? (
        <div className="text-6xl">Loading...</div>
      ) : (
        <div className="px-4">
          <div className="pt-12">
            <h1 className="text-4xl font-semibold text-center">
              More Big Heads
            </h1>
            <p className="text-xl text-center">
              Click on any character to edit, save or embed!
            </p>
            <div className="pt-12 flex flex-wrap justify-center container mx-auto">
              {pages}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
