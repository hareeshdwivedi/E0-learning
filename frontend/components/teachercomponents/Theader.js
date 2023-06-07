import React from 'react'
import styles from "../../styles/Tleftnavbar.module.css"
function Theader() {
    

    return (
        <div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h4 className= "code">
						Hello Teacher, welcome to the board.
					</h4>
				</div>
			</div>
		</div>
    )
}
export default Theader
