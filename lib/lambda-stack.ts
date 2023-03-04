import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";

export class LambdaStack extends cdk.Stack {
  public readonly stackProps: LambdaStackProps;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.stackProps = props as LambdaStackProps;
    const scatter = new lambda.Function(this, 'scatter', {
      functionName: 'scatter',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/scatter/bin')
    })
    const task = new lambda.Function(this, 'task', {
      functionName: 'task',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/task/bin')
    })
    const gather = new lambda.Function(this, 'tagathersk', {
      functionName: 'gather',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/gather/bin')
    })
  }
}

export interface LambdaStackProps extends cdk.StackProps {
}
