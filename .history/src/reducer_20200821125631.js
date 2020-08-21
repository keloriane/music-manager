export const initialState = {
    user: null,
    playlists:[],
    playlist:[],
    recommendations:[],
    playing: false,
    item: null,
    artist:id
    //Remove after finished dev
    // token: "BQBckXhJY5Oe9FTQky-A9yz_hsJ3PxlHnwnBtqrTwQj4qk86yU8QFb9NkdnRUchLyUdDWQzxwqcxvM9Rf2JPDVIzzskh5oEY4xAVEtvjbsgH9_ZO_en1x8oeDvTCr3dJ28i-Cp8aOQ9U6vCi38ZMXynZzEw0fURV_Cao9TEZYiv4yf4El4OoPCCoiw"
    // token:null
};


const reducer = (state, action) => {
 


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
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_RECOMMENDATIONS':
            return {
                ...state,
                recommendations: action.recommendations
            }
        case 'SET_ARTIST':
            return {
                ...state,
                artist: action.artist
            }
            default: 
            return state;

    }
}
export default reducer;