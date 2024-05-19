export const getCurrentLocation = () => {
    return new Promise<string>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            resolve(`${latitude},${longitude}`);
        }, (error) => {
            console.error('Error getting user location:', error);
            reject(error);
        });
    });
};
