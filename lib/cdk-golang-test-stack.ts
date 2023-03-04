import * as cdk from '@aws-cdk/core';
import {LambdaStack} from "./lambda-stack";

export class CdkGolangTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const app = new cdk.App();
    const lambaStack = new LambdaStack(app, 'LambdaStack');
  }
}
