// import axios from "axios";
import { useEffect, useState } from "react";

const Phone = () => {
    const [phone, setphone] = useState([]);
    useEffect(()=>{

        //  01 data fetching using fetch
        fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
        .then(res => res.json())
        .then(data => setphone(data.data))
        // console.log(phone);
        
        // 02 using axios
        // how to use axios
        // npm install axios
        // import axios from 'axios'
        // axios.get('url')
        // axios.get('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
        // .then(data=> console.log(data))
        
    },[])
    return (
        <div>
            <h1 className="text-5xl">{phone.length}</ h1>
        </div>
    );
};

export default Phone;