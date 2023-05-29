export class Encryption {
    static async encrypt(data, key = 'hWseI+hhSr1K8K+rCemidyYM7ADz45Y99YoIwAxsH7fIpJksyIA//I2x') {
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(data);

        // Initialization vector (IV) is required for AES-GCM
        const iv = crypto.getRandomValues(new Uint8Array(12));

        // Perform encryption
        const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encodedData);

        // Combine IV and encrypted data into a single array
        const encryptedArray = new Uint8Array([...iv, ...new Uint8Array(encryptedData)]);

        // Encode the encrypted data using base64
        const encryptedBase64 = window.btoa(String.fromCharCode(...encryptedArray));

        return encryptedBase64;
    }

    static async decrypt(encryptedData, key = 'hWseI+hhSr1K8K+rCemidyYM7ADz45Y99YoIwAxsH7fIpJksyIA//I2x') {
        // Decode the encrypted data from base64
        const decodedData = window.atob(encryptedData);
        const encryptedArray = new Uint8Array([...decodedData].map(char => char.charCodeAt(0)));

        // Split the array into IV and encrypted data
        const iv = encryptedArray.slice(0, 12);
        const encryptedBytes = encryptedArray.slice(12);

        // Perform decryption
        const decryptedData = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, encryptedBytes);

        const decoder = new TextDecoder();
        const decryptedArray = new Uint8Array(decryptedData);
        const decryptedText = decoder.decode(decryptedArray);

        return decryptedText;
    }
}

// // Generate a random key for testing purposes
// const key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);

// // Test encryption and decryption
// const encrypted = await Encryption.encrypt('secret message', key);
// console.log('encrypted:', encrypted);

// const decrypted = await Encryption.decrypt(encrypted, key);
// console.log('decrypted:', decrypted);
