import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromApi } from '../utils/fetchFrom';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
export default function ChannelDetail() {
    const {id}=useParams();
    const [channelDetail,setchannelDetail]=useState(null);
    const [videos,setvideos]=useState([]);
   console.log(videos,channelDetail);
    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=>setchannelDetail(data?.items[0]))
      
          fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>setvideos(data?.items))
    },[id])
    return (
       <Box minHeight="95vh" backgroundColor="#000">
          <Box>
            <div
             style={{
background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,53,87,0.7474177170868348) 23%, rgba(0,212,255,1) 100%)'
,zIndex:'10',
height:'300px'
}}
/>
{channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-110px" /> }
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
</Box>
     
    )
}
