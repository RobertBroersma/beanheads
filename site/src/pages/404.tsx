import React from 'react'
import { Link } from 'gatsby'
import { BeanHead } from 'beanheads'
import { SEO } from '../components/SEO'

function NotFound() {
  return (
    <>
      <SEO title="Not Found" />
      <div className="container mx-auto flex flex-col items-center h-screen justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <BeanHead
            eyes="squint"
            eyebrows="leftLowered"
            accessory="none"
            mouth="serious"
          />
        </div>
        <h1 className="text-6xl font-semibold">Page Not Found</h1>
        <Link to="/" className="underline underline-blue text-xl">
          Go Home
        </Link>
      </div>
    </>
  )
}

export default NotFound
