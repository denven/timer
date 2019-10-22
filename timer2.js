/*
 * The user can press b and it should beep right away
 * The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", 
 * and beep after that number of seconds has passed
 * The user can use ctrl + c to exit the program, at which point the program 
 * should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');
//stdout.setTimeout('utf8');

stdin.on("data", (key) => {
  if(key === '\u0003') {
    stdout.write("Thanks for using me, ciao!\n")
    process.exit();
  }
  if(key === "b")  stdout.write('\x07');
  if(Number(key) < 10) {
    console.log("key");
    setTimeout(() => stdout.write(`setting time for ${key} seconds`), key);
  }
});
