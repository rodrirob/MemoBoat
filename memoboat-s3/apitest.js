console.log('starting function');


const AWS = require('aws-sdk');


const ddb = new AWS.DynamoDB.DocumentClient();


exports.handler = function(e, ctx, callback) {




    console.log(e);



    var params = {



        Item: { 



        MemoBoatId: "1",



        message: e.message



            },



        TableName: 'MemoBoat'


    };



        ddb.put(params, function(err, data){



            if(err){



                callback(err, null);



            } else{



                callback(null, data);



            }



        });



    }







     

