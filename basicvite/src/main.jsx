import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
      href: "https://www.linkedin.com/in/muhammadfaisalrehman/",
      target: '_blank'
  },
  myProfile:"Click me to see my Profile"
}

function MyApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
const AnotherElement = (
  <a href="https://www.linkedin.com/in/muhammadfaisalrehman/" target='_blank'>
  Vist my Profile
  </a>
)

const AReactElement = React.createElement(
  'a',
  {href: "https://www.linkedin.com/in/muhammadfaisalrehman/", target: "_blank"},
  "Click to Visit my Profile"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
  
)
