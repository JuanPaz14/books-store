import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useEffect, useState } from "react";

export default function View(){

    const [item,setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    const itemStyle={
        container:{
            display: 'flex',
            gap:'20px',
            color: 'white',
            width:'800px',
            margin: '0 auto'
        }
    }

    useEffect(()=>{
        const book =store.getItem(params.bookId);
        setItem(book);
    },[]);
    if(!!item){
        <Layout>item no found</Layout>
    }

    return(
        
        <Layout> 
            <div style={itemStyle.container}>
                <div>
                    <div>{item?.cover?<img src={item.cover} width="200"/>:''}</div>
                </div>
                <div>
                    <h2>{item?.title }</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? 'leido' : 'por terminar'}</div>
                    <div>{item?.review}</div>
                </div>
                
            </div>
        </Layout>
    );
}