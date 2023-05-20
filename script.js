const pTags = document.querySelectorAll('p')

pTags.forEach(p => {
    p.innerText = '0'

    const updateCounter = () => {
        const target = +p.getAttribute('data-target')
        const c = +p.innerText

        const increment = target / 200

        if (c < target) {
            p.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            p.innerText = target
        }
    }

    updateCounter()
})