import "./App.css";
import Footer from "./News/Footer/Footer";
import News from "./News/News/News";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "http://hn.algolia.com/api/v1/search?query=test"
  );
  
  if (loading) {
    return (
      <div className="Loading__Screen">
        <div className="d-flex justify-content-center align-self-center">
          <h1>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          </h1>
        </div>
      </div>
    );
  }

  if (error) console.log(error);

  return (
    <>
      <div className="App">
        <div className="app-background">
          <nav className="top-nav navbar nav-expand navbar-dark bg-grey fixed-top">
            <div className="header">
              <nav className="menu-bar">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button
                    className="navbar-toggler btn-light e"
                    type="button"
                    data-toggle="collapsed"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item e">
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item e">
                        <a className="nav-link" href="#">
                          Daily News
                        </a>
                      </li>
                      <li className="nav-item e">
                        <a className="nav-link" href="#">
                          Entertainment
                        </a>
                      </li>
                      <li className="nav-item e">
                        <a className="nav-link" href="#">
                          Sports
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </nav>
            </div>
            <nav className="menu-bar">
              <h1 className="e">
                <i className="bi bi-code-square red-text" />
                HACKER NEWS
              </h1>
            </nav>
          </nav>

          <h1 className="headlines mt-5 pt-5">TODAY'S HEADLINES</h1>

          <News data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
