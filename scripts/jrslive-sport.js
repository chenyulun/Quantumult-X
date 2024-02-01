var body = $response.body;

body = body.replace('disp_prompt();', '')
const hasILove = body.match(/item\sok\sme[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?/)
if(hasILove) {
   body = body.replace('item play ok me', 'item ok me').replace(/item\sok\sme(?=[^>]+><em\s[^>]+><\/em><strong>(中文)?高清(直播)?)/, 'item play ok me')
}
$done({body})