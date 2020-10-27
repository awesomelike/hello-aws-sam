/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async (event) => {
  try {
    return {
      statusCode: '200',
      body: JSON.stringify({
        message: 'Hello Pivo Tour!',
        eventReceived: event,
      }),
    };
  } catch (error) {
    return { statusCode: '400', body: { error: error.message } };
  }
};
