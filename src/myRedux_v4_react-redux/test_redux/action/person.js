import {ADD_PERSON} from "../../constant";

// redux的action文件
export const addPersonAction = personObj => {
    return {type:ADD_PERSON,data:personObj}
}
