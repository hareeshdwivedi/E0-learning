import React from 'react'
import data from '../coursedata'
import SLeftNavBar from '../studentcomponents/SLeftNavBar'
import SContent from '../studentcomponents/SContent'
import styles from '../../styles/Course.module.css'
function Course1() {
    

    return (
      <div className={styles.Course1}>
         <div>
         <SLeftNavBar/>
       </div>
       <div>
          <dl>
            <dt>CourseId</dt>
            <dd>{data[0].courseno}</dd>
            <dt>CourseName</dt>
            <dd>{data[0].coursename}</dd>
            <dt>ZoomLink</dt>
            <dd>
                <button>Join Metting</button>
            </dd>
            <dt>Timings</dt>
            <dd>{data[0].timings}</dd>
            <dt>Announcements</dt>
            <dd>{data[0].announcements}</dd>
          </dl>
       </div>
      </div>
    )
}
export default Course1
