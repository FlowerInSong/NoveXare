var target = "" // 目标
var random_string = true // 随机字符串
var speed = 3 // 速度
var anti_crasher = true // 拦截命令提示
var crasher_mode = 0 // 崩溃模式
var exist = true // 排除自己

var mode_1 = true // 加粗
var mode_2 = false // 斜体
var mode_3 = false // 混乱

var boolean = false // 开关

const msg = "§e@e @e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@"

const player_name_list = getPlayerNameList()
const menu = ` {
    "type": "custom_form",
    "title": "自定义踢人",
    "content": [{
        "type": "toggle",
        "text": "随机字符串",
        "default": ` + random_string + `
    }, {
        "type": "toggle",
        "text": "加粗",
        "default": ` + mode_1 + `
    }, {
        "type": "toggle",
        "text": "斜体",
        "default": ` + mode_2 + `
    }, {
        "type": "toggle",
        "text": "混乱",
        "default": ` + mode_3 + `
    }, {
        "type": "dropdown",
        "text": "选择目标",
        "options": ` + JSON.stringify(player_name_list) + `
    }, {
        "type": "toggle",
        "text": "选择全体排除自己",
        "default": ` + exist + `
    }, {
        "type": "slider",
        "text": "刷屏速度",
        "min": 1,
        "max": 50,
        "step": 1,
        "default": ` + speed + `
    }, {
        "type": "toggle",
        "text": "拦截消息",
        "default": ` + anti_crasher + `
    }, {
        "type": "step_slider",
        "text": "模式",
        "steps": ["黑名单模式", "单次模式"],
        "default": ` + crasher_mode + `
    }]
}`;

addForm(menu, function(r, m1, m2, m3, t, e, s, a, m) {
    mode_1 = m1
    mode_2 = m2
    mode_3 = m3
    if (t != 0) {
        target = player_name_list[t]
    } else {
        if (e) {
            target = "@a[name=!\"" + getEntityName(getLocalPlayerUniqueID()) + "\"]"
        } else {
            target = "@a"
        }
    }
    clientMessage("§b[LolitaJK UI-GB]§e选择目标 => " + target)
    random_string = r
    speed = s
    anti_crasher = a
    crasher_mode = m
    executeCommand("/tell " + target + " §eDianaGodUI")
})

function get_mode(mode_1, mode_2, mode_3) {
    var msg = ""
    if (mode_1) {
        msg += "§l"
    } else if (mode_2) {
        msg += "§o"
    } else if (mode_3) {
        msg += "§k"
    }
    return msg
}

function getPlayerNameList() {
    const list = getWorldPlayerList()
    var output = ["全部玩家"]
    for (i in list) {
        output.push(list[i].name)
    }
    return output
}

function spawn_string(bool, length) {
    if (bool) {
        var output = ""
        for (i = 0; i < length; i++) {
            switch (Math.round(Math.random())) {
                case 0:
                    output += "O";
                case 1:
                    output += "o"
            }
        }
        return output
    } else {
        return ""
    }
}

function onTickEvent() {
    if (boolean && target !== "") {
        for (i = 0; i < speed; i++) {
            executeCommand("/tell " + target + " " + get_mode(mode_1, mode_2, mode_3) + msg + spawn_string(random_string, 6))
        }
    }
}

function onSendChatMessageEvent(message) {
    if (message == '退出脚本') {
        clientMessage('§b[DianaGod UI-GB] §e脚本已关闭')
        exit()
        return true;
    }
}

function onCommandOutputEvent(type, args, value) {
    if (value == 0) {
        if (boolean) {
            showTipMessage("该玩家已退出游戏")
        } else {
            showTipMessage("未找到玩家")
        }
        if (crasher_mode == "0") {
            target = ""
        }
    }
    if (value == 1) {
        boolean = true
    }
    if (anti_crasher && boolean && value == 1) {
        return true
    }
}

clientMessage("§b[DianaGod UI-GB]§eCode By XxxGBRCxxX")
clientMessage("§b[DianaGod UI-GB]§e输入退出脚本即可退出")