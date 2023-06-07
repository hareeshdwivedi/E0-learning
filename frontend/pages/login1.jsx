import Head from 'next/head'
import styles from '../styles/Login.module.css'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedin] = useState(false);
    const router = useRouter();



    let redirect = async () => {
      try {
          const response = await fetch('http://localhost:8000/api/user', {
              credentials: 'include',
          });

          const content = await response.json();

          console.log(content)
          if(content.name=='student'){
            router.push(`/student/${content.id}`)
          }
          else if(content.name=='teacher'){
            router.push(`/teacher/${content.id}`)
          }
          else if(content.name=='admin'){
            router.push(`/admin`)
          }
          // setMessage(`Hi ${content.name}`);
          setAuth(true);
      } catch (e) {
        console.error(e)
        // default push to login if not logged in
        // router.push(`/login`)
      }
  }

    const submit = async (e) => {
      e.preventDefault();

      //Logout first

      await fetch('http://localhost:8000/api/logout/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include'
      });


      //Login now

      let res = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
              email,
              password
          })
      });

      res = await res.json()

      if(res.detail!=="User not found!" ){
        setLoggedin(true);
      }
      

      let jwt = res.jwt;
      console.log(res)
      if(jwt){
        redirect()
      }
      setLoggedin(true);
  }
    




    return (
         
          <div className={styles.main}>
          <div className={styles.container}>
            <form className="form-signin">
              <h1 className="h3 mb-3 font-weight-normal">Log in</h1>
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me 
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2020-2024</p>
            </form>
            </div>
            {/* <form  className={styles.formL} onSubmit={submit}>
            <h1>{loggedIn?'Incorrect credentials':'Please Sign in'}</h1>
                <div>
                    <label >Email:</label>
                    <div>
                    <input type="email" size ="6" className="form-control w-75" placeholder="Email" required autofocus
                       onChange={e => setEmail(e.target.value)}
                />
                    </div>
                </div>
               <div>
                  <label className="form-label">Password:</label>
                  <div>
                  <input type="password"  size="6" className="form-control  w-75" placeholder="Password" required autofocus
                       onChange={e => setPassword(e.target.value)}
                />
                  </div>
               </div>
                <div className={styles.buttonL}>
                <button   className="w-75 btn btn-lg  btn-primary" type="submit">Sign in</button>
                </div>
            </form> */}
        </div>
    );
}
