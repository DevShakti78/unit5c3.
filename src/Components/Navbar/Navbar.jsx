import { Link } from "react-router-dom";

export const Navbar = () => {
  
  return (
   
      <div className="navbar" >
      <Link style={{textDecoration:"none"}}  to="/" title="Home"><button className="home" style={{marginRight:"50px"}}>Home</button> </Link> 
      <Link style={{textDecoration:"none"}}  to="/section/history" title="History"><button className="history" style={{marginLeft:"50px"}}> History  </button> </Link>
      <Link style={{textDecoration:"none"}}  to="/section/mystery" title="Mystery"> <button className="mystery" style={{marginLeft:"50px"}}>Mystery  </button> </Link> 
      <Link style={{textDecoration:"none"}}  to="/section/mythology" title="Mythology"><button className="mythology" style={{marginLeft:"50px"}}> Mythology  </button> </Link> 
      <Link style={{textDecoration:"none"}}  to="/section/technology" title="technology"><button className="technology" style={{marginLeft:"50px"}}>  Technology  </button> </Link>
        
      </div>
   
  );
};
