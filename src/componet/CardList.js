import { Box, Grid, Pagination } from '@mui/material'
import React, { useState } from 'react'
import MyCard2 from './MyCard2'
import usePagination from "./Pagination";


const CardList = ({ items }) => {

    const [page, setPage] = useState(1);
    const PER_PAGE = 9;

    const count = Math.ceil(items.length / PER_PAGE);
    const _DATA = usePagination(items, PER_PAGE);

    const handleChange = (e, p) => {
        e.preventDefault();
        setPage(p);
        _DATA.jump(p);
    };


    return (
        <>
            <Box my={5} style={{ display: "flex", justifyContent: "center" }}>
                <Pagination count={count} page={page} onChange={handleChange} showFirstButton showLastButton />
            </Box>

            <Grid container spacing={3} justifyContent="center" >
                {_DATA.currentData().map(item => {
                    return (
                        <Grid key={item._id} item xs={12} sm={6} md={4} >
                            <MyCard2 item={item} />
                        </Grid>
                    )
                })}
            </Grid>

            <Box my={10} style={{ display: "flex", justifyContent: "center" }}>
                <Pagination count={count} page={page} onChange={handleChange} showFirstButton showLastButton />
            </Box>
        </>
    )
}

export default CardList