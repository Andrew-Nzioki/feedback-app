import React from 'react';
import Card from './shared/Card';
function FeedbackForm() {
  return (
    <Card>
      FeedbackForm
      <form>
        <h2>How would you rate our service</h2>
        {/*rating select component*/}
        <div className="input-group">
          <input type="text" placeholder="Write your Review" />
          <button></button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
