import React from 'react'
import useStyles from './styles'
import { useState, useEffect } from 'react'
import { getObj } from '../actions/object'
import { Button } from '@material-ui/core'
import { fetchYHFAPI } from '../actions/object'

const Home = () => {
    const classes = useStyles()
    const [people, setPeople] = useState()
    const [data, setData] = useState()

    const p = async () => {
      const data = await getObj()
      setPeople(data)
    }
    const getData = async () => {
      const data = await fetchYHFAPI()
      setData(data)
      console.log(data.optionChain.result)
    }

    useEffect(() => { 
      p()     
    }, [])

    if(!people) return null
  //console.log(people)
  return (
    <div>
      {/* {people.length}
      <br/>
      {people.map((p, i) => {
        return(<p key={i}>{i}.&nbsp;{p.title}</p>)
      })} */}
      <Button onClick={getData}>Click</Button>
    </div>
  )
}

export default Home