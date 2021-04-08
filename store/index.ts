import {useUsersStore} from "./users";
import {useProspectsStore} from "./prospects";

const rootStore = (initialState: any) => { // add types
    const users = useUsersStore(initialState?.users);
    const prospects = useProspectsStore(initialState?.prospects);
    return {users, prospects}
}

export default rootStore;
