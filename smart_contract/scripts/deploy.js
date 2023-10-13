const hre = require("hardhat");

async function main()
{
  
  const transactionsFactory = await hre.ethers.deployContract("Transactions");

  await transactionsFactory.waitForDeployment();

  console.log("Transactions deployed to address:", transactionsFactory.target);

};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


