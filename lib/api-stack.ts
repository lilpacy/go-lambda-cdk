import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";

export class LambdaStack extends cdk.Stack {
  public readonly stackProps: LambdaStackProps;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.stackProps = props as LambdaStackProps;
    const GoFunction = new lambda.Function(this, 'GoFunction', {
      functionName: 'GoFunction',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/bin')
    })
  }
}

export interface LambdaStackProps extends cdk.StackProps {
}
