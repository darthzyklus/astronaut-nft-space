import connectContract from "./connectContract";

const setupMintedEventListener = async (callback?: () => void) => {
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

  try {
    const { ethereum } = window;

    if (!ethereum) {
      return console.log("Ethereum object doesn't exists");
    }

    const connectedContract = connectContract(CONTRACT_ADDRESS, ethereum);

    connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
      console.log(from, tokenId.toNumber());
      callback && callback();

      alert(
        `Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
      );
    });

    console.log("Setup event listener!");
  } catch (error) {
    console.log(error);
  }
};

export default setupMintedEventListener;
