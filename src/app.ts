const fs = require('fs');

let data: string = '';
const base = 5;

for (let index = 0; index < 10; index++) {
    data += `${base} X ${index + 1} = ${(index + 1) * base}\n`
}

const outPath = `outputs`

fs.mkdirSync(outPath, { recursive: true});
fs.writeFile('multiplicationTable.txt', data, (err: any) => {
  if (err) throw err;
  console.log('El archivo ha sido guardado!');
});