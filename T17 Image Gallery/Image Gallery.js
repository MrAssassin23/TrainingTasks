$(document).ready(function () {
    $('.img-container').click((e) => {
        let url = e.target.src
        url = url.replace('min', 'max')
        let imgMax = $('#img-max')
        imgMax.attr('src', url)
        let img = new Image()
        img.src = url
        img.onload = () => {
            console.log(img.naturalWidth , img.naturalHeight )
            if (img.naturalWidth > img.naturalHeight) {
                console.log('landcape')
                imgMax.css({'max-height':'calc(100vh - 5rem)','max-width':'auto','width':'100%', 'height' : 'auto'})
            } else if (img.naturalHeight > img.naturalWidth) {
                console.log('portrait')
                imgMax.css({'max-width':'calc(100vw - 10rem)','max-height':'auto','height':'100%', 'width' : 'auto'})
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