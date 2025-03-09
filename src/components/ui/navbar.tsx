import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <nav>
       <ul>
         <li>
           <Link to="malcolm_dzimati_personal_site/">Home</Link>
         </li>
         <li>
           <Link to="malcolm_dzimati_personal_site/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </nav>
   );
 }

 export default Navbar