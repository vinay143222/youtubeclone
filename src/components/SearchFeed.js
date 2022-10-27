import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from '../utils/fetchFrom';
import {useParams} from 'react-router-dom';
import Videos from './Videos';
export default function Feed() {
    const {searchTerm}=useParams();
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setvideos(data.items))
    }, [searchTerm])
    return (        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 ,backgroundColor:'#000'}} >
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                Search Results for <span style={{ color: '#f31503' }}>{searchTerm}videos</span>
            </Typography>
            <Videos videos={videos} />
        </Box>)
}
