import React, { useEffect, useState } from "react";
import API from "./api/index";

import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };

    const handleBookmark = (id) => {
        setUsers((prevState) =>
            prevState.map((user) =>
                user._id !== id ? user : { ...user, bookmark: !user.bookmark }
            )
        );
    };

    return (
        <React.StrictMode>
            {users ? (
                <Users
                    usersArray={users}
                    onDelete={handleDelete}
                    onBookmark={handleBookmark}
                />
            ) : (
                <div className="d-flex justify-content-center m-5">
                    <h3>Loading...</h3>
                </div>
            )}
        </React.StrictMode>
    );
};

export default App;
