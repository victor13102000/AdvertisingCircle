import { useEffect, useState } from "react"
import CardList from "./CardList"
import axios from 'axios'
import { Container, CssBaseline, Typography } from '@mui/material'


const Favorites= ()=>{
const token = JSON.parse(localStorage.getItem("tokenLogin"))
const [favorites, setFavorites] = useState([])

    useEffect(async()=>{
          const favoritos= await axios.post('http://localhost:3005/campaign/listtofavorite', {token})
        
        setFavorites(favoritos.data.favorites)  
         
    },[])
    
    return (
        <>
    <CssBaseline />
    <Container sx={{ py: 8 }} maxWidth="lg" style={{ paddingTop: "20px" }}>

        <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: "5px" }}>
           favorites
        </Typography>
        
        <CardList items={favorites} />

    </Container>
        </>
    )
}

export default Favorites