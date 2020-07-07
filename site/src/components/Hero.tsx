import React from 'react'
import { GitHub, Twitter, Coffee } from 'react-feather'

export function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 lg:py-24 lg:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 lg:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/svg"
          />
        </div>
        <div className="lg:flex-grow md:w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Randomly Generated Characters for Your Apps &amp; Games
          </h1>
          <p className="leading-relaxed text-xl">
            Combine expressions, clothing, hair styles and colors into billions
            of different unique characters. Embed them on your website, use them
            in your favourite design software, or import them using the React
            library!
          </p>
          <p className="text-sm text-gray-600 pt-4 w-full">
            Free for personal and commercial use. Consider buying me a coffee
            and follow me on Twitter!
          </p>
          <div className="pt-8 flex flex-wrap flex-col sm:flex-row">
            <a
              href="https://github.com/RobertBroersma/bigheads"
              target="_blank"
              className="mt-2 text-gray-700 text-lg bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <GitHub className="w-4 h-4 mr-2" />
              <span>View on GitHub</span>
            </a>
            <div className="h-2 w-2" />
            <a
              href="https://twitter.com/robertbrosma"
              target="_blank"
              className="mt-2 text-white text-lg bg-blue-400 hover:bg-blue-500 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <Twitter className="w-4 h-4 mr-2" />
              <span>@robertbrosma</span>
            </a>
            <div className="w-2 h-2" />
            <a
              href="https://www.buymeacoffee.com/robertbroersma"
              target="_blank"
              className="mt-2 text-white text-lg bg-orange-400 hover:bg-orange-500 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <Coffee className="w-4 h-4 mr-2" />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
