import React, {useState} from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import Reveal from 'react-reveal/Reveal';

function Notices(){
  const [refresh, setRefresh] = useState(false);

  function handleClick(){
    setRefresh(!refresh);
  }
  if (refresh===true){
    const myTimeout = setTimeout(handleClick, 3000);
  }

  return(

    <div id="Notices" style={{backgroundColor:"#EEEEEE"}}>
    <Reveal effect="animate__fadeInDown" duration={2000}>
      <h1>Notices</h1>
    </Reveal>
    <Reveal effect="animate__tada" duration={2000}>
      <img className="panda-img" src={refresh===false?"images/panda-still.png":"images/panda-gif.gif"}alt="panda image" width="500" height="600"/>
    </Reveal>
    <Reveal effect="animate__fadeInUp" duration={2000}>
      {refresh?<h2>Refreshing...</h2>:<h2>No new notices</h2>}
      <button onClick={handleClick} type="button" className="btn btn-outline-warning">Refresh <RefreshIcon/></button>
    </Reveal>
    </div>

  );
}

export default Notices;
