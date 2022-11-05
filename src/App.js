import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm('are sure you want to delete?'))
      setFeedBack(feedback.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
