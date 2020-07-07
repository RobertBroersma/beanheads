const React = require('react')
const RDS = require('react-dom/server')
const { BigHead } = require('@bigheads/core')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
  try {
    const props = event.queryStringParameters
    const avatarString = RDS.renderToString(React.createElement(BigHead, props))

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
