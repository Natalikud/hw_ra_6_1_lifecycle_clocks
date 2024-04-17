
import Clocks from '../../Clocks/js/Clocks';

import Form from '../../Form/js/Form';
import { useState } from "react";
import '../css/WorldTime.css'

export default function WorldTime() {
  const [clock, setClock] = useState([])

  return (
    <div className='world-time'>
      <Form 
        setClock = {setClock}
      />
      <Clocks 
        clock={clock}
        setClock = {setClock}
      />
    </div>
  );
}
