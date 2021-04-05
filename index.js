// Write your solution in this file!
const driver = {
    name: "Sed Danson",
    streetAddress: '789 Sample Road'
};

function updateDriverWithKeyAndValue(driver, streetAddress, value){

    const newDriver = {... driver};

    newDriver[streetAddress] = "11 Broadway";

    return newDriver;
}

const newDriver = updateDriverWithKeyAndValue(driver, streetAddress, value);

newDriver.streetAddress();

driver.streetAddress();

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value){

    driver.address = "12 Broadway"

    return driver;
}

    let deletedDriver = Object.assign({}, driver[key]);

function deleteFromDriverByKey(deletedDriver, key){

    delete deletedDriver.name;

    return deletedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){

    delete driver.name;

    return driver;
}

