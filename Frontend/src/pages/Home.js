import React from "react";
import BookImage from"../components/Casa/book.png";
import "../components/Casa/Home.css"
import SignupForm from "../components/JoinTheCult/SignUp";
import LoginForm from "../components/Login/Login";

export default function Home(props) {
    return (
      <div className='todo'>
        <img src={BookImage} alt="Book with universe around it" />
          <h1>TuYo</h1>
        <SignupForm />
        <LoginForm />
      </div>
)};