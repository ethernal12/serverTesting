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


        const schema = {
            "type": "array",
            "items": [

                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "surname": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "phone": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "null"
                        },
                        "type": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "billing_connection_id": {
                            "type": "integer"
                        },
                        "billing_connections": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "surname": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "phone": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "null"
                                        },
                                        "type": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "billing_connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "name",
                                        "surname",
                                        "email",
                                        "phone",
                                        "notes",
                                        "type",
                                        "created_at",
                                        "updated_at",
                                        "billing_connection_id"
                                    ]
                                }
                            ]

                        },
                        "messages": {
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

                            ]
                        },
                        "appointments": {
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
                                        "description": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "quantity": {
                                            "type": "integer"
                                        },
                                        "price": {
                                            "type": "number"
                                        },
                                        "datetime": {
                                            "type": "string"
                                        },
                                        "calendar_id": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "description",
                                        "notes",
                                        "quantity",
                                        "price",
                                        "datetime",
                                        "calendar_id",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }

                            ]
                        },
                        "payments": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "amount": {
                                            "type": "integer"
                                        },
                                        "payed_at": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "notes",
                                        "amount",
                                        "payed_at",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "surname",
                        "email",
                        "phone",
                        "notes",
                        "type",
                        "created_at",
                        "updated_at",
                        "billing_connection_id",
                        "billing_connections",
                        "messages",
                        "appointments",
                        "payments"
                    ]

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

        const schema = {

            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "billing_connection_id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                }
            },
            "required": [
                "type",
                "id",
                "billing_connection_id",
                "name",
                "surname",
                "email",
                "phone",
                "updated_at",
                "created_at"
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


        const schema = {
            "type": "array",
            "items": [

                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "surname": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "phone": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "null"
                        },
                        "type": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "billing_connection_id": {
                            "type": "integer"
                        },
                        "billing_connections": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "surname": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "phone": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "null"
                                        },
                                        "type": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "billing_connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "name",
                                        "surname",
                                        "email",
                                        "phone",
                                        "notes",
                                        "type",
                                        "created_at",
                                        "updated_at",
                                        "billing_connection_id"
                                    ]
                                }
                            ]

                        },
                        "messages": {
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

                            ]
                        },
                        "appointments": {
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
                                        "description": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "quantity": {
                                            "type": "integer"
                                        },
                                        "price": {
                                            "type": "number"
                                        },
                                        "datetime": {
                                            "type": "string"
                                        },
                                        "calendar_id": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "description",
                                        "notes",
                                        "quantity",
                                        "price",
                                        "datetime",
                                        "calendar_id",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }

                            ]
                        },
                        "payments": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "amount": {
                                            "type": "integer"
                                        },
                                        "payed_at": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "notes",
                                        "amount",
                                        "payed_at",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "surname",
                        "email",
                        "phone",
                        "notes",
                        "type",
                        "created_at",
                        "updated_at",
                        "billing_connection_id",
                        "billing_connections",
                        "messages",
                        "appointments",
                        "payments"
                    ]

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


        const schema = {

            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "notes": {
                    "type": "null"
                },
                "type": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "billing_connection_id": {
                    "type": "integer"
                },
                "billing_connections": {
                    "type": "array",
                    "items": {}
                },
                "messages": {
                    "type": "array",
                    "items": {}
                },
                "appointments": {
                    "type": "array",
                    "items": {}
                },
                "payments": {
                    "type": "array",
                    "items": {}
                }
            },
            "required": [
                "id",
                "name",
                "surname",
                "email",
                "phone",
                "notes",
                "type",
                "created_at",
                "updated_at",
                "billing_connection_id",
                "billing_connections",
                "messages",
                "appointments",
                "payments"
            ]
        }

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


        const schema = {


            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "notes": {
                    "type": "null"
                },
                "type": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "billing_connection_id": {
                    "type": "integer"
                },
                "billing_connections": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "surname": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "phone": {
                                    "type": "string"
                                },
                                "notes": {
                                    "type": "null"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "created_at": {
                                    "type": "string"
                                },
                                "updated_at": {
                                    "type": "string"
                                },
                                "billing_connection_id": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "id",
                                "name",
                                "surname",
                                "email",
                                "phone",
                                "notes",
                                "type",
                                "created_at",
                                "updated_at",
                                "billing_connection_id"
                            ]
                        }
                    ]
        
                },
                "messages": {
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
        
                    ]
                },
                "appointments": {
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
                                "description": {
                                    "type": "string"
                                },
                                "notes": {
                                    "type": "string"
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "price": {
                                    "type": "number"
                                },
                                "datetime": {
                                    "type": "string"
                                },
                                "calendar_id": {
                                    "type": "string"
                                },
                                "created_at": {
                                    "type": "string"
                                },
                                "updated_at": {
                                    "type": "string"
                                },
                                "connection_id": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "id",
                                "title",
                                "description",
                                "notes",
                                "quantity",
                                "price",
                                "datetime",
                                "calendar_id",
                                "created_at",
                                "updated_at",
                                "connection_id"
                            ]
                        }
        
                    ]
                },
                "payments": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "integer"
                                },
                                "notes": {
                                    "type": "string"
                                },
                                "amount": {
                                    "type": "integer"
                                },
                                "payed_at": {
                                    "type": "string"
                                },
                                "created_at": {
                                    "type": "string"
                                },
                                "updated_at": {
                                    "type": "string"
                                },
                                "connection_id": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "id",
                                "notes",
                                "amount",
                                "payed_at",
                                "created_at",
                                "updated_at",
                                "connection_id"
                            ]
                        }
                    ]
                }
            },
            "required": [
                "id",
                "name",
                "surname",
                "email",
                "phone",
                "notes",
                "type",
                "created_at",
                "updated_at",
                "billing_connection_id",
                "billing_connections",
                "messages",
                "appointments",
                "payments"
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


        const schema = {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "notes": {
                    "type": "null"
                },
                "type": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "billing_connection_id": {
                    "type": "integer"
                }
        
            },
            "required": [
                "id",
                "name",
                "surname",
                "email",
                "phone",
                "notes",
                "type",
                "created_at",
                "updated_at",
                "billing_connection_id"
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


        const schema = {
            "type": "array",
            "items": [

                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "surname": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "phone": {
                            "type": "string"
                        },
                        "notes": {
                            "type": "null"
                        },
                        "type": {
                            "type": "string"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        },
                        "billing_connection_id": {
                            "type": "integer"
                        },
                        "billing_connections": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "surname": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "phone": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "null"
                                        },
                                        "type": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "billing_connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "name",
                                        "surname",
                                        "email",
                                        "phone",
                                        "notes",
                                        "type",
                                        "created_at",
                                        "updated_at",
                                        "billing_connection_id"
                                    ]
                                }
                            ]

                        },
                        "messages": {
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

                            ]
                        },
                        "appointments": {
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
                                        "description": {
                                            "type": "string"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "quantity": {
                                            "type": "integer"
                                        },
                                        "price": {
                                            "type": "number"
                                        },
                                        "datetime": {
                                            "type": "string"
                                        },
                                        "calendar_id": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "title",
                                        "description",
                                        "notes",
                                        "quantity",
                                        "price",
                                        "datetime",
                                        "calendar_id",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }

                            ]
                        },
                        "payments": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "notes": {
                                            "type": "string"
                                        },
                                        "amount": {
                                            "type": "integer"
                                        },
                                        "payed_at": {
                                            "type": "string"
                                        },
                                        "created_at": {
                                            "type": "string"
                                        },
                                        "updated_at": {
                                            "type": "string"
                                        },
                                        "connection_id": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "notes",
                                        "amount",
                                        "payed_at",
                                        "created_at",
                                        "updated_at",
                                        "connection_id"
                                    ]
                                }
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "surname",
                        "email",
                        "phone",
                        "notes",
                        "type",
                        "created_at",
                        "updated_at",
                        "billing_connection_id",
                        "billing_connections",
                        "messages",
                        "appointments",
                        "payments"
                    ]

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
