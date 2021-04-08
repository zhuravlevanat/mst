import {applySnapshot, flow, Instance, types} from "mobx-state-tree";
import {useMemo} from "react";
import {getUsers} from "api/Users";

let store: UsersStore | undefined

const User = types
    .model({
        id: types.identifierNumber,
        title: types.string// 4
    })

const UsersStore = types
    .model({
        data: types.array(User), // 4
    })
    .actions((self) => {
        const update = flow(function* () {
            try {
                self.data = yield getUsers();
            } catch (error) {
                console.error("Failed to fetch projects", error)
            }
        })
        const addItem = (item: string) => {
            self.data.replace([...self.data, {id: 765, title: item}])
        }
        return { update, addItem }
    })

export function initializeUserStore(snapshot = null) {
    const _store = store ?? UsersStore.create({ data: [] })

    if (snapshot) {
        applySnapshot(_store, snapshot)
    }
    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return store
}

export function useUsersStore(initialState: any) {
    return useMemo(() => initializeUserStore(initialState), [initialState])
}


export type UsersStore = Instance<typeof UsersStore>
