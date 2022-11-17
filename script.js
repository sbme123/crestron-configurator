// Working API
// sortingProductOptions IS SORTING THE DATA FOR TAB ONE OPTIONS. It's fetching the data form the Sheety API

const fetchDataTabOne = async (model) => {
  const url = `https://api.sheety.co/1e5171a440d1e6a1ff583cf15820565f/crestronConfigurator/${model}`;

  const resp = await fetch(url);

  const data = await resp.json();

  const parsedData = Object.keys(data)[0];

  const value = data[parsedData];

  return value;
};

const sortingProductOptions = async (model, option, id) => {
  const dataICanUse = await fetchDataTabOne(model);

  console.log("DATA I CAN USE", dataICanUse);

  const sortingRoomOptions = () => {
    let newArray = dataICanUse.filter(
      (item) => item[option] !== "" && item[option] !== undefined
    );

    let mappedData = newArray.map((item) => item[option]);

    const mappingFinalOptions = (choice) => {
      return ` 
          <option value='${choice}' class='dropdown-option-audio-preferences'>${choice}</option>
      `;
    };

    // Join is removing the unexpetced comma
    document.getElementById(`dropdown-select-${id}`).innerHTML = `
      ${mappedData.map(mappingFinalOptions).join("")} 
      `;
  };

  sortingRoomOptions();
};

// Get the sever from the page name
const pageName = "small";
// window.location.pathname.slice(1, 6);
console.log(pageName);
// May need to change the page name depending on the url position

sortingProductOptions(`${pageName}`, "audioPreference", "audio-preferences");

// sortingProductOptions(`${pageName}`, "cpu1", "cpu-1");
// sortingProductOptions(`${pageName}`, "memoryConfig", "memory-config");
// sortingProductOptions(
//   `${pageName}`,
//   "memoryCapacityRequired",
//   "memory-capacity"
// );
// sortingProductOptions(`${pageName}`, "bootDrive", "boot-drives");
// // sortingProductOptions(`${pageName}`, "m2Drives", "m2-drives");
// sortingProductOptions(`${pageName}`, "typeOfDrive", "type-of-drive");
// sortingProductOptions(`${pageName}`, "numberOfDrives", "num-of-drives");
// sortingProductOptions(
//   `${pageName}`,
//   "capacityStorageDriveSize",
//   "storage-drive-size"
// );
// sortingProductOptions(`${pageName}`, "isRaidRequired", "raid-required");
// sortingProductOptions(`${pageName}`, "doYouNeedAnExternalHba", "hba-required");
// sortingProductOptions(`${pageName}`, "network", "network");
// sortingProductOptions(`${pageName}`, "gpu", "gpu");
