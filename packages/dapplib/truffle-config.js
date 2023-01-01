require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan raise sad huge hockey civil army genius'; 
let testAccounts = [
"0xb3bd88af170f0344e776aa2b38b7caa122ea29a3610a840f5663bd182531d1e9",
"0xe8365df1e2c9af15819ccc194b1350dcc3ac74ed33dfe56501bc6f4b2cfebf1b",
"0x2c508c31ba88dfffba2aa7e02cbd9f98f1ab7d49d59cc20b8bd4707ea96af629",
"0xbb3dbd28814b83724e4e0be0d302ba78613520e4710e27ab299778a607f7eac9",
"0x3de0629d7c1e388c2b0d866a8cbedc4acc0b0a47ced67c6ed992f443ea0571a9",
"0x5d85289a042b23135d938986d64a8470172acb31610d032add441269c4e342bc",
"0x33a4865af916b8929a9c21f41a8709ca1df68984227b1157652be1fcf009e90c",
"0x6f067d4816ef00b912f6dc38be19d53998fc83f30c72cdc4fb278c3183112194",
"0x3085d6701d5560351a04048ffb9d79ded7b60f6a76b59bfc8b306a73f7240975",
"0xe8d35355f36eff3a6421ae52c908a2618e64e1195c5f2371fe08142c797daba3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


