
import {Link} from 'react-router-dom'
import logo from '../assets/react.svg'


const Home = () => {
   

    return (

        <>
            <Link to="/inicio">
            
               <img src={logo} className='img-fluid'
               width={200}
               alt="logo react"></img>

            </Link>
        
        
        </>
    )


}


export default Home