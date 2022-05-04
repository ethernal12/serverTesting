


function addMethod(request_method) {

    const FT = {
         
            GET: {

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
            }, 
            POST: {

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
            },
            PUT: {

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
            },
            GET_ID: {

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
            },
            DELETE: {

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
            }

        
    }


return FT[`${request_method}`]
 }
module.exports = { addMethod }