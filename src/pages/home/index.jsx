import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold">
        This is the home page
          </h3>
      <br />
      <Link to="about">Click to view our about page</Link>
      <br />
      <br />
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Home;
