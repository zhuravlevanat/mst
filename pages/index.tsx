import { getSnapshot } from 'mobx-state-tree'
import SampleComponent from '../components/SampleComponent'
import {initializeUserStore} from '../store/users'

export default function Ssr() {
    return <SampleComponent title={'SSR Page'} linkTo="/" />
}

export async function getServerSideProps() {
    const store = initializeUserStore()

    await store.update()

    return { props: { initialState: {users: getSnapshot(store)} } }
}
