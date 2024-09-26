import {createContext, useContext, useEffect, useState} from 'react';

//crea el contexto 
const AppContext = createContext({
    items:[],
    createItem:(item)=>{},
    getItem:(id)=>{},
    updateItem:(item)=>{},
})

//crea las funciones dentro del componente 
export default function Store({children}){
    const[items,setItems]=useState([]);

    function createItem(item){
        const temp = [...items];
        temp.push(item);
        setItems(temp);
    }

    function getItem(id){
        const item = items.find((item)=>item.id===id)
        return item;
    }

    function updateItem(item){
        const index = items.findIndex((i)=>i.id === item.id);
        const temp = [...items];
        temp[index]={...item};
        setItems(temp);
    }
    return(
        <AppContext.Provider value={{

            items,
            createItem,
            getItem,
            updateItem,
            

        }}>{children}</AppContext.Provider>
    );
}

//crea un funcion que exporte las funciones
export function useAppContext(){
    return useContext(AppContext);
}