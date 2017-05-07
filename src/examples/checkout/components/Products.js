import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';
import Total from './Total';

class Products extends Component {
    render() {
        return (
            <div>
                <ProductsHeader/>
                <ProductsList products={this.props.products}></ProductsList>
                <Total/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {products} = state;
    return {
        products
    }
};
export default connect(mapStateToProps)(Products);