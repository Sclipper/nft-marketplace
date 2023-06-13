This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

To run the Hardhat node and deploy the contracts:

Run the local hardhat node
```bash
npx hardhat node
```

Then deploy the contracts locally
```bash
npx hardhat run scripts/deploy.ts --network localhost
```

Then copy the output and replace the values here `src/app/configs/nftAddress.ts`
