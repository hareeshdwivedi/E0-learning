import React from 'react'
import styles from "../../styles/studentcomponents.module.css"
import Router, { useRouter } from 'next/router'
function SLeftNavBar() {
    const router = useRouter()

    return (
        <div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2>Navbar</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<a href="#">Courses</a>
					</li>
					<li>
						<a href="#">Teacher contact</a>
					</li>
					<li>
						<a href="#">Materials</a>
					</li>
					<li>
						<a href="#"> Zoom Links</a>
					</li>
                    <li>
						<a href="#"> Assignments</a>
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
export default SLeftNavBar
