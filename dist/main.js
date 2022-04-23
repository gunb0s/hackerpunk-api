var $8zHUo$ethers = require("ethers");
var $8zHUo$ethlightwallet = require("eth-lightwallet");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "HP", () => $8c679179860be35b$export$2f4fd17aff4e7fc);
$parcel$export(module.exports, "HPA", () => $5bcbc5721fb60e92$export$5878c2c4222e4fe7);
$parcel$export(module.exports, "setProvider", () => $7c31348715c168e6$export$1572b3eade6662f9);
$parcel$export(module.exports, "createWallet", () => $c3abceea661ac960$export$41bdf21621ec4e24);

class $8c679179860be35b$export$2f4fd17aff4e7fc {
    constructor(signer, contractAddress, abi){
        this.contractAddress = contractAddress;
        this.abi = abi;
        this.contract = new $8zHUo$ethers.ethers.Contract(this.contractAddress, this.abi, signer);
    }
    /**
   * @method change signer of contract
   * @param signer
   */ async changeContractSigner(signer) {
        this.contract = this.contract.connect(signer);
    }
    /**
   * @method initial minting once, only admin
   */ async init() {
        await this.contract.init();
    }
    /**
   * @method set signup token reward, only admin
   */ async setSignupReward(signupReward) {
        await this.contract.setSignupReward();
    }
    /**
   * @method set attendacne token reward, only admin
   */ async setAttendanceReward(attendanceReward) {
        await this.contract.setAttendanceReward();
    }
    /**
   * @method mint token to reward signup, only minter
   */ async signupMint(recipient) {
        await this.contract.signupMint();
    }
    /**
   * @method mint token to reward attendacne, only minter
   */ async attendanceMint(recipient) {
        await this.contract.attendacneMint();
    }
    /**
   * @method mint token to reward users at once, only minter
   */ async attendanceMintBatch(recipients) {
        await this.contract.attendanceMintBatch();
    }
    /**
   * @method check balance of user
   */ async balanceOf(user) {
        await this.contract.balanceOf(user);
    }
}


class $5bcbc5721fb60e92$export$5878c2c4222e4fe7 {
}



const $7c31348715c168e6$export$1572b3eade6662f9 = (network, provider, key)=>{
    if (network === undefined) return $8zHUo$ethers.ethers.getDefaultProvider();
    if (network.startsWith("wss") || network.startsWith("http")) return $8zHUo$ethers.ethers.getDefaultProvider(network);
    const options = {
        [provider]: key
    };
    return $8zHUo$ethers.ethers.getDefaultProvider(network, options);
};
const $7c31348715c168e6$export$e61ca58b6d981800 = (privateKey)=>{
    return new $8zHUo$ethers.ethers.Wallet(privateKey);
};
const $7c31348715c168e6$export$5e413b7d07c04d66 = (wallet, provider)=>{
    return wallet.connect(provider);
};



/**
 * @method: returns address and privateKey
 * @param {string} pwd user password
 * @return {Promise} object of address, privateKey and mnemonic
 */ const $c3abceea661ac960$export$41bdf21621ec4e24 = (pwd)=>{
    return new Promise((resolve, reject)=>{
        let secretSeed = $8zHUo$ethlightwallet.keystore.generateRandomSeed();
        $8zHUo$ethlightwallet.keystore.createVault({
            password: pwd,
            seedPhrase: secretSeed,
            hdPathString: "m/0'/0'/0'"
        }, (err1, ks)=>{
            if (err1) reject(err1);
            ks.keyFromPassword(pwd, (err, pwDeriveKey)=>{
                if (err) reject(err);
                ks.generateNewAddress(pwDeriveKey, 1);
                let address = ks.getAddresses().toString();
                let privateKey = ks.exportPrivateKey(address, pwDeriveKey);
                resolve({
                    address: address,
                    privateKey: privateKey,
                    mnemonic: secretSeed
                });
            });
        });
    });
};




//# sourceMappingURL=main.js.map
