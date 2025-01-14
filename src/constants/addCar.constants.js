import {images} from '../config/Images';

export const carTypes = [
  {id: 1, title: 'SUV', image: images.suv},
  {id: 2, title: 'Hatchback', image: images.hatchback},
  {id: 3, title: 'Sedan', image: images.sedan},
  {id: 4, title: 'Coupe', image: images.coupe},
  {id: 5, title: 'Convertible', image: images.convertible},
  {id: 6, title: 'Pickup', image: images.pickup},
  {id: 7, title: 'Station Wagon', image: images.pickup},
];
export const powertainTypes = [
  {id: 1, title: 'Diesel', image: images.diesel},
  {id: 2, title: 'Gas', image: images.gas},
  {id: 3, title: 'Electric', image: images.electric},
  {id: 4, title: 'Hybrid', image: images.hybrid},
];
export const manualTypes = [
  {title: 'Manual', image: images.manual},
  {title: 'Automatic', image: images.automatic},
];

// {title: 'Diesel', image: require('../assets/images/diesel.png')},
// {title: 'Gas', image: require('../assets/images/gas.png')},
// {title: 'Electric', image: require('../assets/images/electric.png')},
// {title: 'Hybrid', image: require('../assets/images/hybrid.png')},
// {title: 'Manual', image: require('../assets/images/manual.png')},
// {title: 'Automatic', image: require('../assets/images/automatic.png')},
// allWheel: require('../assets/images/all-wheel.png'),
// auxInput: require('../assets/images/aux-input.png'),
// backupCamera: require('../assets/images/backup-camera.png'),
// blindSpot: require('../assets/images/blind-spot.png'),
// heatedSeats: require('../assets/images/heated-seats.png'),
// longTermCar: require('../assets/images/long-term-car.png'),
// usbInput: require('../assets/images/usb-input.png'),
// wheel_chairr: require('../assets/images/wheelchairr.png'),
// keylessEntry: require('../assets/images/keyless-entry.png'),
// gps: require('../assets/images/gps.png'),
// {
//     title: 'Wheelchair Accessibility',
//     image: images.wheel_chairr,
//   },
export const carFeatures = [
  {title: 'All Wheel Drive', image: images.allWheel},
  {title: 'Aux Input', image: images.auxInput},
  {
    title: 'Backup Camera',
    image: images.backupCamera,
  },
  {
    title: 'Bluetooth',
    image: images.bluetooth,
  },
  {title: 'Blind Spot', image: images.blindSpot},
  {title: 'Heated Seats', image: images.heatedSeats},
  {
    title: 'Long Term Car',
    image: images.longTermCar,
  },
  {title: 'USB Input', image: images.usbInput},

  {
    title: 'Keyless Entry',
    image: images.keylessEntry,
  },
  {title: 'GPS', image: images.gps},
];

export const disabilityFeatures = [
  {title: 'Wheelchair Lifts', image: images.wheel_chairr},
  {title: 'Wheelchair Ramps', image: images.wheel_chairr},
  {title: 'WAV Kits', image: images.wheel_chairr},
  {title: 'Steps', image: images.wheel_chairr},
  {title: 'Seats and Flooring', image: images.wheel_chairr},
  {title: 'Train Lifts', image: images.wheel_chairr},
];
