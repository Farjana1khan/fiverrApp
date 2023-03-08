import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.scss"
const GigCard = (props) => {
    return (
        <Link to={`/gig`} className="link">
             <div className="gigCard">
        {/* <img src={item.cover} alt="" /> */}
        <div className="info">
        <div className="user">
              {/* <img src={data.img || /img/noavatar.jpg} alt="" /> */}
              {/* <img src={item.pp} alt="" />
              <span>{data.username}</span> */}
            </div>
            {/* <p>{item.desc}</p> */}
            <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {/* {item.start} */}
              {/* {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)} */}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            {/* <h2>$ {item.price}</h2> */}
          </div>
        </div>
        </div>
        </Link>
    )
}

export default GigCard
