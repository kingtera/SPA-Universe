import { removeAllClassesActualPage, addActualPageStyle } from "./functions-routes-style.js"
import { Elements } from "./elements.js"

const elements = Elements()

export class Routes {
    enableRoutes = {}

    addRoute(pathname ,link) {
        this.enableRoutes[pathname] = link
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
        
        window.history.pushState({}, '', event.target.href)
        
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location

        switch(pathname) {
            case '/':
            removeAllClassesActualPage()
            addActualPageStyle(elements.anchorHome, 'backgroundHome')
            break

            case '/universe':
            removeAllClassesActualPage()
            addActualPageStyle(elements.anchorUniverse, 'backgroundUniverse')
            break

            case '/exploration':
            removeAllClassesActualPage()
            addActualPageStyle(elements.anchorExploration, 'backgroundExploration')
            break
        }
    
        fetch(this.enableRoutes[pathname])
        .then(data => data.text())
        .then(html => {document.querySelector('#app').innerHTML = html})
    }
}