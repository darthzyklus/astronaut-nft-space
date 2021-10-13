import { ethers } from "ethers";
import myEpicNft from "./MyEpicNFT.json";

const connectContract = (contractAddress: string, network: any) => {
  const provider = new ethers.providers.Web3Provider(network);
  const signer = provider.getSigner();

  const connectedContract = new ethers.Contract(
    contractAddress,
    myEpicNft.abi,
    signer
  );

  return connectedContract;
};

export default connectContract;
