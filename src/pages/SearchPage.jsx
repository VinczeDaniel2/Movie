import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { useState } from 'react';
import { Content } from '../components/Content';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../utils';



export const SearchPage=()=> {
  const [type,setType] = useState('movie')
  const [page,setPage] = useState(1)
  const [searchText,setSearchText] = useState('')
  const [fetchData,setFetchData] = useState(false)
  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&page=${page}`;
  const Search=()=>{
    setFetchData(true)
  }

  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 }, display:'flex', flexDirection:'column', alignItems:'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalMoviesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <TextField id="input-with-sx" label="Search Movies or TV Series" variant="standard" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <Button variant='contained' color="secondary"onClick={()=>Search()}>Search</Button>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant='contained' color="secondary" onClick={()=>setType('tv')}>TVSeries</Button>
        <Button variant='contained' color="secondary" onClick={()=>setType('movie')}>Movies</Button>
      </Stack>
    </Box>
    {fetchData && <Content url={urlSearch} searchText={searchText} type={type} setFetchData={setFetchData}/>}
    </>
  );
}
