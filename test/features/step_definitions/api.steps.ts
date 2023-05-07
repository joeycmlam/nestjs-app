import {Given, When, Then, BeforeAll, AfterAll} from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { bootstrap } from '../../../src/main';
import * as path from 'path';
import * as fs from "fs/promises";

let baseUrl: string;
let response: AxiosResponse;
let app: INestApplication;

BeforeAll(async () => {
    const testPort = 3001;
    app = await bootstrap(testPort);
    return app;
});

AfterAll(async () => {
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

Then('the response should match the content of {string}', async (fileName: string) => {
    const fieldsToValidate = ['account_cd', 'account_nm'];
    const filePath = path.join(__dirname, '..', fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const expectedData = JSON.parse(fileContent);

    for (const field of fieldsToValidate) {
        expect(response[field]).to.deep.equal(expectedData[field]);
    }
});

When('I make a GET request to {string} and {string}', async (endpoint: string, accountCd: string) => {
    const uri: string =`${baseUrl}${endpoint}/${accountCd}/holdings`;
    response = await axios.get(uri);
});

Then('the holding result should match with file {string}', async (expectedFile: string) => {
    const filePath = path.join(__dirname, '..', expectedFile);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const expectedData = JSON.parse(fileContent);

    expect(response.data).to.deep.equal(expectedData);

});


