import React from 'react';

const Person =({key, name, website, films}) => {
  return(
    <div className='tc bg-light-blue dib v-top br3 pa3 ma2 bw2 shadow-5 cardHeight'>
      <div>
        <h2>{name}</h2>
        <p><a href={`${website}`}>{website}</a></p>
        {
          films.map((film, i) => {
            fetch(films[i])
            .then(response => response.json())
            .then(movie => {
              console.log(movie.title)
              return (
                <p>{movie.title}</p>
              )
            })

          })
        }
      </div>
    </div>
  )
}

export default Person;
