import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from '../components/TopButtons';
import Inputs from '../components/Inputs';
import TimeAndLocation from '../components/TimeAndLocation';
import TemperatureAndDetails from '../components/TemperatureAndDetails';

function Climate(){
    return(
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400'>
            <TopButtons/>
            <Inputs/>
            <TimeAndLocation/>
            <TemperatureAndDetails/>
        </div>
    );
}

export default Climate