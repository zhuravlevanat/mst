import {StP} from 'styledComponents/Text';
// import { observer } from 'mobx-react-lite';
import {useStore } from '../../store'

// const Prospects = observer(() => {
//     const {prospects} = useStore('');
//     console.log('data', prospects.data, prospects.data.length);
//     return (
//         <>
//             <StP>
//                 Prospects
//             </StP>
//             <ul>
//                 {prospects.data.map(item => <li key={item.id}>{item.name}</li>)}
//             </ul>
//         </>
//     )
// })


// import { inject, observer } from "mobx-react";
import React from "react";
import { observer } from 'mobx-react-lite';
// import { IStore } from "../../store";

// interface IOwnProps {
//     store?:IStore;
//     title:string;
//     linkTo:string;
// }

// @inject("store")
// @observer
// export default class Prospects extends React.Component<> {
//
//     public render () {
//         console.log(this.props.store.prospects.data)
//         if (!this.props.store) {
//             return (
//                 <div>
//                     Store not defined
//                 </div>
//             );
//         }
//         return (
//             <div>
//                 <>
//                         <StP>
//                             Prospects
//                         </StP>
//                         <ul>
//                             {this.props.store.prospects.data.map(item => <li key={item.id}>{item.name}</li>)}
//                         </ul>
//                     </>
//
//             </div>
//         );
//     }
// }


const Prospects = observer(() => {
    const { prospects } = useStore();
    console.log(prospects.data, prospects.selected);
    const handleChange = () => prospects.toggleSelected();
    return (
        <>
            <StP>
                Prospects
            </StP>
            <input
                name="isGoing"
                type="checkbox"
                checked={prospects.selected}
                onChange={handleChange} />
            <ul>
                {prospects.data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
})


// export const Prospects = () => {
//     const { prospects } = useStore(store => ({
//         prospects: store.prospects
//     }));
//     console.log(prospects.data)
//     return <ProspectsView data={prospects.data} />
// }

export default Prospects;
