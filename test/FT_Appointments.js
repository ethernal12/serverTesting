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
let putTitle = "new title"




describe("GET /appointments", () => {

    before((done) => {
        const self = this;
        req.get("/appointments")
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


        const schema = import_schema.add("appointments", "GET");

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

describe("POST /appointments", () => {
    before((done) => {
        const self = this;
        req.post("/appointments", {
            notes: "this is notes",
            description: "some description",
            connection_id: 1,
            datetime: "new date",
            title: "Inštrukcije programiranja",
            quantity: 1,
            price: 39.8,
            calendar_id: "233243"
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

        const schema = import_schema.add("appointments", "POST");

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

describe("GET /appointments", () => {

    before((done) => {
        const self = this;
        req.get("/appointments")
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


        const schema = import_schema.add("appointments", "GET");

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

describe("PUT /appointments/id", () => {
    before((done) => {
        const self = this;
        req.put(`/appointments/${postResId}`, {

            notes: "this is notes",
            description: "some description",
            connection_id: 1,
            datetime: "new date",
            title: putTitle,
            quantity: 1,
            price: 39.8,
            calendar_id: "233243"

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


        const schema = import_schema.add("appointments", "PUT");


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

describe(`GET /appointments/id`, () => {

    before((done) => {
        const self = this;
        req.get(`/appointments/${postResId}`)
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


        const schema = import_schema.add("appointments", "GET_ID");


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

        assert.equal(this.res.data.title, putTitle, "Response title should equal to updated appointment title.");
    })
})

describe("DEL /appoiontment/id", () => {

    before((done) => {
        const self = this;
        req.delete(`/appointments/${postResId}`)
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


        const schema = import_schema.add("appointments", "DELETE");


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

describe("GET /appointments", () => {

    before((done) => {
        const self = this;
        req.get("/appointments")
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


        const schema = import_schema.add("appointments", "GET");


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
    it("Should delete posted appointment.", () => {

        let flag = false;

        for (let i = 0; i < this.res.data.length; i++) {
            if (postResId == this.res.data[i].id) {
                flag = true;
            };

        };
        assert.equal(this.res.data.length, initialResLength, "Response data length should equal to initial response length.");
        assert(!flag, "Response data id must NOT equal to post res id, posted appointment NOT deleted.");

    })


})








