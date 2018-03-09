import React from 'react';
import Person from './Person';

const PersonList = ({people}) => {
  return(
    <div>
      {
        people.map((person, i) => {
          console.log(people[i].films)
          return (
              <Person
                key={i}
                name={people[i].name}
                website={people[i].url}
                films={people[i].films}
              />
          );
        })
      }
    </div>
  )
}

export default PersonList;
