import Sidebar from '../../Components/Sidebar/Sidebar'
import Main from '../../Components/Main/Main'

function Dashboard () {
    return (
        <div className = " sm:grid sm:grid-cols-6">
            <Sidebar/>
            <Main/>

        </div>
    )
}

export default Dashboard;