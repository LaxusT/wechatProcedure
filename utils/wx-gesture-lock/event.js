module.exports = function (app) {
    console.log(app)
    app && (app.trigger = function (eventType, data) {
        var pages = getCurrentPages(),
            curPage = pages[pages.length - 1],
            methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.substr(1),
            callback = curPage[methodName];
        callback && callback.call(curPage, data);
    });
};