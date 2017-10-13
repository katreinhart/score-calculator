const fs = require('fs')
const fileName= './scores.txt'

const rawData = fs.readFileSync(fileName, 'utf-8')
const dataArray = rawData.split('\n')

let maxScore = 0
let winner 

const scoresObject = { rawData, dataArray, maxScore, winner }

for(let person of dataArray) {
  let personData = person.split(', ')
  let [name, ...scores] = personData
  
  let totalScore = scores.reduce((acc, item) => parseInt(acc) + parseInt(item), 0)
  if(totalScore > scoresObject.maxScore) {
    scoresObject.maxScore = totalScore
    scoresObject.winner = name
  }
  scoresObject[name] = {
    name,
    scores, 
    totalScore
  }
}

scoresObject.result = () => {
  return (`${scoresObject.winner} ${scoresObject.maxScore}`)
}

console.log(scoresObject.result())

module.exports = scoresObject