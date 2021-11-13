import React, { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log("the error is ", error);
      });
  }, []);
return(
    <div>
            {
                user.map(element => 
        <ul>
                    <li>{element.id}  </li>
                    <li>{element.name}  </li>
                    <li>{element.username}</li>
                    <li>{element.email}</li>
                    
        </ul>
                        )
                    }
    </div>
)

//<li>{element.address}</li>
}

export default Users;
