import React, { useState } from 'react';

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <textarea
                rows="4"
                placeholder="Leave a comment..."
                value={newComment}
                onChange={handleCommentChange}
            />
            <button onClick={handleCommentSubmit}>Submit Comment</button>
        </div>
    );
}

export default Comment