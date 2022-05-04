var Ajv = require("ajv")
var ajv = new Ajv({ strictTuples: false })

const import_schema = require('../schemas/messages_schema.js');
const assert = require("assert");
const axios = require("axios").default;

const req = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});

let initialResLength;
let postResId;
let putTitle = "messages_put_title"

describe("GET / messages", () => {

    before((done) => {
        const self = this;
        req.get("/messages")
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200");
        initialResLength = this.res.data.length;
    })

    it("Should have the right JSON schema for response.", () => {

        const schema = import_schema.addMethod("GET");

        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })


})

describe("POST /messages", () => {
    before((done) => {
        const self = this;
        req.post("/messages", {
            send_at: "new date",
            title: "This is huge title that bellongs to here so wasup???",
            body: "created message2",
            sms_state: "waiting",
            email_state: "sent",
            notes: "new message",
            appointment_id: 1,
            connection_id: 1
        })
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200.");
        postResId = this.res.data.id;



    })

    it("Should have the right JSON schema for response.", () => {

        const schema = import_schema.addMethod("POST");

        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");

    })

    
})

describe("GET / messages", () => {

    before((done) => {
        const self = this;
        req.get("/messages/")
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200");
      
        initialResLength = this.res.data.length;
    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.addMethod("GET");


        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })

    it("Should have a response length equal to post request id ", () => {

        let exists = false;

        for (let i = 0; i < this.res.data.length; i++) {
            if (postResId == this.res.data[i].id) {
                exists = true;
            };

        };
        assert.equal(this.res.data.length, postResId, "Response length must equal post response id.");
        assert(exists, "Exists must equal true.");


    })


})

describe("PUT /messages/id", () => {
    before((done) => {
        const self = this;
        req.put(`/messages/${postResId}`, {

            title: putTitle

        })
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })


    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200");

    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.addMethod("PUT");

        const valid = ajv.validate(schema, this.res.data);
        msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })


})

describe(`GET /messages/id`, () => {

    before((done) => {
        const self = this;
        req.get(`/messages/${postResId}`)
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })


    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200.");

    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.addMethod("GET_ID");


        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })

    it("Should have the right response title.", () => {

        assert.equal(this.res.data.title, putTitle, "Response title should equal to updated connection email.");
    })
})

describe("DEL /messages/id", () => {

    before((done) => {
        const self = this;
        req.delete(`/messages/${postResId}`)
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200");

    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.addMethod("DELETE");


        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })


})

describe("GET /messages", () => {

    before((done) => {
        const self = this;
        req.get("/messages")
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {

        assert.equal(this.res.status, 200, "Response status should equal 200");
        initialResLength = this.res.data.length;
    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.addMethod("GET");


        const valid = ajv.validate(schema, this.res.data);
        let msg1 = "";
        if (ajv.errors != null) {

            for (var i = 0; i < ajv.errors.length; i++) {
                var error = ajv.errors[i];

                msg1 += error.message + "/";
            }
            throw new Error(msg1);

        };
        assert(valid, "Schema must be valid.");


    })

    it("Should have a response length equal to post request id ", () => {

        
        let exists = false;

        for (let i = 0; i < this.res.data.length; i++) {
            if (postResId == this.res.data[i].id) {
                exists = true;
            };

        };
        assert.equal(this.res.data.length, initialResLength, "Response length must equal post response id.");
        assert(!exists, "Exists must equal false.");


    })



})