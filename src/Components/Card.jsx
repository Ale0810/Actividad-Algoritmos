import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const CardDiseñada = (props) => {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {

  }, [usuario])

  return (
    <Card
      sx={{
        maxWidth: { xs: 150, sm: 170, md: 200 },
        width: "100%",
        height: "auto",
        borderRadius: '12px', // Bordes redondeados
        boxShadow: 4, // Sombra suave
        transition: 'transform 0.2s', // Animación suave al hacer hover
        '&:hover': {
          transform: 'scale(1.05)', // Efecto de hover
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: "200px", // Ajusta la altura según sea necesario
            width: "100%", //
            objectFit: 'cover',
            borderTopLeftRadius: '12px', // Bordes redondeados en la parte superior
            borderTopRightRadius: '12px', // Bordes redondeados en la parte superior
          }}
          image={props.imagen}
          alt={props.texto}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {props.titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5, flexGrow: 1 }}>
            {props.detalle}
          </Typography>
          <div className="flex flex-row mt-2 justify-center items-center">
            <div className='mr-2'>
              <button className="rounded-lg bg-yellow-400 hover:bg-yellow-500 p-2">{<ModeEditRoundedIcon />}</button>
            </div>
            <div>
              <button className="rounded-lg bg-red-400 hover:bg-red-500 p-2">{<DeleteForeverRoundedIcon />}</button>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardDiseñada;
