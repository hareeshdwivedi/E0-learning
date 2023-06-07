import Head from 'next/head'
import styles from '../../styles/Teacher.module.css'
import TLeftNavbar from '../../components/teachercomponents/TLeftNavbar'
import Theader from '../../components/teachercomponents/Theader'
import TContent from '../../components/teachercomponents/TContent'
export default function Teacher() {
  return (
    <div className={styles.container}>
      <TLeftNavbar/>
      <Theader/>
      <TContent/>
    </div>
  )
}
