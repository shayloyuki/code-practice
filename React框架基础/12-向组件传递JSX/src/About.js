/*
 * @Date: 2024-04-05 17:51:53
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 20:51:43
 * @FilePath: \12-向组件传递JSX\src\About.js
 */
import React from 'react'
import PropTypes from 'prop-types'

function About({name, age, children}) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      {children}
    </div>
  )
}

About.defaultProps = {
  name: "Sarah",
  age: 30
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default About