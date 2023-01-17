const main = async () => {

    const [owner, randomPerson]= await hre.ethers.getSigners();
    const sigmaContractFactory = await hre.ethers.getContractFactory("sigmaPortal");
    const sigmaContract = await sigmaContractFactory.deploy();
    await sigmaContract.deployed();

    console.log("Contract deployed to:", sigmaContract.address);
    console.log("Contract deployed by:", owner.address);

    await sigmaContract.getTotalSigmas();

    const firstsigmaTxn = await sigmaContract.sigma();
    await firstsigmaTxn.wait();
    
    await sigmaContract.getTotalSigmas();

    const secondsigmaTxn = await sigmaContract.connect(randomPerson).sigma();
    await secondsigmaTxn.wait();

    await sigmaContract.getTotalSigmas();
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