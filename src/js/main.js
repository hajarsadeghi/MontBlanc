$(document).on('click', '#prev', function(e) {
    let curr = Number($('#prev').attr('active'))
    let before = curr;
    curr--
    if (curr >= 1 & curr <= 10) {
        $('#prev').attr('active', curr)
        $('#prev').find('.slide-num').text(curr)
        $('#slide'+(before)).css('left', '-100%');
        $('#slide'+(before)).removeClass('active')
        $('#slide'+(curr)).addClass('active')
        $('#innerLine').removeClass('pcnt'+before)
        $('#innerLine').addClass('pcnt'+curr)
    }
})

$(document).on('click', '#nxt', function(e) {
    let curr = Number($('#prev').attr('active'))
    let before = curr;
    curr++
    if (curr >= 1 & curr <= 10) {
        $('#prev').attr('active', curr)
        $('#prev').find('.slide-num').text(curr)
        $('#slide'+(before)).css('left', '100%');
        $('#slide'+(before)).removeClass('active')
        $('#slide'+(curr)).addClass('active')
        $('#innerLine').removeClass('pcnt'+before)
        $('#innerLine').addClass('pcnt'+curr)
    }
})

// dropdown menu effect
$(document).on('click', '.nav-item.dropdown', function(e) {
    $(this).find('.dropdown-menu').toggle('slow')
    $(this).find('.menu-arr').toggleClass('rotate')
})
// close dropdown on document click
$('body').on('click', function(e) {
    if (e.target.className != 'menu-img') {
        e.preventDefault()
        $('.dropdown-menu').hide()
        $('.menu-arr').removeClass('rotate')
    }
})