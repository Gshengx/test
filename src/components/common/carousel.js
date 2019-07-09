/**
 *
 * title: 轮播组件
 *
 * description: 轮播组件
 *
 * author: gsx
 *
 * date: 2019/02/15
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './carousel.less';

let timer=null;
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[
        {id:1,title:"q",content:"123"},
        {id:2,title:"q",content:"123"},
        {id:3,title:"q",content:"123"},
        {id:4,title:"q",content:"123"},
        {id:5,title:"q",content:"123"},
        {id:6,title:"q",content:"123"},
        {id:7,title:"q",content:"123"},
        {id:8,title:"q",content:"123"},
        {id:9,title:"q",content:"123"},
      ]
    }
  }

  componentDidMount(){
    const div=document.querySelector("div[class='scrollList']");
    const item=div.querySelectorAll("div");
    item[2].className="bigItem";
    timer=setInterval(this.handleScroll,2500)
  }

  handleScroll=()=>{
    const div=document.querySelector("div[class='scrollList']");
    const item=div.querySelectorAll("div");
    const width=item[0].offsetWidth;
    if(div.scrollLeft>=(width+60)*this.state.list.length-60){
      div.scrollLeft=0;
      item[2].className="bigItem";
    }else {
      const leftCount=Math.floor((div.scrollLeft+60)/(width+60));
      for(let i=0;i<item.length;i+=1){
        if(i===3+leftCount){
          item[i].className="bigItem";
        }else {
        item[i].className="demoItem";
        }
      }
      // div.style.transform=`translateX(-${width+60}px)`
      div.scrollLeft+=width+60
    }
  };

  handleClick=id=>{
    console.log(id)
  };
    render() {
      const {list}=this.state;
      const divList=list.map(item=>{
        return(
          <div className="demoItem" onClick={()=>this.handleClick(item.id)}>{item.id}</div>
        )
      });
      list.map(item=>{
        divList.push(
          <div className="demoItem" onClick={()=>this.handleClick(item.id)}>{item.id}</div>
        )
      });
      return(
        <div className="demo">
          <div className="scrollList">
            {divList}
          </div>
        </div>
      )
      /*return (
        <div className="carousel">
          <div id="stage">
            <div id="container">
              {divList}
            </div>
          </div>
        </div>
      );*/
    }
}

export default Carousel;
