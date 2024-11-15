import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDUjD3bPsXooNWGXDwXotLh79uQSpt3V0U",
    authDomain: "kalmidad-project-server.firebaseapp.com",
    projectId: "kalmidad-project-server",
    storageBucket: "kalmidad-project-server.firebasestorage.app",
    messagingSenderId: "911925663451",
    appId: "1:911925663451:web:9b354d2c927d6b31245efe"
};

export default initializeApp(firebaseConfig);

export async function getReCaptchaResponse() {
    try {
        const recaptchaResponse = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
            params: {
            secret: '6LdWjHkqAAAAALs24s1GqFdINo-UOMVse8TE7W-8', 
            response: recaptchaToken
            }
        });
        
        if (recaptchaResponse.data.success) {
            return recaptchaResponse.data;
        } else {
            throw new Error('reCAPTCHA verification failed');
        }
    }
    catch(error) {
        throw new Error(error.message || 'Error during reCAPTCHA verification');
    }
}


