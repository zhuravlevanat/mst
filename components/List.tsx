import {observer} from "mobx-react-lite";
import {useUsersStore} from "../store/users";
import React from "react";


const List: React.FC = observer(() => {
    const {data} = useUsersStore('');
    console.log(data, 'in list');
    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
});

export default List
