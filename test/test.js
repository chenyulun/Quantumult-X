const body = `<iframe class="sub_player" name="myplayer" id="myplayer" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="/play/sm.html?id=137&id2=" ></iframe>
<div class="sub_line"></div>
<div class="sub_playlist">
    <div class="sub_channel" data-action="radio,,css=play spin,selector=.item.ok.me" data-lid="3936541,1,3936541">
        <a class="item play ok me" target="myplayer" data-group="云直播①" data-providerid="27592" data-play="/play/sm.html?id=137&id2=" href="" data-urlid="549270"><em class="icon-play-circle"></em><strong>主播解说①</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/sm.html?id=237&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>主播解说②</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/sm.html?id=239&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>主播解说③</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/iqi.php?id=1263936541&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>中文高清④</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/gm.php?id=898461926&id2=898461926" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>中文高清⑤</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/wen.php?id=39365411&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>高清直播⑥</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="/play/kk.php?id=71577&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>高清直播⑦</strong></a>

        |<!--|<a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="=&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>⑧</strong></a>

        <a class="item ok me" target="myplayer" data-group="云直播④" data-providerid="27608" data-play="=&id2=" href="" data-urlid="553582"><em class="icon-play-circle"></em><strong>⑨</strong></a>



        <!--<button>手机观看</button>--> 
         </div>`;
body = body.replace('disp_prompt();', '');
// const hasILove = body.match(/item\sok\sme[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/)
const hasILove = body.match(/data-play="([^"]+)[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/);
if (hasILove) {
  body = body
    .replace('item play ok me', 'item ok me')
    .replace(/item\sok\sme(?=[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?)/, 'item play ok me');
  body = body.replace(/(?<=src="\/)play\/sm\.html\?id=137&id2=(?="\s><\/iframe>)/, hasILove[1]);
}
