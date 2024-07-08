var textlist = []
var ban = true
var tick = 0
var check = false
var click = true
var json = '{"type":"custom_form","title":"自动扣字(QQ:1845132334)","content":[{"type":"input","text":"§e词汇路径:","placeholder":"","default":""},{"type":"input","text":"延迟(ms):","placeholder":"","default":"0"},{"type":"toggle","text":"替换屏蔽词","default":true},{"type":"toggle","text":"点击模式","default":true}]}'

addForm(json, function(path, ti, ba, cl) {
    textlist = read_file(path)
    textlist = textlist.split("\n")
    textlist = textlist.reverse()
    tick = ti
    ban = ba
    click = cl
    check = true
})

clientMessage('§b[LolitaJK UI-GB]§e原作者:1845132334，禁止未经授权随意Copy脚本')

function onTickEvent() {
    if (!click) {
        if (check) {
            if (ban) {
                if (textlist.length > 0) {
                    thread(function() {
                        let text = textlist.pop()
                        text = text.replace("草泥马", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("草拟吗", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("曹拟吗", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("操你妈", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("操", "§§§§§§§§§§|曹")
                        text = text.replace("窝囊废", "§§§§§§§§§§|卧§§§§§§§§§§|囔§§§§§§§§§§|非")
                        text = text.replace("野爹", "§§§§§§§§§§|也§§§§§§§§§§|跌")
                        text = text.replace("傻逼", "§§§§§§§§§§|砂§§§§§§§§§§|必")
                        text = text.replace("处女膜", "§§§§§§§§§§|楚§§§§§§§§§§|钕§§§§§§§§§§|磨")
                        text = text.replace("垃圾", "§§§§§§§§§§|啦§§§§§§§§§§|级")
                        text = text.replace("死", "§§§§§§§§§§|斯")
                        text = text.replace("妈", "§§§§§§§§§§|吗")
                        text = text.replace("草", "§§§§§§§§§§|嘈")
                        text = text.replace("滚", "§§§§§§§§§§|衮")
                        text = text.replace("弱智", "§§§§§§§§§§|若§§§§§§§§§§|至")
                        text = text.replace("脑瘫", "§§§§§§§§§§|闹§§§§§§§§§§|弹")
                        text = text.replace("废物", "§§§§§§§§§§|飞§§§§§§§§§§|无")
                        sendChatMessage(text)
                    }, tick)
                } else {
                    check = false
                    clientMessage("§e自动退出")
                    exit()
                }
            } else {
                if (textlist.length > 0) {
                    thread(function() {
                        let text = textlist.pop()
                        sendChatMessage(text)
                    }, tick)
                } else {
                    check = false
                    clientMessage("§e自动退出")
                    exit()
                }
            }
        }
    }
}

function onPlayerBuildBlockEvent() {
    if (click) {
        if (check) {
            if (ban) {
                if (textlist.length > 0) {
                    thread(function() {
                        let text = textlist.pop()
                        text = text.replace("草泥马", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("草拟吗", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("曹拟吗", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("操你妈", "§§§§§§§§§§|曹§§§§§§§§§§|拟§§§§§§§§§§|吗")
                        text = text.replace("操", "§§§§§§§§§§|曹")
                        text = text.replace("窝囊废", "§§§§§§§§§§|卧§§§§§§§§§§|囔§§§§§§§§§§|非")
                        text = text.replace("野爹", "§§§§§§§§§§|也§§§§§§§§§§|跌")
                        text = text.replace("傻逼", "§§§§§§§§§§|砂§§§§§§§§§§|必")
                        text = text.replace("处女膜", "§§§§§§§§§§|楚§§§§§§§§§§|钕§§§§§§§§§§|磨")
                        text = text.replace("垃圾", "§§§§§§§§§§|啦§§§§§§§§§§|级")
                        text = text.replace("死", "§§§§§§§§§§|斯")
                        text = text.replace("妈", "§§§§§§§§§§|吗")
                        text = text.replace("草", "§§§§§§§§§§|嘈")
                        text = text.replace("滚", "§§§§§§§§§§|衮")
                        text = text.replace("弱智", "§§§§§§§§§§|若§§§§§§§§§§|至")
                        text = text.replace("脑瘫", "§§§§§§§§§§|闹§§§§§§§§§§|弹")
                        text = text.replace("废物", "§§§§§§§§§§|飞§§§§§§§§§§|无")
                        sendChatMessage(text)
                    }, tick)
                } else {
                    check = false
                    clientMessage("§e自动退出")
                    exit()
                }
            } else {
                if (textlist.length > 0) {
                    thread(function() {
                        let text = textlist.pop()
                        sendChatMessage(text)
                    }, tick)
                } else {
                    check = false
                    clientMessage("§e自动退出")
                    exit()
                }
            }
        }
    }
}