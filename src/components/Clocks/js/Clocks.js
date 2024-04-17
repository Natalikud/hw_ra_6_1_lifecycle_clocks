import '../css/Clocks.css'
import Clock from '../../Clock/js/Clock.js';

export default function Clocks({clock, setClock}) {
  console.log(clock);
  
  const handlerClose = (place) => {
    setClock((prevState) =>{
      return prevState.filter((el) => el.place !== place);
    });
  }

  return (
  <div className='clocks'>
    {clock.map((el, index) =>{
      return (
        <Clock
          key={index}
          place = {el.place}
          timeZone = {el.timeZone}
          handlerClose = {handlerClose}
        />
      );
    })}
  </div>
  );
}
