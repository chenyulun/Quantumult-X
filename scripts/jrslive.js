let body = $response.body;


// console.log('$task:', JSON.stringify(Object.keys($task)))
// console.log('$request:' + JSON.stringify(Object.keys($request)))
// console.log('$response:' + JSON.stringify(Object.keys($response)))

body = body.replace('disp_prompt();', '').replace(/class="item ok_kqt type1/g, ($0) => `style="display:none" ${$0}`)

$done({body})