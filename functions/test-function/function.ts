(async (parameters, context) => {
    console.log({ parameters });
    console.log({ context });

    const kvStore = new xbtSDK.KV('yourApiKey', 'yourApiSecret');

    const key = parameters.key;
    const value = parameters.value

    if (typeof key !== 'string' || key.trim() === '') {
        throw new Error('Invalid key: key must be a non-empty string');
    }

    if (typeof value === 'undefined') {
        throw new Error('Invalid value: value must be defined');
    }

    try {
        await kvStore.setItem(key, value);
        console.info(`Value set successfully in KV store: ${key}`);
        return true;
    } catch (error) {
        console.error('Error:', error);
    }
})(parameters, context);




//
// CLI usage for development:
// To run the function:
// $ xbt-cli function run [function_name] '{"method": "set", "params": ["exampleKey", "exampleValue"]}'
// $ xbt-cli function run [function_name] '{"method": "get", "params": ["exampleKey"]}'
//
// To create a new function template:
// $ xbt-cli function create [function_name]
