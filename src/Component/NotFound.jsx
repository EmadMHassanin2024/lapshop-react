import { Link } from "react-router-dom";
export default function NotFound(){
  return  (

    <>
    <div style={{backgroundColor:"blue"}}>
    <h1>404 Not Found</h1>
    <h3>the url you visited is not found</h3>
    </div>
<Link to="/home">

<button>
      return home page
    </button>
    </Link>
    </>
  );
}