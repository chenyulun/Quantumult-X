let body = $response.body;


console.log('$task:', JSON.stringify(Object.keys($task)))
console.log('$request:' + JSON.stringify(Object.keys($request)))
console.log('$response:' + JSON.stringify(Object.keys($response)))

body = body.replace('disp_prompt();', '')
$done({body})