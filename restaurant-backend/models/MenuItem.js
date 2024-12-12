// import mongoose from 'mongoose';

// const menuItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
//   category: { type: String },
// });

// const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// export default MenuItem;


// backend/models/MenuItem.js
import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    // restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    category: { type: String },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;