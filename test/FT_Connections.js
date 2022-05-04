var Ajv = require("ajv")
var ajv = new Ajv({ strictTuples: false })

const import_schema = require('./fetch_schema.js');
const assert = require("assert");
const axios = require("axios").default;

const req = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});

let initialResLength;
let postResId;
let putEmail = "connection_put_email"

describe("GET /connections", () => {

    before((done) => {
        const self = this;
        req.get("/connections")
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


        const schema = import_schema.add("connections","GET");


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

describe("POST /connections", () => {
    before((done) => {
        const self = this;
        req.post("/connections", {
            billing_connection_id: 1,
            name: "New",
            surname: "Connection",
            email: "google@gmail.com",
            phone: "000123"
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

        const schema = import_schema.add("connections","POST");

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

describe("GET /connections", () => {

    before((done) => {
        const self = this;
        req.get("/connections")
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


        const schema = import_schema.add("connections","GET");


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

describe("PUT /connections/id", () => {
    before((done) => {
        const self = this;
        req.put(`/connections/${postResId}`, {

            billing_connection_id: 1,
            name: "New",
            surname: "Connection",
            email: putEmail,
            phone: "000123"

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


        const schema = import_schema.add("connections","PUT");

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

describe(`GET /connections/id`, () => {

    before((done) => {
        const self = this;
        req.get(`/connections/${postResId}`)
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


        const schema = import_schema.add("connections","GET_ID");


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

    it("Should have the right response email.", () => {

        assert.equal(this.res.data.email, putEmail, "Response email should equal to updated connection email.");
    })
})

describe("DEL /connections/id", () => {

    before((done) => {
        const self = this;
        req.delete(`/connections/${postResId}`)
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


        const schema = import_schema.add("connections","DELETE");


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

describe("GET /connections", () => {

    before((done) => {
        const self = this;
        req.get("/connections")
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


        const schema = import_schema.add("connections","GET");


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
