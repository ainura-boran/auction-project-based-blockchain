import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const AuctionToken = await ethers.getContractFactory("AuctionToken");
  const token = await AuctionToken.deploy(deployer.address);
  await token.waitForDeployment();
  console.log("AuctionToken:", token.target);

  const Auction = await ethers.getContractFactory("Auction");
  const auction = await Auction.deploy(token.target);
  await auction.waitForDeployment();
  console.log("Auction:", auction.target);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
