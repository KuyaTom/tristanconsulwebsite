var mobileNav = document.getElementById('mobile_nav')

function toggleMenu() {
    mobileNav.classList.toggle('hide')
}

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop - 100) {
            visible.classList.remove('fadeIn')
            visible.classList.add('fadeOut')
        } else {
            visible.classList.remove('fadeOut')
            visible.classList.add('fadeIn')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible2')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop - 50) {
            visible.classList.remove('fadeIn2')
            visible.classList.add('fadeOut2')
        } else {
            visible.classList.remove('fadeOut2')
            visible.classList.add('fadeIn2')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible3')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop - 30) {
            visible.classList.remove('fadeIn3')
            visible.classList.add('fadeOut2')
        } else {
            visible.classList.remove('fadeOut2')
            visible.classList.add('fadeIn3')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible4')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop - 100) {
            visible.classList.remove('fadeIn4')
            visible.classList.add('fadeOut3')
        } else {
            visible.classList.remove('fadeOut3')
            visible.classList.add('fadeIn4')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible5')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop - 800) {
            visible.classList.remove('fadeIn5')
            visible.classList.add('fadeOut')
        } else {
            visible.classList.remove('fadeOut')
            visible.classList.add('fadeIn5')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible6')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop) {
            visible.classList.remove('fadeIn6')
            visible.classList.add('fadeOut3')
        } else {
            visible.classList.remove('fadeOut3')
            visible.classList.add('fadeIn6')
        }
    }
})



window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let hiddenList = this.document.querySelectorAll('.hidden')

    console.log(hiddenList)

    for (let i = 0; i < hiddenList.length; i++) {
        let hidden = hiddenList[i]

        if (scrollTop > hidden.offsetTop - 800) {
            hidden.classList.remove('fadeOut')
            hidden.classList.add('fadeIn')
        } else {
            hidden.classList.remove('fadeIn')
            hidden.classList.add('fadeOut')
        }
    }
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop

    let visibleList = this.document.querySelectorAll('.visible6')

    console.log(visibleList)

    for (let i = 0; i < visibleList.length; i++) {
        let visible = visibleList[i]

        if (scrollTop > visible.offsetTop + 100) {
            visible.classList.remove('fadeIn3')
            visible.classList.add('fadeOut2')
        } else {
            visible.classList.remove('fadeOut2')
            visible.classList.add('fadeIn3')
        }
    }
})

let gallery = document.querySelector('.gallery')

gallery.addEventListener('mouseover', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.add('zoom')
    }
})

gallery.addEventListener('mouseout', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.remove('zoom')
    }
})