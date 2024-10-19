import { HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaStar, FaRegStar,FaStarHalfAlt } from 'react-icons/fa'

const color = (intNum: number, floatNum: number): ReactNode => {
  const num = floatNum | 0;
  if (intNum <= num)
    return <FaStar key={intNum} color='gold' />
  else {
    if (intNum - floatNum < 1 && floatNum % 1 !== 0)
      return <FaStarHalfAlt key={intNum} color='gold' />
    return <FaRegStar key={intNum} />
  }
}

interface Props {
  rating: number
}
const StarRating = ({ rating }: Props) => {
  const range = [1, 2, 3, 4, 5]
  
  return (
    <HStack>
      {range.map(num => (color(num, rating)) //1, 3.5, 4 
    )}
          
    </HStack>
  )
}

export default StarRating;