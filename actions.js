import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export onst THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumupComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
    }
}

function thumbdownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundThumupComment = id => dispatch(thumupComment(id));
const boundThumbdownComment = id => dispatch(thumbdownComment(id));

