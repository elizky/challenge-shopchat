import { Box, Pagination, Typography } from '@mui/material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import PeliculasContext from '../context/PeliculasContext'
import { Pelicula } from './Pelicula'

const ListaPeliculas = () => {

    const [peliculas, setPeliculas] = useState([])
    const { busqueda } = useContext(PeliculasContext)

    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(1)

    const apiKey = 'b884817b'
    const baseUrlSearch = `http://www.omdbapi.com/`

    const getPeliculas = async () => {
        const busquedaSinEspacios = busqueda.replace(/\s/g, "+")
        const url = `${baseUrlSearch}/?s=${busquedaSinEspacios}&page=${page}&apikey=${apiKey}`;
        const data = await axios(url).then(data => data = data.data);
        console.log('data', data)
        setPeliculas(data.Search);
        setPagination(parseInt(data.totalResults / 10))
    }

    const handlePagination = (_, value) => {
        setPage(value);
    }

    useEffect(() => {
        getPeliculas();
    }, [busqueda, page])


    return (
        <>
            <Pagination count={pagination} page={page} onChange={handlePagination} />

            <Box sx={{ width: '100%', margin: '2rem 0', gap: '1rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {peliculas
                    ? peliculas.map(pelicula => {
                        return (
                            <>
                                < Pelicula key={pelicula.imdbID} {...pelicula} />
                            </>
                        )
                    }
                    )
                    : <Typography variant="overline" color='primary'>Algo salió mal</Typography>
                }
            </Box>
        </>
    )
}

export default ListaPeliculas