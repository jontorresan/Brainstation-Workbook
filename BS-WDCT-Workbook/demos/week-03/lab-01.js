let sum = 0
let nonNums = []
for(let i=2; i<process.argv.length; i++) {
  const num = Number(process.argv[i])
  if(isNaN(num) === false) {
    sum += Number(process.argv[i])
  } else {
    nonNums.push(process.argv[i])
  }
}

console.log('The sum is:', sum)
console.log('These aren\'t numbers:', nonNums)