import { withHook } from '../../utils/withHook';
import HomePage from './HomePage';
import useHome from './HomeLogic';

const Home = withHook(useHome, HomePage);

export default Home;