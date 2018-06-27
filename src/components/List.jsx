import React from "react";

const List = ({tasks}) => (

    <React.Fragment>

    { tasks.length ? <ul className="list-group">/<ul>
    { tasks.map(task => (
        <li className="list-group-item" key= {task.id}>
            
    )) }
    }

    </React.Fragment>

);



export default List;
