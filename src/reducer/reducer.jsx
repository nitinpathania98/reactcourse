const initialState = {
    cardData: []
}

const CARDDATA = (state = [], action) => {

    switch (action.type) {
        //...................add to card.............
        case "ADD_TO_CARD":
            return [
                ...state,
                { cardData: action.data }
            ]
        //.........................delete data.......
        case "DELETE_DATA":
            return [
                ...state,
                { cardData: action.data }
            ]
        //...................................default...........
        default: return state;
    }
}
export default CARDDATA;