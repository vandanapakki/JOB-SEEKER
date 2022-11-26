import React, { useState } from "react";
import Header from "../Header/Header";
import classes from "./Home.module.css";

const Data = [
  {
    id: 1,
    company: "Deloitte",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Python Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "New York",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Twitter",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "C++ Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Los Angeles",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Amazon",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Software Engineer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "Chicago",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "CNBC",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Java Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "Houston",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Tesla",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "JavaScript Developer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Phoenix",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "Meta",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Data Structure Expert",
    role: "Backend",
    level: "Senior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Philadelphia",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Capgemini",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "San Antonio",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "IBM",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Data Science",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "San Diego",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Infosys",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Data Analyst",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Dallas",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "Orkut",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Java Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "San Jose",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

function Home() {

  const [text,setText]=useState('')
  const submitHandler=()=>{
    alert("Do you want to submit your Resume")
  }
  const searchHandler=(e)=>{
    e.preventDefault();
    alert("Job listed below..")

  }
  return (
    <div className={classes.image1}>
      <Header />
      <div className={classes.img}>      
        <button onClick={submitHandler}><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD3WhOe03-oVsW-F0d7pv-28zVD4CWTZhbQ&usqp=CAU"
          alt="comp"
        />
        </button>
      </div>
      <form action="" class="search-bar" onSubmit={searchHandler}>
	<input type="search" name="search" pattern=".*\S.*" placeholder="Search by Position..." onChange={(e)=>setText(e.target.value)}/>
	{/* <button className="search" type="submit">
		<span>Search</span>
	</button> */}
</form>
      <section className={classes.content}>
        <h2>Job Openings</h2>
        <ul className={classes.list}>
          <li className={classes.items1}>
            <span>Company</span>
            <span>Position</span>
            <span>Level</span>
            <span>Location</span>
            <span>Apply</span>
          </li>
          {Data.filter((value)=>{
            if(text===""){
              return value
            }else{
              return value.position.toLowerCase().includes(text.toLowerCase())
            }
          }).map((user) => (
            <li className={classes.items}>
              <span>{user.company}</span>
              <span>{user.position}</span>
              <span>{user.level}</span>
              <span>{user.location}</span>
              <button>Apply</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
