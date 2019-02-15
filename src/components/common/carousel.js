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

class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <div id="stage">
                    <div id="container">
                        {/*此处可上传图片*/}
                       {/* <img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(0deg) translateZ(196px);">
                        <img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(60deg) translateZ(196px);">
                        <img src="../static/images/3.png" class='piece' style="-webkit-transform: rotateY(120deg) translateZ(196px);">
                        <img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(180deg) translateZ(196px);">
                        <img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(240deg) translateZ(196px);">
                        <img src="../static/images/4.png" class='piece' style="-webkit-transform: rotateY(300deg) translateZ(196px);">*/}

                         {/*此处使用div代替 */}
                        <div class='example'></div>
                        <div class='example' ></div>
                        <div class='example' ></div>
                        <div class='example' ></div>
                        <div class='example' ></div>
                        <div class='example' ></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Carousel;
