import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { fetchYHFAPI } from '../actions/object'

const Home = () => {
    //const classes = useStyles()
    const [data, setData] = useState()
    const [ticker, setTicker] = useState("")
    const [showData, setShowData] = useState(false)
    const [msg, setMsg] = useState("")

    const handleSubmit = async (symbol) => {
      if(!ticker)
        setMsg("Enter a ticker")
      
      else
      {
        const d = await fetchYHFAPI(symbol)
        setData(d.optionChain.result[0]) 
        console.log(d.optionChain.result[0])  
        setShowData(true)
        setTicker("")
        setMsg("")
      }
    }

  return (
    <div>
      <TextField value={ticker} placeholder="Enter stock symbol" onChange={(e) => {setTicker(e.target.value)}}/>
      <Button onClick={() => {handleSubmit(ticker)}}>Click</Button>
      {msg && <Typography color='secondary'>{msg}!</Typography>}
      {
        (showData && data) &&
        <div>
          <Typography><b>Symbol: </b>{data.quote.symbol}</Typography>
          <Typography><b>Display Name: </b>{data.quote.displayName}</Typography>
          <Typography><b>Ask: </b>${data.quote.ask}</Typography>
          <Typography><b>Ask Size: </b>{data.quote.askSize}</Typography>
          <Typography><b>Bid: </b>${data.quote.bid}</Typography>
          <Typography><b>Bid Size: </b>{data.quote.bidSize}</Typography>
          <Typography><b>52 weeks high: </b>${data.quote.fiftyTwoWeekHigh}</Typography>
          <Typography><b>52 weeks low: </b>${data.quote.fiftyTwoWeekLow}</Typography>
          <Typography><b>Market Cap: </b>${data.quote.marketCap.toLocaleString()}</Typography>
        </div>
      }
    </div>
  )
}

export default Home