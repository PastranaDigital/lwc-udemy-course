import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
  centers = [];
  dates = [];

  //? example Pincodes 110001 or 110088

  pincodeChangeHandler(e) {
    const pinCode = e.target.value;
    const isEnterKey = e.keyCode === 13;
    if (pinCode.length === 6 && isEnterKey) {
      const today = new Date();
      const formattedDate = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;
      const endpoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`;
      this.fetchVaccineSlots(endpoint);
    }
  }
  async fetchVaccineSlots(endpoint) {
    const vaccineSlotRes = await fetch(endpoint);
    const slotsData = await vaccineSlotRes.json();
    console.log(slotsData);

    this.buildColumnsAndRows(slotsData.centers);
  }

  buildColumnsAndRows(data) {
    //? build columns of dates
    const dates = new Map();
    dates.set('name', {
      label: 'Center Name',
      fieldName: 'name',
      type: 'text',
      wrapText: true,
    });

    //? build rows of centers
    const centers = new Map();

    for (const center of data) {
      !centers.has(center.center_id) &&
        centers.set(center.center_id, {
          name: center.name,
        });

      for (const session of center.sessions) {
        //? destructuring syntax
        const { date, available_capacity, min_age_limit } = session;

        //? add date as column in dates map
        !dates.has(date) &&
          dates.set(date, {
            label: date,
            fieldName: date,
            type: 'text',
            wrapText: true,
            cellAttributes: { class: { fieldName: 'className' } },
          });

        //? add column value of the row
        //? could also use dot property notation if we want to use the name
        centers.get(center.center_id)[date] = `Available: ${available_capacity}
		Min Age: ${min_age_limit}`;
        centers.get(center.center_id).className =
          available_capacity > 0
            ? 'slds-text-color_success'
            : 'slds-text-color_error';
      }
    }

    console.log('dates: ', dates);
    console.log('centers: ', centers);

    //? format the data to have what we want and need (just the objects/values, not the keys)
    this.dates = Array.from(dates.values());
    this.centers = Array.from(centers.values());
  }

  get hideMessage() {
    return this.centers.length > 0;
  }
}

// {
//     "center_id": 577792,
//     "name": "SMS Medical College 4",
//     "address": "",
//     "state_name": "Rajasthan",
//     "district_name": "Jaipur I",
//     "block_name": "Jaipur I Urban",
//     "pincode": 302004,
//     "lat": 26.90604,
//     "long": 75.81622,
//     "from": "09:00:00",
//     "to": "18:00:00",
//     "fee_type": "Free",
//     "sessions": [
//         {
//             "session_id": "310dd185-66a5-46e6-8a67-369ddd505ea7",
//             "date": "31-03-2021",
//             "available_capacity": 100,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-06:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "fb3ad720-7c41-4d66-ad31-81b7ff5d58af",
//             "date": "01-04-2021",
//             "available_capacity": 97,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-06:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "a0afcd47-4912-45e9-86e9-39ccb22474b3",
//             "date": "02-04-2021",
//             "available_capacity": 100,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-06:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "30e5d2f7-5023-4e3e-a77a-d8a06cbeda72",
//             "date": "03-04-2021",
//             "available_capacity": 48,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-05:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "f15d58e7-3fde-42c0-8099-8819e18db0a9",
//             "date": "04-04-2021",
//             "available_capacity": 50,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-05:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "a475c71a-a033-47f9-bb60-c17402fa3ec1",
//             "date": "05-04-2021",
//             "available_capacity": 48,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-05:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         },
//         {
//             "session_id": "040bdf0b-a5bf-4bb9-8605-912d80ae8368",
//             "date": "06-04-2021",
//             "available_capacity": 50,
//             "min_age_limit": 45,
//             "vaccine": "COVISHIELD",
//             "slots": [
//                 "09:00AM-11:00AM",
//                 "11:00AM-01:00PM",
//                 "01:00PM-03:00PM",
//                 "03:00PM-05:00PM"
//             ],
//             "available_capacity_dose1": 0,
//             "available_capacity_dose2": 0
//         }
//     ]
// }
