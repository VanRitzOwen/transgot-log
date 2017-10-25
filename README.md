# transgot-log
[![NPM](https://nodei.co/npm/transgot-log.png)](https://nodei.co/npm/transgot-log/)

The [transgot-log](https://github.com/VanRitzOwen/transgot-log.git) is a logging module for Transgot by Atman.  
The transgot-log bases on *log4js* and has some special features for Transgot.  

---
### Installation

---
Installation is done using the Node Package Manager (NPM).   
If you don't have NPM installed on your system you can download it from [npmjs.org](http://npmjs.org)  

`npm install transgot-log --save`

The `--save` flag tells NPM to automatically add it to your `package.json` file.  

---

### Usage

---
Include the `transgot-log` parser in you node.js application:

    var logs = require('transgot-log');

The transgot-log library allows you do some custom configuration you can do:

    logs.config({
        appenders: {
                out: {type: "console"},
                default: {type: "dateFile", filename: "/path/to/logs/default", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true},
                data: {"type": "dateFile", filename: "/path/to/logs/data", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true},
                error: {type: "dateFile", filename: "/path/to/logs/error", pattern: "-yyyy-MM-dd.log", alwaysIncludePattern: true,absolute: true}
            },
            categories: {
                default: {appenders: ["out", "default"], level: "info"},
                data: {appenders: ["out", "data"], level: "info"},
                error: {appenders: ["out", "error"], level: "error"}
            },
            replaceConsole: true
    })

---
Before using the transgot-log you need to initialize the `logs` with the function `logger`:

    logs.logger("data","info")
    
The first parameter `data` is the name of logs and the second parameter `info` is the level of logs

---

Then, you can let the logs output your debug message:

    dataLog.info(your message);
    
You will see your logs like this:

    [2010-01-17 11:43:37.987] [INFO] [data] - Some debug messages

---

### License

---
MIT
