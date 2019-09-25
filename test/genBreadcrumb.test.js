const answer = require("../genBreadcrumb");

describe("Generating Breadcrumb", () => {
  it(`"mysite.com/pictures/holidays.html", " : "`, () => {
    expect(answer.generateBC("mysite.com/pictures/holidays.html", " : ")).toBe(
      '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
    );
  });
  it(`"www.codewars.com/users/GiacomoSorbi", " / "`, () => {
    expect(
      answer.generateBC("www.codewars.com/users/GiacomoSorbi", " / ")
    ).toBe(
      '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
    );
  });
  it(`"www.microsoft.com/important/confidential/docs/index.htm#top", " * "`, () => {
    expect(
      answer.generateBC(
        "www.microsoft.com/important/confidential/docs/index.htm#top",
        " * "
      )
    ).toBe(
      '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>'
    );
  });
  it(`"mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "`, () => {
    expect(
      answer.generateBC(
        "mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp",
        " > "
      )
    ).toBe(
      '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
    );
  }),
    it(`"www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "`, () => {
      expect(
        answer.generateBC(
          "www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi",
          " + "
        )
      ).toBe(
        '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
      );
    });
  it(`https://twitter.de/pictures/meningitis-the-bed-uber-meningitis/at-transmutation-of-and-insider/test.html', ' * '`, () => {
    expect(
      answer.generateBC(
        "https://twitter.de/pictures/meningitis-the-bed-uber-meningitis/at-transmutation-of-and-insider/test.html",
        " * "
      )
    ).toBe(
      '<a href="/">HOME</a> * <a href="/pictures/">PICTURES</a> * <a href="/pictures/meningitis-the-bed-uber-meningitis/">MBUM</a> * <a href="/pictures/meningitis-the-bed-uber-meningitis/at-transmutation-of-and-insider/">TI</a> * <span class="active">TEST</span>'
    );
  });
  it(`'pippi.pi/index.html#info?hack=off', ' . '`, () => {
    expect(answer.generateBC("pippi.pi/index.html#info?hack=off", " . ")).toBe(
      '<span class="active">HOME</span>'
    );
  });
});
