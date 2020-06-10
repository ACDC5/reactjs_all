
//redux的store层
const defaultState = {
    inputValue:'Write Something',
    list:[
        '早8点开晨会，分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '晚5点组织人员进行Review代码'
    ]
}
export default (state = defaultState,action) => {
    return state;
}
