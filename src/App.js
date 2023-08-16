import React, { useState } from 'react';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Portfolio from './components/project/Portfolio';
import ContactMe from './components/contact/ContactMe';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('AboutMe');

  const renderSection = () => {
    switch (selectedSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactMe />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header setSelectedSection={setSelectedSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;
