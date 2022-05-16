import { useEffect, useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';


function Products() {
  const [posts, setposts] = useState(null);
  const [product,setproduct] = useState("");
  const [panier,setpanier] = useState(null);
  const [total,settotal] = useState(0);

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

function decrement(index) {

  let items = [...posts];
  let item = {...items[index.target.id]}
  if(item.quantitySelected > 0){
  item.quantitySelected = item.quantitySelected - 1;
  items[index.target.id] = item;
   setposts(items);
  }
}

function increment(index) {
  let items = [...posts];
  let item = {...items[index.target.id]};

  item.quantitySelected = item.quantitySelected + 1;
  item.addedToBasket = true
  items[index.target.id] = item;
   setposts(items);

}

function addme(){
  setpanier(posts.filter(p => p.addedToBasket))

}



 function reset(id){
  const remove = panier.filter( i => i.id != id.target.id);
  setpanier(remove);

 }

//  function totalBasket(){
//    let sumPrix = 0;


//   panier.forEach(element => {
//     sumPrix += element.prix * element.quantitySelected;
//   });
//   console.log(sumPrix)
//   settotal(sumPrix) ;

//   return total;

//  }

  return (
 <>

 <header>
   <img src="img/horizontalCouleur.png" alt="PROUT" />
   <div className='recherche'>
    <input list="produits" placeholder="Enter Post Title" onChange={event => setproduct(event.target.value)} />
   </div>

   <datalist  id="produits">
   {posts && posts.map( p => {
       return (

         <option key={p.id} value={p.title}>{p.title}</option>
         )
 })}
   </datalist>
   <nav>
     <a href="">Boutique</a>
     <a href="">Contact</a>
     <a href="">Chépa</a>
     <a href="">Chépanonplus</a>
   </nav>
 </header>

    <div className='basket'>
      <ul >
        <h3>Panier</h3>
      {panier && panier.map( p => {
        return (
          <>
          <li key={p.id}>{p.title} : {p.prix*p.quantitySelected} €           <button id={p.id} onClick={reset.bind(p.id)}>X</button></li>
          </>
          )
  })}
  {/* {console.log(panier)} */}
      </ul>
      <label>Total : {total} €</label>
    </div>


  <div className='container'>
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
                <p>{p.prix} €</p>
                <div>
                  <button id={p.id} onClick={decrement.bind(p.id)} className='quantity'>-</button>
                  <label>{p.quantitySelected}</label>
                  <button id={p.id} onClick={increment.bind(p.id)} className='quantity'>+</button>
                  <button id={p.id} onClick={addme.bind()} className='ajouter'>Add me</button>
                </div>
          </li>
          )
  })}
  </ul>
  </div>
 </>
  );
}

export default Products;
