#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkGolangTestStack } from '../lib/cdk-golang-test-stack';

const app = new cdk.App();
new CdkGolangTestStack(app, 'CdkGolangTestStack');
