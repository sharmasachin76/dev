import React from 'react';
//import {connect} from 'react-redux';

import CollectionPage from '../collection/collection.component';
//import CollectionItem from '../../components/collection-item/collection-item.component';
//import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection-wrapper.styles.scss';
import { useParams } from 'react-router-dom';

const CollectionWrapper = () => {
    const component = useParams();
    const id = component.componentId;
    console.log('value');
    console.log(component.componentId);
   
    return(
    <div className='collection-page'>
     <CollectionPage id = {id} />
    </div>
    );
};
/*const mapDispatchToProps = dispatch => ({
    PageId: ()=> { useParams().componentId}
});
*/
export default CollectionWrapper;
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

const mapStateToProps = (state, ownProps)=> ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
   // collection: selectCollections
})
*/
//export default connect(null,mapDispatchToProps)(CollectionWrapper);



