import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Button, TextField, Typography, Container } from '@material-ui/core'
import { fetchYHFAPI } from '../actions/object'
import StockInfo from '../Components/StockInfo/StockInfo'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    //const classes = useStyles()
    const [data, setData] = useState()
    const [ticker, setTicker] = useState("")
    const [showData, setShowData] = useState(false)
    const [msg, setMsg] = useState("")

    // Handle click event on Submit
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
    <Container maxWidth='sm'>
      <div>
        <FormControl>
            <OutlinedInput
              size="small"
              id="outlined-adornment-amount"
              onChange={(e) => {setTicker(e.target.value)}}
              startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
              placeholder="Search a Ticker"
              value={ticker}
            />
          </FormControl>  
        <Button style={{marginLeft: '10px'}} variant="outlined" onClick={() => {handleSubmit(ticker)}}>Submit</Button>
      </div>
      {msg && <Typography color='secondary'>{msg}!</Typography>}
      {
        (showData && data) &&
        <div style={{padding: '10px'}}>
          <StockInfo data={data}/>
        </div>
      }
    </Container>
  )
}

export default Home