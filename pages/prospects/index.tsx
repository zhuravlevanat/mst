import { getSnapshot } from 'mobx-state-tree'
import {initializeProspectsStore} from '../../store/prospects'
import SampleProspects from "../../components/SampleProspects";

export default function Ssr() {
    return <SampleProspects title={'SSR Page'} linkTo="/" />
}

export async function getServerSideProps() {
    const store = initializeProspectsStore()

    await store.update()

    return { props: { initialState: {prospects: getSnapshot(store) }} }
}
