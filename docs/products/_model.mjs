export default {
    product: {
        type: "object",
        properties: {
            name: {
                type: "String",
                description: "name of product",
                example: "pomme",
            },
            quantity: {
                type: "Number",
                description: "quantity of product",
                example: "15",
            },
        },
    },
    products: {
        type: "object",
        additionalProperties: { $ref: "#/compenents/schema/product" }
    }
}