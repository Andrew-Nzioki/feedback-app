import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('are sure you want to delete?'))
      setFeedBack(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
