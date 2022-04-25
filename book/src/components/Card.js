import React, { Component } from 'react'
import lyo from '../assets/img/lyo.jpg';
import zaman from '../assets/img/zaman.jpg';

export class Card extends Component {
    constructor(props){
        super(props);
        this.nextbook = this.nextbook.bind(this);
        this.state={
            img:lyo,
            bookname:"20000 LYÖ su altı ilə",
            description:"Jül Vernin “20000 lyö su altı ilə” romanı, Nautilus adlı sualtı gəmi ilə səyahət edən Kapitan Nemo və dənizaltı dünyaya qonaq olan elm adamı Aronaksın ..." ,
        }
      }
      nextbook(){
          this.setState({
            img:zaman,
            bookname:"Zamanin Kisa Tarihi",
            description:"Zamanın Kısa Tarihi 1988 yılındaki ilk basımından bu yana geçen yıllar içerisinde bilimsel yazın alanında bir başyapıt konumu kazandı. Kırk dile çevrildi ve ..." ,
          })
      }
      
  render() {
    return (
        <div className="card" style={{width: '16rem'}}>
        <img src={this.state.img} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{this.state.bookname}</h5>
          <p className="card-text">{this.state.description}</p>
        </div>
        <button onClick={this.nextbook} className="btn btn-primary">Next Book</button>
      </div>
    )
  }
}

export default Card