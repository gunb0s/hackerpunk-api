import { ethers } from "ethers";

class ExternalHP {
  contract: ethers.Contract;
  contractAddress: string;
  abi: ethers.ContractInterface;

  constructor(
    signer: ethers.Signer,
    contractAddress: string,
    abi: ethers.ContractInterface
  ) {
    this.contractAddress = contractAddress;
    this.abi = abi;
    this.contract = new ethers.Contract(this.contractAddress, this.abi, signer);
  }

  /**
   * @method change signer of contract
   * @param signer
   */
  async changeContractSigner(signer: ethers.Signer) {
    this.contract = this.contract.connect(signer);
  }

  /**
   * @method onlyOwner
   * @param fee send value of Wei as string or BigInt
   */
  async setSignupFee(credentialType: number, fee: string | BigInt) {
    await this.contract.setSignupFee(credentialType, fee);
  }

  async signupFee(credentialType: number): Promise<BigInt> {
    return await this.contract.signupFee(credentialType);
  }

  /**
   * @method onlyOwner
   */
  async getAllServerAccounts(): Promise<string[]> {
    return await this.contract.getAllServerAccounts();
  }

  async registerAddress(serverAddress: string) {
    await this.contract.registerAddress(serverAddress);
  }

  async isRegistered(serverAddress: string): Promise<boolean> {
    return await this.contract.isRegistered(serverAddress);
  }

  async isAuthenticated(serverAddress: string): Promise<boolean> {
    return await this.contract.isAuthenticated(serverAddress);
  }

  async checkExternalAuthenticated(
    serverAddress: string,
    externalAddress: string
  ): Promise<boolean> {
    return await this.contract.checkExternalAuthenticated(
      serverAddress,
      externalAddress
    );
  }

  async getCredentialType(serverAddress: string): Promise<number> {
    return await this.contract.getCredentialType(serverAddress);
  }

  async singupEventListener(
    serverAddress: string,
    externalAddress: string,
    provider: ethers.providers.BaseProvider,
    callback: ethers.providers.Listener
  ) {
    const filter = {
      address: this.contractAddress,
      topics: [
        ethers.utils.id("Signup(address, address)"),
        ethers.utils.hexZeroPad(serverAddress, 32),
        ethers.utils.hexZeroPad(externalAddress, 32),
      ],
    };

    provider.once(filter, callback);
  }
}

export { ExternalHP };