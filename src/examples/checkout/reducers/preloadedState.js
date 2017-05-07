let preloadedState = {
    currentUser:null,
    products: [
        {
            id: 1,
            desc: 'Classic Ad',
            price: 269.99,
            amount:0
        },
        {
            id: 2,
            desc: 'Standout Ad',
            price: 322.99,
            amount:0
        },
        {
            id: 3,
            desc: 'Premium Ad',
            price: 394.99,
            amount:0
        }
    ],
    pricingRules: [
        {
            id: 1,
            productId: 1,
            desc: 'You have discount: 3 for 2 deals on Classic Ads',
            applied:false
        },
        {
            id: 2,
            productId: 2,
            desc: 'You have discount on Standout Ads where the price drops to $299.99 per ad',
            applied:false
        },
        {
            id: 3,
            productId: 3,
            desc: 'You have discount on Premium Ads when 4 or more are purchased. The price drops to $379.99 per ad',
            applied:false
        },
        {
            id: 4,
            productId: 1,
            desc: 'You have discount: 5 for 4 deal on Classic Ads',
            applied:false
        },
        {
            id: 5,
            productId: 2,
            desc: 'You have discount on Standout Ads where the price drops to $309.99 per ad',
            applied:false
        },
        {
            id: 6,
            productId: 3,
            desc: 'You have discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad',
            applied:false
        }
    ],
    customers: [
        {
            id: 1,
            username: 'Unilever',
            pricingRules: [1]
        },
        {
            id: 2,
            username: 'Apple',
            pricingRules: [2]
        },
        {
            id: 3,
            username: 'Nike',
            pricingRules: [3]
        },
        {
            id: 4,
            username: 'Ford',
            pricingRules: [4,5,6]
        }
    ]
};

export default preloadedState
