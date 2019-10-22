const agv = process.argv.slice(2);
argv.forEach((item) => {
  if ((typeof(Number(item)) === 'number') && Number(item) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
});
