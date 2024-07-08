var path = getResource()
var lua = file_list(path + "/nbt")
var id = getLocalPlayerUniqueID()
var luan = '"QQ1845132334"'

var Check = false
var t = 0
var nbt = ""

clientMessage('§b[LolitaJK UI-GB]§e原作者:1845132334，禁止未经授权随意Copy脚本')

Script()

function onPlayerBuildBlockEvent(PlayerId, x, y, z, side) {
    if (Check == true) {
        var Block = getBlock(x, y, z)
        if (Block.namespace == "minecraft:smithing_table") {
            for (i = 0; i < t; i++) {
                addInventoryItemByNBT(nbt)
            }
        }
    }
}

function Script() {
    for (var i = 1; i < lua.length; i++) {
        var luax = lua[i].name
        luan = luan + ',"' + luax.replace('.txt', '§e[可加载]') + '"'
    }
    var jsonS = '{"type":"custom_form","title":"§l§anbt加载器","content":[{"type": "dropdown","text": "选择NBT","options": [' + luan + ']},{"type": "input","text": "加载次数","default": "1","placeholder": ""}]}'

    addForm(jsonS, function(index, time) {
        nbt = read_file(lua[index].path)
        Check = true
        t = time
        clientMessage('§b[LolitaJK UI-GB]§e加载NBT->' + lua[index].name)
        clientMessage('§b[LolitaJK UI-GB]§e请打开锻造台')
    })
}