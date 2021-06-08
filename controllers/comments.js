const Comment = require('../models/comment');

module.exports = (app) => {
    
    // Submit a new comment
    app.post('/reviews/comments', (req, res) => {
        console.log('body', req.body);
        Comment.create(req.body)
            .then((comment) => {
            console.log('commentttt', comment);
            res.redirect(`/reviews/${comment.reviewId}`); // reviewId
        }).catch((err) => {
            console.log(err.message);
        });
    });
     //delete a comment
    app.delete('/reviews/comments/:id', (req, res) => {
        console.log('Deleting Comment: ', req.params.id)
        Comment.findByIdAndRemove(req.params.id).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })

}