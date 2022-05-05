


function addMethod(request_method) {

    const FT = {
         
            GET:{

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
                                    },
                                    "billing_connection": {
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
                                    "billing_connection"
                                ]
                            },
                            "messages": {
                                "type": "array",
                                "items": {}
                            }
                        },
                        "required": [
                            "id",
                            "notes",
                            "amount",
                            "payed_at",
                            "created_at",
                            "updated_at",
                            "connection_id",
                            "connection",
                            "messages"
                        ]
                    }
    
                ]
            },
            POST:{
    
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
                    "connection_id": {
                        "type": "integer"
                    },
                    "updated_at": {
                        "type": "string"
                    },
                    "created_at": {
                        "type": "string"
                    },
                },
                "required": [
                    "id",
                    "notes",
                    "amount",
                    "payed_at",
                    "connection_id",
                    "updated_at",
                    "created_at"
    
                ]
    
            },
            PUT:{
    
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
                    },
                    "connection": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            }
                        },
                        "required": [
                            "id"
                        ]
                    }
    
                }
    
            },
            GET_ID:{
    
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
                            },
                            "billing_connection": {
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
                            "billing_connection"
                        ]
                    },
                    "messages": {
                        "type": "array",
                        "items": {}
                    }
                },
                "required": [
                    "id",
                    "notes",
                    "amount",
                    "payed_at",
                    "created_at",
                    "updated_at",
                    "connection_id",
                    "connection",
                    "messages"
                ]
    
            },
            DELETE:{
    
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
                    "connection_id": {
                        "type": "integer"
                    },
                    "updated_at": {
                        "type": "string"
                    },
                    "created_at": {
                        "type": "string"
                    },
                },
                "required": [
                    "id",
                    "notes",
                    "amount",
                    "payed_at",
                    "connection_id",
                    "updated_at",
                    "created_at"
            
                ]
            
            }

    }


return FT[`${request_method}`]
 }
module.exports = { addMethod }