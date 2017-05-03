let store = {
    products: [
        {
            id: 1,
            desc: 'Classic Ad',
            price: 269.99
        },
        {
            id: 2,
            desc: 'Standout Ad',
            price: 322.99
        },
        {
            id: 3,
            desc: 'Premium Ad',
            price: 394.99
        }
    ],
    pricingRules: [
        {
            id: 1,
            productId: 1,
            desc: 'You have 3 for 2 deals on Classic Ads'
        },
        {
            id: 2,
            productId: 2,
            desc: 'You have discount on Standout Ads where the price drops to $299.99 per ad'
        },
        {
            id: 3,
            productId: 3,
            desc: 'You have discount on Premium Ads when 4 or more are purchased. The price drops to $299.99 per ad'
        },
        {
            id: 4,
            productId: 1,
            desc: 'You have 5 for 4 deal on Classic Ads'
        },
        {
            id: 5,
            productId: 2,
            desc: 'You have discount on Standout Ads where the price drops to $309.99 per ad'
        },
        {
            id: 6,
            productId: 3,
            desc: 'You have discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad'
        }
    ],
    customers: [
        {
            id: 1,
            name: 'Unilever',
            pricingRules: [
                {
                    id:1,
                    applied:false
                }
            ]
        },
        {
            id: 2,
            name: 'Apple',
            pricingRules: [
                {
                    id:2,
                    applied:false
                }
            ]
        },
        {
            id: 3,
            name: 'Nike',
            pricingRules: [
                {
                    id:3,
                    applied:false
                }
            ]
        },
        {
            id: 4,
            name: 'Ford',
            pricingRules: [
                {
                    id:4,
                    applied:false
                },
                {
                    id:5,
                    applied:false
                },
                {
                    id:6,
                    applied:false
                }
            ]
        }
    ]
}
