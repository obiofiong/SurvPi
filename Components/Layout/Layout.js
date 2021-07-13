import Head from 'next/head'
import Navbar from '../../Components/Navbar/Navbar'


const Layout = ({children}) =>{
    return (
        <div className = "">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout