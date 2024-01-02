const initialState = {
    cardData2: []
}

const CARDDATA2 = (state = [], action) => {

    switch (action.type) {
//...................add to card.............
        case "NEW_USER_ADD":
            return [
                ...state,
                { cardData2: action.data }
            ]
//.........................delete data.......
        case "DELETE_USER":
            return [
                ...state,
                { cardData2: action.data }
            ]
//...................................default...........
        default: return state;
    }
}
export default CARDDATA2;