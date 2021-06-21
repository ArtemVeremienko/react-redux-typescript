import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UsersList: FC = () => {
    const { users, loading, error } = useTypedSelector((state) => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
};

export default UsersList;
