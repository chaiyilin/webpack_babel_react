import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import {connect} from 'react-redux';
import {productTotalMargin} from './style';

class Total extends Component {

    constructor(props) {
        super(props);
    }

    getTotal = () => {
        return _.reduce(this.props.products, (sum, product) => {
            return sum + (product.subtotal ? product.subtotal : 0) - (product.saved ? product.saved : 0)
        }, 0)
    };

    render() {
        const {alignRight} = this.props;
        const total = this.getTotal().toFixed(2)>0?this.getTotal().toFixed(2):'';
        return (
            <div style={productTotalMargin}>
                <Row>
                    <Col span={12} offset={6}>
                        <Paper>
                            <Row>
                                <Col span={18} style={alignRight}>
                            <span>
                                Total:
                            </span>
                                </Col>

                                <Col span={6} style={alignRight}>
                            <span>
                                ${total}
                            </span>
                                </Col>

                            </Row>
                        </Paper>
                    </Col>
                </Row>
            </div>
        )
    }
}

Total.defaultProps = {
    alignRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
};

const mapStateToProps = state => {
    const {products} = state;
    return {
        products
    }
};

export default connect(mapStateToProps)(Total);