import contract from "./Feedback.json";

export const contractABI = contract.abi;
export const contractAddress = process.env.NEXT_PUBLIC_ROPSTEN_CONTRACT_ADDRESS;
