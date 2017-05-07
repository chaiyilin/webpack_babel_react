import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Card} from 'material-ui/Card';

class PricingRule extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {pricingRule,product,alignRight,numericInput} = this.props;
        return (
            <Row>
                <Col span={12} offset={6}>
                    <Card>
                        <Row>
                            <Col span={18}>
                            <span>
                                {pricingRule.desc}
                            </span>
                            </Col>

                            <Col span={6} style={alignRight}>
                            <span>
                                {product.saved>0? '-$'+product.saved:''}
                            </span>
                            </Col>

                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

PricingRule.defaultProps = {
    alignRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    numericInput:{
        marginLeft:'10px',
        marginRight:'10px',
        input:{
            width:'100%',
            textAlign:'right'
        }
    }
};

PricingRule.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default PricingRule