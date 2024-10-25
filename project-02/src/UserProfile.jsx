function UserProfile(props) {
    return (
      <div className="profile-card">
        <img src={props.avatar} alt="User Avatar" />
        <h2>{props.name}</h2>
        <p>Email: {props.email}</p>
      </div>
    );
  }
  export default UserProfile;
  
//   const element = (
//     <UserProfile
//       avatar="https://example.com/avatar.jpg"
//       name="John Doe"
//       email="john.doe@example.com"
//     />
//   );
