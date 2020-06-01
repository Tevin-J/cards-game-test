import pic_1 from '../assets/img/cactus.svg'
import pic_2 from '../assets/img/cupcake.svg'
import pic_3 from '../assets/img/hat.svg'
import pic_4 from '../assets/img/hotDog.svg'
import pic_5 from '../assets/img/quentao.svg'
import pic_6 from '../assets/img/scarecrow.svg'
import pic_7 from '../assets/img/sunflower.svg'
import pic_8 from '../assets/img/braid.svg'
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


export type CardType = {
    id: number
    title: string
    img: string
    isShow: boolean
    isOpen: boolean
}
type InitialStateType = {
    cards: Array<CardType>
    counter: number
    isLoading: boolean
}

const initialState: InitialStateType = {
    cards: [
        {id: 0, title: 'pic_1', img: pic_1, isShow: false, isOpen: false},
        {id: 1, title: 'pic_4', img: pic_4, isShow: false, isOpen: false},
        {id: 2, title: 'pic_3', img: pic_3, isShow: false, isOpen: false},
        {id: 3, title: 'pic_7', img: pic_7, isShow: false, isOpen: false},
        {id: 4, title: 'pic_6', img: pic_6, isShow: false, isOpen: false},
        {id: 5, title: 'pic_8', img: pic_8, isShow: false, isOpen: false},
        {id: 6, title: 'pic_1', img: pic_1, isShow: false, isOpen: false},
        {id: 7, title: 'pic_5', img: pic_5, isShow: false, isOpen: false},
        {id: 8, title: 'pic_2', img: pic_2, isShow: false, isOpen: false},
        {id: 9, title: 'pic_8', img: pic_8, isShow: false, isOpen: false},
        {id: 10, title: 'pic_4', img: pic_4, isShow: false, isOpen: false},
        {id: 11, title: 'pic_6', img: pic_6, isShow: false, isOpen: false},
        {id: 12, title: 'pic_7', img: pic_7, isShow: false, isOpen: false},
        {id: 13, title: 'pic_2', img: pic_2, isShow: false, isOpen: false},
        {id: 14, title: 'pic_5', img: pic_5, isShow: false, isOpen: false},
        {id: 15, title: 'pic_3', img: pic_3, isShow: false, isOpen: false},
    ],
    counter: 0,
    isLoading: false
}

const reducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "App/Reducer/TOGGLE_IS_SHOW":
            let newCardsArr: Array<CardType> = [...state.cards]
            if (!action.card.isOpen) {
                newCardsArr = newCardsArr.map(c => {
                    if (c.id === action.card.id) {
                        return {...c, isShow: true}
                    } else {
                        return c
                    }
                })
                return {
                    ...state,
                    cards: newCardsArr
                }
            } else {
                return state
            }
        case "App/Reducer/COMPARE_CARDS":
            let showedCards = state.cards.filter(c => c.isShow)
            let newCards: Array<CardType> = [...state.cards]
            let counterValue: number = state.counter
            if (showedCards[0].title === showedCards[1].title && showedCards[0].id !== showedCards[1].id) {
                counterValue = counterValue + 1
                newCards = newCards.map(c => {
                    if (c.id === showedCards[0].id || c.id === showedCards[1].id) {
                        return {...c, isOpen: true, isShow: false}
                    } else {
                        return c
                    }
                })
            } else {
                counterValue = counterValue + 1
                newCards = newCards.map(c => {
                    return {...c, isShow: false}
                })
            }
            return {
                ...state,
                cards: newCards,
                counter: counterValue
            }
        case 'App/Reducer/TOGGLE_IS_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case 'App/Reducer/VICTORY_TOGGLING':
            return {
                ...state,
                cards: state.cards.map(c => {
                    return {
                        ...c,
                        isShow: false,
                        isOpen: false
                    }
                }),
                counter: 0
            }
        case 'App/Reducer/SHUFFLING_CARDS':
            let shuffledArr: Array<CardType> = [...state.cards]
            let shuffle = (array: Array<CardType>): void => {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            shuffle(shuffledArr)
            return {
                ...state,
                cards: shuffledArr
            }
        default:
            return state
    }
}

/*actions*/
export const actions = {
    toggleIsShow: (card: CardType) => ({type: 'App/Reducer/TOGGLE_IS_SHOW', card} as const),
    compareCards: () => ({type: 'App/Reducer/COMPARE_CARDS'} as const),
    toggleIsLoading: () => ({type: 'App/Reducer/TOGGLE_IS_LOADING'} as const),
    victoryToggling: () => ({type: 'App/Reducer/VICTORY_TOGGLING'} as const),
    shufflingCards: () => ({type: 'App/Reducer/SHUFFLING_CARDS'} as const)
}
type ActionType = InferActionTypes<typeof actions>

/*thunks*/
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export const showCard = (card: CardType): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>,
            getState: () => AppStateType) => {

        /*getting cards array from state and filtering cards with prop isShow===true*/
        const state = getState()
        const {cards} = state.reducer
        let showCards = cards.filter(c => c.isShow)

        /*show the active card if it has not been shown or clicked*/
        if (!card.isOpen && !card.isShow) {
            dispatch(actions.toggleIsShow(card))
        }

        /*compare two cards if the first card is showed and second is not showed and guessed*/
        if (showCards.length !== 0 && !card.isOpen && !card.isShow) {
            /*prevent click on any card while comparing is going on*/
            dispatch(actions.toggleIsLoading())
            /*after 1 sec delay comparing starts*/
            setTimeout(() => {
                dispatch(actions.compareCards())
                dispatch(actions.toggleIsLoading())
            }, 1000)
        }
    };
};

export default reducer