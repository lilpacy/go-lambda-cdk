import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as lambda from "@aws-cdk/aws-lambda";

export class ApiStack extends cdk.Stack {
  public readonly stackProps: ApiStackProps;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const restApi = new apigateway.RestApi(this, "restApi", {
      restApiName: "api-test"
    });
    this.stackProps = {restApi: restApi} as ApiStackProps;
    const golangLambda = new lambda.Function(this, 'GoFunction', {
      functionName: 'GoFunction',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/bin')
    })
    // bin配下のファイルを経由して受け取ったAPI GatewayのConstructsにLambdaを紐づける
    this.stackProps.restApi.root.addMethod("POST", new apigateway.LambdaIntegration(golangLambda));
  }
}

export interface ApiStackProps extends cdk.StackProps {
  restApi: apigateway.RestApi;
}
