export const schema = {
    type: "object",
    properties: {
        users: {
            type: "array",
            minItems: 3,
            maxItems: 5,
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        unique: true,
                        minimum: 1
                    },
                    firstName: {
                        type: "string",
                        faker: "name.firstName"
                    },
                    lastName: {
                        type: "string",
                        faker: "name.lastName"
                    },
                    email: {
                        type: "string",
                        faker: "internet.email"
                    }
                },
                //remove items from the array for JSON Schema Faker to occasionaly miss the fields out
                required: ["id", "firstName", "lastName", "email"]
            }
        }
    },
    required: ["users"]
};
