//import { apiResolver } from "next/dist/server/api-utils";
import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/toolbar';
 export const EOM = ({employee}) => {

    return (
        <div  className='page-container'>
               <Toolbar/>
               <div className={styles.main}>
          <h1>Employee Of The Month</h1>

          <div className={styles.employeeOfTheMonth}>
            <h3>SHIVAM KUMAR</h3>
            <h6>{employee.position}</h6>
            <img src='https://www.clipartmax.com/png/middle/91-915439_to-the-functionality-and-user-experience-of-our-site-red-person-icon.png' alt="employee" />
            <p>Full Stack Developer</p>
          </div>
        </div>
        </div>
    );
};

export const getServerSideProps =async pageContext=>{
    const apiResponse =await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
const employee =await apiResponse.json();

return{
    props:{
        employee
    }
}


};







export default EOM;

