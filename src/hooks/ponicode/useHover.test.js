const useHover = require("../useHover")
// @ponicode
describe("useHover.default", () => {
    test("0", () => {
        let result = useHover.default()
        expect(result).toMatchSnapshot()
    })
})
