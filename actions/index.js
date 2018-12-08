import axios from 'axios';

const USER = {userId: null};


const API_URL = "http://192.168.1.5:5000/";


export const login = (api_token, name) => {
    return axios.post(API_URL + "login", {
        api_token: api_token,
        name: name
    }).then((res) => {
        USER.userId = res.data.userId;
        return USER.userId;
    })
};


export const createPayOffer = (price) => {
    return axios.post(API_URL + 'pay_offers',
        {
            price: price,
            user_id: USER.userId
        }
    );
};


export const createHitOffer = (price) => {
    return axios.post(API_URL + 'hit_offers',
        {
            price: price,
            user_id: USER.userId
        }
    )
};



import { Permissions, Notifications, Location } from 'expo';


const PUSH_ENDPOINT = API_URL + 'register_token';

export function updateLocation() {
    Permissions.askAsync(Permissions.LOCATION).then(({status}) => {
        if (status !== "granted") {
            throw new Error("fuck uddd");
        }
        Location.getCurrentPositionAsync({}).then((coordinates) => {
             axios.post(API_URL + 'location',
                {
                    latitude: coordinates.coords.latitude,
                    longitude: coordinates.coords.longitude,
                    user_id: USER.userId
                }
            )

        });
    });
};


export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.LOCATION
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return axios.post(PUSH_ENDPOINT, {
      pn_token: token,
      user_id: USER.userId
  });
}