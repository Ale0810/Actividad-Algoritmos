import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardDiseñada = (props) => {
  return (
    <Card sx={{ maxWidth: { xs: 300, sm: 600, md: 1000 }, width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height:"30vh",
            width:"20vw",
            objectFit: 'cover'
          }}
          image={props.imagen}
          alt={props.texto}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.detalle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardDiseñada;
