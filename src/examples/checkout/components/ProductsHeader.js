import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Paper from 'material-ui/Paper';
import {productsHeaderMargin} from './style';

class ProductsHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {alignCentre} = this.props;
        return (
            <div style={productsHeaderMargin}>
                <Row>
                    <Col span={12} offset={6}>
                        <Paper>
                            <Row>
                                <Col span={6} style={alignCentre}>
                                    <span>
                                        Product Name
                                    </span>
                                </Col>

                                <Col span={6} style={alignCentre}>
                                    <span>
                                        Price
                                    </span>
                                </Col>

                                <Col span={6} style={alignCentre}>
                                    <span>
                                        Amount
                                    </span>
                                </Col>

                                <Col span={6} style={alignCentre}>
                                    <span>
                                        SubTotal
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
;

ProductsHeader.defaultProps = {
    alignCentre: {
        display: 'flex',
        justifyContent: 'center',
    }
};

ProductsHeader.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default ProductsHeader