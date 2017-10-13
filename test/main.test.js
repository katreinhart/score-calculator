const chai = require('chai')
const expect = chai.expect

const scoresObject = require('../main')

describe('Score calculator', () => {
  describe('read file', () => {
    it('should read in the scores from the text file', () => {
      expect(scoresObject.rawData).to.be.a('string')
      expect(scoresObject.dataArray).to.be.a('array')
    })

    it('should create an object from the file', () => {
      expect(scoresObject).to.be.a('object')
      expect(scoresObject["Zoe"]).to.be.a('object')
      expect(scoresObject["Zoe"].totalScore).to.equal(17)
    })
  })

  describe('calculate score', () => {
    it(`should calculate each player's score and add it to a score object`, ()=> {
      expect(scoresObject["Sarah"].totalScore).to.equal(27)
    })
  })

  describe('display results', () => {
    it(`should display only the winner's name and score`, () => {
      expect(scoresObject.result()).to.equal('Sarah 27')
    })
  })
})