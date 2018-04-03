
// 轮播图
$(function () {
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        grabCursor: true,
        autoplay: 2000,
        speed: 500,
        autoplayDisableOnInteraction: false,
        paginationClickable: true
    })
})

// 专本科切换
$(function () {
    $('#ben').click(function () {
        $(this).addClass('selected')
        $('#zhuan').removeClass('selected')
        $('.js_toggle_box').eq(0).show(300).next().hide(300)
    })
    $('#zhuan').click(function () {
        $(this).addClass('selected')
        $('#ben').removeClass('selected')
        $('.js_toggle_box').eq(1).show(300).prev().hide(300)
    })
})

$(function () { // 添加省略号
    var clip = $('#bws_text_clip')
    if(clip.text().length > 80){
        clip.text(clip.text().substring(0, 80))
        clip.html(clip.html() + '...')
    }
})

$(function(){

    moveElement({
        ele: $('.js_move_ele').eq(0),
        parent: $('.js_move_wrap').eq(0),
        btns: [
            $('.js_left_btn').eq(0),
            $('.js_right_btn').eq(0)
        ],
        speed: 500
    })
    moveElement({
        ele: $('.js_move_ele').eq(1),
        parent: $('.js_move_wrap').eq(1),
        btns: [
            $('.js_left_btn').eq(1),
            $('.js_right_btn').eq(1)
        ],
        speed: 500
    })
    function moveElement(eleObj) {
        var ele = eleObj['ele'],
            parent = eleObj['parent'],
            btns = eleObj['btns'],
            animate = eleObj['animate'],
            speed = eleObj['speed']

        var childrenWidth = ele.children().eq(0).outerWidth(true),
            childrenLen = ele.children().length,
            parentWidth = parent.width(),
            maxMove = parseInt(((childrenWidth * childrenLen) - parentWidth) / childrenWidth),currentMove = 0
        ele.css({
            width: childrenWidth * childrenLen + 'px'
        })
        btns[0].click(function () {
            console.log(1)
            if (!ele.is(":animated")){
                currentMove++
                if (currentMove > maxMove) {
                    currentMove = maxMove
                }
                ele.animate({
                    left: '-' + (childrenWidth * currentMove) + 'px'
                }, speed)
            }
            
        })
        btns[1].click(function () {
            console.log(2)            
            if (!ele.is(":animated")){
                currentMove--
                if (currentMove < 0) {
                    currentMove = 0
                }
                ele.animate({
                    left: '-' + (childrenWidth * currentMove) + 'px'
                }, speed)
            }
        })
    }

})

// 兼容IE placeholder (绿色通道)
$(function () {
    $('.bws_module_right_form p').children().focus(function () {
        var oldVal = $(this).val()
        if ($(this).val() == '考生姓名' || $(this).val() == '联系方式' || $(this).val() == '备注') {
            $(this).val('')
        }
        $(this).blur(function () {
            if (/\s+/.test($(this).val()) || !$(this).val()) {
                $(this).val(oldVal)
            }
        })
    })
})

// 兼容IE placeholder (报名通道)
$(function () {
    $('.bws_module_right_form p').children().focus(function () {
        if ($(this).val() == '考生姓名' || $(this).val() == '联系方式' || $(this).val() == '备注') {
            var oldVal = $(this).val()
            $(this).val('')
        }
        $(this).blur(function () {
            if (/\s+/.test($(this).val()) || !$(this).val()) {
                $(this).addClass('color999')
            }
        })
        $(this).keypress(function(){
            $(this).removeClass('color999')
        })
    })
})