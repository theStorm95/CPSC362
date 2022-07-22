import React from 'react'
//import useStyles from './styles'
import Navbar from '../Components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import { fetchTrendingUS } from '../actions/object'
import { Container, Paper, Button, Divider, Typography } from '@material-ui/core'
import Carousel from 'better-react-carousel'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const Home = () => {
    //const classes = useStyles()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    // const user = JSON.parse(localStorage.getItem('profile'))
    // console.log(user)

    useEffect(() => {
      async function fetchData(){
        const d = await fetchTrendingUS()
        if(d)
          setData(d.finance.result[0])
        setIsLoading(false)
      }
      fetchData()
    }, [])
    
    //console.log(data)


    const Trending = (props) => {
      return (
        <Paper style={{padding: '5px', borderRadius:'0px'}} elevation={1}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Typography variant='h5'>{props.item.symbol}</Typography>
              <ShowChartIcon fontSize='large' style={{color: '#00FF00'}}/>
            </div>
            <Button onClick={() => navigate(`/quote/${props.item.symbol}`)}><ArrowForwardIcon/></Button>                
          </div>             
        </Paper>
      )
    }


  return (
    <>
      <Navbar/>
      {isLoading ? <CircularProgress/> : (
        <Container style={{marginTop: '20px'}}>
          <Typography variant='h5'><b>Trending Tickers</b></Typography><br/>
          <Divider/>
          {data &&
          <Carousel cols={7} rows={1} gap={0} loop>
            { data.quotes.map((item, i) => 
              <Carousel.Item  key={i}>
              <Trending item={item}/>       
              </Carousel.Item>
          )}
          </Carousel>
          }
          <Divider/>
        </Container>
      )}   
    </>
  )
}

export default Home