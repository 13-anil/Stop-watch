import React, { useState } from 'react';

const Interval = () => {

    const [items, setItems] = useState([]);

   const addItem = () => {
    setItems([ ...items, getCurrentTime() ]);
  };
  
  const getCurrentTime= ()=> {
        let date = new Date(Date.now());
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let mili = date.getMilliseconds();
        
        return { hour, min, sec, mili };
    }

    if (getCurrentTime.hour < 10) {
        getCurrentTime.hour = "0" + getCurrentTime.hour;
    }
    if (getCurrentTime.min < 10) {
        getCurrentTime.min = "0" + getCurrentTime.min;
    }
    if (getCurrentTime.sec < 10) {
        getCurrentTime.sec = "0" + getCurrentTime.sec;
    }
    if (getCurrentTime.mili < 100) {
        getCurrentTime.mili = "0" + getCurrentTime.mili;
    }


       return (
           <div>
           <button onClick= {addItem}>
                Interval Time
           </button>
           <table>
        <tbody>
        {items.map((value, index) => {
            return <tr key={index}>
              <td>{value.hour}:{value.min}:{value.sec}-{value.mili}</td>
            </tr>
          })}
          </tbody>
      </table>
           </div>
       );
}
export default Interval;