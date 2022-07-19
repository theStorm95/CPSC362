import React from 'react'
import { Typography, Button } from '@material-ui/core'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useStyles from './styles'

const StockInfo = ({data}) => {
    const percentChange = data.quote.regularMarketChangePercent.toFixed(2)
    const prevChange = data.quote.regularMarketChange.toFixed(2)
    const classes = useStyles()

  return (
    <div data-testid="stock-info">
        {/* display the name of the company */}
        <div style={{display: 'flex'}}>
          <Typography style={{fontSize: '35px'}}><b>{data.quote.longName}</b></Typography>
          <Button size='small'><StarBorderIcon/></Button>
        </div>
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
        <Typography><b>Open: </b>${data.quote.regularMarketOpen}</Typography>
        <Typography><b>Close: </b>${data.quote.regularMarketPreviousClose}</Typography>
        <Typography><b>Ask: </b>${data.quote.ask}</Typography>
        <Typography><b>Bid: </b>${data.quote.bid}</Typography>
        <Typography><b>Volume: </b>{data.quote.regularMarketVolume}</Typography>
        <Typography><b>PE ratio: </b>{data.quote.trailingPE}</Typography>
        <Typography><b>EPS: </b>{data.quote.epsCurrentYear}</Typography>
  </div>
  )
}

export default StockInfo