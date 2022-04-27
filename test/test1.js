const assert = require("assert");
const axios = require("axios").default;

const req = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
});



describe("GET /appointments", () => {

    before((done) => {
        const self = this;
        req.get("/appointments")
            .then(function (res) {
                self.res = res;
                done();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })



    })
    it("Should have right JSON schema for response.", () => {
        console.log(this.res);
        assert(false, "This should be true statement.");

    })
})