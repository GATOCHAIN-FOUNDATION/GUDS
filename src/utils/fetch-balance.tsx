import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  USDT_CONTRACT_ABI,
  USDT_CONTRACT_ADDRESS,
  GUDS_SWAP_CONTRACT_ABI,
  GUDS_SWAP_CONTRACT_ADDRESS,
} from '@/constants/contract/contract';
import { Contract, formatUnits, JsonRpcProvider } from 'ethers';

// Use JsonRpcProvider for reading data from the blockchain
const provider = new JsonRpcProvider('https://bsc-dataseed.binance.org/');

// Fetching balance of a token for a given address
export const fetchBalance = async (address: string, walletProvider: any) => {
  if (address) {
    const tokenAddress = CONTRACT_ADDRESS;
    const tokenABI = CONTRACT_ABI;
    // Create an Ethers signer using walletProvider (usually window.ethereum or a connected wallet provider)
    const ethersProvider = new JsonRpcProvider(
      'https://bsc-dataseed.binance.org/'
    ); // BSC RPC endpoint
    const signer = ethersProvider.getSigner();
    const contract = new Contract(tokenAddress, tokenABI, provider);
    const balance = await contract.balanceOf(address);
    const formattedBalance = formatUnits(balance, 3);
    return formattedBalance;
  }
};

// Fetching USDT balance for a given address
export const fetchUsdtBalance = async (
  address: string,
  walletProvider: any
) => {
  if (address) {
    const tokenAddress = USDT_CONTRACT_ADDRESS;
    const tokenABI = USDT_CONTRACT_ABI;
    const ethersProvider = new JsonRpcProvider(
      'https://bsc-dataseed.binance.org/'
    );
    const signer = ethersProvider.getSigner();
    const contract = new Contract(tokenAddress, tokenABI, provider);
    const balance = await contract.balanceOf(address);
    const formattedBalance = formatUnits(balance, 3);
    return formattedBalance;
  }
};

// Function to get token reserves and calculate prices
export async function getTokenReservesAndPrices(walletProvider: any) {
  try {
    // Get the reserves from the contract
    const tokenAddress = GUDS_SWAP_CONTRACT_ADDRESS;
    const tokenABI = GUDS_SWAP_CONTRACT_ABI;
    const ethersProvider = new JsonRpcProvider(
      'https://bsc-dataseed.binance.org/'
    );
    const signer = ethersProvider.getSigner();
    const contract = new Contract(tokenAddress, tokenABI, provider);
    const [reserveToken1, reserveToken2] = await contract.getReserves();

    // Convert BigNumber to regular number strings
    const regularNumber1 = reserveToken1;
    const regularNumber2 = reserveToken2;

    // Convert to Ether (assuming 18 decimals)
    const etherValue1 = formatUnits(regularNumber1, 2);
    const etherValue2 = formatUnits(regularNumber2, 2);

    console.log('USDT :', etherValue1, 'GUDS :', etherValue2);

    // Calculate price ratios
    const priceOfUSDT = parseFloat(etherValue1) / parseFloat(etherValue2);
    const priceOfGUDS = parseFloat(etherValue2) / parseFloat(etherValue1);

    return {
      etherValue1,
      etherValue2,
      priceOfUSDT,
      priceOfGUDS,
    };
  } catch (error) {
    console.error('Error fetching reserves and calculating prices:', error);
    throw error;
  }
}
