/**
 *
 * title: 基本信息
 *
 * description: 基本信息
 *
 * author: gsx
 *
 * date: 2019/02/15
 */

import React from 'react';
import './index.less';

export default class NotFoundPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            clientX:[],
            clientY:[],
            count:0,
            color:'rgb(225,0,0)'
        }
    }
    componentDidMount() {
        this.handleTimeOut()
    }

    handleColor=()=>{
        const{count,clientX}=this.state;
        console.info(count)
        let r=0,g=0,b=0;
        const i=20;
        if(count<i/3){
            r=255;
            g=Math.ceil(255*3*count/i);
            b=0;
        }else if(count<i/2){
            r=Math.ceil(750-count*(250*6/i));
            g=255;
            b=0;
        }else if(count<i*2/3){
            r=0;
            g=255;
            b=Math.ceil(count*(250*6/i)-750);
        }else if(count<i*5/6){
            r=0;
            g=Math.ceil(1250-count*(250*6/i));
            b=255;
        }else{
            r=Math.ceil(150*count*(6/i)-750);
            g=0;
            b=255;
        }
        this.setState({
            count:count>=20?0:count+1,
        })
        return 'rgb('+r+','+g+','+b+')'
    };

    handleTimeOut=()=>{
        const{clientX,clientY,color}=this.state;
        setTimeout(
            () => {
                if(clientX.length>0) {
                    const parentDoc=document.getElementById('BaseInfo');
                    const pHeight=parentDoc.clientHeight;
                    const pWidth=parentDoc.clientWidth;
                    const newY=clientY.slice(1);
                    const newX=clientX.slice(1);
                    const the_canvas = document.getElementById("canvas"); //画布
                    const context=the_canvas.getContext('2d');
                    parentDoc.removeChild(the_canvas);
                    context.clearRect(0,0,pWidth,pHeight);
                    parentDoc.appendChild(the_canvas);
                    document.getElementById("canvas").width = pWidth;
                    document.getElementById("canvas").height = pHeight;
                    context.moveTo(newX[0],newY[0]);
                    for(let i=0;i<newX.length-2;i+=1){
                        context.lineTo(newX[i+1],newY[i+1])
                    }
                    context.lineWidth=3;
                    context.strokeStyle = color;
                    context.stroke();
                    this.setState({
                        time: this.state.time + 1,
                        clientY: newY,
                        clientX: newX
                    });
                }
                this.handleTimeOut();
            },
            30
        )
    }

    handleMouseMove=(e)=>{
        const color=this.handleColor();
        const x=e.clientX||null;
        const y=e.clientY||null;
        const {clientX,clientY}=this.state;
        const parentDoc=document.getElementById('BaseInfo');
        const pHeight=parentDoc.clientHeight;
        const pWidth=parentDoc.clientWidth;
        if(clientX.length===0){
            let the_canvas,context,rect;
            if(document.getElementById("canvas")===null){
                the_canvas = document.createElement("canvas"); //画布
                the_canvas.id='canvas';
                parentDoc.appendChild(the_canvas);
                the_canvas.style.cssText='position:absolute;top:0;height:'+pHeight+';width:'+pWidth;
                document.getElementById("canvas").width = pWidth;
                document.getElementById("canvas").height = pHeight;
                rect=the_canvas.getBoundingClientRect();
                context=the_canvas.getContext('2d');
                context.moveTo(x - rect.left * (the_canvas.width/rect.width),y - rect.top * (the_canvas.height/rect.height));
                context.lineTo(x - rect.left * (the_canvas.width/rect.width),y - rect.top * (the_canvas.height/rect.height));
            }else {
                the_canvas = document.getElementById("canvas"); //画布
                rect=the_canvas.getBoundingClientRect();
                context=the_canvas.getContext('2d');
                context.clearRect(0,0,pWidth,pHeight);
                context.moveTo(clientX[0],clientY[0]);
                for(let i=0;i<clientX.length-2;i+=1){
                    context.lineTo(clientX[i+1],clientY[i+1])
                }
                context.lineTo(x - rect.left * (the_canvas.width/rect.width),y - rect.top * (the_canvas.height/rect.height));
            }
            context.lineWidth=3;
            context.strokeStyle = color;
            context.stroke();
            clientX.push(x - rect.left * (the_canvas.width/rect.width));
            clientY.push(y - rect.top * (the_canvas.height/rect.height));
            this.setState({
                clientX,
                clientY,
            })
        }else {
            const the_canvas = document.getElementById("canvas"); //画布
            const rect=the_canvas.getBoundingClientRect();
            const context=the_canvas.getContext('2d');
            context.clearRect(0,0,pWidth,pHeight);
            context.moveTo(clientX[0],clientY[0]);
            for(let i=0;i<clientX.length-2;i+=1){
                context.lineTo(clientX[i+1],clientY[i+1])
            }
            context.moveTo(clientX[clientX.length-1],clientY[clientY.length-1]);
            context.lineTo( x- rect.left * (the_canvas.width/rect.width),y - rect.top * (the_canvas.height/rect.height));
            context.lineWidth=3;
            context.strokeStyle = color;
            context.stroke();
            clientX.push(x - rect.left * (the_canvas.width/rect.width));
            clientY.push(y - rect.top * (the_canvas.height/rect.height));
            this.setState({
                clientX,
                clientY,
            })
        }
    };

    render() {
        return (
            <div id='BaseInfo' onMouseMove={this.handleMouseMove}>
                <div className='content' style={{color:'#fff'}}>基本信息(´･ω･`)</div>
            </div>
        )
    }
}