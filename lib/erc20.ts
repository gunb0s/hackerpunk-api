import { ethers } from "ethers";

const ca = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// ERC20 JSON Interface
const erc20ABI = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  "function mintToken(address account) public onlyOwner",
  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

class HPFactory {
  provider: ethers.providers.InfuraProvider;

  constructor(network: string, apiKey: string) {
    this.provider = new ethers.providers.InfuraProvider(network, apiKey);
  }

  /**
   * @param privateKey privateKey of central account
   * @param to token minted to
   * @param activity login or write a post, or comment
   * @returns
   */

  async mintToken(
    privateKey: ethers.utils.BytesLike,
    to: string,
    activity: number
  ) {
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(this.provider);

    const contract = new ethers.Contract(ca, erc20ABI, signer);

    const result = await contract.mintToken(to);
    return result;
  }

  /**
   * @param privateKey privateKey of sender account
   * @param to token sent to
   * @param amount amount of token
   * @returns
   */
  async transfer(
    privateKey: ethers.utils.BytesLike,
    to: string,
    amount: number
  ) {
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(this.provider);

    const contract = new ethers.Contract(ca, erc20ABI, signer);

    const result = await contract.transfer(to, amount);
    return result;
  }
}

export default HPFactory;
