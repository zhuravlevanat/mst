import { Provider } from 'mobx-react'
import { useUsersStore } from '../store/users'
import { useProspectsStore } from '../store/prospects'

export default function App({ Component, pageProps }) {
    const users = useUsersStore(pageProps?.initialState?.users);
    const prospects = useProspectsStore(pageProps?.initialState?.prospects);

    return (
        <Provider users={users} prospects={prospects}>
            <Component {...pageProps} />
        </Provider>
    )
}

