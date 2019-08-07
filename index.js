const hasSupport = "loading" in HTMLImageElement.prototype;
document.getElementById("supported").textContent = hasSupport
  ? "Great! Native image lazy loading is supported in your browser"
  : `Native image lazy loading is NOT supported in your browser.
      Please enable the appropriate flag. e.g. chrome://flags/#enable-lazy-image-loading`;

if (hasSupport) {
  const goodTestCaseButton = document.getElementById("goodTestCase");
  const badTestCaseButton = document.getElementById("badTestCase");

  goodTestCaseButton.onclick = () => {
    document.getElementById("app").innerHTML = `${generateImages(true)}`;
  };

  badTestCaseButton.onclick = () => {
    document.getElementById("app").innerHTML = `${generateImages(false)}`;
  };

  function generateImages(addDimensions) {
    let images = "",
      i = 0;
    while (i < 100) {
      images += `<div>
                  <img loading="lazy" 
                  src="https://placem.at/places?h=400&w=400&random=${i}"
                  ${addDimensions ? "width = 400" : ""}
                  ${addDimensions ? "height = 400" : ""}
                  alt="placeholderimg" />
                </div>`;
      i++;
    }
    return images;
  }
}
