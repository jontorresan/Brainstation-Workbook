const fs = require('fs')
const readlineSync = require('readline-sync')

let fileName = process.argv[2]

if(!fileName)
  fileName = readlineSync.question('Please enter a file to open: ')

fs.readFile(fileName, 'utf8', (err, data) => {
  if(err) {
    console.log(err)
    return
  }

  fs.writeFile(fileName + '.copy', data, (err) => {
    console.log('File Written.')
  })

})

console.log('done')
