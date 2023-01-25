const main = async () => {

  const sigmaContractFactory = await hre.ethers.getContractFactory("sigmaPortal");
  const sigmaContract = await sigmaContractFactory.deploy();
  await sigmaContract.deployed();
  console.log("Contract addy:", sigmaContract.address);
    
  let sigmaCount;
  sigmaCount = await sigmaContract.getTotalSigmas();
  console.log(sigmaCount.toNumber());

  /**
   * Let's send a few sigmas!
   */
  let sigmaTxn = await sigmaContract.sigma("A message!");
  await sigmaTxn.wait(); // Wait for the transaction to be mined

  const [_, randomPerson] = await hre.ethers.getSigners();
  sigmaTxn = await sigmaContract.connect(randomPerson).sigma("Another message!");
  await sigmaTxn.wait(); // Wait for the transaction to be mined

  let allSigmas = await sigmaContract.getAllSigmas();
  console.log(allSigmas);
};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();