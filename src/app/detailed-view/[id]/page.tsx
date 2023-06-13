'use client'

import * as React from 'react'

import { useGlobal } from '@/app/globalContext'

function AnyName({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { state } = useGlobal()
  const { marketContract } = state

  try {
    const item = marketContract
      .fetchMarketItem(params.id)
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.log('err', err)
      })
    console.log('state', item)
  } catch (error) {
    console.log('error', error)
  }

  // const { marketContract } = state
  // console.log('state', state)
  // const item = await marketContract.fetchMarketItem(params.id) // TODO: Type this
  // console.log(item)

  return <h1>My Page</h1>
}

export default AnyName
