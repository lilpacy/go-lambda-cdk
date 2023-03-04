import * as cdk from '@aws-cdk/core';
import {ApiStack} from "./api-stack";

export class CdkGolangTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const app = new cdk.App();
    const apiStack = new ApiStack(app, 'ApiStack');
    // const lambaStack = new LambdaStack(app, 'LambdaStack',{restApi: apiStack.stackProps.restApi});
  }
}
