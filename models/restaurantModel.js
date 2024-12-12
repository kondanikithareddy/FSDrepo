import mongoose from 'mongoose';
const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true, },
    img: { type: String, required: true, },
    link: { type: String, required: true, },
}, {
    timestamps: true,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;