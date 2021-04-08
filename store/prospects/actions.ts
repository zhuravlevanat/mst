import {flow} from "mobx-state-tree";
import {getProspects} from "../../api/Prospects";

const actions = (self: any) => {  // ADD TYPES
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
}

export default actions;
