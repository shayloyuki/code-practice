import React from 'react'

// function About(props) {
//   return (
//     <div>
//       <p>{props.a}</p>
//       <p>{props.b}</p>
//     </div>
//   )
// }

function About({name, age}) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default About