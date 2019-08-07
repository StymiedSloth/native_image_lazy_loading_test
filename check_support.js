window.onload = () => {
  const hasSupport = "loading" in HTMLImageElement.prototype;
  document.getElementById("supported").textContent = hasSupport
    ? "Great! Native image lazy loading is supported in your browser"
    : `Native image lazy loading is NOT supported in your browser.
        Please enable the appropriate flag. e.g. chrome://flags/#enable-lazy-image-loading`;
}