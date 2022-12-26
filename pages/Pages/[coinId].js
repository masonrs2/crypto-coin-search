import React from 'react'

function Coin({ coin }) {
    return <>
        <h1>coin.name</h1>
        <p>coin.market_cap_rank</p>
    </>
}
export default Coin

export async function getStaticPaths() {
    return {
        paths: [
            { params: { coinId: `bitcoin`}}
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.name}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d
    `)
    const data = await response.json()

    return {
        props: {
            post: data,
        }
    }
}