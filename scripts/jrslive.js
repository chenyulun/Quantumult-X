let body = $response.body;


console.log('$task:',Object.keys($task))
console.log('$request:',Object.keys($request))
console.log('$response:',Object.keys($response))

body = body.replace('disp_prompt();', '')
$done({body})