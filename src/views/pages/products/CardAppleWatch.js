// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = props => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
      />
      <CardContent sx={{ p: theme => `${theme.spacing(4, 5)} !important` }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {props.name}
        </Typography>
        <Typography sx={{ mb: 2 }}>{props.price}</Typography>
        <Typography variant='body2'>{props.summary}</Typography>
      </CardContent>
      <Button size='large' variant='contained' sx={{ width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Add To Cart
      </Button>
    </Card>
  )
}

export default CardAppleWatch
