var Question ={
    filter: function (txt, callback) {
        for (var i in this.question) {
            if (txt.length === 0 || this.question[i].q.indexOf(txt) >= 0) {
                callback(this.question[i]);
            }
        }
    },
    question: [
        /* 料理類 */
            {q: '請回答用新鮮的花枝.美麗的鹽.品質優良的炭能做出來的材料的說明文是?', a: '拿很新鮮的花枝來烤'},
            {q: '用新鮮花枝+美麗的鹽+品質優良的炭=?', a: '新鮮的烤花枝'},
            {q: '以下那些沒有"氣5回覆"效果的是?', a: '綠色沙拉'},
            {q: '下列那種料理沒有回覆氣力22的效果?', a: '石烤地瓜'},
            {q: '料理"海星的鹽味串燒"的效果是以下那一個?', a: '5回合左右酒醉'},
            {q: '下列哪一個沒有"捕獲率1UP"的效果?', a: '橘子糖'},
            {q: '以下沒有"酒醉4回合前後"效果的料理是?', a: '甜的水果酒'},
            {q: '下列那個無法回覆25氣力?', a: '熱肉湯'},
            {q: '下列哪些食物無氣2回覆效果?', a: '生包心菜'},
            {q: '料理"烤焦的蝦子串燒"的效果是以下那一個?', a: '石化3回合前後'},
            {q: '料理"螃蟹味噌湯"的效果是以下那個?', a: '氣70回覆(1體)'},
            {q: '曬乾的海星跟曬乾的炭可以做成那種料理?', a: '海星火焰'},
            {q: '大的海星和水份多的梨子能做成何種料理?', a: '海星梨'},
            {q: '"充滿原始風味的粽子"之稱的是那一種料理?', a: '原始粽子'},
            {q: '用最棒的食材製作的納豆名稱為?', a: '特選納豆'},
            {q: '下列那一種料理是不存在的?', a: '新鮮好吃的牛肉'},
            {q: '要做成漁村風烤貝殼以下那一個是不需要的?', a: '卡魯它那產的鹽'},
            {q: '那一個不是霍爾特產?', a: '蘿蔔'},
            {q: '做三明治的時候那一種東西是絕對會被放進去的?', a: '橡樹果'},
            {q: '下列那一個是在生日蛋糕的材料中是沒有的?', a: '橡樹實'},
            {q: '說明文為"跟料理鐵人一樣有所堅持的關東煮"的料理是那一個?', a: '鐵人關東煮'},
            {q: '要做"危險的生魚片"的材料是下列那一個?', a: '卷貝'},
            {q: '料理"跳躍青蛙"是由下列那種材料所製造出來的?', a: '青蛙+油'},
            {q: '加加的蔬菜店有賣以下那種東西?', a: '薩姆吉爾產的柿子'},
            {q: '用多多的美味的水.毛蟹.大王花枝.塔姆塔姆產的胡椒能做出來的料理是?', a: '美食湯'},
            {q: '請回答料理"獨門秘方牛肉燉煮"的說明文是', a: '燉很久的牛肉燉煮'},
            {q: '下面那種料理內有青蛙和海藻?', a: '青蛙手捲'},
            {q: '內容說明為"裡面有青蛙……"的料理是?', a: '青蛙手捲'},
            {q: '料理"肉粽"的道具說明是以下的那一個?', a: '包肉的粽子'},
            {q: '"蘋果醬汁牛排"料理的說明文為以下何者?', a: '都是蘋果的牛排'},
            {q: '回答料理"豪華船生魚片"的說明文?', a: '究極生魚片'},
        /* 寵物類 */
            {q: '以下屬性沒有"地10"的是那一個?', a: '綠龜'},
            {q: '全身發紅.看起來又軟弱.還會過來用大舌頭舔人.這噁心的寵物名字是?', a: '貝洛寶利'},
            {q: '近藏的寵物的名字是?', a: '小卡'},
            {q: '卡坦的儲存點是拿什麼肉去才會給我們記錄呢?', a: '特洛昆'},
            {q: '阿布的洞窟前的儲存點要用布伊和什麼寵物的肉才能儲存呢?', a: '火雞'},
            {q: '肚子是橘色的鯊魚系寵物是?', a: '加克拉'},
            {q: '以下有地屬性的寵物是那一個?', a: '克雷爾'},
            {q: '恐龍接龍"???"裡面恐龍的名字是?"貝魯伊卡"->"???"->"特洛昆"', a: '卡比特'},
            {q: '在薩姆吉爾村出生的人所拿的原生寵物是什麼?', a: '烏力烏力'},
            {q: '寵物接龍"???"裡面寵物的名字是?"貝洛恩"->"???"->"摩娜西普"', a: '恩摩摩'},
            {q: '馬倫所飼養的寵物的名字是?', a: '加特力奴'},
            {q: '長毛象公車的大象名字叫什麼?', a: '瑪恩摩'},
            {q: '願藏的寵物的名字是?', a: '呼拔吉'},
            {q: '在沙姆島(地上).除了鳥的恐龍之外還有什麼恐龍出沒? 用恐龍名回答.', a: '布拉奇多斯'},
            {q: '瑪麗娜絲的村莊的女子提到的鴨子名字是?', a: '加亞鴨'},
            {q: '柯爾克村寵物店裡有的寵物是呼拔拔和洛恩和後一個是什麼?', a: '小特洛昆'},
            {q: '以下有火屬性的寵物是?', a: '布伊比'},
            {q: '石龜的屬性是?', a: '地9風1'},
            {q: '格爾頓跟格爾格在前面和後面.那麼奇拉頓在齊爾格爾頓上下左右的那邊呢?', a: '上'},
            {q: '烏力斯坦是什麼顏色?', a: '黑色跟白色'},
            {q: '卡比特.凱比.昆伊.凱比特的各別風屬性合計值是多少?', a: '26'},
            {q: '寵物的技巧之中保護玩家的技能叫做什麼?', a: '忠犬'},
            {q: '凱比特的身體是什麼顏色?', a: '黃色'},
        /* 村莊類 */
            {q: '在畫面上可以選擇出身地的村莊是瑪麗娜絲.薩姆吉爾.加加.還有一個是?', a: '卡魯它那', title: '(四大村莊出生地請依照題目缺少的填入四大村莊：薩姆吉爾/瑪麗娜絲/卡魯它那/加加，輸入加加即可不需打"村")'},
            {q: '加魯卡島最南邊的村莊的名稱是?', a: '奇喀喀'},
            {q: '在加魯卡島最北邊的村莊名稱是?', a: '塔姆塔姆'},
            {q: '卡魯它那的長毛象客運的介紹人的名字是?', a: '阿民'},
            {q: '長毛象客運加加分店的介紹人的名字是?', a: '卡魯那'},
            {q: '向我們推銷茶的村長是那個村莊的?', a: '柯爾克'},
            {q: '塔姆塔姆的醫生2年前曾經在那的醫院呢?', a: '薩姆吉爾'},
            {q: '薩姆吉爾村內大石像是在模仿誰?', a: '薩姆吉爾'},
        /* 道具類 */
            {q: '加加的道具屋有賣什麼?', a: '阿昆尼斯Lv3鳴子'},
            {q: '在達那村的道具店中.下列那一個東西最昂貴?', a: '黑骨首飾'},
            {q: '在柯爾克村的道具店中.下列那一種東西最便宜?.....', a: '紅色大首飾'},
            {q: '柯爾克的青年買了弓和什麼武器之後卻在煩惱呢?....', a: '迴力標', title:'(已確認是這三個字，鏢、回都是錯字)'},
            {q: '在加加的村子的防具屋賣594s的防具名稱正確的說出來', a: '提歐Lv1鎧2'},
            {q: '選出下列名稱錯誤的東西?', a: '綠玉首飾'},
            {q: '加工用的道具中.最便宜的是東西是什麼石?', a: '石1'},
            {q: '清澈的鱗是鱗的成份幾呢?', a: '鱗的成份4'},
            {q: '基本上來說，雖然攻擊力上昇，但是防禦或敏捷會極端下降的武器是?', a: '斧頭'},
            {q: '小斧頭跟小棍棒.那一個比較貴呢?', a: '小斧頭'},
            {q: '紅玉的手環的能力值是以下的那一個?', a: '攻+2、防+2、敏-2、魅+1'},
            {q: '在卡魯它那牧場利用恐龍的什麼跟什麼可以生成加工素材呢?', a: '皮和骨'},
        /* 數字類 */
            {q: '卡魯它那牧場屋內的寵物全部有幾隻?', a: '10'},
            {q: '到卡魯它那上學的小孩子有幾個人?', a: '5'},
            {q: '在卡魯它那村裡的情報員10年前地震的時候是幾歲呢?', a: '7歲'},
            {q: '在瑪麗娜絲賣的高級瑪麗娜絲蝦要多少石頭?', a: '150'},
            {q: '多多的便利武器店所賣商品的總值是?', a: '34170'},
            {q: '在加加的便利商店內.圓的座墊有幾張?', a: '32'},
            {q: '卡魯它那的情報員現在幾歲請選出正確的答案?', a: '17'},
            {q: '柯奧的防具店最高賣價的東西和霍爾特的武器店最高賣價的東西總值是?', a: '10850'},
            {q: '在卡魯他那素材店(骨.石頭),有在賣"骨的碎片"要多少錢?', a: '26'},
            {q: '柯爾克的石屋主人是幾歲開始作投擲石的呢?', a: '13'},
            {q: '組成隊伍最大人數是多少人?', a: '5人'},
            {q: '阿布的獨棟房屋裡共有多少坐墊呢?', a: '10枚'},
            {q: '玩家角色或是寵物氣絕在頭上的星星有幾個?..', a: '3'},
            {q: '玩家身上最多可以帶多少石幣呢?', a: '1000000', title: '(六個零)'},
            {q: '玩家人物中頭髮是黑色的有多少人?', a: '4人'},
            {q: '等級由1到2要多少經驗值?', a: '2'},
        /* 人物類 */
            {q: '查罕3兄弟中最小的弟弟名字是那一個?', a: '查罕魯德'},
            {q: '日美子和彌生誰在瑪麗娜絲?', a: '彌生'},
            {q: '"逃走呼拔拔"獵人名人的名字是?', a: '吉薩拉奇'},
            {q: '薩姆吉爾村長家的料理人名字是?', a: '鮑爾'},
            {q: '對著奇喀喀村長家大門時.站左側的警備員是哥哥還是弟弟?', a: '弟弟'},
            {q: '在薩伊那斯的橋上阻礙通行的是誰?', a: '壞心眼的願藏'},
            {q: '恐龍博士的助手的名字是?', a: '吉魯'},
            {q: '盜賊的洞窟地下3樓得人的名字是?', a: '鐵壁的小守'},
            {q: '石器時代的世界的名稱是?', a: '尼斯'},
            {q: '瑪麗娜絲村莊中和青年在一起的烏力烏力的叫什麼名字?', a: '烏力次郎'},
            {q: '哥亞山的烏利斯凱把信交給誰?', a: '烏利美'},
        /* 精靈類 */
            {q: '只能幫自己回覆的咒術是?', a: '治癒的精靈'},
            {q: '正確回答戰鬥畫面中全體團員(包括寵及敵人全體)屬性為無的咒術是?', a: '調和的精靈'},
            {q: '下面3個精靈之中屬於非回覆系咒術的是那個?', a: '守護的精靈'},
            {q: '請寫出可以一次回覆全體團員耐久力的精靈咒術?', a: '恩惠的精靈'},
            {q: '能使玩家在被攻擊時將攻擊反射回去一次的是那種精靈咒術?', a: '鏡的精靈'},
        /* 其他類 */
        {q: '卡魯它那村子的東77南93有誰在那呢?', a: '釣竿專家'},
        {q: '回答卡魯它那的村長所站位置的坐標?', a: '東17:南20'},
        {q: '請回答卡坦的留言板的坐標?', a: '東78:南97'},
        {q: '到卡坦村看醫生的患者初診通常都是患什麼病呢?', a: '中暑'},
        {q: '塔姆塔姆村裡的"情報員"是怎樣的人?', a: '老伯'},
        {q: '加加的儲存點拿什麼肉就會讓我們記錄呢?', a: '烏寶寶的肉'},
        {q: '在瑪麗娜絲的醫院幫我們的回覆的護士.手上拿著什麼?', a: '針筒'},
        {q: '卡魯它那牧場打工抓20-30級的寵物是?', a: '多利諾布斯'},
        {q: '在醫院幫寵物恢復體力要多少錢?', a: '不用錢'},
        {q: '薩村學校老師手上拿著什麼?', a: '骨頭'},
        {q: '加加便商利店內，料理老師並沒有告訴我們以下哪一種東西？', a: '料理的說明'},
        {q: '經營長毛象公車的是?', a: '長毛象客運'},
        {q: '聊天室大廳叫什麼?', a: '長毛象大廳'},
        {q: '吃了回覆氣力的料理,玩家的反應是?', a: '點頭'},
        {q: '美容師?玩家什麼參數值的改變呢?', a: '魅力'},
        {q: '玩家互相比試要叫做?', a: '決鬥'},
        {q: '在公式比武中?定的50~59的等級是?', a: '貝魯(伊)卡'},
        {q: '"壞心眼的願藏"是那一手拿武器的呢?', a: '右手'},
        {q: '成人的儀式結束之後能得到什麼呢?', a: '儀之兜'},
        {q: '石器世界錢的單位是?', a: '石頭'},
        {q: '道具"仙尼亞的花"的正確說明是那一個??', a: '在薩姆吉爾花圃上摘的花'},
        {q: '摩浦葉是在那裡生長的植物呢?', a: '平原'},
        {q: '遊戲的英文名稱是?', a: 'STONEAGE'},
        {q: '捉迷藏少年里奧所持有的願藏人偶是朝向左右那一邊呢?', a: '右'},
        {q: '戰鬥中用弓箭給予傷害(或是接受)之後.打中的箭之後成怎樣??', a: '回合結束前還會存在'},
        {q: '世上用錢做成的地方是那裡?', a: '吉魯島'},
        {q: '加魯卡巡迴全島活動(JOT)的A路線的第9站核對的場所在那裡?', a: '烏魯力'},
        {q: '通行海底通道需要?', a: '通行證'},
        {q: '長毛象公車在公車站停留多久的時間呢?', a: '3分'},
        {q: '烏西摩尼葉的說明中."解毒的???植物"請問"???"要放入什麼?', a: '熱帶性'},
        {q: '可以恢復我們魅力的是??', a: '美容師'},
        {q: '氣力回覆40的回覆瓶子是什麼顏色的呢?', a: '黃色'},
        {q: '玩家在石器裡無法做的動作是?', a: '睡覺'},
        {q: '長毛象公車出發時的鳴叫聲是?', a: '叭叭叭～～～'},
        {q: '"oooo的近藏"o裡面是?', a: '山賊志願'},
        {q: '一遇到跑過來的長毛象公車.人物會變成怎??', a: '不會怎樣'},
        {q: '能跟烏力斯坦說話的道具是?', a: '不可思議的貝殼'},
        {q: '怎樣才能坐長毛象公車呢?', a: '加入團隊'}
    ]
};

var $list = $('table tbody');

$('table').on('mousedown', 'input', function () {
    var $this = $(this);
    setTimeout(function() { $this.select(); }, 1);
});

$('#search').bind('input', function () {

    var txt = $(this).val().toString() || '';

    $list.html('');

    Question.filter(txt, function (o) {
        $list.append(
            '<tr> \
                <th>' + o.q.replace(txt, '<span class="color-red">' + txt + '</span>') + '</th>\
                <td>' + '<input class="form-control" readonly value="' + o.a + '"/></td>\
                <td>' + (o.title || '&nbsp;') + '</td>\
            </tr>');
    });
}).bind('propertychange', function () {
    /* for IE8 */
    $(this).trigger('input');

}).bind('mousedown', function () {

    var $this = $(this);
    setTimeout(function() { $this.select(); }, 1);

}).trigger('input');