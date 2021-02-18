$(document).ready(function() {
    $('.img-container').click((e) => {
        let url = e.target.src
        url = url.replace('min','max')
        $('#img-max').attr('src',url)
        $('.img-preview').addClass('active')
    })

    $('.img-preview').click((e) => {
        if (e.target === e.currentTarget) $('.img-preview').removeClass('active')
    })
    
    $('#close').click((e) => {
        $('.img-preview').removeClass('active')
    })
})