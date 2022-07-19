import React from 'react'
import useStyles from './styles'
import { useState } from 'react'
import { Button, Typography, Container, AppBar} from '@material-ui/core'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [ticker, setTicker] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = async () => {
        if(!ticker)
          setMsg("Enter a ticker !")
        else
          navigate(`/quote/${ticker}`)     
      }
  return (
    <>
    {/* Navbar */}
    <AppBar className={classes.appBar} position='static' color="inherit">
      <Typography style={{
        fontFamily: 'Franklin Gothic Medium',
        color: 'rgb(35, 38, 35)',
        textDecoration: 'none',
        fontSize: '30px',}}
        component={Link} to='/'>My Porfolio &nbsp;
      </Typography>
      {msg && <Typography color='secondary'>{msg}</Typography>}
      <div style={{display: 'flex', marginRight: '20px', width: '600px'}}>
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
    </>
  )
}

export default Navbar