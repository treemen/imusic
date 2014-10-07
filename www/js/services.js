angular.module('imusic.services', [])
/*code加密*/
.service('code', [function(){
return function id2code(song_id){
 //g = encodeURIComponent(g);
 var g  = song_id;
 var e = new Array(256);
 var f,d;
 var c;
 for (f = 0; f < 256; f++) {
  c = f;
  for (d = 0; d < 8; d++) {
   if (c & 1) {
    c = ((c >> 1) & 2147483647)^3988292384
   } else {
    c = ((c >> 1) & 2147483647)
   }
  }
  e[f] = c
 }
 if (typeof g != "string") {
  g = "" + g
 }
 c = 4294967295;
 for (f = 0; f < g.length; f++) {
  c = ((c >> 8) & 16777215)^e[(c & 255)^g.charCodeAt(f)]
 }
 c ^= 4294967295;
 return (c >> 3).toString(16)
}
}])
//请求的url地址
.service('queryurl', [function(){
  /**
  version:20140728164225
  全局：http://ayyc.ttpod.com/ajax/getglobal.do?callback=jsonp_callback2&resVersion=20140902173815&version=20140728164225
  广场列表：http://v1.h5.h.itlily.com/plaza/4705746/2/15/jsonp_plaza?callback=jsonp_plaza
  排行目录：http://ayyc.ttpod.com/ajax/getchannelsbyid.do?callback=jsonp_callback3&a=bdlb&size=15&page=1&musiclabelid=8&version=20140728164225
  排行列表：http://ayyc.ttpod.com/ajax/getmusicsbyid.do?callback=jsonp_callback5&a=bdgqlb&channelid=111&channelname=天天动听热歌榜&musiclabelid=8&pnlId=bdgqlbPanel&size=15&page=2&haschannelinfo=true&version=20140728164225
  搜索提示：http://so.ard.iyyin.com/suggest.do?callback=jsonp_suggest&q=1&size=5
  搜索结果：http://so.ard.iyyin.com/v2/songs/search?callback=jsonp_search&a=ss&q=2014新歌&page=1&size=15&channelid=-3&searchid=1412064553173&version=20140728164225
  歌曲详情：http://ting.hotchanson.com/detail.do?callback=jsonp_detail&a=gqxq&from=ss&neid=27712660&singerid=163&channelid=-3&channelname=&musiclabelid=undefined&searchid=1412064682459&songname=浪漫来袭(电视剧《16个夏天》片头曲)&singername=萧亚轩&order=1&downListenSwitch=true&extraid=163&size=2&version=20140728164225
  歌曲图片：http://ayyc.ttpod.com/ajax/getsingerpicurl.do?callback=jsonp_callback6&singername=萧亚轩&version=20140728164225
  */
  var url = {
    "globalurl":"http://ayyc.ttpod.com/ajax/getglobal.do",
    "listurl":"http://v1.h5.h.itlily.com/plaza/4705746/",
    "bookurl":"http://ayyc.ttpod.com/ajax/getchannelsbyid.do",
    "bookurllist":"http://ayyc.ttpod.com/ajax/getmusicsbyid.do",
    "searchhinturl":"http://so.ard.iyyin.com/suggest.do",
    "searchresulturl":"http://so.ard.iyyin.com/v2/songs/search",
    "songdetailurl":"http://ting.hotchanson.com/detail.do",
    "songpitureurl":"http://ayyc.ttpod.com/ajax/getsingerpicurl.do"
  }
  return url;
}])
