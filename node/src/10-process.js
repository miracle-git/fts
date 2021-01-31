// argv
const { argv, argv0, execArgv, execPath } = process;

argv.forEach(item => console.log(item));
console.log(argv0); // node
console.log(execArgv); // 如: harmony, inspect等
console.log(execPath); // usr/local/bin/node

// env, cwd
const { env, cwd } = process;
console.log(env);
console.log(cwd()); // /Users/miracle/Desktop/DevOps/M2.Frontend/node/tutorials

// timer
const { nextTick } = process;
setImmediate(() => {
  console.log('setImmediate');
});
setTimeout(() => {
  console.log('setTimeout');
}, 0);
nextTick(() => {
  console.log('nextTick');
  nextTick(() => {
    console.log('nextTick2');
  });
});

