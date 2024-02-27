function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.myProfile
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
   for (const prop in reactElement.props) {
    if (prop === 'myProfile') continue
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.linkedin.com/in/muhammadfaisalrehman/",
        target: '_blank'
    },
    myProfile:"Click me to see my Profile"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)