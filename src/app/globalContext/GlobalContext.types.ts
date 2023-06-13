import { ethers } from 'ethers'
import { SET_ITEM_1, SET_ITEM_2 } from './constants'

export type GlobalContextState = {
  tokenContract: ethers.Contract
  marketContract: ethers.Contract
}

export type GlobalActionTypes =
  | { type: typeof SET_ITEM_1; payload: number }
  | { type: typeof SET_ITEM_2; payload: string }

export type GlobalDispatch = (action: GlobalActionTypes) => void
