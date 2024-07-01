// import hre from "hardhat";
const dotenv = require('dotenv');
dotenv.config();
async function main() {
    const tokenName = process.env.TOKEN_NAME;
    const symbol = process.env.SYMBOL;
    const minter = process.env.MINTER;
    const initNum = process.env.INIT_NUM;
    console.log(`deploy template token with: ${tokenName} ${symbol} ${minter} ${initNum}}`)
    // Start deployment, returning a promise that resolves to a contract object
    const TemplateToken = await hre.viem.deployContract('TemplateToken',[
        tokenName,
        symbol,
        minter,
        initNum
    ]);
    console.log('Contract deployed to address:', TemplateToken);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })