import React from 'react'
import styles from "../../styles/Tleftnavbar.module.css"
import Router,{useRouter} from 'next/router';
function TLeftNavbar() {
    
	const router = useRouter();
    return (
        <div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2 className= "code">NAVBAR</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
					<a href = "#" className= "code">Courses</a>
					</li>
					<li>
						<a href = "#" className= "code">Students Enrolled</a>
					</li>
					<li>
						<a href = "#" className= "code">Materials</a>
					</li>
					<li>
					<a href = "#" className= "code">Zoom Links</a>
					</li>
                    <li>
					<a href = "#" className= "code">Assignments</a>
					</li>
					<li>
					<button  type="button" className="btn btn-primary" onClick={async ()=>{
							let res =  fetch('http://localhost:8000/api/logout/', {
								method: 'POST',
								headers: {'Content-Type': 'application/json'},
								credentials: 'include'
							});
					  
							router.push("/")
						}}>Logout</button>
					</li>
				</ul>
			</div>
		</div>
    )
}
export default TLeftNavbar


