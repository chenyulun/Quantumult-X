var body = $response.body;

body = body.replace('disp_prompt();', '');
body = body.replace(/class="web_share"/, ($0) => `style="display:none" ${$0}`);
body = body.replace(/class="web_nav_menu"/, ($0) => `style="display:none" ${$0}`);
body = body.replace(/class="loc_banner only-app"/, ($0) => `style="display:none" ${$0}`);
// body = body.replace(/class="loc_banner only-app"/, ($0) => `style="display:none" ${$0}`);
// const hasILove = body.match(/item\sok\sme[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/)
const hasILove = body.match(/data-play="([^"]+)[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/);
if (hasILove) {
  body = body
    .replace('item play ok me', 'item ok me')
    .replace(/item\sok\sme(?=[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?)/, 'item play ok me');
  body = body.replace(/(?<=src=")\/play\/[^"]+(?="[^>]+><\/iframe>)/, hasILove[1]);
}
$done({ body });
