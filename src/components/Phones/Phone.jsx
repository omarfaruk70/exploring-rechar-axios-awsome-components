import { useEffect, useState } from "react";

const Phone = () => {
    const [phone, setphone] = useState([]);
    useEffect(()=>{

        // data fetching using fetch
        // fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
        // .then(res => res.json())
        // .then(data => setphone(data.data))
    },[])
    return (
        <div>
            <h1 className="text-5xl">{phone.length}</ h1>
        </div>
    );
};

export default Phone;