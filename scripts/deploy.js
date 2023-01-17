const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const sigmaContractFactory = await hre.ethers.getContractFactory("sigmaPortal");
    const sigmaContract = await sigmaContractFactory.deploy();
    await sigmaContract.deployed();
  
    console.log("SigmaPortal address: ", sigmaContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();