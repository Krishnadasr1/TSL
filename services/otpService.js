const axios = require('axios');

const generateOTP = () => {
    return Math.floor(Math.random() * (9999 - 1000)) + 1000;
};

const sendOTP = async (phone, otp) => {
    try {
        const otpRequest = {
            method: 'get',
            url: `https://www.fast2sms.com/dev/bulkV2?authorization=aKVbUigWHc8CBXFA9rRQ17YjD4xhz5ovJGd6Ite3k0mnSNuZPMolFREdzJGqw8YVAD7HU1OatPTS6uiK&variables_values=${otp}&route=otp&numbers=${phone}`,
            headers: {
                Accept: 'application/json'
            }
        };

        const response = await axios(otpRequest);

        // You might want to check the response status or log the result
        console.log('OTP sent successfully:', response.data);

        return true; // Indicate success
    } catch (error) {
        console.error('Error sending OTP:', error);
        return false; // Indicate failure
    }
};

module.exports = { generateOTP, sendOTP };
