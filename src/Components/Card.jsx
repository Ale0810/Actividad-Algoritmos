import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardDiseñada = (props) => {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="flex flex-row h-[15vh] w-[100vw]"
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
