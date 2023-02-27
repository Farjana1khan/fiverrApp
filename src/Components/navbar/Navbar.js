import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false);
  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive)
  
    return()=>{
        window.removeEventListener("scroll", isActive)
    }
  })

  const currentUser = {
    id:1,
    username: "Farjana Khan",
    isSeller: true
  }
  
    return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
         {currentUser?.isSeller &&  <span>Become a Seller</span>}
         {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
                 <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
             <span>Sign in</span>
          <Link className="link" to="/register">
            <button>Join</button>
          </Link>
            </>
          ) }
         
        </div>
      </div>
      {
        active && <>
        <hr/>
        <div className="menu">
  <span>Test1</span>
  <span>Test1</span>
        </div>
        </>
      }

    </div>
  );
}
