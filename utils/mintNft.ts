import connectContract from "./connectContract";

const mintNft = async () => {
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

  try {
    const { ethereum } = window;

    if (!ethereum) {
      return console.log("Ethereum object doesn't exists");
    }

    const connectedContract = connectContract(CONTRACT_ADDRESS, ethereum);

    console.log("Going to pop wallet now to pay gas...");
    let txn = await connectedContract.makeAnEpicNFT();

    console.log("Mining...please wait.");
    await txn.wait();

    console.log(
      `Mined, see transaction: https://rinkeby.etherscan.io/tx/${txn.hash}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default mintNft;
