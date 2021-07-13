import UserInfoNav from './UserInfoNav/UserInfoNav'


function Sidebar(){
    return (
        <div className = "bg-purple-500 h-full col-span-1 p-1">
            <UserInfoNav />
        </div>
    )
}

export default Sidebar