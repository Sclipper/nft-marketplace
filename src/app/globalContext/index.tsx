'use client'

import * as React from 'react'

import { ethers } from 'ethers'
import { globalActions } from './actions'
import { GlobalContextState, GlobalDispatch } from './GlobalContext.types'
import { globalReducer } from './reducer'
import { nftAddress, nftMarketAddress } from '../configs'
import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

const GlobalContext = React.createContext<
  | {
      state: GlobalContextState
      dispatch: GlobalDispatch
      actions: ReturnType<typeof globalActions>
    }
  | undefined
>(undefined)

const provider = new ethers.providers.JsonRpcProvider()
const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider)
const marketContract = new ethers.Contract(nftMarketAddress, Market.abi, provider)

const defaultState = {
  tokenContract,
  marketContract,
}

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(globalReducer, defaultState)

  // NOTE: you *might* need to memoize this value
  const value = React.useMemo(() => {
    const actions = globalActions(dispatch)
    return { state, actions, dispatch }
  }, [state, dispatch])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

function useGlobal() {
  const context = React.useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider')
  }
  return context
}

export { GlobalProvider, useGlobal }
