import FeedBackItem from './FeedBackItem';
function FeedbacKList({ feedback }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No item yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbacKList;
