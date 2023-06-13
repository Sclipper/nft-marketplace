import { GlobalContextState, GlobalActionTypes } from './GlobalContext.types'
import { SET_ITEM_1, SET_ITEM_2 } from './constants'

export function globalReducer(
  state: GlobalContextState,
  { type, payload }: GlobalActionTypes
) {
  switch (type) {
    // case SET_ITEM_1: {
    //   return {
    //     ...state,
    //     item1: payload,
    //   }
    // }
    // case SET_ITEM_2: {
    //   return {
    //     ...state,
    //     item2: payload,
    //   }
    // }

    default: {
      throw new Error(`Unhandled type: globalReducer`)
    }
  }
}
