module.exports = async function (context, req) {
 
    context.log('HTTP trigger function processed a request.');
    context.res = {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
            message: 'Hi from Episode changes 4.2 of the ProdXcel Workshop!',
            
        }
    };
};
