// const fs = require('fs') // будет работать через кол-бэки
const fs = require('fs/promises') // будет работать через промисы
const path = require('path')
const fsSync = require('fs')

const base = path.join(__dirname, 'temp')

// создать папку temp в текущей папке
const start1 = async () => {
    try {
        await fs.mkdir(base)
        console.log(`создана папка temp внутри этой папки`)
        fs.writeFile(path.join(base, 'logo.txt'), '123yj25f82374yjf73y848')
    } catch (error) {
        console.log(`error`, error)
    }
}

const space = '\n\r' // пробел

// создать папку temp в текущей папке
const start2 = async () => {
    if (fsSync.existsSync(base)) { // проверяем, существует ли такая папка?
        // fs.writeFile(path.join(base, 'logo.txt'), 'Собака ') // перезаписать текст в файле
        fs.appendFile(path.join(base, 'logo.txt'), space + 'Жираф ') // добавить текст в файл
        console.log(`Я перезаписал текст`)
        const data = await fs.readFile(path.join(base,'logo.txt'),{encoding:'utf-8'})
        console.log(data)

    } else {
        await fs.mkdir(base)
        fs.writeFile(path.join(base, 'logo.txt'), 'Енот')
        console.log(`создана папка temp внутри этой папки`)
    }
}

// start1()
start2()
