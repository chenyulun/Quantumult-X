var body = $response.body;

body = body.replace('disp_prompt();', '')
$done(body)