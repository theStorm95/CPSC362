import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { fetchYHFAPI } from '../actions/object'
import StockInfo from '../Components/StockInfo/StockInfo'

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
        if(!d.optionChain.result[0])
          setMsg("Not a valid ticker")
        else
        {
          setData(d.optionChain.result[0]) 
          console.log(d.optionChain.result[0])  
          setShowData(true)
          setTicker("")
          setMsg("")
        }
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
          <StockInfo data={data}/>
        </div>
      }
    </div>
  )
}

export default Home