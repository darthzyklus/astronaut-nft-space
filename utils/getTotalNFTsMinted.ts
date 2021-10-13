import connectContract from "./connectContract";

const getTotalNFTsMinted = async () => {
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

  const { ethereum } = window;

  if (!ethereum) {
    return console.log("Ethereum object doesn't exists");
  }
  const connectedContract = connectContract(CONTRACT_ADDRESS, ethereum);

  const total = await connectedContract.getTotalNFTsMintedSoFar();

  return parseInt(total._hex);
};

export default getTotalNFTsMinted;
