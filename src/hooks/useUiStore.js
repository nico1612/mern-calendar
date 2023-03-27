import { useDispatch, useSelector } from 'react-redux';
import { onCloseModal, onOpenModal } from '../store';


export const useUiStore =()=>{

    const dispatch=useDispatch()

    const {isDateModaleOpen}= useSelector(state=>state.ui)

    const openDateModal=()=>{
        dispatch(onOpenModal)
    }

    const closeDateModal=()=>{
        dispatch(onCloseModal)
    }

    return{
        //propiedades
        isDateModaleOpen,

        //metodos
        openDateModal,
        closeDateModal
    }
}