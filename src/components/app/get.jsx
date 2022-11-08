import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import '../styles/get.scss';
function Get() {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/users/all').then(e => console.log(setState(e.data)))
    })
    return (
        <>
            <div className="mainpage">
                <div className="homepage">
                    {
                        state.map(e => {
                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/Doctor-Strange-In-The-MultiverseOf-Madness-Teaser2-feature.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <h3>Name: {e.name}</h3>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <div className="family">
                                                <h3><b>Surname:</b> {e.surname}</h3>
                                                <h3><b>Email:</b> {e.email}</h3>
                                                <h3><b>Password:</b> {e.password}</h3>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Get;