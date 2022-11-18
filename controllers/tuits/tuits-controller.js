import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.username = "NASA"
    newTuit.title = "NASA posts"
    newTuit.handle = "@NASA";
    newTuit.image = "nasa.png"
    newTuit.time = "now";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    tuits.push(newTuit);
    res.json(newTuit);

}
const findTuits  = (req, res) => {
    res.json(tuits);
}

const findTuitById = (req, res) => {
    const tuitId = req.params.tid;
    const tuit = tuits
        .find(t => t._id === tuitId);
    res.json(tuit);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);

}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
                             t._id !== tuitdIdToDelete);
    res.sendStatus(200);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

