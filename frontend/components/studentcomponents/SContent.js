import React, { useEffect, useState } from 'react'
import styles from "../../styles/Tleftnavbar.module.css"



// Prop data for demo purposes
const courseList = [
    {
        courseno:1,
        progress:53,
        coursename:"Maths",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"6 to 7 p.m",
        announcements:"Today's lecture is on the topic of geometry"
    },
    {
        courseno:2,
        progress:30,
        coursename:"Science",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"7 to 8 p.m",
        announcements:"Today we will discuss Human anatomy"
    },
    {
        courseno:3,
        progress:90,
        coursename:"English",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"5 to 6 p.m",
        announcements:"Our Topic for today is prepositons"
    },
    {
        courseno:4,
        progress:12,
        coursename:"Python",
        zoomlink:"https://jpmchase.zoom.us/wc/join/94589093804",
        timings:"9 to 10 p.m",
        announcements:"Today we will learn about lists"
    }
]
// Prop data for demo purposes
const assignmentList = [
    {
        subject:"Maths",
        title:"Trigonometry chapter 4",
        due:"17/3/22"
    },
    {
        subject:"Maths",
        title:"Trigonometry chapter 3",
        due:"18/3/22"
    },
    {
        subject:"English",
        title:"Use of prepositions",
        due:"14/3/22"
    },
    {
        subject:"Science",
        title:"Anatomy of the gut",
        due:"11/3/22"
    },
    {
        subject:"Science",
        title:"How volcanoes work",
        due:"10/3/22"
    }

]

function SContent() {

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
                        <div className={styles.tabs}>
                            <div className={styles.categories}>
                                <h2>{course.coursename}</h2>
                                <p>Timings: {course.timings}</p>
                                <span className= "code">Meeting Link: <span><a href={course.zoomlink} className={styles.links}><button type="button" className="btn btn-primary">Join</button></a></span></span>
                                <hr/>
                                <p>Course Progress</p>
                                <div className="progress" style={{backgroundColor: "white"}}>
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${course.progress}%`}} aria-valuenow={`${course.progress}`} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <hr/>
                                <p>Announcements</p>
                                
                    <p>{course.announcements}</p>
                            </div>
                        </div>
                    )
                })
            } 
        </div>
        <hr/>
        <div className={styles.assignmentContainer}>
            <h1>Assignments Due</h1>
            <div className={styles.table1}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Assignment Title</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Upload Assignment here</th>
                    <th scope="col">download Assignment here</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        assignmentList.map((details,i)=>{
                            return (
                                <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{  details.subject}</td>
                                <td>{details.title}</td>
                                <td>{details.due}
                                </td>
                                <td>
                                <button type="button" className="btn btn-primary">Upload</button>
                                </td>
                                <td>
                                <button type="button" className="btn btn-primary txt-white"><a href='../../public/t.png' className={styles.download}  download>download</a></button>
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
export default SContent