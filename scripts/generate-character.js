const NFTMANJI = artifacts.require('NFTMANJI')

module.exports = async callback => {
  const dnd = await NFTMANJI.deployed()
  console.log('Creating requests on contract:', dnd.address)
  console.log('Generating Character: Coraje')
  const tx = await dnd.requestNewRandomCharacter(77, "Coraje")
  console.log('Generating Character: Goose')
  const tx2 = await dnd.requestNewRandomCharacter(7777777, "Goose")
  console.log('Generating Character: Mostached Beret')
  const tx3 = await dnd.requestNewRandomCharacter(7, "Mostached Beret")
  console.log('Generating Character: Mostached Galley')
  const tx4 = await dnd.requestNewRandomCharacter(777, "Mostached Galley")
  callback(tx.tx)
}
