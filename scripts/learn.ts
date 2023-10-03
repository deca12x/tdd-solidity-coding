import { ethers } from "hardhat";

async function main() {
  const helloWorldContractFactory = await ethers.getContractFactory("HelloWorld");
  const helloWorldContract = await helloWorldContractFactory.deploy();
  await helloWorldContract.waitForDeployment();

  const tx = await helloWorldContract.store(ethers.encodeBytes32String("Hello World"));

  const retrievedBytes32 = await helloWorldContract.helloWorld();
  const retrievedText = ethers.decodeBytes32String
  console.log(`The text retrieved from the contract is: ${retrievedText}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
