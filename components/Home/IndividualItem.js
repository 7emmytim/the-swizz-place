import ReactCardFlip from 'react-card-flip'
import { useState } from 'react'
import FlipCardFront from './FlipCardFront'
import FlipCardBack from './FlipCardBack'

const IndividualItem = ({ product }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => setIsFlipped(prev => !prev)

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
            <FlipCardFront product={product} handleFlip={handleFlip} />
            <FlipCardBack product={product} handleFlip={handleFlip} />
        </ReactCardFlip>
    )
}

export default IndividualItem