import React, { useEffect, useState } from 'react'
import styles from "../../styles/Tleftnavbar.module.css"


// Prop data for demo purposes
const courseList = [
    {
        courseno:1,
        coursename:"Maths",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"6 to 7 pm",
        announcements:"Today's lecture is on the topic of geometry"
    },
    {
        courseno:2,
        coursename:"Science",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"7 to 8 pm",
        announcements:"Today we will discuss Human anatomy"
    }
]
// Prop data for demo purposes
const assignment = [
    {
        name:"robin",
        topic:"How do volcanoes work",
        link:"/t.png",
        score:9
    },
    {
        name:"bob",
        topic:"How do volcanoes work",
        link:"/t.png",
        score:6
    },
    {
        name:"john",
        topic:"Anatomy of the gut",
        link:"/t.png",
        score:8
    },
    {
        name:"arya",
        topic:"Anatomy of the gut",
        link:"/t.png",
        score:7
    },
    {
        name:"sansa",
        topic:"Maths unit 2",
        link:"/t.png",
        score:9
    }

]

function TContent() {

    // actual method
    // load data dynamically from the server

    // const [courseList,setList] = useState([]);
    // const requestList = async () =>{
    //     const response = await fetch('http://localhost:8000/teacher', {
    //           credentials: 'include',
    //       });

    //     const content = await response.json()
        
    // }
    // useEffect(()=>{
    //     requestList()
    // },[])


    return (
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>

            {
                courseList.map((course)=>{
                    return (
                        <div>
                            <div className="job-listing">
                                <h2 className= "code">{course.coursename}</h2>
                                <p className= "code">Class timings: {course.timings}</p>
                                <span className= "code">Meeting Link: <span><a href={course.zoomlink} className={styles.links}><button type="button" className="btn btn-primary">Join Meeting</button></a></span></span>
                                <hr/>
                                <p className= "code">Announcements</p>
                                <p className= "code">{course.announcements}</p>
                            </div>
                        </div>
                    )
                })
            } 
        </div>
        <hr/>
        <div className={styles.assignmentContainer}>
            <h1 className= "code">Assignments</h1>
            <div className={styles.table1}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col" className= "code">#</th>
                    <th scope="col" className= "code">Assignment topic/subjects</th>
                    <th scope="col" className= "code">Student</th>
                    <th scope="col" className= "code">Assignment Link</th>
                    <th scope="col" className= "code">Score</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        assignment.map((details,i)=>{
                            return (
                                <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td className= "code">{  details.topic.charAt(0).toUpperCase() + details.topic.slice(1)}</td>
                                <td className= "code">{  details.name.charAt(0).toUpperCase() + details.name.slice(1)}</td>
                                <td className= "code"><a href={details.link} download className={styles.links}>
                                <button type="button" className="btn btn-primary">Download</button></a></td>
                                <td className= "code"><div className="form-group">
                                    <label for="exampleInputEmail1">Score</label>
                                    <input type="Score" className="form-control" id="exampleInputScore1" aria-describedby="ScoreHelp" placeholder="Enter Score Out of 10" />
                                    
                                </div>
                                </td>
                                </tr>
                            )
                        })
                    }

                    

                    
                </tbody>
                </table>

                
            </div>
        </div>
    </div>
    )
}
export default TContent
