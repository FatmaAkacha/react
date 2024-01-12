function Todo() {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                    Manger
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Éditer <span className="visually-hidden">Manger</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Supprimer <span className="visually-hidden">Manger</span>
                </button>
            </div>
        </li>
    );
}
export default Todo;