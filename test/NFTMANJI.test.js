
const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers')

const RANDOM_SEED = 100
const CHARACTER_NAME = "Shrek"

contract('NFTMANJI', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const NFTMANJI = artifacts.require('NFTMANJI.sol')
    const defaultAccount = accounts[0]

    let link, dnd

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        dnd = await NFTMANJI.new({ from: defaultAccount })
    })

    describe('#requestNewRandomCharacter', () => {
        context('without LINK', () => {
            it('reverts', async () => {
                const newCharacter = await expectRevert.unspecified(dnd.requestNewRandomCharacter(RANDOM_SEED, CHARACTER_NAME))
            })
        })
    })
})  