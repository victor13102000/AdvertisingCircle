import { Container, CssBaseline, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import { RotatingLines } from "react-loader-spinner"

const Advertiser = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const token = JSON.parse(localStorage.getItem("tokenLogin"))


    useEffect(async() => {
        await axios.post('http://localhost:3005/campaign/advertiserCampaigns', { token })
            .then(res => setItems(res.data.campaigns))
            .then(()=>setLoading(false))
            .catch((err) => {
                console.log(err)
            })
    },[])


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
        if(!items[0]) return <h1>You don't have campaigns</h1>
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
    )}
    

/*
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
*/
}

export default Advertiser;