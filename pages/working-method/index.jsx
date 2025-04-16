import React from 'react';
import {useState, useEffect} from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
export default function page(){
    const [data, setAPIData] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/working-method');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Business Model Module", error);
            }
        };
        fetchAPI();
    }, []);
    return(
        <>
            <Header />
            <div>page</div>
            <Footer />
        </>
        
    )
}