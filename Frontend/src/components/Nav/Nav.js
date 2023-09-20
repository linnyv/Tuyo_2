import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import HomeIcon from "./icons/home.png";
import TimerIcon from "./icons/timer.png";
import CalculatorIcon from "./icons/calculator.png";
import DictionaryIcon from "./icons/dictionary.png";
import TestIcon from "./icons/test.png";
import NoteIcon from "./icons/note.png";
import GPAIcon from "./icons/gpa.png";
import GradeIcon from "./icons/grade.png";

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav-toggle-icon"></span>
      </button>
      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <button className="nav-close" onClick={toggleNav}>
          &times;
        </button>
        <div className="nav-links">
          <div className="nav-item">
            <span className="nav-logo">
              <img src={HomeIcon} alt="House" onClick={handleLinkClick} />
            </span>
          </div>
          <div className="nav-item">
            <Link to="/timer" className="nav-link" onClick={handleLinkClick}>
              <img src={TimerIcon} alt="Hourglass" />
              Timer
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/calculator"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <img src={CalculatorIcon} alt="Calculator" />
              Calculator
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dictionary" className="nav-link" onClick={handleLinkClick}>
              <img src={DictionaryIcon} alt="Book with magnifying glass " />
              Dictionary
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/test"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <img src={TestIcon} alt="two xs and one checkmark" />
              Test Form
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/notes"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <img src={NoteIcon} alt="Paper with Pencil" />
              Note Forms
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/gpa"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <img src={GPAIcon} alt="Academic Cap" />
              GPA Form
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/grade"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <img src={GradeIcon} alt="Clipboard" />
              Grade Form
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
