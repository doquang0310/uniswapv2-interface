import { Interface } from '@ethersproject/abi'
import { ChainId } from '@uniswap/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  [ChainId.ROPSTEN]: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
  [ChainId.RINKEBY]: '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',
  [ChainId.GÖRLI]: '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA',
  [ChainId.KOVAN]: '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
  [ChainId.OPBNB_MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', //todo-quang: update this address
  [ChainId.OPBNB_TESTNET]: '0x02B8E5bB0F40482497A8458447a83a06e65bdf7f' //todo-quang: update this address
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
