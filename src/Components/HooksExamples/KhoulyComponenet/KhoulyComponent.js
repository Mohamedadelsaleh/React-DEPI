import axios from 'axios';
import React, { useEffect, useState } from 'react'

const KhoulyComponent = () => {
    
     const [inputValue, setInputValue] = useState('');
     const [post, setPost] = useState({});

     useEffect(() => {
        if (!inputValue) return; // Avoid fetching if inputValue is empty
        axios.get(`https://jsonplaceholder.typicode.com/posts/${inputValue}`).then((response) => {
            console.log(response.data);
            setPost(response.data);
        }).catch((error) => {   
            console.error("Error fetching data:", error);
            setPost({}); // Reset post if there's an error
        });
     }, [inputValue]);

 return (
    <div>
        <h1>Component {inputValue}</h1>
        <input type='text' value={inputValue} onChange ={(e)=> {setInputValue(e.target.value)}} />
        {
            <h2>{post.title}</h2>
            // post.map((post) => (
            // <h3 key={post.id}>{post.title}</h3>
            // ))
    }
    </div>
  )
}

export default KhoulyComponent