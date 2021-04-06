import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { IStore, useStore } from '../store'
import List from './List'

interface IOwnProps {
    store?: IStore
    title: string
    linkTo: string
}

const SampleComponent: React.FC<IOwnProps> = observer((props) => {
    const { lastUpdate, light, start, stop, addItem } = useStore('');
    const [value, setValue] = React.useState('');
    const handleAddText = () => addItem(value);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        start()
        return () => {
            stop()
        }
    }, [start, stop])

    return (
        <div>
            <h1>{props.title}</h1>
            <nav>
                <Link href={props.linkTo}>
                    <a>Navigate</a>
                </Link>
            </nav>
            <input type="text" value={value} onChange={handleChange}/>
            <button onClick={handleAddText}>Add text</button>
            <List />
        </div>
    )
})

export default SampleComponent
