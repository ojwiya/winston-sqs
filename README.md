# Amazon SQS Transport for [winston][0] [![Build Status](https://api.travis-ci.org/agad/winston-sqs.png)](http://travis-ci.org/agad/winston-sqs)
## Installation via npm

``` sh
  $ npm install winston
  $ npm install winston-sqs
```
## Usage
``` js
  var winston = require('winston');
  require('winston-sqs').SQS;
  winston.add(winston.transports.SQS, options);
```

The Winston SQS transport depends on [aws-sdk](https://github.com/aws/aws-sdk-js).

The constructor options are:

* __queueurl:__ The specific queue URL to write to. Found in your AWS Console. [required]
* __region:__ AWS Region to use. (default: us-east-1) [required if do not pass in sqsOptions]
* __sqsOptions:__ The sqs options to use. (if passed in, `region` is not required)
* __colorize:__ Boolean flag indicating if we should colorize output.
* __debug:__ log error/response after each message sent (default: false)
* __depth__ Numeric indicating how many times to recurse while formatting the object with `util.inspect` (only used with `prettyPrint: true`) (default null, unlimited)
* __formatter:__ If function is specified and `json` is set to `false`, its return value will be used instead of default output. (default undefined)
* __json:__ If true, messages will be logged as JSON (default true).
* __level:__ Level of messages that this transport should log.
* __logstash:__ If true, messages will be logged as JSON and formatted for logstash (default false).
* __prettyPrint:__ If true, additional JSON metadata objects that are added to logging string messages will be displayed as a JSON string representation. If function is specified, its return value will be the string representing the meta.
* __showLevel:__ Boolean flag indicating if we should prepend output with level (default true).
* __silent:__ Boolean flag indicating whether to suppress output.
* __timestamp:__ Boolean flag indicating if we should prepend output with timestamps (default true). If function is specified, its return value will be used instead of timestamps.
* ... and few more common with other Winston Transports

*Metadata:* Logged via util.inspect(meta);

Note that metadata will be automatically 'stringified.'

[0]: https://github.com/flatiron/winston
[1]: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Credentials.html
