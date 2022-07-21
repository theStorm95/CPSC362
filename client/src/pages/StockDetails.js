import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
//import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Typography, Container, Button } from '@material-ui/core'
import { fetchChart, fetchRecomendationData, fetchYHFAPI } from '../actions/object'
import StockInfo from '../Components/StockInfo/StockInfo'
import { useParams } from 'react-router-dom';
import Graph from '../Components/Graph/Graph'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const StockDetails = () => {
    const { id } = useParams()
    const [msg, setMsg] = useState("")
    const [data, setData] = useState()
    const [recommendation, setRecommendation] = useState("None")
    const [chartData, setChartData] = useState()

    useEffect(() => {
        async function fetchData()
        {
          const d = await fetchYHFAPI(id)
          const r = await fetchRecomendationData(id)
          const c = await fetchChart(id)
          if(!d.optionChain.result[0] )
            setMsg("Not a valid ticker!")
          else
          {
            setData(d.optionChain.result[0]) 
            //console.log(d.optionChain.result[0])  
            setChartData(c)
            if(r.finance.result.instrumentInfo.recommendation)
                setRecommendation(r.finance.result.instrumentInfo.recommendation.rating)
            //console.log(r)
            setMsg("") // set error msg back to empty string
          }
        }
        fetchData()
    }, [id])
    console.log(data)
  return (
    <div>
        <Navbar/>
        <Container maxWidth='sm' style={{marginTop: '30px'}}>
          {/* display the name of the company */}
          <div style={{ display: "flex" }}>
            <Typography style={{ fontSize: "35px" }}>
              <b>{data.quote.longName}</b>
            </Typography>
            <Button size="small">
              <StarBorderIcon />
            </Button>
          </div>
          <div style={{marginTop: '10px'}}>
            <Typography variant='h6'><b>1 Month Chart</b></Typography><br/>
            <Graph data={chartData}/>
            {msg && <Typography color='secondary'>{msg}</Typography>}
            {
              (data) &&
              <div style={{padding: '10px'}}>
                <StockInfo data={data}/>
                <Typography><b>Recommendation: </b>{recommendation}</Typography>
              </div>
            }
          </div>
      </Container>
    </div>
  )
}

export default StockDetails