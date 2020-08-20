export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    //Remove after finished dev
    token: "BQBckXhJY5Oe9FTQky-A9yz_hsJ3PxlHnwnBtqrTwQj4qk86yU8QFb9NkdnRUchLyUdDWQzxwqcxvM9Rf2JPDVIzzskh5oEY4xAVEtvjbsgH9_ZO_en1x8oeDvTCr3dJ28i-Cp8aOQ9U6vCi38ZMXynZzEw0fURV_Cao9TEZYiv4yf4El4OoPCCoiw"

};


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user

            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            default: 
            return state;

    }
}
export default reducer;