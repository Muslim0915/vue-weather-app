export const getUserLanguage = () => {
    const defaultLanguage: string = 'en';
    const userLanguage: string = navigator.language || navigator.languages[0];
    return userLanguage ? userLanguage.split('-')[0] : defaultLanguage;
};
