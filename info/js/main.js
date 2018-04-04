

$(function(){
    // 阅读条数处理
    var spanText = parseInt($('.number i').html())
    if (spanText < 1000) {
        $('.number i').html(spanText)
    } else if (spanText >= 1000 && spanText < 10000) {
        $('.number i').html(parseInt(spanText / 1000) + '千')
    } else if (spanText >= 10000){
        $('.number i').html(parseInt(spanText / 10000) + '万')
    }
})

// 兼容IE placeholder (报名通道)
$(function () {
    var vals = [
        '请输入姓名',
        '请输入邮箱/手机号',
        '请输入学校',
        '请输入专业',
        '请输入学历',
        '备注留言'
    ]

    $('.js_ft_input').focus(function () {
        var oVal = $(this).val()
        if ($.inArray(oVal, vals) > -1) {
            $(this).val('').addClass('color333').removeClass('color999')
        }
    })
    $('.js_ft_input').blur(function () {
        var index = $('.js_ft_input').index($(this))
        if (/\s+/.test($(this).val()) || !$(this).val()) {
            $(this).addClass('color999').removeClass('color333')
            $(this).val(vals[index])
        }

    })
})