import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Adviceapp = (props) => {

    const [press,setPress] = useState("Please Click the Button");
    const [count,setCount] = useState(0);
    const [img,setImg] = useState();

    async function Adfun(){
        try {
      const [dogRes, adviceRes] = await Promise.all([
        fetch("https://dog.ceo/api/breeds/image/random"),
        fetch("https://api.adviceslip.com/advice")
      ]);

      const dogData = await dogRes.json();
      const adviceData = await adviceRes.json();

      setImg(dogData.message);
      setPress(adviceData.slip.advice);
      setCount(prev => prev + 1);

    } catch (error) {
      setPress("Failed to fetch data. Try again!");
      console.error(error);
    }
    }
  return (
    <div id="a1">
         <div id='A1' className='card bg-info m-5 p-5 border border-3 border-warning '>
        <div className='text-center' >{img && <img id='A3' src={img} alt="image" />}</div>
        <div className='card-body mt-5'><h3 id='A2' className='text-center'>{press}</h3></div> 
        <div className=' text-center mt-3'><button className='btn btn-outline-success' onClick={Adfun}>Click Here</button></div>
        <PressCount count={count}/>
    </div></div>
  )
}
function PressCount(props){
    return(
        <>
        <div className='pt-3 text-center mt-3'><h5>Press Count is {props.count}</h5></div>
        <div className='pt-5 text-center mt-3'><h2>Created by Saran Murugan</h2></div>
        </>
    )
}
 