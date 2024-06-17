import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MnaMicroservices } from './microservices';
import { MnaApiGateway } from './MnaApiGateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MeenaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MeenaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const microservices = new MnaMicroservices(this, 'Microservices', {
      // props
    });

    const apigateway = new MnaApiGateway(this, 'ApiGateway', {
      discussionMicroservice: microservices.discussionMicroservice,
    });
  }
}