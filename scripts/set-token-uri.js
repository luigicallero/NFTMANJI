const NFTMANJI = artifacts.require('NFTMANJI')
const TOKENID = 0
module.exports = async callback => {
    const dnd = await NFTMANJI.deployed()
    console.log('Let\'s set the tokenURI of your characters')
    console.log('Adding URI to Token: Coraje')
    const tx0 = await dnd.setTokenURI(0, "https://ipfs.io/ipfs/QmWzwwRxdrXdvMd7vPQ4paYBKs1Ga6FJvqsZG1G72hhxpo?filename=coraje.json")
    console.log('Adding URI to Token: Goose')
    const tx1 = await dnd.setTokenURI(1, "https://ipfs.io/ipfs/Qmc7yiE3Xhm7jQ1wd1cS3fejxtxHeYkjUAX1gxLST4S1h3?filename=goose.json")
    console.log('Adding URI to Token: Mostached Beret')
    const tx2 = await dnd.setTokenURI(2, "https://ipfs.io/ipfs/QmYdXCRfWQZ5JGBdHWRYSYD7cQNMT96nfzaR63JYMwrgUw?filename=mostached-beret.json")
    console.log('Adding URI to Token: Mostached Galley')
    const tx3 = await dnd.setTokenURI(3, "https://ipfs.io/ipfs/Qmb7EAJmTZN3LeE5tJJqvex4YC2ahunkG6RNiDKhywuy2M?filename=mostached-galley.json")
//    console.log(tx)
//    callback(tx.tx)
}