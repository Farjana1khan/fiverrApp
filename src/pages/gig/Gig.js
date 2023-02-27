import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'

export default function Gig() {
    return (
        <div className="gig">
             <div className="container">
          <div className="left">
          <div className="user">
                <img
                  className="pp"
                  src={"dataUser.img" || "/img/noavatar.jpg"}
                  alt=""
                />
                <span>{"dataUser.username"}</span>
                <div className="stars">
                <img src="/img/star.png" alt="" key="{i}" />
                </div>
            </div>
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {/* {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))} */}
            </Slider>
            <h2>About This Gig</h2>
            {/* <p>{data.desc}</p> */}
            <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                <img src={"dataUser.img" || "/img/noavatar.jpg"} alt="" />
                <div className="info">
                    <span>{"dataUser.username"}</span>
                    <div className="stars">
                    <img src="/img/star.png" alt="" key="{i}" />

                    </div>
                    <button>Contact Me</button>
                    </div>
                    </div>
                    <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{"dataUser.country"}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{"dataUser.desc"}</p>
                </div>
                    </div>
            </div>
            <div className="right">
            <div className="price">
                </div>
                </div>
          </div>
        </div>
    )
}
