// 兼容IE placeholder (绿色通道)
$(function () {
    var vals = ['考生姓名', '联系方式', '备注']

    $('.js_hd_input').focus(function () {
        var oVal = $(this).val()
        if ($.inArray(oVal, vals) > -1) {
            $(this).val('').addClass('color333').removeClass('color999')
        }
    })

    $('.js_hd_input').blur(function () {

        var index = $('.js_hd_input').index($(this))
        if (/\s+/.test($(this).val()) || !$(this).val()) {
            $(this).addClass('color999').removeClass('color333')
            $(this).val(vals[index])
        }

    })
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