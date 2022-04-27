const assert = require("assert");
const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
  });

describe("Test1", () => {
    it("Should pass.", () => {

        assert(false, "This should be true statement.");

    })
})