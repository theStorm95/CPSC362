import React from 'react'
import { Typography } from '@material-ui/core'

const StockInfo = ({data}) => {
    const marketCap = data.quote.marketCap ? data.quote.marketCap.toLocaleString() : null
  return (
    <div data-testid="stock-info">
        <Typography><b>Symbol: </b>{data.quote.symbol}</Typography>
        <Typography><b>Display Name: </b>{data.quote.displayName}</Typography>
        <Typography><b>Ask: </b>${data.quote.ask}</Typography>
        <Typography><b>Ask Size: </b>{data.quote.askSize}</Typography>
        <Typography><b>Bid: </b>${data.quote.bid}</Typography>
        <Typography><b>Bid Size: </b>{data.quote.bidSize}</Typography>
        <Typography><b>52 weeks high: </b>${data.quote.fiftyTwoWeekHigh}</Typography>
        <Typography><b>52 weeks low: </b>${data.quote.fiftyTwoWeekLow}</Typography>
        <Typography><b>Market Cap: </b>${marketCap}</Typography>
  </div>
  )
}

export default StockInfo