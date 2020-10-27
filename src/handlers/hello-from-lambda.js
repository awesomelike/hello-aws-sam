/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async (event, ctx) => {
  try {
    return {
      statusCode: '200',
      body: JSON.stringify({
        message: 'Hello Pivo Tour!',
        eventReceived: event,
        contextReceived: ctx
      }),
    };
  } catch (error) {
    return { statusCode: '400', body: JSON.stringify({ error: error.message }) };
  }
};
