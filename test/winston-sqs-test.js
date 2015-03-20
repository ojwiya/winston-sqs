var aws = require("aws-sdk");
var vows = require('vows');
var assert = require('assert');
var winston = require('winston');
var helpers = require('winston/test/helpers');
var SQS = require('../lib/winston-sqs').SQS;

function assertSQS (transport) {
    assert.instanceOf(transport, SQS);
    assert.isFunction(transport.log);
}

var allOptions = {
    queueUrl: "queueurl",
    region: "region"
};

function without(o, property) { var r = JSON.parse(JSON.stringify(o)); r[property] = undefined; return r; }

vows.describe('winston-sqs').addBatch({
    "Creation of SQS Transport should fail if a required option is missing": {
        "queueUrl": function (){
            assert.throws(function() {new (SQS)(without(allOptions, "queueUrl"));}, Error);
        }
    },
    "The creation of an Amazon SQS Transport instance": {
        "should succeed with queueUrl and region": function() {
            assertSQS(new (SQS)({
                queueUrl: "queue url",
                region: "region"
            }));
        },
        "should succeed with sqsOptions": function() {
            assertSQS(new (SQS)({
                queueUrl: "queueurl",
                sqsOptions: { options: "options" }
            }));
        }
    },
    "An instance of the Amazon SQS Transport": {
        "should have the proper methods defined": function () {
            assertSQS(new (SQS)(allOptions));
        }
         /* // Uncomment this test when correct AWS credentials and queue URL are provided in env vars
        ,"the log() method": helpers.testNpmLevels(
            new (SQS)({
                aws_queueurl: process.env.AWS_QUEUEURL,
                aws_accesskeyid: process.env.AWS_ACCESS_KEY_ID,
                aws_secretaccesskey: process.env.AWS_SECRET_ACCESS_KEY
            }),
            "should log messages to Amazon SQS",
            function (ign, err, logged) {
                console.log("Assertin results....");
                assert.isTrue(!err);
                assert.isTrue(logged);
        })// */
    }
}).export(module);
