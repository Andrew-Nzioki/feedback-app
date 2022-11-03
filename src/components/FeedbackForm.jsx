import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
function FeedbackForm() {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      FeedbackForm
      <form>
        <h2>How would you rate our service</h2>
        {/*rating select component*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your Review"
            value={text}
          />
          <Button type="submit" version="secondary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
