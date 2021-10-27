import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ThemeContext } from '../Context/ThemeContext'
import { useContext } from 'react';

export default function MultiActionAreaCard() {
  const {theme} = useContext(ThemeContext)
  return (
      <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ backgroundColor:theme.componentColor}}>
        <CardMedia
          component="img"
          height="140"
          image="https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:theme.headingColor}}>
            Lizard
          </Typography>
          <Typography variant="body2" style={{color:theme.textColor}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{backgroundColor:theme.backgroundColor}}>
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
