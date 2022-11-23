import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   username: String,
                                   handle: String,
                                   time: String,
                                   image: String,
                                   tuit: String,
                                   replies: Number,
                                   retuits: Number,
                                   likes: Number,
                                   liked: Boolean,
                                   dislikes: Number,
                                   disliked: Boolean,
                               }, {collection: 'tuits'});
export default schema;

