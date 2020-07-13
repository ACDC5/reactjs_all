import React, {useState,useEffect} from 'react';


export default function BDMap() {
    const [container,setContainer] = useState(null)

    useEffect(() =>{
        let map = new window.BMap.Map(container);
        map.centerAndZoom(new window.BMap.Point(116.404, 39.915,11));
        map.addControl(new window.BMap.MapTypeControl());
        map.setCurrentCity("北京");
        map.enableScrollWheelZoom(true);
    })

    return(
        <div>
            <div className={container} id={container}></div>
        </div>
    )
}
