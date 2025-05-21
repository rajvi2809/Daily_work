function User({displayName,name}){
    return(
        <>
            {/* <h3>User component called</h3> */}
            <button onClick={()=>{displayName(name)}}>Display name</button><br />
        </>
    )
}

export default User;    