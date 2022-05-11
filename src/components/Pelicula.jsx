import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Pelicula = props => {

    return (
        <Box>
            <Card sx={{ width: '14rem', margin: 'auto' }}>
                <CardMedia component="img" sx={{ width: '100%' }} image={props.Poster} alt={props.Title} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}  >
                    <Typography variant="overline" color='primary'>{props.Title}</Typography>
                    <Typography variant="overline" color='secondary'>{props.Type}</Typography>
                    <Typography variant="overline" color='secondary'>{props.Year}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
