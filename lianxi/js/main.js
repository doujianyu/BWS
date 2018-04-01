
$(function () { // 添加省略号
    var clip = $('#bws_text_clip')
    if(clip.text().length > 59){
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
            width: `${childrenWidth * childrenLen}px`
        })
        btns[0].click(function () {
            console.log(1)
            if (!ele.is(":animated")){
                currentMove++
                if (currentMove > maxMove) {
                    currentMove = maxMove
                }
                ele.animate({
                    left: `-${childrenWidth * currentMove}px`
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
                    left: `-${childrenWidth * currentMove}px`
                }, speed)
            }
        })
    }

})