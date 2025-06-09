import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <PageNav />
      HOMEPAGE
      <Link to="/app"> Go to the App </Link>
      {/* HOMEPAGE
      <a href="/pricing">Pricing</a> */}
      {/* this will reload the page - spoils the purpose of SPAs */}
    </div>
  );
}

export default Homepage;
