import {types} from "mobx-state-tree";

export const MProspect = {
    id: types.identifierNumber,
    name: types.string
}

export const Prospect = types.model(MProspect)

export const MProspectsStore = {
    data: types.array(Prospect),
}
