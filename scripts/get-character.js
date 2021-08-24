const NFTMANJI = artifacts.require('NFTMANJI')

module.exports = async callback => {
    const dnd = await NFTMANJI.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await dnd.characters(0)
    console.log(overview)
    callback(overview.tx)
}
