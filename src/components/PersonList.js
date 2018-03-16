import React from 'react';
import Person from './Person';

const PersonList = ({people}) => {
  console.log(people)
  return(
    <div>
      {
        people.map((person, i) => {
          return (
              <Person
                key={i}
                name={people[i].name}
                height={people[i].height}
                weight={people[i].mass}
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
