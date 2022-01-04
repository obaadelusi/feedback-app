import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({ item }) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);

  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('This is an example of a feedback text');

  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 10;
  //     }); // Reason to use a function as parameter - If access to previous value is needed. Otherwise setRating(10)
  //   };
  // <button onClick={handleClick}>Click</button>

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FeedbackItem;
