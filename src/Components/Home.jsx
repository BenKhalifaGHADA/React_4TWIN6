import { useParams } from "react-router-dom";

function Home() {

  const {username}=useParams();
    return ( <>
      Home page , welcome {username}
    </> );
}

export default Home;