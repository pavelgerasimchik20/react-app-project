import React, {createElement as e, useState} from 'react';

function App() {
  
  const [count, setCount] = useState(0)
  
  return e("div",{className: "container"},[
    e("h1", {className: "font-bold", key: 1}, `Counter ${count}`),  
    //e("img",{className: "image-main", src: "images/marvel.jpg", key: 2}, ""),  
    e("button",
      {
      className: "py-2 px-4 border",
      key: 3,
      onClick: () => setCount(count + 1)
      }
      , "btn")
  ])
}

export default App;
