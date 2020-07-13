import React ,{Component}from 'react';

let defaultState = {
    inpValue:'say anything',
    list:['triNameTX',
          'triIdTX',
          'triFormNameTX',
          '精油推背',
    ]
}

export default((state=defaultState,action) => {

    if (action.type==='checkInputValue'){
        let newData = JSON.parse(JSON.stringify(state))
        newData.inpValue = action.value;
        return newData;
    }

    if (action.type==='addItem'){
        let newData = JSON.parse(JSON.stringify(state))
        newData.list.push(action.value);
        JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}},"":7}',(k,v) => {
            console.log('key:'+ k,' value:'+ v)
            console.log();
        })
        newData.inpValue = '';
        return newData;
    }

    if (action.type==='deleteItem'){
        let newData = JSON.parse(JSON.stringify(state))
        newData.list.splice(action.value,1);
        return newData;
    }
    return state;
})
