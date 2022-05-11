import { Box, Typography } from '@mui/material'
import Buscador from '../components/Buscador'
import ListaPeliculas from '../components/ListaPeliculas'

const Home = () => {
    return (
        <Box sx={{ width: '90%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography color='secondary' sx={{ margin: '2rem' }} align='center' variant="h4" component="h1">Buscador de Películas</Typography>
            <Buscador />
            <ListaPeliculas/>
        </Box >
    )
}

export default Home