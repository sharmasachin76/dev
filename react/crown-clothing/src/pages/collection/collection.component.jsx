import React from 'react';
import {connect} from 'react-redux';

//import CollectionWrapper from '../collection-wraper/collection-wrapper.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollections} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import './collection.styles.scss';
//import { useParams } from 'react-router-dom';

const CollectionPage = ({id,collections}) => {
   console.log('incollection');
    console.log(id);
    console.log(collections.length);

    const COLLECTION_ID_MAP = {
        hats     : 1,
        sneakers : 2,
        jackets  : 3,
        womens   : 4,
        mens     : 5
    };
    const collection = collections.find(collection=>collection.id===COLLECTION_ID_MAP[id]);
    //console.log(collection.items.length);
    return(
    <div className='collection-page'>   
        <h2 className='title'> {id} </h2>
        <div className='items'> 
        {
                collection.items.map(item=>(
                <CollectionItem key={item.id} item={item} />
            ))
            }
        </div>  
    </div>
    );
};

const mapStateToProps = createStructuredSelector({
    //collection: selectCollection(id)(state)
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionPage);

//export default CollectionPage;

/*
const CollectionPage = ({collection}) => {
    const {title,items} = collection;
    console.log(title);
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=>(
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
    );
};


*/





