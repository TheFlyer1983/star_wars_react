import React from 'react';

const Films = ({film}) => {
  return(
    <div>
      <p>{film}</p>
      <p>
        {
          fetch(film)
          .then(response => response.json())
          .then(movie => {
            return(
              movie = movie.title
            )
          })
        }
      </p>
    </div>
  )
}

export default Films;
