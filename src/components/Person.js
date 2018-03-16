import React from 'react';
import Films from './Films';
import './Person.css';

const Person =({name, height, weight, website, films, gender}) => {
  return(
    <div className='tc bg-light-blue dib v-top br3 pa3 ma2 bw2 shadow-5 cardHeight grow'>
      <div>
        <h2 className="caps">{name}</h2>
        <img src="http://via.placeholder.com/200" alt="Characters"/>
        <p><a href={`${website}`}>{website}</a></p>
        <p className="caps">gender: {gender}</p>
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
