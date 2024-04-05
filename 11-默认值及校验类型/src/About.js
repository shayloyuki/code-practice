/*
 * @Date: 2024-04-05 17:51:53
 * @LastEditors: shayloyuki shayluo123@outlook.com
 * @LastEditTime: 2024-04-05 20:24:01
 * @FilePath: \11-默认值及校验类型\src\About.js
 */
import React from 'react'
import PropTypes from 'prop-types'

function About({name, age}) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
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