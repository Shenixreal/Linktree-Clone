const shareButtons = document.querySelectorAll('.tile-share-btn')
console.log(shareButtons)

async function copyText(e) {
    //To prevent from going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)

    try{
        await navigator.clipboard.writeText(link)
        alert("Copied link: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButtons =>
    shareButtons.addEventListener('click', copyText))
