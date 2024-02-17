const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${characters[i]}  `);
    if (i === characters.length - 1) {
      process.stdout.write(`\n`);
    }
  }, 100 + (200 * i))
}