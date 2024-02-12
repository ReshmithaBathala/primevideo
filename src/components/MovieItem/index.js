import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className="trigger-button" type="button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </button>
        }
        modal
      >
        {close => (
          <>
            <div className="responsive-container">
              <div>
                <ReactPlayer url={videoUrl} controls />
              </div>
              <button
                type="button"
                data-testid="closeButton"
                className="close-button"
                onClick={() => close()}
                aria-label="Close"
              >
                <IoMdClose className="close" />
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
