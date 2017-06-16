import keyMirror from 'keymirror';
const ActionTypes = keyMirror({
    NOTES_REQUEST: 1, // yes! less typing
    NOTES_SUCCESS: 1,
    NOTES_FAILURE: 1
});
console.log(ActionTypes)
