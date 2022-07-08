
export const getmember = async (query) => {
    try {
      const member = {
       "1":"大内 一生",
       "2":"ハイネル",
       "3":"中村 拓海",
       "4":"高橋 秀人",
       "5":"ガブリエウ",
       "6":"和田 拓也",
       "7":"松浦 拓弥",
       "8":"齋藤 功佑",
       "9":"クレーべ",
       "10":"安永 玲央",
       "13":"サウロ ミネイロ",
       "14":"田部井 涼",
       "15":"伊藤 翔",
       "16":"長谷川 竜也",
       "17":"武田 英二郎",
       "18":"小川 航基",
       "19":"亀川 諒史",
       "20":"イサカ ゼイン",
       "21":"市川 暉記",
       "22":"岩武 克弥",
       "23":"杉田 隼",
       "24":"高木 友也",
       "25":"中村 俊輔",
       "26":"韓 浩康",
       "27":"中塩 大貴",
       "30":"手塚 康平",
       "32":"古宿 理久",
       "33":"近藤 友喜",
       "34":"西山 大雅",
       "38":"山谷 侑士",
       "39":"渡邉 千真",
       "44":"六反 勇治",
       "47":"フェリペ ヴィゼウ",
       "48":"山下 諒也",
       "49":"スベンド ブローダーセン",
       

      };

      const inputNumber = query.number;
      let outputMember;

      for(let item in member){
        if(item === inputNumber){
            // console.log(member[item]);
            outputMember = member[item];
            return outputMember;
        }
      }

      return {
        inputNumber: query.number,
        member: outputMember,
      };
    } catch (e) {
      throw Error("Error while getting member");
    }
  };