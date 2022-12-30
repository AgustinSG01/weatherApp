import React, { useState } from 'react';
import style from "./Searchbar.module.css"
export default function SearchBar({onSearch}) {
  const [valor, setValor] = useState("");
 
 return (<div className={style.searchBar}>
  <form className={style.form} onSubmit={(e)=>{
    e.preventDefault()
    setValor("")
    onSearch(valor)
    } }><div className={style.group}>
    <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
    <input value={valor} onChange={e => setValor(e.target.value)} placeholder="Search" type="search" className={style.input}/>
  </div>
  </form>
  </div>)
};
