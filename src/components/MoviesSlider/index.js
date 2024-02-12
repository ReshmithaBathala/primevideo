import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {movies} = props

  return (
    <Slider {...settings}>
      {movies.map(eachMovie => (
        <MovieItem key={eachMovie.id} movie={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
