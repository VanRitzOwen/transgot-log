/*
 * transgot-log
 * https://github.com/VanRitzOwen/transgot-log.git
 *
 * Copyright (c) 2017 Atman
 * Licensed under the MIT license.
 */

var path = require("path");
var log4js = require("log4js");


/**
 * 日志配置
 */

log4js.configure({
    appenders: {
        out: {type: "console"},
        default: {type: "dateFile", filename: "/root/.log4js/logs/default", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true},
        data: {"type": "dateFile", filename: "/root/.log4js/logs/data", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true},
        error: {type: "dateFile", filename: "/root/.log4js/logs/error", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true}
    },
    categories: {
        default: {appenders: ["out", "default"], level: "info"},
        data: {appenders: ["out", "data"], level: "info"},
        error: {appenders: ["out", "error"], level: "error"}
    },
    replaceConsole: true
});

exports.config = function (data) {
    log4js.configure(data);
};

/**
 * 暴露到应用的日志接口，调用该方法前必须确保已经configure过
 * @param name 指定log4js配置文件中的category。依此找到对应的appender。
 *              如果appender没有写上category，则为默认的category。可以有多个
 * @returns {Logger}
 */
exports.logger = function(name,level) {
    var dateFileLog = log4js.getLogger(name);
    dateFileLog.level=level;
    return dateFileLog;
};

/**
 * 用于express中间件，调用该方法前必须确保已经configure过
 * @returns {Function|*}
 */
exports.getLog = function(name) {
    return log4js.connectLogger(log4js.getLogger(name), {level: log4js.levels.INFO, format: ' :method :url :user-agent :status'});
};