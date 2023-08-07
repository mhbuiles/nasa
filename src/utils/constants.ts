const CURIOSITY_PHOTOS_BASE_URL = "/curiosity/photos";
const CURIOSITY_LATEST_PHOTOS_BASE_URL = "/curiosity/latest_photos";
const OPPORTUNITY_PHOTOS_BASE_URL = "/opportunity/photos";
const OPPORTUNITY_LATEST_PHOTOS_BASE_URL = "/opportunity/latest_photos";
const SPIRIT_PHOTOS_BASE_URL = "/spirit/photos";
const SPIRIT_LATEST_PHOTOS_BASE_URL = "/spirit/latest_photos";

const EARTH_DATE_DAY = "2020-09-22";
const SOL_DATE = 2890;

const PHOTO_1 =
  "https://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137086EDNAS00P1585L0M1-BR.JPG";
const PHOTO_2 =
  "https://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950L0M1-BR.JPG";

const HOME_PAGE_TABS = {
  curiosity: "Curiosity",
  opportunity: "Opportunity",
  spirit: "Spirit",
};

const CURIOSITY_ROVER_CAMERAS = [
  {
    name: "Front Hazard Avoidance Camera",
    abbreviation: "FHAZ",
  },
  {
    name: "Rear Hazard Avoidance Camera",
    abbreviation: "RHAZ",
  },
  {
    name: "Mast Camera",
    abbreviation: "MAST",
  },
  {
    name: "Chemistry and Camera Complex",
    abbreviation: "CHEMCAM",
  },
  {
    name: "Mars Hand Lens Imager",
    abbreviation: "MAHLI",
  },
  {
    name: "Mars Descent Imager",
    abbreviation: "MARDI",
  },
  {
    name: "Navigation Camera",
    abbreviation: "NAVCAM",
  },
];

const OPPORTUNITY_ROVER_CAMERAS = [
  {
    name: "Front Hazard Avoidance Camera",
    abbreviation: "FHAZ",
  },
  {
    name: "Rear Hazard Avoidance Camera",
    abbreviation: "RHAZ",
  },
  {
    name: "Navigation Camera",
    abbreviation: "NAVCAM",
  },
  { name: "Panoramic Camera", abbreviation: "PANCAM" },
  {
    name: "Miniature Thermal Emission Spectometer (Mini-TES)",
    abbreviation: "MINITIES",
  },
];

const SPIRIT_ROVER_CAMERAS = OPPORTUNITY_ROVER_CAMERAS;

const CAMERAS_DICTIONARY = [
  {
    name: "Front Hazard Avoidance Camera",
    abbreviation: "FHAZ",
  },
  {
    name: "Rear Hazard Avoidance Camera",
    abbreviation: "RHAZ",
  },
  {
    name: "Mast Camera",
    abbreviation: "MAST",
  },
  {
    name: "Chemistry and Camera Complex",
    abbreviation: "CHEMCAM",
  },
  {
    name: "Mars Hand Lens Imager",
    abbreviation: "MAHLI",
  },
  {
    name: "Mars Descent Imager",
    abbreviation: "MARDI",
  },
  {
    name: "Navigation Camera",
    abbreviation: "NAVCAM",
  },
  {
    name: "Navigation Camera",
    abbreviation: "NAVCAM",
  },
  { name: "Panoramic Camera", abbreviation: "PANCAM" },
  {
    name: "Miniature Thermal Emission Spectometer (Mini-TES)",
    abbreviation: "MINITIES",
  },
  { name: "All", abbreviation: "all" },
];

export {
  CAMERAS_DICTIONARY,
  CURIOSITY_LATEST_PHOTOS_BASE_URL,
  CURIOSITY_PHOTOS_BASE_URL,
  CURIOSITY_ROVER_CAMERAS,
  EARTH_DATE_DAY,
  HOME_PAGE_TABS,
  OPPORTUNITY_LATEST_PHOTOS_BASE_URL,
  OPPORTUNITY_PHOTOS_BASE_URL,
  OPPORTUNITY_ROVER_CAMERAS,
  PHOTO_1,
  PHOTO_2,
  SPIRIT_LATEST_PHOTOS_BASE_URL,
  SPIRIT_ROVER_CAMERAS,
  SPIRIT_PHOTOS_BASE_URL,
  SOL_DATE,
};
