import { ethers } from "ethers";
export class HP {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    /**
     * @method initial minting once, only admin
     */
    init(): Promise<void>;
    /**
     * @method set signup token reward, only admin
     */
    setSignupReward(signupReward: number): Promise<void>;
    /**
     * @method set attendacne token reward, only admin
     */
    setAttendanceReward(attendanceReward: number): Promise<void>;
    /**
     * @method mint token to reward signup, only minter
     */
    signupMint(recipient: string): Promise<void>;
    /**
     * @method mint token to reward attendacne, only minter
     */
    attendanceMint(recipient: string): Promise<void>;
    /**
     * @method mint token to reward users at once, only minter
     */
    attendanceMintBatch(recipients: string[]): Promise<void>;
    /**
     * @method check balance of user
     */
    balanceOf(user: string): Promise<void>;
}
export class HPA {
}
/**
 * @param network default mainnet, can be url like http or wss
 * @param provider etherscan, infura, alchemy, etc...
 * @param key apikey, in case of infura project_id
 * @returns provider
 */
export const setProvider: (network: string, provider: string, key: string) => ethers.providers.BaseProvider;
/**
 * @method: returns address and privateKey
 * @param {string} pwd user password
 * @return {Promise} object of address, privateKey and mnemonic
 */
export const createWallet: (pwd: string) => Promise<any>;

//# sourceMappingURL=types.d.ts.map
