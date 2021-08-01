import React, { useEffect, useState, useCallback, useMemo } from 'react'
import qs from 'query-string'
import { Link } from 'gatsby'
import { BigHead } from '@bigheads/core'
import { useInView } from 'react-intersection-observer'

import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import { getRandomOptions } from '../utils/getRandomOptions'

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

  if (typeof window === 'undefined') {
    return <SEO />
  }

  return (
    <>
      <SEO />
      <a
        className="block fixed shadow-lg w-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-500"
        href="mailto:robertbroersma@gmail.com"
        target="_blank"
      >
        <div className="container mx-auto text-center py-2 text-lg">
          <span
            className="text-3xl align-middle"
            role="img"
            aria-label="Announcement"
          >
            📣
          </span>{' '}
          <span className="font-bold">/svg API</span> now disabled due too high
          server costs. Want to help keep the API up?
          <div className="bg-white inline-block rounded text-red-500 font-bold px-6 py-2 m-3 md:m-0 md:ml-4">
            Sponsor Big Heads!
          </div>
        </div>
      </a>
      <div className="h-24 md:h-12" />
      <Hero />
      <div className="px-4">
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
