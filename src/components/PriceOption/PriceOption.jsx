import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({gyminfo}) => {
    const {price, features, membership}  = gyminfo;
    // console.log(gyminfo);
    return (
        <div className='bg-violet-500 text-white p-5 rounded-lg flex flex-col'>
            <div className='text-center'>
            <h2 className='my-5'>
                <span className='text-4xl font-extrabold'>{price} $</span>
                <span className='text-2xl'>/Month</span>
            </h2>
            <h3 className='text-3xl mb-5'>{membership}</h3>
            </div>
          <div className='pl-5 mb-3 flex-grow'>
          {
            features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
           }
          </div>
          <button className='bg-green-700 w-full mx-auto py-2 font-bold hover:bg-green-900 rounded-2xl hover:italic'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    gyminfo: PropTypes.object.isRequired
}
export default PriceOption;