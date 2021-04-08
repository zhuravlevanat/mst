import {applySnapshot, flow, Instance, types} from "mobx-state-tree";
import {useMemo} from "react";
import {getUsers} from "api/Users";
import {getProspects} from "../../api/Prospects";

let store: ProspectsStore | undefined

const Prospect = types
    .model({
        id: types.identifierNumber,
        name: types.string// 4
    })

const ProspectsStore = types
    .model({
        data: types.array(Prospect), // 4
    })
    .actions((self) => {
        const update = flow(function* () {
            try {
                self.data = yield getProspects();
            } catch (error) {
                console.error("Failed to fetch projects", error)
            }
        })
        const addItem = (item: string) => {
            self.data.replace([...self.data, {id: 765, name: item}])
        }
        return { update, addItem }
    })

export function initializeProspectsStore(snapshot = null) {
    const _store = store ?? ProspectsStore.create({ data: [] })

    if (snapshot) {
        applySnapshot(_store, snapshot)
    }
    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return store
}

export function useProspectsStore(initialState: any) {
    return useMemo(() => initializeProspectsStore(initialState), [initialState])
}


export type ProspectsStore = Instance<typeof ProspectsStore>
