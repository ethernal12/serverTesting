var Ajv = require("ajv")
var ajv = new Ajv({ strictTuples: false })

const assert = require("assert");
const axios = require("axios").default;

const req = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});

let initialResLength;
let postResId;
let putTitle = "message_put_title"

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


        const schema = {

            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "title": {
                            "type": "string"
                        },
                        "body": {
                            "type": "string"
                        },
                        "send_at": {
                            "type": "string"
                        },
                        "sms_state": {
                            "type": "string"
                        },
                        "email_state": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "appointment_id": {
                            "type": "integer"
                        },
                        "connection_id": {
                            "type": "integer"
                        },
                        "payment_id": {
                            "type": "null"
                        }
                    }

                }
            ]
        };


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

        const schema = {

            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "send_at": {
                    "type": "null"
                },
                "title": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "sms_state": {
                    "type": "string"
                },
                "email_state": {
                    "type": "string"
                },
                "notes": {
                    "type": "string"
                },
                "appointment_id": {
                    "type": "integer"
                },
                "connection_id": {
                    "type": "integer"
                },
                "updated_at": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "send_at",
                "title",
                "body",
                "sms_state",
                "email_state",
                "notes",
                "appointment_id",
                "connection_id",
                "updated_at",
                "created_at"
            ]
        };

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


        const schema = {

            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "title": {
                            "type": "string"
                        },
                        "body": {
                            "type": "string"
                        },
                        "send_at": {
                            "type": "string"
                        },
                        "sms_state": {
                            "type": "string"
                        },
                        "email_state": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "appointment_id": {
                            "type": "integer"
                        },
                        "connection_id": {
                            "type": "integer"
                        },
                        "payment_id": {
                            "type": "null"
                        }
                    }

                }
            ]
        };


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


        const schema = {
  
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "body": {
                "type": "string"
              },
              "send_at": {
                "type": "null"
              },
              "sms_state": {
                "type": "string"
              },
              "email_state": {
                "type": "string"
              },
              "notes": {
                "type": "string"
              },
              "created_at": {
                "type": "string"
              },
              "updated_at": {
                "type": "string"
              },
              "appointment_id": {
                "type": "integer"
              },
              "connection_id": {
                "type": "integer"
              },
              "payment_id": {
                "type": "null"
              }
            },
            "required": [
              "id",
              "title",
              "body",
              "send_at",
              "sms_state",
              "email_state",
              "notes",
              "created_at",
              "updated_at",
              "appointment_id",
              "connection_id",
              "payment_id"
            ]
          };

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


        const schema = {

            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "body": {
                "type": "string"
              },
              "send_at": {
                "type": "null"
              },
              "sms_state": {
                "type": "string"
              },
              "email_state": {
                "type": "string"
              },
              "notes": {
                "type": "string"
              },
              "created_at": {
                "type": "string"
              },
              "updated_at": {
                "type": "string"
              },
              "appointment_id": {
                "type": "integer"
              },
              "connection_id": {
                "type": "integer"
              },
              "payment_id": {
                "type": "null"
              }
            },
            "required": [
              "id",
              "title",
              "body",
              "send_at",
              "sms_state",
              "email_state",
              "notes",
              "created_at",
              "updated_at",
              "appointment_id",
              "connection_id",
              "payment_id"
            ]
          }


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


        const schema = {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "send_at": {
                    "type": "null"
                },
                "sms_state": {
                    "type": "string"
                },
                "email_state": {
                    "type": "string"
                },
                "notes": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "appointment_id": {
                    "type": "integer"
                },
                "connection_id": {
                    "type": "integer"
                },
                "payment_id": {
                    "type": "null"
                }
            },
            "required": [
                "id",
                "title",
                "body",
                "send_at",
                "sms_state",
                "email_state",
                "notes",
                "created_at",
                "updated_at",
                "appointment_id",
                "connection_id",
                "payment_id"
            ]
        };


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


        const schema = {

            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "title": {
                            "type": "string"
                        },
                        "body": {
                            "type": "string"
                        },
                        "send_at": {
                            "type": "string"
                        },
                        "sms_state": {
                            "type": "string"
                        },
                        "email_state": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "appointment_id": {
                            "type": "integer"
                        },
                        "connection_id": {
                            "type": "integer"
                        },
                        "payment_id": {
                            "type": "null"
                        }
                    }

                }
            ]
        };


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