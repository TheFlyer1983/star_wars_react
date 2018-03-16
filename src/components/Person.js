import React from 'react';
import Films from './Films';

const Person =({name, height, weight, website, films}) => {
  return(
    <div className='tc bg-light-blue dib v-top br3 pa3 ma2 bw2 shadow-5 cardHeight'>
      <div>
        <h2>{name}</h2>
        <p><a href={`${website}`}>{website}</a></p>
        <p>Height: {height}cm</p>
        <p>Weight: {weight}kg</p>
        <h2>Films</h2>
        {
          films.map((film, i) => {
            return(
              <Films
                key={i}
                film={films[i]}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Person;
