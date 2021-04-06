import React from "react";
import Prospects from 'components/Prospects/Prospects';
import { getSnapshot } from "mobx-state-tree";
import {useStore} from "../../store";

const ProspectsPage = () => <Prospects />;

// export async function getServerSideProps() {
//     const store = initializeStore()
//
//     await store.prospects.getAllProspects()
//
//     return { props: { initialState: getSnapshot(store) } }
// }

// export const getStaticProps: GetStaticProps = async () => {
//     let resp = await fetch(url).then(d => d.json());
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { resp } }
// }


ProspectsPage.getInitialProps = async (ctx) => {
    try {
       const store = useStore();
        await store.prospects.getAllProspects()
    return { props: {initialState: getSnapshot(store)} }
    } catch (e) {
        console.log('in page', e);
        return {};
    }
};

export default ProspectsPage;
