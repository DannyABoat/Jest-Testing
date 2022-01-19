
// const { TestWatcher } = require("jest");

// const app = require("../app.js")


// test ('Should equal 0 when passed 5,5', () => {
//     expect(app.sub(5,5)).toEqual(0);
// })

// test ('Should not contain Ben' , () => {
//     expect(app.myArray).not.toContain('Ben')
// })


const app = require("../app")

test('should equal 5 when passed 2 & 3', () => {
    expect(app.add(2, 3)).toEqual(5)
})

test('should contain avatar (the best film ever)', () => {
    expect(app.movies).toContain("avatar")
})