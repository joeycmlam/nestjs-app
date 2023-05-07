import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { bootstrap } from '../../../src/main';

let baseUrl: string;
let response: AxiosResponse;
let app: INestApplication;

Before(async () => {
    const testPort = 3001;
    app = await bootstrap(testPort);
    return app;
});

After(async () => {
    await app.close();
    return app;
});

Given('the application is running at {string}', (url: string) => {
    baseUrl = url;
});

When('I make a GET request to {string}', async (endpoint: string) => {
    const url = `${baseUrl}${endpoint}`;
    response = await axios.get(url);
});

Then('the response status code is {string}', (statusCode: string) => {
    expect(response.status).to.equal(parseInt(statusCode, 10));
});

Then('the response version is {string}', (version: string) => {
    expect(response.data.version).to.equal(version);
});
