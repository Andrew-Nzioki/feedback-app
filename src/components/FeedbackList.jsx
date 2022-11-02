import PropTypes from 'prop-types';
import FeedBackItem from './FeedBackItem';
function FeedbacKList({ feedback, handleDelete }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbacKList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbacKList;
