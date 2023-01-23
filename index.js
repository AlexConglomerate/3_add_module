// чтобы это работало, нужно в файле "package.json" добавить "type": "module",
import {fileURLToPath} from 'url'
import path from 'path.js'
import {myNumber} from "./test.js";



const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
console.log(filename)
console.log(dirname)

console.log(myNumber)