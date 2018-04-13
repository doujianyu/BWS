
// 搜索模拟placeholder
$(function () {
    $('.placeholder').click(function () {
        console.log(1)
        $(this).hide()
        $('.bws_search input').focus()
    })
    $('.bws_search input').blur(function () {
        if ( !$(this).val() ){
            $('.placeholder').show()
        }
    })
})

// 序列号
$(function () {
    $('.bws_module_right_bottom_list li').each(function (index, item) {
        $(this).attr('data-index', index + 1)
    })
})