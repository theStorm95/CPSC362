import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
//import useStyles from './styles'
import { useState, useEffect } from 'react'
import { Typography, Container } from '@material-ui/core'
import { fetchRecomendationData, fetchYHFAPI } from '../actions/object'
import StockInfo from '../Components/StockInfo/StockInfo'
import { useParams } from 'react-router-dom';

const StockDetails = () => {
    const { id } = useParams()
    const [msg, setMsg] = useState("")
    const [data, setData] = useState()
    const [recommendation, setRecommendation] = useState("None")

    useEffect(() => {
        async function fetchData()
        {
          const d = await fetchYHFAPI(id)
          const r = await fetchRecomendationData(id)
          if(!d.optionChain.result[0] )
            setMsg("Not a valid ticker!")
          else
          {
            setData(d.optionChain.result[0]) 
            //console.log(d.optionChain.result[0])  
            
            if(r.finance.result.instrumentInfo.recommendation)
                setRecommendation(r.finance.result.instrumentInfo.recommendation.rating)
            //console.log(r)
            setMsg("") // set error msg back to empty string
          }
        }
        fetchData()
    }, [id])
  return (
    <div>
        <Navbar/>
        <Container maxWidth='sm'>
        {msg && <Typography color='secondary'>{msg}</Typography>}
        {
          (data) &&
          <div style={{padding: '10px'}}>
            <StockInfo data={data}/>
            <Typography><b>Recommendation: </b>{recommendation}</Typography>
          </div>
        }
      </Container>
    </div>
  )
}

export default StockDetails