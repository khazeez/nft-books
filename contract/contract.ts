import Web3 from "web3";
import ABI from "./ABI.json"

let web3: Web3 | undefined;
let contract: any; 

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    const contractAddress = "0xa000d3636b1e1e479eb07fe85e5a11bcb68c3659"; // ganti dengan address contract
    contract = new (web3 as any).eth.Contract(ABI, contractAddress); 
} else {
    console.log('Ethereum wallet not detected. Please install MetaMask or another wallet.');
}

export { web3, contract };
