import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import TLeftNavbar from '../components/teachercomponents/TLeftNavbar'


//All this data is to be brought in via API calls
//this is dummy data for demonstration purposes
const studentList = [
  {
    name:"bob"
  },
  {
    name:"alice"
  },
  {
    name:"katie"
  },
  {
    name:"jamie"
  },
  {
    name:"tina"
  },
  {
    name:"jeremy"
  },
  {
    name:"rahul"
  },
  {
    name:"munawar"
  }
]

const teacherList = [
  {
    name:"bob"
  },
  {
    name:"alice"
  },
  {
    name:"katie"
  },
  {
    name:"jamie"
  }
]

const resourceList = [
  'Math Unit 1.pdf',
  'Math Unit 2.pdf',
  'Math Unit 3.pdf',
  'Math Unit 4.pdf',
  'Math Unit 5.pdf',
  'Math Unit 6.pdf',
  
  'Science Unit 1.pdf',
  'Science Unit 2.pdf',
  'Science Unit 3.pdf',
  'Science Unit 4.pdf',
]

export default function Admin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div><TLeftNavbar /></div>
        <div className={styles.content}>
          <h1 className= "code">ADMIN/MANAGEMENT TOOL</h1>
          
          <div className={styles.form}>
          <div className="job-listing">
            <h3 className= "code">Register a new Teacher</h3>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className= "code">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name of teacher" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Subjects</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter list of subjects" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Number of hours</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number of volunteer hours" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Teacher Qualifications</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Qualifications" />
              </div>
              <br/>
              <button type="submit" class="btn btn-primary" className= "code">Submit</button>
            </form>
          </div> 

          <div className="job-listing">
            <h3 className= "code">Register a new Student</h3>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className= "code">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name of student" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Class (K-12)</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Class" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">School Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter School Name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" className= "code">Courses</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Course List" />
              </div>
              <br/>
              
              <button type="submit" class="btn btn-primary" className= "code">Submit</button>
            </form>
          </div>  
        </div>
        
        <div className={styles.data}>
          <h3 className={styles.heading}>Data management</h3>

        <div className={styles.form}>
        <div className="job-listing">
            <h5 className= "code">List of all existing teachers</h5>
            <ul className="list-group">
            {
              teacherList.map((el,i)=>{
                return <li className="list-group-item" key={i}>{el.name}</li>
              })
            }
          </ul>
          </div> 

          <div className="job-listing">
          <h5 className= "code">List of all existing Students</h5>
          <ul className="list-group">
            {
              studentList.map((el,i)=>{
                return <li className="list-group-item" key={i}>{el.name}</li>
              })
            }
          </ul>
          

          </div>
            
        </div>

        </div>

        <div className={styles.filemgmt}>
            <h3 className={styles.heading}>Learning resource management</h3>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Upload new resources (PDFs smaller than 50Mb)</label>
              <input className="form-control" type="file" id="formFile" />
            </div>

            <div>
              <h5 className={styles.heading} >List of all resources on server</h5>
              <div>
              <ul className="list-group">
                {
                  resourceList.map((el,i)=>{
                    return <li style={{display:'flex',justifyContent:"space-between",padding:"auto 3%"}} className="list-group-item" key={i}><span>{el}</span> <button type="button" className="btn btn-primary">Link</button></li>
                  })
                }
              </ul>
              </div>
            </div>

        </div>

        </div>
      </main>
    </div>
  )
}
