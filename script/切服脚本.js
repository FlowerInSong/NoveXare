var choose = '{"type":"form","title":"选择服务器","content":"","buttons":[{"text":"§l§eiOS"},{"text":"§l§eAndroid"},{"text":"§l§eobt[正式服]"},{"text":"§l§eqa"},{"text":"§l§eexp"},{"text":"§l§eexpr1"},{"text":"§l§egaiya"},{"text":"§l§etaitan"},{"text":"§l§estress"}]}'

var data = getResource()
var pa = data.split("/")

addForm(choose, function(index) {
    switch (index) {
        case (0):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "ios^https://g79.update.netease.com/serverlist/ios_review_forever.json")
            break;
        case (1):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "android^https://g79.update.netease.com/serverlist/adr_review_forever2.json")
            break;
        case (2):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "obt^https://g79.update.netease.com/serverlist/ios_release.0.25.json")
            break;
        case (3):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "qa^https://g79.update.netease.com/serverlist/qa.0.1.json")
            break;
        case (4):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "exp^https://g79.update.netease.com/serverlist/expr_release.json")
            break;
        case (5):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "expr1^https://g79.update.netease.com/serverlist/expr1_release.json")
            break;
        case (6):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "gaiya^https://g79.update.netease.com/serverlist/gaiya.json")
            break;
        case (7):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "taitan^https://g79.update.netease.com/serverlist/taitan.json")
            break;
        case (8):
            write_file("/data/data/" + pa[6] + "/files/games/com.netease/slf.mcp", "stress^https://g79.update.netease.com/serverlist/stress.0.1.json")
            break
    }
})

clientMessage("§b[LolitaJK UI-GB]§e如果不懂请勿随便切服 如不小心切服请再次打开脚本切回obt")