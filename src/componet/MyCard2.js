import React from 'react'
import moment from 'moment'
import Moment from 'react-moment';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';

const MyCard2 = ({ item }) => {



    return (

        <Card sx={{
            maxWidth: "100%", height: '100%', display: 'flex', flexDirection: 'column', ':hover': {
                boxShadow: 5,
            },
        }}>
            <CardActionArea>
                <Link to="/campaign" style={{ textDecoration: 'inherit', color: "inherit" }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                        alt={item.description}
                    />

                    <CardContent style={{ height: "180px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
            <CardActions style={{ display: "flex", margin: "0 10px", justifyContent: "space-between" }}>
                <Box style={{ display: "flex" }}>
                    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                    <Box ml={2}>
                        <Typography variant="subtitle2" component="p" style={{ textTransform: 'capitalize' }}>
                            {item.advertiser}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            <Moment format='MMMM Do, YYYY'>{item.startDate}</Moment>
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <BookmarkBorderIcon />
                </Box>
            </CardActions>

        </Card>

    )
}

export default MyCard2

