import {applySnapshot, Instance, types} from "mobx-state-tree";
import {useMemo} from "react";
import {MProspectsStore} from "./models";
import actions from "./actions";

let store: ProspectsStore | undefined

const ProspectsStore = types
    .model(MProspectsStore)
    .actions(actions)

export function initializeProspectsStore(snapshot: any = null) { // ad types
    const _store = store ?? ProspectsStore.create({ data: [] })

    if (snapshot) applySnapshot(_store, snapshot)
    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return store
}

export function useProspectsStore(initialState: any) {
    return useMemo(() => initializeProspectsStore(initialState), [initialState])
}

export type ProspectsStore = Instance<typeof ProspectsStore>
