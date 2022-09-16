const body = document.querySelector('body')

export function removeAllClassesActualPage() {
    const anchorList = document.querySelectorAll('a')
    for(let anchor of anchorList) {
        anchor.classList.remove('actualPage')
    }
}

export function addActualPageStyle(pageAnchor, pageBackground) {
    pageAnchor.classList.add('actualPage')
    clearListOfClasses(body)
    body.classList.add(pageBackground)
}

function clearListOfClasses(div) {
    div.classList = []
}