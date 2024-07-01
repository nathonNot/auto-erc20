import type { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox-viem";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  networks: {
    hardhat: {
      allowBlocksWithSameTimestamp: true,
      allowUnlimitedContractSize: false
    },
    target: {
      url: process.env.CHAIN_RPC_URL,
      chainId: Number(process.env.CHAIN_ID),
      accounts: [process.env.ACCOUNT_PRIVATE_KEY as any],
      gasPrice: 'auto',
      gas: Number(process.env.GAS) as any || 'auto',
    },
  },
};

export default config;
