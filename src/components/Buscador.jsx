import { Box, Button, TextField } from '@mui/material'
import { useContext, useState } from 'react';
import PeliculasContext from '../context/PeliculasContext';
import SearchIcon from '@mui/icons-material/Search';

const Buscador = () => {

    const [texto, setTexto] = useState('')
    const { setBusqueda } = useContext(PeliculasContext)

    const handleChange = event => setTexto(event.target.value);

    const onSubmit = () => setBusqueda(texto);

    return (
        <Box color='primary'
            sx={{ 
                width: '50%', 
                marginBottom: '2rem', 
                display: 'flex', 
                flexDirection: { xs: "column", md: "row" },
                 alignItems: { xs: "center", md: "'flex-end'" }, 
                 justifyContent: 'space-between',
                  gap: '1rem' }} >
            <TextField
                color='primary'
                sx={{ width: '70%' }}
                id="standard-search"
                type="search"
                value={texto}
                label="Buscar Pelicula"
                variant="standard"
                onChange={handleChange}
            />

            <Button variant="outlined" color='primary' startIcon={<SearchIcon />} size="medium" onClick={onSubmit}>Buscar</Button>

        </Box>
    )
}

export default Buscador