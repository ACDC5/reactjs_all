import React,{useState,useMemo} from "react";

//useMemo类似 shouldComponentUpdate
//当父组件更新时子组件也会跟着更新(自上而下的更新)，在
//大多数情况下，这会使app性能降低，useMemo解决重复渲染，没必要渲染组件的情况
function Exp_useMemo() {
    const [xiaohong,setXiaohong] = useState('小红在待客状态');
    const [zhiling,setZhiling] = useState('志玲在待客状态');

    return(
        <>
            <button onClick={() => {setXiaohong(new Date().getTime()+'小红来了')}}>小红</button>
            <button onClick={() => {setZhiling(new Date().getTime()+'志玲向我们走来')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}
export default Exp_useMemo;

function ChildComponent({name,children}) {

    function changeXiaohong() {
        console.log('小红她来了');
        return name+',小红在我们身边';
    }

    // const actionXiaohong = changeXiaohong(name);
    //当参数二(name)发生改变时才执行参数1这个方法。跟useEffect参数2触发解绑的逻辑一样
    //父组件中的状态发生了变化，子组件会默认刷新，使用useMemo相当于做一个判断，
    // 判断当前组件的逻辑是否是要跟随父组件的更新而更新。
    //在这里只有当小红的状态发生改变时，才更新子组件，因为父组件传递name被当作了useMemo的第二参数
    //useMemo相当于起了缓存了状态或属性的作用(在这个组件可以理解成缓存了父组件的xiaohong状态)
    const actionXiaohong = useMemo(() => changeXiaohong(name),[name]);
    return(
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}
