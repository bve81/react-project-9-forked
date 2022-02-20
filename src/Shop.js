import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loader from "./Loader";

export default function Shop() {
  const [loader, setLoader] = useState(true);
  const [items, setItems] = useState();
  useEffect(() => {
    setLoader(true);
    fetch("https://covid-shop-mcs.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setItems(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  if (!items) {
    return null;
  }
 if (loader) {return <Loader/>
   } else {return (
    <>
      <div className="shop"> 
        <ul className="marker:text-sky-400 list-inside pl-5 space-y-3 text-slate-500 p-6 divide-y divide-slate-200">
          {items.map((item) => (
            <li
              className="marker:text-sky-400 list-inside pl-5 space-y-3 text-slate-500 after:border-solid"
              key={item.id}
            >
              <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <Item info={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );}
}
