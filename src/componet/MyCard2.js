import React from 'react'
import moment from 'moment'
import Moment from 'react-moment';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';

const MyCard2 = ({ item }) => {

console.log(item)

    return (

        <Card sx={{
            maxWidth: "100%", height: '100%', display: 'flex', flexDirection: 'column', ':hover': {
                boxShadow: 5,
            },
        }}>
            <CardActionArea>
                <Link to={`/simpleview/${item._id}`} style={{ textDecoration: 'inherit', color: "inherit" }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://media-cdn.tripadvisor.com/media/photo-s/1d/30/9e/c1/full-suite-digital-branding.jpg"
                        alt={item.description}
                    />

                    <CardContent style={{ height: "180px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
            <CardActions style={{ display: "flex", margin: "0 10px", justifyContent: "space-between" }}>
                <Box style={{ display: "flex" }}>
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
                    {item.state === 'Created' &&   <Typography  style={{ backgroundColor: "yellow" , padding: "5px", borderRadius: '5px', color: "black"}} >{item.state}</Typography>}
                    {item.state === 'In Progress' &&   <Typography  style={{ backgroundColor: "green", padding: "5px", borderRadius: '5px', color: "black" }} >{item.state}</Typography>}
                    {item.state === 'Finished' &&   <Typography  style={{ backgroundColor: "red", padding: "5px", borderRadius: '5px', color: "black" }} >{item.state}</Typography>}
                </Box>
            </CardActions>

        </Card>

    )
}

export default MyCard2

