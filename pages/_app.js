import { Provider } from 'mobx-react'
import rootStore from '../store'

export default function App({ Component, pageProps }) {
    return (
        <Provider {...rootStore(pageProps?.initialState)}>
            <Component {...pageProps} />
        </Provider>
    )
}

