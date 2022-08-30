import React from "react";
import {fetchedCountries} from '../api'
import { useEffect, useState } from 'react';
import '../CountrySelector/CountrySelector.css'

const CountrySelector=({handleCountryChange})=>{
    const [Countries,setcountires] = useState([]);
    useEffect(()=>{
        const Country = async ()=>{
            setcountires(await fetchedCountries());
        }
        Country();
    },[setcountires]) 
        return (
            <>
        <div className="form">
            <select className="select" default="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option className="option" value=''>Global</option>
                {Countries.map((c,i)=><option  key={i}   value={c}>{c}</option>)}
            </select>
        </div>
            </>
        );
    }

 
export default CountrySelector;
