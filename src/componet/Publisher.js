import { Container, CssBaseline, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardList from './CardList';
import Message from './Message';
import { useParams } from 'react-router';
import { RotatingLines } from "react-loader-spinner"

const Publisher = () => {
    const [isLoading, setLoading] = useState(true);
    const { query } = useParams()
    const [items, setItems] = useState([]);
    const [completeUserInfo, setCompleteUserInfo] = useState(false)

    const token = JSON.parse(localStorage.getItem("tokenLogin"))
console.log(completeUserInfo)
    useEffect(() => {
        //Verificar si info de usuario esta completa
        axios.post("http://localhost:3005/user/userInfo", { token })
            .then(res => setCompleteUserInfo(res.data.success))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err)

            })

        if (query) {
            axios.post("http://localhost:3005/campaign/publisherSpecificSearch", { token: token, nameSearchFor: query })
                .then(res => setItems(res.data.campañas))
                .then(() => setLoading(false))
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios.post('http://localhost:3005/campaign/filterCampagns', { token })
                .then(res => setItems(res.data.campañas))
                .then(() => setLoading(false))
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    return (
        <>
            {isLoading ?
                (<div className="loadingContainer">
                    <RotatingLines
                        color="#00b22d"
                        height={100}
                        width={100}
                    //3 secs
                    />
                </div>) : (!completeUserInfo ?
                    <Message severity="warning"><h6>Please complete your user info to continue:
                        <Link to="/profile" style={{ color: '#007bff', textDecoration: 'inherit' }}> <strong>Go to Profile</strong></Link> </h6></Message> : (
                        <>
                            <CssBaseline />
                            <Container sx={{ py: 8 }} maxWidth="lg" style={{ paddingTop: "20px" }}>

                                <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: "5px" }}>
                                    Campaigns
                                </Typography>

                                <CardList items={items} />

                            </Container>
                        </>
                    ))}


        </>
    )
}

export default Publisher;