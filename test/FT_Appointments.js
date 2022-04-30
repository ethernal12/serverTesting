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
                        },
                        "connection": {
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
                                },
                            ]
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
                        "connection_id",
                        "connection",
                        "messages"
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
        console.log(postResId)


    })

    it("Should have the right JSON schema for response.", () => {

        const schema = {

            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "notes": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "connection_id": {
                    "type": "integer"
                },
                "datetime": {
                    "type": "null"
                },
                "title": {
                    "type": "string"
                },
                "quantity": {
                    "type": "integer"
                },
                "price": {
                    "type": "number"
                },
                "calendar_id": {
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
                "id",
                "notes",
                "description",
                "connection_id",
                "datetime",
                "title",
                "quantity",
                "price",
                "calendar_id",
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
                        },
                        "connection": {
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
                                },
                            ]
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
                        "connection_id",
                        "connection",
                        "messages"
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


        const schema = {

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
                    "type": "null"
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
                },
                "connection": {
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
                },
                "messages": {
                    "type": "array",
                    "items": {}
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
                "connection_id",
                "connection",
                "messages"
            ]
        }


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


        const schema = {

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
                    "type": "null"
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
                },
                "connection": {
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
                },
                "messages": {
                    "type": "array",
                    "items": {}
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
                "connection_id",
                "connection",
                "messages"
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


        const schema = {

            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "notes": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "connection_id": {
                    "type": "integer"
                },
                "datetime": {
                    "type": "null"
                },
                "title": {
                    "type": "string"
                },
                "quantity": {
                    "type": "integer"
                },
                "price": {
                    "type": "number"
                },
                "calendar_id": {
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
                "id",
                "notes",
                "description",
                "connection_id",
                "datetime",
                "title",
                "quantity",
                "price",
                "calendar_id",
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
                        },
                        "connection": {
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
                                },
                            ]
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
                        "connection_id",
                        "connection",
                        "messages"
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








