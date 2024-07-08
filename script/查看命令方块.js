function onSendChatMessageEvent(message) {
    let text = message.split(" ")
    if (message == '退出脚本') {
        clientMessage('§b[查看命令方块] §e脚本已关闭')
        exit()
        return true;
    }
}

clientMessage('§b[查看命令方块] §e脚本加载成功')
clientMessage('§b[LolitaJK UI-GB]§e原作者:1845132334，禁止未经授权随意Copy脚本')

function getText(string, strA, strB) {
    let start = string.indexOf(strA) + strA.length
    let finish = string.indexOf(strB)
    return string.substring(start, finish)
}

function onPlayerBuildBlockEvent(id, x, y, z, side) {
    let block = getBlock(x, y, z)
    if (block.namespace == "minecraft:command_block" || block.namespace == "minecraft:chain_command_block" || block.namespace == "minecraft:repeating_command_block") {
        let cha = getBlockEntityNBT(x, y, z)
        let cmds = getText(cha, "Command:\"", "\",Cu")
        let auto = getText(cha, "auto:", "b,c")
        let td = getText(cha, "TickDelay:", ",Tr")
        if (auto == 1) {
            auto = '是'
        } else {
            auto = '否'
        }
        clientMessage(string_format('§e坐标:§r[{} {} {}] §e指令:§r{} §e自动:§r{} §e延迟:§r{}', x, y, z, cmds, auto, td))
        return true
    }
}