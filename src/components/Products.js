import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [posts, setposts] = useState(null);
  const [product,setproduct] = useState("");

  useEffect( () => {
    getAllData() ;


},[]) ;

  const getAllData = () => {

    axios.get("/db/products.json")
    .then(res => {
      const p = res.data;
      setposts( p );
    });
    
    
  }

  return (
 <>
    <h1>API Posts</h1>
    <input list="produits" placeholder="Enter Post Title" onChange={event => setproduct(event.target.value)} />
    <datalist  id="produits">
    {posts && posts.map( p => {
        return (

          <option key={p.id} value={p.title}>{p.title}</option>
          )
  })}
    </datalist>
  <ul>
  {posts && posts.filter(post => {
    if (product === '') {
      return post;
    } else if (post.title.toLowerCase().includes(product.toLowerCase())) {
      return post;
    }
  }).map( p => {
        return (

          <li key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <img src={p.image} ></img>
                <p>{p.description}</p>
                <p>{p.prix}</p>
          </li>
          )
  })}
  </ul> 
 </>
  );
}

export default Products;