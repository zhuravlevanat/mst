import {useMemo} from 'react'
import {applySnapshot, flow, Instance, SnapshotIn, SnapshotOut, types,} from 'mobx-state-tree'
import {getProspects} from "../api/Prospects";

let store: IStore | undefined

const Prospect = types
    .model({
        id: types.identifierNumber,
        name: types.string// 4
    })

const Store = types
    .model({
        lastUpdate: types.Date,
        light: false,
        checked: false,
        data: types.array(Prospect), // 4
    })
    .actions((self) => {
        let timer: any
        const start = () => {
            timer = setInterval(() => {
                // mobx-state-tree doesn't allow anonymous callbacks changing data.
                // Pass off to another action instead (need to cast self as any
                // because typescript doesn't yet know about the actions we're
                // adding to self here)
                ;(self as any).update()
            }, 1000)
        }
        const update = flow(function* () {
            self.lastUpdate = new Date(Date.now())
            self.light = true;
                try {
                    // ... yield can be used in async/await style
                    const resp = yield getProspects()
                    console.log(resp);
                    // applySnapshot(self.data, resp)
                    self.data = resp;
                } catch (error) {
                    // ... including try/catch error handling
                    console.error("Failed to fetch projects", error)
                }
                // The action will return a promise that resolves to the returned value
                // (or rejects with anything thrown from the action)
            })
        const stop = () => {
            clearInterval(timer)
        }
        const addItem = (item: string) => {
            self.data.replace([...self.data, {id: 765, name: item}])
            // const id = self.data.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
            // self.data.unshift({
            //     id,
            //     name: item
            // })
        }
        return { start, stop, update, addItem }
    })

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

export function initializeStore(snapshot = null) {
    const _store = store ?? Store.create({ lastUpdate: 0 })

    console.log(_store.data);

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
    if (snapshot) {
        applySnapshot(_store, snapshot)
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return store
}

export function useStore(initialState: any) {
    return useMemo(() => initializeStore(initialState), [initialState])
}
