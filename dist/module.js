import {ethers as $hgUW1$ethers} from "ethers";
import {keystore as $hgUW1$keystore} from "eth-lightwallet";


class $8a1a826cc015fcf1$export$2f4fd17aff4e7fc {
    constructor(signer, contractAddress, abi){
        this.contractAddress = contractAddress;
        this.abi = abi;
        this.contract = new $hgUW1$ethers.Contract(this.contractAddress, this.abi, signer);
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


class $04e41d0854aa7e66$export$5878c2c4222e4fe7 {
}



const $a0c7eb0327956a81$export$1572b3eade6662f9 = (network, provider, key)=>{
    if (network === undefined) return $hgUW1$ethers.getDefaultProvider();
    if (network.startsWith("wss") || network.startsWith("http")) return $hgUW1$ethers.getDefaultProvider(network);
    const options = {
        [provider]: key
    };
    return $hgUW1$ethers.getDefaultProvider(network, options);
};
const $a0c7eb0327956a81$export$e61ca58b6d981800 = (privateKey)=>{
    return new $hgUW1$ethers.Wallet(privateKey);
};
const $a0c7eb0327956a81$export$5e413b7d07c04d66 = (wallet, provider)=>{
    return wallet.connect(provider);
};



/**
 * @method: returns address and privateKey
 * @param {string} pwd user password
 * @return {Promise} object of address, privateKey and mnemonic
 */ const $613f1c02b9ad96db$export$41bdf21621ec4e24 = (pwd)=>{
    return new Promise((resolve, reject)=>{
        let secretSeed = $hgUW1$keystore.generateRandomSeed();
        $hgUW1$keystore.createVault({
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




export {$8a1a826cc015fcf1$export$2f4fd17aff4e7fc as HP, $04e41d0854aa7e66$export$5878c2c4222e4fe7 as HPA, $a0c7eb0327956a81$export$1572b3eade6662f9 as setProvider, $613f1c02b9ad96db$export$41bdf21621ec4e24 as createWallet};
//# sourceMappingURL=module.js.map
