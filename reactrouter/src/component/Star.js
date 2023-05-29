import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import  makeStyles  from '@mui/material/styles';
import { Rating } from '@mui/material';
import React from 'react'

const Star = ({rating}) => {
 
    const filledStars = Math.floor(rating);
    const hasHalfStar= rating -filledStars>=.5;
    const emptyStars = 5-(rating + hasHalfStar?1:0)
  return (
  <Rating
  name ='star-rating'
  value={rating}
  max={5}
  precision={0.5}
  emptyIcon={<StarBorderIcon/>}
  icon={<StarIcon sx={{color:'#ffc000'}}/>}
  halfIcon={<StarHalfIcon sx={{color:'#ffc000'}} />}
  />

  )
}

export default Star