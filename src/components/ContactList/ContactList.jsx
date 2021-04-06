import React,{Components} from 'react'
import s from './ContactList.module.css'
let contactsData=[
    {id:1,name:"Luke Skywoker",phoneNumber:"+85455531",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGgKT9ghTPIREaTmXo2ZA30FxE2eVXT0naQ&usqp=CAU'},
    {id:2,name:"ChewBacca",phoneNumber:"+8654641",image:'https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg'},
    {id:3,name:"Han Solo",phoneNumber:"+6565646",image:'https://static.wikia.nocookie.net/rustarwars/images/f/f4/HanSolo.jpg/revision/latest?cb=20160718074241'},
    {id:4,name:"Dart Weider",phoneNumber:"+666766",image:'https://sun9-20.userapi.com/s/v1/if1/0p1AFNJ454RL8urtjNPvW1TD0lKWlSU92HoiFVVcurO0Sm1-1lGp-55PZ2EYKqwkYfcAZXj0.jpg?size=200x0&quality=96&crop=132,20,345,345&ava=1'}
]
class Contacts extends React.Component {
    constructor(props){
        super()
    }
   
    render(){
        return(
        <div className={s.container}>
        <img className={s.image} src ={this.props.image} />
        <div className ={s.contactsInfo}>
        <div className ={s.name}>{this.props.name}</div>
        <div className ={s.phone}>{this.props.phoneNumber}</div>
        </div>
    </div>
        )
    }
}


class ContactList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = {s.block}>
                <input type ="text" className={s.input}></input>
                <div>
                    {contactsData.map((el)=>{
                        return <Contacts name={el.name}
                        phoneNumber={el.phoneNumber}
                        image={el.image}/>
                        
                    })
                    }
                </div>
            </div>
        )
    }
    
            }




export default ContactList