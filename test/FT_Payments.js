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
let putNotes = "payment_update_notes";

describe("GET /payments", () => {

    before((done) => {
        const self = this;
        req.get("/payments")
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {

                console.log(error);
            })

    })
    it("Should have response status 200.", () => {
        initialResLength = this.res.data.length;
        assert.equal(this.res.status, 200, "Response status should equal 200");

    })

    it("Should have the right JSON schema for response.", () => {


        const schema = import_schema.add("payments","GET");


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
describe("POST /payments", () => {
    before((done) => {
        const self = this;
        req.post("/payments", {
            notes: "this is notes1",
            amount: 123,
            payed_at: "2022-04-04",
            connection_id: 3
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

        const schema = import_schema.add("payments","POST");

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
describe("GET /payments", () => {

    before((done) => {
        const self = this;
        req.get("/payments")
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


        const schema = import_schema.add("payments","GET");

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

        let flag = false;

        for (let i = 0; i < this.res.data.length; i++) {
            if (postResId == this.res.data[i].id) {
                flag = true;
            };

        };
        assert.equal(this.res.data.length, postResId, "Response length must equal post response id.");
        assert(flag, "Flag must equal true.");


    })




})
describe("PUT /payments/id", () => {
    before((done) => {
        const self = this;
        req.put(`/payments/${postResId}`, {

            notes: putNotes,
            amount: 123,
            payed_at: "2022-04-04",
            connection_id: 2

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


        const schema = import_schema.add("payments","PUT");


        const valid = ajv.validate(schema, this.res.data);

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
describe(`GET /payments/id`, () => {

    before((done) => {
        const self = this;
        req.get(`/payments/${postResId}`)
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


        const schema = import_schema.add("payments","GET_ID");


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

        assert.equal(this.res.data.notes, putNotes, "Response notes should equal to updated payments notes.");
    })
})
describe("DEL /payments/id", () => {

    before((done) => {
        const self = this;
        req.delete(`/payments/${postResId}`)
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


        const schema = import_schema.add("payments","DELETE");


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
describe("GET /payments", () => {

    before((done) => {
        const self = this;
        req.get("/payments")
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


        const schema = import_schema.add("payments","GET");


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
    it("Should delete posted payments.", () => {

        let exists = false;

        for (let i = 0; i < this.res.data.length; i++) {
            if (postResId == this.res.data[i].id) {
                exists = true;
            };

        };
        assert.equal(this.res.data.length, initialResLength, "Response data length should equal to initial response length.");
        assert(!exists, "Response data id must NOT equal to post res id, posted paymnets NOT deleted.");

    })


})

