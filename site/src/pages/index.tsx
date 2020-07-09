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
