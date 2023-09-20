import PropTypes  from 'prop-types';
import { BiSolidCheckCircle } from "react-icons/bi";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-3"><BiSolidCheckCircle></BiSolidCheckCircle>   {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}
export default Feature;