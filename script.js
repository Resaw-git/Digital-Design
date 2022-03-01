const btnToTop = document.querySelector('.btn-to-top')

function scrollToTop() {
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 500) {
            btnToTop.style.opacity = 1
        } else {
            btnToTop.style.opacity = 0
        }
    })

    btnToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
       
    })
}

scrollToTop();