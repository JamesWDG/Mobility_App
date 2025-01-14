import Login from '../../screens/login/Login';
import SelectLanguage from '../../screens/selectLanguage/SelectLanguage';
import Splash from '../../screens/splash/Splash';
import IntroSlider from '../../screens/introSlider/InteroSlider'
import Signup from '../../screens/signup/Signup';
import RulesForVender from '../../screens/rulesForVender/RulesForVender';
import ThankYouScreen from '../../screens/thankYouScreen/ThankYouScreen';
import SignIn from '../../screens/signin/SignIn';
import ForgetPassword from '../../screens/forgetPassword/ForgetPassword';
import VerifyOtp from '../../screens/verifyOtp/VerifyOtp';
import ResetPassword from '../../screens/reserPassword/ResetPassword';
export const authRoutes = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'Select Language',
    component: SelectLanguage,
  },
  {
    name: 'intro',
    component: IntroSlider,
  },
  {
    name: 'Signup',
    component: Signup,
  },
  {
    name: 'rules',
    component: RulesForVender,
  },
 
  {
    name: 'signin',
    component: SignIn,
  },
  {
    name: 'forget',
    component: ForgetPassword,
  },
  {
    name: 'verifyOTP',
    component: VerifyOtp,
  },
  {
    name: 'reset',
    component: ResetPassword,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'thankYou',
    component: ThankYouScreen,
  },
];
