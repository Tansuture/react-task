
import React , {Component}from 'react'
let info=[{
    name:'Василий Пупкин',
    avatar:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    email:'vasiliy.pupkin@yandex.ru'
}]
class UserRender extends Component {
   constructor(props){
       super()
   }
    render() { 
        return (
            
        <div className='card'>
        <img src={this.props.avatar} width="30px" height="30px"/>
        <div className='card-data'>
          <div className='name'>{this.props.name}</div>
          <div className='email'>{this.props.email}</div>
        </div>
      </div>
            
          );
    }
}
 

class UserCard extends Component {
    constructor(props){
    super(props)
    }
    render() { 
        return ( 
    
            <div>
                {info.map((item)=> <UserRender name={item.name}  email={item.email} avatar={item.avatar}/>)}
            </div>
        
        )
    }
}
export default UserCard