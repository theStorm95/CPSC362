import React from 'react'
import { Typography } from '@material-ui/core'

const StockInfo = ({data}) => {
    const marketCap = data.quote.marketCap ? data.quote.marketCap.toLocaleString() : null
    const percentChange = data.quote.regularMarketChangePercent.toFixed(2)
    const prevChange = data.quote.regularMarketChange.toFixed(2)

  return (
    <div data-testid="stock-info">
        {/* display the name of the company */}
        <Typography style={{fontSize: '35px'}}><b>{data.quote.longName}</b></Typography>

        {/* display stock prices and changes */}
        <div style={{display: 'flex'}}>
          <Typography style={{fontSize: '25px'}}><b>{data.quote.regularMarketPrice}</b></Typography>
          <div style={{display: 'flex', marginTop: '5px'}}>
            {/* conditional rendering green or red for negative changes and positive changes */}
            { prevChange > 0 ? 
            (<Typography style={{fontSize: '20px', color: '#008000'}}>&nbsp;+{prevChange}</Typography>) : 
            (<Typography color='secondary' style={{fontSize: '20px'}}>&nbsp;{prevChange}</Typography>)}
            { percentChange > 0 ?
            (<Typography style={{fontSize: '20px', color: '#008000'}}>&nbsp;(+{data.quote.regularMarketChangePercent.toFixed(2)}%)</Typography>) :
            (<Typography color='secondary' style={{fontSize: '20px'}}>&nbsp;({data.quote.regularMarketChangePercent.toFixed(2)}%)</Typography>)}
          </div>
        </div><br/>

          {/* display info */}
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