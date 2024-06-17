
exports.handler = async (event: any) => {
    console.log('event', event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from discussion microservice',
            input: event,
        }),
    };
};