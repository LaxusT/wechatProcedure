//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        list: [
            {
                href: "../wx-gesture-lock/wx-gesture-lock",
                name: "微信小程序手势密码"
            },
            {
                href: "../switch/switch",
                name: "switch开关"
            },
            {
                href: "../switch-city/switch-city",
                name: "城市选择器"
            }
        ]
    },
    //事件处理函数
    next: function (next) {
        var to = next.currentTarget.dataset.next;
        console.log(to)
        wx.navigateTo({
            url: to
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})
