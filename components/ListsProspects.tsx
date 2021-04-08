import {observer} from "mobx-react-lite";
import {useProspectsStore} from "../store/prospects";
import React from "react";


const List: React.FC = observer(() => {
    const {data} = useProspectsStore('');
    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    )
});

export default List
