var body = $response.body;

body = body.replace('disp_prompt();', '');
// const hasILove = body.match(/item\sok\sme[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/)
const hasILove = body.match(/data-play="([^"]+)[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/);
if (hasILove) {
  body = body
    .replace('item play ok me', 'item ok me')
    .replace(/item\sok\sme(?=[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?)/, 'item play ok me');
  body = body.replace(/(?<=src="\/)play\/sm\.html\?id=137&id2=(?="\s><\/iframe>)/, hasILove[1]);
}
$done({ body });
