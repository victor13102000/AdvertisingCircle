import { Container, CssBaseline, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardList from './CardList'

const GridScreen = () => {

    const [items, setItems] = useState([]);

    const token = JSON.parse(localStorage.getItem("tokenLogin"))


    useEffect(() => {
        axios.post('http://localhost:3005/campaign/advertisercampaigns', { token })
            .then(res => setItems(res.data.campaigns))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    console.log("Aqui deberia de salir items")
    console.log(items);


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

export default GridScreen