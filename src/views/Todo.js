
const Todo = (props) => {
    const {todo, title, deteleDataTodo} = props;

    const handleDelete = (id) => {
        deteleDataTodo(id);
    }

    return (
        <>
            <div className='todoContainer'>
                <div className="todoTitle">
                    <div>{title}</div>
                </div>
                {todo &&
                    todo.map((todo, index) => {
                        return (
                            <>
                                <li className="todoChild" key={todo.id}> {todo.title} &nbsp;
                                    <span onClick={() => handleDelete(todo.id)}>x</span>
                                </li>
                            </>
                        )
                    })
                }
                <hr />
            </div>

        </>
    )
}

export default Todo;