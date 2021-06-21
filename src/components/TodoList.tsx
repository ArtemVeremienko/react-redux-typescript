import React, { FC, useCallback, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
    const { page, error, loading, todos, limit } = useTypedSelector((state) => state.todo);
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [fetchTodos, limit, page]);

    const handlePageClick = useCallback(
        (p) => {
            setTodoPage(p);
        },
        [setTodoPage]
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <p key={todo.id}>
                    {todo.id} - {todo.title}
                </p>
            ))}
            {pages.map((p) => (
                <button
                    style={{ border: p === page ? '2px solid blue' : '', padding: '1rem' }}
                    onClick={() => handlePageClick(p)}
                    key={p}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

export default TodoList;
