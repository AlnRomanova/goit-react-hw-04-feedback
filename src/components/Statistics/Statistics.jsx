import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

  return (
    <div className={css.statictics}>
      <h2 className={css.title}>Statistics</h2>
      <p className={css.rating}>Good: {good}</p>
      <p className={css.rating}>Neutral: {neutral}</p>
      <p className={css.rating}>Bad: {bad}</p>
      <p className={css.rating}>Total: {total}</p>
      <p className={css.rating}>Positive feedback: {positivePercentage}</p>
    </div>

  )
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
}
