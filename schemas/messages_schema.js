


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
            },
            POST: {
    
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
            },
            PUT:
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
            },
            GET_ID:
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
            },
            DELETE: {
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
      
    }


return FT[`${request_method}`]
 }
module.exports = { addMethod }