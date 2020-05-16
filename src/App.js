import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/1',
  'name': '나동빈',
  'birthday': '961222',
  'gender': '남',
  'job': '무직'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/2',
  'name': '나동빈2',
  'birthday': '941222',
  'gender': '남',
  'job': '무직2'
},
{
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '945222',
  'gender': '남',
  'job': '무직3'
}
]

class App extends Component{
  render() {
    return (
      <div> {
        customers.map(c => {
          return ( 
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
           />
           );
          })
        } </div>
     );
    }
}

export default App;
