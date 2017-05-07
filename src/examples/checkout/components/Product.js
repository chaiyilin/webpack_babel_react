import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';
import Paper from 'material-ui/Paper';
import {updateAdAmount} from '../actions';
import PricingRule from './PricingRule';
import {productMargin} from './style';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.props.updateAdAmount(this.props.product.id, e.target.value)
    };

//http://stackoverflow.com/questions/34350988/react-passing-parameter-via-onclick-event-using-es6-syntax
    render() {
        const {product, alignCentre,alignRight, numericInput} = this.props;
        let value = product.amount;
        return (
            <div style={productMargin}>
                <Row>
                    <Col span={12} offset={6}>
                        <Paper zDepth={1}>
                            <Row>
                                <Col span={6} style={alignCentre}>
                                    <span>
                                        {product.desc}
                                    </span>
                                </Col>

                                <Col span={6} style={alignCentre}>
                                    <span>
                                        ${product.price}
                                    </span>
                                </Col>

                                <Col span={6} style={alignCentre}>
                                    <input type="number"
                                           style={numericInput}
                                           min={0}
                                           onChange={this.onChange}
                                    />
                                </Col>

                                <Col span={6} style={alignRight}>
                                    <span>
                                        ${product.subtotal>0?product.subtotal:''}
                                    </span>
                                </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
                {
                    product.pricingRule &&
                    <PricingRule pricingRule={product.pricingRule} product={product}/>
                }

            </div>
        )
    }
}

Product.defaultProps = {
    alignCentre: {
        display: 'flex',
        justifyContent: 'center',
    },
    alignRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    numericInput: {
        width: '60%',
    }
};

export default connect(null, {updateAdAmount})(Product);