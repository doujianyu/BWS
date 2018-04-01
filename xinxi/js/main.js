$(function () {
    $('.js_page').pagination({
        mode: 'fixed',
        current: 1, // 当前显示的页
        totalData: 600, // 数据总条数
        showData: 40, // 每页显示数据数
        count: 8, // 分页器的显示数量 显示比设置的数多一个
        callback: function (page) {
            console.log(page.getCurrent())
        }
    })
})