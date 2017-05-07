import React, {Component} from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class ProductsList extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(function (product) {
                    return (
                        <Product key={product.id} product={product}></Product>
                    );
                })}
            </div>
        )
    }
}

ProductsList.defaultProps = {
    cardStyle: {
        marginBottom: 10,
        width: '100%'
    }
};

export default ProductsList;