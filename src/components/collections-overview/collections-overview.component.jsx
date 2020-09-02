import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  CollectionPreview  from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import {CollectionsOverview} from './collections-overview.styles';



const CollectionOverview = ({ collections }) => {
    return (
        <CollectionsOverview>
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
        </CollectionsOverview>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
