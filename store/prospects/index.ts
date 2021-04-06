import {
    types,
    flow, applySnapshot,
} from "mobx-state-tree";
import {getProspects} from "../../api/Prospects";

export const Prospect = types
    .model({
        id: types.identifier,
        name: types.string,
    })
    .actions(self => ({
        // changeName(newName: string) {
        //     self.name = newName;
        // },
        // remove() {
        //     getParent<typeof Prospects>(self, 2).remove(self);
        // }
    }));

export const Prospects = types
    .model({
        data: types.array(Prospect),
        selected: false,
    })
    .actions(store => ({
        // addProspect(
        //     prospect: SnapshotIn<typeof Prospect> | Instance<typeof Prospect>
        // ) {
        //     store.data.push(prospect);
        // },
        // remove(item: SnapshotIn<typeof Prospect>) {
        //     destroy(item);
        // },
        toggleSelected() {
            store.selected = !store.selected
        },
        getAllProspects: flow(function* () {
            try {
                let resp = yield getProspects();
                // const resp = yield getProspects();
                console.log('resp', resp);
                store.data = resp;
                // store.data = resp;
                // store.loading = false;
                // applySnapshot(store.data, resp)
            } catch (error) {
                // console.error(error.message)
                // store.loading = false
            }
        }),
    })
    // .views(store => ({
    //     get prospectsCount() {
    //         return store.data.length;
    //     },
    // })
    );
