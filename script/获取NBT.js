function onSendChatMessageEvent(message) {
    if (message == '退出脚本') {
        clientMessage('§b[nbt获取] §e脚本已关闭')
        exit()
        return true;
    }
}

clientMessage('§b[nbt获取] §e脚本加载成功')
file_create_dir("/sdcard/获取nbt")
clientMessage('§b[LolitaJK UI-GB]§e原作者:1845132334，禁止未经授权随意Copy脚本')

function onPlayerBuildBlockEvent(id, x, y, z, side) {
    let nbt = getBlockNBT(x, y, z)
    let entitynbt = getBlockEntityNBT(x, y, z)
    let block = getBlock(x, y, z)
    if (entitynbt == "{}") {
        write_file(string_format("/sdcard/获取nbt/{}.txt", block.namespace.replace("minecraft:", "") + Date.now()), nbt)
        clientMessage("§e已保存至-> /sdcard/获取nbt/")
    } else {
        nbt = nbt.substring(0, nbt.length - 2)
        nbt = nbt + ",tag:" + entitynbt + "}"
        write_file(string_format("/sdcard/获取nbt/{}.txt", block.namespace.replace("minecraft:", "") + Date.now()), nbt)
        clientMessage("§e已保存至-> /sdcard/获取nbt/")
    }
}