#
# NFT-MANJI
## Creating the Game Characters as NFT (ERC721)
#
## Based on Chainlink NFT Dungeons and Dragons
VIDEO: https://www.youtube.com/watch?v=EzZEx0lumr0

BLOG: https://blog.chain.link/build-deploy-and-sell-your-own-dynamic-nft/

CONTRACT: https://etherscan.io/address/0x8d78277bc2c63f07efc2c0c8a8512de4ad459a05#code
#
## Clone this Repo:
```
git clone https://github.com/luigicallero/NFTMANJI
cd NFTMANJI
npm install
```
#
## Setup Environment Variables to Rinkeby Testnet
You’ll need a MNEMONIC and a rinkeby RINKEBY_RPC_URL environment variable. Your MNEMONIC is your seed phrase of your wallet. You can find a RINKEBY_RPC_URL from node provider services like Infura
Export them into your terminal like:
```
export MNEMONIC='YOUR_12_MNEMONIC_WORDS'
export RINKEBY_RPC_URL='https://rinkeby.infura.io/v3/YOUR_INFURA_RINKEBY_KEY'
export ETHERSCAN_API_KEY='YOUR_ETHERSCAN_API'
```
#
## Deploying the Contract for NFT (ERC721)
```
truffle migrate --reset --network rinkeby
```
This is the contract I generated:
```
CONTRACT: 0x5239cE62Ceed3c5a69BACCa7a824A8e127D907aC
```
#
## To verify the Contract in EtherScan
```
npm install truffle-plugin-verify
truffle run verify NFTMANJI --network rinkeby --license MIT
```
#
## Fund the contract with Test LINK tokens to be used for the randomness with Chainlink
truffle exec scripts/fund-contract.js --network rinkeby
#
## Generate Random Characteristics for the Figures
truffle exec scripts/generate-character.js --network rinkeby
#
## Check the newly created Figures (go into the get-character.js file and update dnd.getCharacterOverView(TOKENID) to swap to each created character):
```
truffle exec scripts/get-character.js --network rinkeby
```
#
## Upload Images to IPFS
Install IPFS Desktop
```
https://ipfs.io/#install
```
Upload Images and Pin them in local node (only option shown)
#
## Pin Images in IPFS
Register in Pinata
```
https://app.pinata.cloud
```
Pin CID images
Copy the Links by selecting the 3dots on the right, "Share Link" and "Copy":
```
https://ipfs.io/ipfs/QmdtUkyH3gxU68TjBPpaxhzrD85LpkVrUReaKgWCXPW5vZ?filename=coraje.jpeg
https://ipfs.io/ipfs/QmRLTcBw2Gc67cLegrQHd2a949LdH6BJKFCDCz6AzLRnRx?filename=goose.png
https://ipfs.io/ipfs/QmVntZoPnuqJMVxo1ZobSx4xC3HFayMkL5gsq5kZaoZjsu?filename=mostached_beret.jpeg
https://ipfs.io/ipfs/QmSuhMxwH1Me6skEvBrufBW8AS25uAgj1jdY6xmo6auAw9?filename=mostached_galley.jpeg
```
#
## Generate json files for metadata:
This command will generate the metadata information in the metadata folder of this Repo
```
truffle exec scripts/create-metadata.js --network rinkeby
```

Then, copy pinned IPFS image links into just created json files (in the field "image:")

Repeat the IPFS and Pinata steps with json files

These are the IPFS links that will go to the blockchain as part of NFT metadata:
```
https://ipfs.io/ipfs/QmWzwwRxdrXdvMd7vPQ4paYBKs1Ga6FJvqsZG1G72hhxpo?filename=coraje.json
https://ipfs.io/ipfs/Qmc7yiE3Xhm7jQ1wd1cS3fejxtxHeYkjUAX1gxLST4S1h3?filename=goose.json
https://ipfs.io/ipfs/QmYdXCRfWQZ5JGBdHWRYSYD7cQNMT96nfzaR63JYMwrgUw?filename=mostached-beret.json
https://ipfs.io/ipfs/Qmb7EAJmTZN3LeE5tJJqvex4YC2ahunkG6RNiDKhywuy2M?filename=mostached-galley.json
```
#
## Assign the TOKEN-URI to every Token
Update the script set-token-uri.js with them and execute the following:
```
truffle exec scripts/set-token-uri.js --network rinkeby
```
#
## Upload the TOKEN Collection to Testnet OpenSea
Go to Testnet OpenSea at https://testnets.opensea.io/get-listed and sign in with your metamask. Then Select "Live on TestNet" option.
Select Rinkeby, paste the SmartContract Address and Submit.

## Validate it to confirm metadata format is correct:
Copy the NFT contract and paste it in this link right after "asset/"
```
https://testnets-api.opensea.io/asset/0xeDd711D1d94B6fFbcD57035B6aFa09564204330a/0/validate/
```

Collection in Testnet OpenSea: 
```
https://testnets.opensea.io/collection/nft-manji
```
#
## Troubleshooting
If Images and metadata are NOT SHOWING - Go to each item and select the button "Refresh Metadata" right below the SELL button

Metadata format for OpenSea:
```
https://docs.opensea.io/docs/metadata-standards
```
