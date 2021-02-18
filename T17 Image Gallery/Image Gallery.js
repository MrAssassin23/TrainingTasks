$(document).ready(function () {
    $('.img-container').click((e) => {
        let url = e.target.src
        url = url.replace('min', 'max')
        let imgMax = $('#img-max')
        imgMax.attr('src', url)
        let img = new Image()
        img.src = url
        img.onload = () => {
            if (imgMax.width() > imgMax.height()) {
                imgMax.css({'width':'100%', 'height' : 'auto','max-height':'calc(100vh - 5rem)'})
            } else if (imgMax.height() > imgMax.width()) {
                imgMax.css({'height':'100%', 'width' : 'auto','max-width':'calc(100vw - 10rem)'})
            }
        }
        $('.img-preview').addClass('active')
    })

    $('.img-preview').click((e) => {
        if (e.target === e.currentTarget) $('.img-preview').removeClass('active')
    })

    $('#close').click((e) => {
        $('.img-preview').removeClass('active')
    })
})