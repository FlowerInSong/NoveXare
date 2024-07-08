var name = getEntityName(getLocalPlayerUniqueID())
var text;
var time = 0;
var random = true
var Check = false
var Boom = '{"type":"custom_form","title":"设置(QQ:1845132334)","content":[{"type":"input","text":"§e信息:","placeholder":"","default":""},{"type":"input","text":"数量:","placeholder":"","default":"1"},{"type":"toggle","text":"随机字符串","default":true}]}'

addForm(Boom, function(te, ti, r) {
    text = te
    time = ti
    random = r
    Check = true
})

function onTickEvent() {
    if (Check) {
        if (time > 0) {
            if (random == false) {
                sendChatMessage(text)
                time = time - 1
            } else {
                sendChatMessage(text + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10) + Math.ceil(Math.random() * 10))
                time = time - 1
            }
        }
    }

}