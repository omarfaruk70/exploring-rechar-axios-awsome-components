import PropTypes from "prop-types";
const Navlink = ({ route }) => {


  return (
    <li className="ml-7 py-1 hover:bg-gray-300 text-red-800">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};



Navlink.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Navlink;
