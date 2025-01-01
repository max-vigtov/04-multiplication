import fs from 'fs';
import { yarg } from './config/plugins/args.plugin'

const { b:base, l:limit, s:showTable } = yarg

let outputMessage = '';
let headerMessage: string = `
=======================================
            Tabla del ${ base }
=======================================\n
`;

for (let index = 0; index < limit; index++) {
  outputMessage += `${base} X ${index + 1} = ${(index + 1) * base}\n`
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outPath = `outputs`

fs.mkdirSync(outPath, { recursive: true});
fs.writeFileSync( `${ outPath }/tabla-${ base }.txt`, outputMessage);
console.log('El archivo ha sido guardado!');
