const Cart = require('../models/cart');
const Order = require('../models/order');
const Product = require('../models/product');

exports.placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.status(404).json({ message: 'Cart is empty' });
        }

        const orderItems = cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity
        }));

        const totalAmount = orderItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);

        const newOrder = new Order({
            user: req.user.id,
            items: orderItems,
            totalAmount: totalAmount
        });

        await newOrder.save();

        // Clear the cart after placing the order
        cart.items = [];
        await cart.save();

        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
