const imagesElements = document.querySelectorAll(".image");
const observerSettings = {
    rootMargin: "0px",

}

const observerCallback = (arrayImages, observer) => {
    arrayImages.forEach((image) => {
        if (image.isIntersecting) {
            const photo = image.target
            photo.classList.add("animation")

        }
    })
}
const obServer = new IntersectionObserver(observerCallback, observerSettings)

imagesElements.forEach((image) => {

    obServer.observe(image)
})
