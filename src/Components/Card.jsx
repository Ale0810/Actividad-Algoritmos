import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const CardDiseñada = (props) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 300, sm: 600, md: 1000 },
        width: "100%",
        height:"auto",
        borderRadius: '12px', // Bordes redondeados
        boxShadow: 3, // Sombra suave
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
            width: "100%", // Asegúrate de que la imagen ocupe todo el ancho
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardDiseñada;
