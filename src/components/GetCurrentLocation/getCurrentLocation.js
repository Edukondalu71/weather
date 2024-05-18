function getFindLocation() {
    return new Promise((resolve, reject) => {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationObj = {
                value: `${latitude} ${longitude}`,
                label: "Current Location"
            };
            resolve(locationObj);
        }

        function error() {
            reject(new Error('Unable to retrieve location.'));
        }

        navigator.geolocation.getCurrentPosition(success, error);
    });
}

export { getFindLocation };