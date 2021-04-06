import {observer} from "mobx-react-lite";
import {useStore} from "../store";
import React from "react";


const List: React.FC = observer(() => {
    const {data} = useStore('');
    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    )
});

export default List
