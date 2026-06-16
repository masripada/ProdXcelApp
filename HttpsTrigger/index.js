module.exports = async function (context, req) {
  const mySecret = process.env.MY_SECRET_KEY;
    if (!mySecret) {
        throw new Error("Missing required env var: MY_SECRET_KEY");
    }
    context.log('HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
            message: 'Hi from Episode changes 4.2 of the ProdXcel Workshop!',
            secret: mySecret
        }
    };
};
