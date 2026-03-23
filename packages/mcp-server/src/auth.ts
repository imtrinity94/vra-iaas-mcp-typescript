import * as https from 'https';

export async function ensureBearerToken() {
    if (process.env['VRA_IAAS_BEARER_TOKEN']) {
        // Already provided explicitly
        return;
    }

    const fqdn = process.env['VRA_FQDN'];
    const username = process.env['VRA_USERNAME'];
    const password = process.env['VRA_PASSWORD'];

    if (!fqdn || !username || !password) {
        console.error("VRA_FQDN, VRA_USERNAME, and VRA_PASSWORD must be provided if VRA_IAAS_BEARER_TOKEN is omitted.");
        return;
    }

    const bodyData = JSON.stringify({ username, password });

    return new Promise<void>((resolve, reject) => {
        const req = https.request(
            `https://${fqdn}/csp/gateway/am/api/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(bodyData),
                },
                rejectUnauthorized: false, // Accept SSL certificate like the snippet
            },
            (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                        try {
                            const responseContent = JSON.parse(data);
                            process.env['VRA_IAAS_BEARER_TOKEN'] = responseContent.cspAuthToken;
                            console.error("Successfully generated new bearer token.");
                            resolve();
                        } catch (e) {
                            reject(new Error("Failed to parse JSON token response: " + data));
                        }
                    } else {
                        reject(new Error("Login request failed with status: " + res.statusCode + " - " + data));
                    }
                });
            }
        );

        req.on('error', (e) => reject(e));
        req.write(bodyData);
        req.end();
    });
}
