import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop-actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsWithSpinner = WithSpinner(Collection);

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    // renderName = (name) => {
    //     const { loading } = this.state;
    //     return (
    //         <div>
    //             <h1>Shubham</h1>
    //         </div>
    //     )
    // }



    render() {
        const { match } = this.props
        const { loading } = this.state
        // const Name = WithSpinner(this.renderName);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsWithSpinner isLoading={loading} {...props} />} />
                {/* <Name isLoading={loading} /> */}
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
