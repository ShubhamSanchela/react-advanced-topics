import { FaReact } from "react-icons/fa"
import { MdFace, MdCardGiftcard } from "react-icons/md";
import { IconContext }  from "react-icons"

function Icon() {
    return (
      <IconContext.Provider value={{ color:"blue" , size:"15rem" }}>
      <div className="App">
       <FaReact />
       <MdFace color="purple" size="5rem" />
       <MdCardGiftcard/>
       </div>
       </IconContext.Provider>
    );
  }
  
  export default Icon;
  