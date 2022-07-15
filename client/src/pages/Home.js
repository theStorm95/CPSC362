import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Button, Typography, Container, AppBar} from '@material-ui/core'
import { fetchRecomendationData, fetchYHFAPI } from '../actions/object'
import StockInfo from '../Components/StockInfo/StockInfo'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
    const classes = useStyles()
    const [data, setData] = useState()
    const [recommendation, setRecommendation] = useState()
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
        const r = await fetchRecomendationData(symbol)
        if(!d.optionChain.result[0])
          setMsg("Not a valid ticker")
        else
        {
          setData(d.optionChain.result[0]) 
          //console.log(d.optionChain.result[0])  

          setRecommendation(r.finance.result.instrumentInfo.recommendation.rating)
          //console.log(r.finance.result.instrumentInfo.recommendation.rating)

          setShowData(true)
          setTicker("") // set search bar back to empty
          setMsg("") // set error msg back to empty string
        }
      }
    }

  return (
    <>
    <AppBar className={classes.appBar} position='static' color="inherit">
      <Typography style={{
        fontFamily: 'Franklin Gothic Medium',
        color: 'rgb(35, 38, 35)',
        textDecoration: 'none',
        fontSize: '30px',}}>My Porfolio &nbsp;</Typography>
      <div className={classes.searchBar}>
        <FormControl fullWidth>
          <OutlinedInput
            size="small"             
            onChange={(e) => {setTicker(e.target.value)}}
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            placeholder="Search a Ticker"
            value={ticker}/>
        </FormControl> 
        <Button style={{marginLeft: "10px"}} variant="outlined" onClick={() => {handleSubmit(ticker)}}>Submit</Button>
      </div>
    </AppBar>
      <Container maxWidth='sm'>
        {msg && <Typography color='secondary'>{msg}</Typography>}
        {
          (showData && data && recommendation) &&
          <div style={{padding: '10px'}}>
            <StockInfo data={data}/>
            <Typography><b>Recommendation: </b>{recommendation}</Typography>
          </div>
        }
      </Container>
    </>
  )
}

export default Home