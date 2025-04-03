import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div>
                <h2>Page Not Found</h2>
                <p>
                  Looks like you've followed a broken link or entered a URL that
                  doesn't exist on this site.
                </p>
                <a href="/">Back to our site</a>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
