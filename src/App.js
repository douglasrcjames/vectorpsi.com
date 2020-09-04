import React from 'react';
import { Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import history from './history';
import Routes from "./routes";

// Components
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

// CSS
import "./assets/css/Text.css";
import "./assets/css/Align.css";
import "./assets/css/Images.css";
import "./assets/css/Buttons.css";
import "./assets/css/Forms.css";
import "./assets/css/Misc.css";

// This component fixes bug where new page load would sometimes be in the middle or bottom
import ScrollToTop from "./components/misc/ScrollToTop";

function App() {
  return (
    // <div className="wrapper">
    //   <h1>Vector Process Solutions, Inc</h1>
    //   <p>Our website is currently under construction, check back soon! Contact <u>apennell@vectorpsi.com</u> for any questions.</p>
    // </div>
    <ToastProvider placement="top-center" autoDismiss={true}>
      <Router history={history}>
        <ScrollToTop>
          <Header />
          <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </ToastProvider>
    
  );
}

export default App;
