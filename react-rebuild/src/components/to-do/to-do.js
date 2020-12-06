import React, {useState, useEffect} from 'react';
import MyMainForm from './form.js';
import List from './list.js';
import axios from 'axios';

function ToDo(){

    const [itemList, setItemList] = useState([])

    useEffect( () => {
        getAll();
    },[]);

    async function getAll(){
        try{
        let results = await axios({
            method: 'get',
            url: 'https://api-js401.herokuapp.com/api/v1/todo'
        });
        console.log('These are results*******', results.data.results);
        }catch(err){
            console.log(err);
        }

    };

    // async function makePut(){
    //     let results = await axios({
    //         method: 'get',
    //         url: 'https://api-js401.herokuapp.com/',
    //         data: {
    //             //this is where we pass in data
    //         }
    //     });      

    // };


    function updateList(arr){
        setItemList(arr)
    }

    return(
        <>

        <MyMainForm updateList={updateList} />
        <List />
        </>
    )
}

export default ToDo;