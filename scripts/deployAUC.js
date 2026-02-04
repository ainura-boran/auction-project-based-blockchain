const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const AuctionToken = await hre.ethers.getContractFactory("AuctionToken");
    const auctionToken = await AuctionToken.deploy(deployer.address);
    await auctionToken.waitForDeployment();

    console.log("AuctionToken deployed to:", auctionToken.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});