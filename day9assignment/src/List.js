import React,{Component} from 'react'

 class List extends Component({people}) {
  return (
    <div>
      {people.map((people)=>{
        const {id,age,image,name} = people;
        return <article key={id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </div>
  )
}