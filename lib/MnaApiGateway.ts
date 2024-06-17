import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

interface MnaApiGatewayProps {
    discussionMicroservice: IFunction;
}

export class MnaApiGateway extends Construct {
    constructor(scope: Construct, id: string, props: MnaApiGatewayProps) {
        super(scope, id);

        // Discussion Microservice
        this.createDiscussionApi(props.discussionMicroservice);
    }

    private createDiscussionApi(discussionMicroservice: IFunction) {
        // discussion microservice
        // root name = discussion

        // GET /discussion
        // POST /discussion

        // Single discussion with id 
        // GET /discussion/{id}
        // PUT /discussion/{id}
        // DELETE /discussion/{id}
        const apigw = new LambdaRestApi(this, 'discussionApi', {
            handler: discussionMicroservice,
            restApiName: 'discussionApi',
            description: 'This is the discussion API Gateway',
            proxy: false,
        });

        const discussion = apigw.root.addResource('discussion');
        discussion.addMethod('GET'); // GET /discussion

        return discussion
    }
}