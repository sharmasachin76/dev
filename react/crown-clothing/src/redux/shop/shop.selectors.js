import {createSelector} from 'reselect';
/*
const COLLECTION_ID_MAP = {
    hats     : 1,
    sneakers : 2,
    jackets  : 3,
    womens   : 4,
    mens     : 5
};
*/

const selectShop = state => state.shop;

//const id = useParams().componentId;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


export const selectCollection = createSelector (
        [selectCollections],
        //collections => collections.find(collection=>collection.id===COLLECTION_ID_MAP[id])
       // collections => collections.find(collection=>collection.id===4)
);
    