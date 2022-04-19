import * as lightwallet from "eth-lightwallet";

/**
 * @method: returns address and privateKey
 * @param pwd string
 * @return: {string, string}
 */
export function createWallet(pwd: string): any {
  return new Promise((resolve, reject) => {
    let secretSeed: string = lightwallet.keystore.generateRandomSeed();

    lightwallet.keystore.createVault(
      {
        password: pwd,
        seedPhrase: secretSeed,
        hdPathString: "m/0'/0'/0'",
      },
      (err, ks) => {
        if (err) reject(err);
        ks.keyFromPassword(pwd, (err, pwDeriveKey) => {
          if (err) reject(err);
          ks.generateNewAddress(pwDeriveKey, 1);

          let address = ks.getAddresses().toString();
          let privateKey = ks.exportPrivateKey(address, pwDeriveKey);

          resolve({ address, privateKey });
        });
      }
    );
  });
}
