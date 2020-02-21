// DynamoDB Configuration

const AWS = require('aws-sdk');

const config = {
  accessKeyId: "AWS_ACCESS_ID",
  secretAccessKey: "AWS_ACCESS_SECRET",
  region: "AWS_REGION",
  apiVersion: "2012-08-10"
}

module.exports = new AWS.DynamoDB(config);
