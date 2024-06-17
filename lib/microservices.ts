import { Duration } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from 'path';

//export class MeenaMicroservice extends Construct {

interface MnaMicroservicesProps {

}

export class MnaMicroservices extends Construct {
    // expose the lambda function
    public readonly discussionMicroservice: NodejsFunction;


    constructor(scope: Construct, id: string, props?: MnaMicroservicesProps) {
        super(scope, id);

        // discussion microservice
        this.discussionMicroservice = this.createDiscussionFunction();

    }

    private createDiscussionFunction(): NodejsFunction {
        const nodeJsFunctionProps: NodejsFunctionProps = {
            entry: path.join(__dirname, '../src/discussion/index.ts'),
            handler: 'handler',
            // memorySize: 256,
            // timeout: Duration.seconds(10),
            bundling: {
                externalModules: ['aws-sdk'],
            },
            runtime: Runtime.NODEJS_20_X,
            // environment

        };
        return new NodejsFunction(this, 'discussionLambdaFuction', {
            entry: path.join(__dirname, '../../src/discussion/index.ts'),
            ...nodeJsFunctionProps,
        });
    }
}