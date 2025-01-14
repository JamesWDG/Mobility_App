import AddCars from '../../screens/addCars/AddCars';
import AddHotel from '../../screens/addHotel/AddHotel';
import ChooseYourPlan from '../../screens/chooseYourPlan/ChooseYourPlan';
import Home from '../../screens/home/Home';
import MessageScreen from '../../screens/messageScreen/MessageScreen';
import MyCars from '../../screens/myCars/MyCars';
import MyHotels from '../../screens/myHotels/MyHotels';
import Payment from '../../screens/payment/Payment';
import ThankYouScreen from '../../screens/thankYouScreen/ThankYouScreen';

export const appRoutes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Messages',
    component: MessageScreen,
  },
  {
    name: 'chooseYourPlan',
    component: ChooseYourPlan,
  },
  {
    name: 'Payment',
    component: Payment,
  },
  {
    name: 'paymentSuccessFull',
    component: Payment,
  },
  {
    name: 'thankYou',
    component: ThankYouScreen,
  },
  {
    name: 'MyHotels',
    component: MyHotels,
  },
  {
    name: 'addHotel',
    component: AddHotel,
  },
  {
    name: 'myCars',
    component: MyCars,
  },
  {
    name: 'addCars',
    component: AddCars,
  },
];
