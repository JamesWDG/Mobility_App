import labels from '../assets/labels/English.labels';
import {showToast} from './Toast';

const Utility = {
  // validate email regex
  validateEmail: function (email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  // validate password regex
  validatePassword: function (password) {
    var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
  },
  // validate name regex
  validateAlphabet: function (text) {
    var re = /^[a-z ,.'-]+$/i;
    return re.test(text);
  },
  // validate phone regex
  validatePhone: function (text) {
    var re = /^(\+1\s?)?(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
    return re.test(text);
  },
  isANumber: function (str) {
    return !/\D/.test(str);
  },
  // validate instagram regex
  validateInstagram: function (text) {
    var re = /^[a-zA-Z0-9._]+$/;
    return re.test(text);
  },
  // validate twitter regex
  validateTwitter: function (text) {
    var re = /^[a-zA-Z0-9._]+$/;
    return re.test(text);
  },
  isImgLink: function (url) {
    var regex =
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(url)) {
      return false;
    } else {
      return true;
    }
  },
  validateSignupSchema: function (payload) {
    return !payload.name
      ? showToast(labels.nameIsRequired, 'error')
      : !payload.email
      ? showToast(labels.emailIsRequired, 'error')
      : !Utility.validateEmail(payload.email)
      ? showToast(labels.emailIsInValid, 'error')
      : !payload.phone
      ? showToast(labels.phoneIsRequired, 'error')
      : !this.validatePhone(payload.phone)
      ? showToast(labels.phoneIsInvalid, 'error')
      : !payload.password
      ? showToast(labels.passwordIsRequired, 'error')
      : payload.password.length < 8
      ? showToast(labels.passwordMustBeAtleast8Character, 'error')
      : payload.password !== payload.confirmPassword
      ? showToast(labels.passwordDoseNotMatch, 'error')
      : true; // If not a service provider, return true
  },
  cardNumberFormat: function (value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{0,20}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  },
  validateLoginSchema: function (payload) {
    return !payload.email
      ? showToast(labels.emailIsRequired, 'error')
      : !Utility.validateEmail(payload.email)
      ? showToast(labels.emailIsInValid, 'error')
      : !payload.password
      ? showToast(labels.passwordIsRequired, 'error')
      : payload.password.length < 8
      ? showToast(labels.passwordMustBeAtleast8Character, 'error')
      : true; // If not a service provider, return true
  },
  placeLocatedSchema: function (payload) {
    return !payload.startTime
      ? showToast(labels.checkInTimeIsRequired, 'error')
      : !payload.endTime
      ? showToast(labels.checkOutTimeIsRequired, 'error')
      : true; // If not a service provider, return true
  },
  basicsABoutYourPlace: function (payload) {
    return payload.features.length == 0
      ? showToast(labels.atLeastSelectOneFeature, 'error')
      : payload.safties.length == 0
      ? showToast(labels.alLeastSelectOneSafetyFeature, 'error')
      : true; // If not a service provider, return true
  },
  roomRentSchemaValidation: function (payload) {
    return !payload.name
      ? showToast(labels.nameIsRequired, 'error')
      : !payload.description
      ? showToast(labels.descriptionIsRequired, 'error')
      : true; // If not a service provider, return true
  },
  basicInfoCarListing: function (payload) {
    return !payload.name
      ? showToast(labels.titleIsRequired, 'error')
      : !payload?.vehicleMake
      ? showToast(labels.atleastOneVehicleMakeIsRequired, 'error')
      : !payload?.vehicleModel?.length
      ? showToast(labels.atleastOneVehicleModelIsRequired, 'error')
      : !payload.registrationNumber
      ? showToast(labels.registrationNumberIsRequired, 'error')
      : !payload.licenseNumber
      ? showToast(labels.licenseNumberIsRequired, 'error')
      : !payload.platenumber
      ? showToast(labels.plateNumberIsRequired, 'error')
      : !payload.milage
      ? showToast(labels.vehicleMileageIsRequired, 'error')
      : !payload.startTime
      ? showToast(labels.pickupIsRequired, 'error')
      : !payload.endTime
      ? showToast(labels.dropOffIsRequired, 'error')
      : true; // If not a service provider, return true
  },
  locationAddCar: function (payload) {
    console.log(
      Number(payload?.numberOfDoors),
      Number(payload?.numberOfSeats),
      'nubebveb',
    );
    return !payload.vehicleType
      ? showToast(labels.vehicleType, 'error')
      : !payload?.numberOfDoors
      ? showToast(labels.numberOfDoorsIsRequired, 'error')
      : Number(payload?.numberOfDoors) > 10
      ? showToast(labels.numberOfDoorsShouldBeLessThan10, 'error')
      : !payload?.numberOfSeats
      ? showToast(labels.numberOfSeatsIsRequired, 'error')
      : Number(payload?.numberOfSeats) > 10
      ? showToast(labels.numberOfSeatsShouldBeLessThan10, 'error')
      : !payload.powertain?.length
      ? showToast(labels.atleastOnePowertainIsRequired, 'error')
      : !payload.manualTypes?.length
      ? showToast(labels.atleastOneTransmissionIsRequired, 'error')
      : true; // If not a service provider, return true
  },
  expiryDate: function (text) {
    let expiry =
      text.length === 3 && !text.includes('/')
        ? `${text.substring(0, 2)}/${text.substring(2)}`
        : text;
    return expiry;
  },
  // Uppercase regex
  uppercaseWords: function (text) {
    var str = text.toLowerCase();
    return str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
  },
  // Username regex
  validateUsername: function (text) {
    var re = /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9_-]+)*$/;
    return re.test(text);
  },
};

export default Utility;
