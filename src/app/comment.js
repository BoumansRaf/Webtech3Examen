"use strict";
var Comment = (function () {
    function Comment(id, postId, name, email, body) {
        this.id = id;
        this.postId = postId;
        this.name = name;
        this.email = email;
        this.body = body;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map