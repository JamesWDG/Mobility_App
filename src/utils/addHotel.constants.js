import labels from '../assets/labels/English.labels';
import {images} from '../config/Images';

export const houseTypes = [
  {title: 'Tree House', image: images.tree_house},
  {title: 'Tower', image: images.tower},
  {title: 'House', image: images.house},
  {title: 'Appartment', image: images.appartment},
  {title: 'Barn', image: images.barn},
  {title: 'Bed & Breakfast', image: images.bed_breakfast},
  {title: 'Boat', image: images.boat},
  {title: 'Cabin', image: images.cabin},
  {title: 'Camper', image: images.camper},
  {title: 'Casa Particular', image: images.casa_particular},
  {title: 'Castle', image: images.castle},
  {title: 'Cave', image: images.cave},
  {title: 'Container', image: images.container},
  {title: 'Cycladic Home', image: images.cycladic_home},
  {title: 'Dammuso', image: images.dammuso},
  {title: 'Dome', image: images.dome},
  {title: 'Earth Home', image: images.earth_home},
  {title: 'Farm', image: images.farm},
  {title: 'Guest House', image: images.guest_house},
  {title: 'House Boat', image: images.house_boat},
  {title: 'Kezhan', image: images.kezhan},
  {title: 'Minsu', image: images.minsu},
  {title: 'Riad', image: images.raid},
  {title: 'Rokyan', image: images.rokyan},
  {title: "Shepherd's Hut", image: images.shepherds_hut},
  {title: 'Tent', image: images.tent},
  {title: 'Tiny Home', image: images.tiny_home},
  {title: 'Trullo', image: images.trullo},
  {title: 'Windmill', image: images.windmill},
  {title: 'Yurt', image: images.yurt},
];

export const guestHave = [
  {
    title: labels.aRoom,
    description: labels.guestHaveTheirOwnRoom,
    image: images.room,
  },
  {
    title: labels.aSharedRoom,
    description: labels.guestSleepInCommonArea,
    image: images.tower,
  },
  {
    title: labels.aEntirePlace,
    description: labels.guestHaveWholeSpace,
    image: images.house,
  },
];

export const houseFeatures = [
  {id: 1, title: 'WiFi', image: images.wifi},
  {id: 2, title: 'TV', image: images.tv},
  {id: 3, title: 'Kitchen', image: images.kitchen},
  {id: 4, title: 'Washer', image: images.washer},
  {id: 5, title: 'Free Parking on Premises', image: images.free_parking},
  {id: 6, title: 'Air Conditioner', image: images.air_conditioner},
  {id: 7, title: 'Paid Parking on Premises', image: images.paid_parking},
  {id: 8, title: 'Dedicated Workspace', image: images.dedicated_workspace},
];
export const specialFeatures = [
  {id: 1, title: 'Pool Table', image: images.pool_table},
  {id: 2, title: 'Pool', image: images.pool},
  {id: 3, title: 'Hot Tub', image: images.hot_tub},
  {id: 4, title: 'Firepit', image: images.firepit},
  {id: 5, title: 'Patio', image: images.patio},
  {id: 6, title: 'BBQ Grill', image: images.bbqgrill},
  {id: 7, title: 'Outdoor Dining Area', image: images.outdoor_dining_area},
  {id: 8, title: 'Indoor Fireplace', image: images.indoor_fireplace},
  {id: 9, title: 'Lake Access', image: images.lake_access},
  {id: 10, title: 'Beach Access', image: images.beach_access},
  {id: 11, title: 'Ski-In/Ski-Out', image: images.ski_in_out},
  {id: 12, title: 'Outdoor Shower', image: images.outdoor_shower},
  {id: 13, title: 'Gym', image: images.gym}, // Added Gym feature
];

export const safetyFeatures = [
  {id: 1, title: 'First Aid Kit', image: images.first_aid_kit},
  {id: 2, title: 'Fire Extinguisher', image: images.fire_extinguisher},
  {id: 3, title: 'Smoke Alarm', image: images.smoke_alarm}, // Assuming you have an image for smoke alarm
  {id: 4, title: 'Carbon Monoxide Alarm', image: images.carbon_monoxide_alarm}, // Assuming you have an image for carbon monoxide alarm
];
export const disabilityItems = [
  {
    id: 11,
    title: 'Lower floor room wheel chair users',
    image: images.wheelchair,
  },
  {id: 22, title: 'Strobe access for the deaf', image: images.wheelchair},
  {id: 33, title: 'Fire alarm flasher for the deaf', image: images.wheelchair}, // Assuming you have an image for smoke alarm
  {id: 44, title: 'Video Phone access for the deaf', image: images.wheelchair}, // Assuming you have an image for carbon monoxide alarm
  {id: 55, title: 'Bralle access for the blind', image: images.wheelchair}, // Assuming you have an image for carbon monoxide alarm
  {id: 66, title: 'Lower floor for the blind', image: images.wheelchair}, // Assuming you have an image for carbon monoxide alarm
];
