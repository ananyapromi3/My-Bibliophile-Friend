export default function User({user})
{
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.contact1}</p>
            <p>{user.contact2}</p>
            <p>{user.dob}</p>
            <p>{user.gender}</p>
            <p>{user.address}</p>
        </div>
    )
}