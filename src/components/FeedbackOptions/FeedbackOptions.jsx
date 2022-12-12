import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback }) => {

  const keys = Object.keys(options);

  return (
    <ul className={css.option}>
      {keys.map(key => (
        <li key={key}>
          <button
            className={css.btn}
            type="button"
            onClick={()=> onLeaveFeedback(key)}
          > {key}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
