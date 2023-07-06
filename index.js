var spawn = require('child_process').spawn;
run = spawn('/home/runner/ws/run.sh', ['']);

// 捕获标准输出并将其打印到控制台
run.stdout.on('data', function(data) {
  console.log('standard output:\n' + data);
});


// 捕获标准错误输出并将其打印到控制台
run.stderr.on('data', function(data) {
  console.log('standard error output:\n' + data);
});


// 注册子进程关闭事件
run.on('exit', function(code, signal) {
  console.log('child process eixt ,exit:' + code);
});


//NodeJS模板
//客户端
//wstunnel -t :88::88 wss://xxxx.yyyy.repl.co
