import css from './Section.module.css';
import PropTypes from "prop-types";

const Section = ({title, children}) => {
  return (
    <section className={title ? css.superSection : css.section}>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </section>
  )
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
