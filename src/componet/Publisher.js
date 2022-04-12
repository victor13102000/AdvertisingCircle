import { Container, CssBaseline, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import { useParams } from "react-router"
import { RotatingLines } from "react-loader-spinner"

const Publisher = () => {
    const [isLoading, setLoading] = useState(true);
    const {query} = useParams()
    const [items, setItems] = useState([]);

    const token = JSON.parse(localStorage.getItem("tokenLogin"))

    useEffect(() => {
        if(query){
            axios.post("http://localhost:3005/campaign/publisherSpecificSearch", { token: token, nameSearchFor: query})
            .then(res => setItems(res.data.campaigns))
            .then(()=> setLoading(false))
            .catch((err) => {
                console.log(err)
            })
        }else{
            axios.post('http://localhost:3005/campaign/filterCampagns', { token })
            .then(res => setItems(res.data.campañas))
            .then(()=> setLoading(false))
            .catch((err) => {
                console.log(err)
            })
        }
    }, [query])


    if (isLoading) {
        return (
          <div  className="loadingContainer">
          <RotatingLines
          color="#00b22d"
          height={100}
          width={100}
           //3 secs
        />
        </div>
        )
      } else {
          if (!items[0]) return <h1>You don't have campaigns</h1>
          return (
              <>
                  <CssBaseline />
                  <Container sx={{ py: 8 }} maxWidth="lg" style={{ paddingTop: "20px" }}>
      
                      <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: "5px" }}>
                          Campaigns
                      </Typography>
      
                      <CardList items={items} />
      
                  </Container>
              </>
          )
      }
}

export default Publisher;