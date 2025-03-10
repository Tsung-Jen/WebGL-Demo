// The main() function is called when our script is loaded. Its purpose is to set up the WebGL context and start rendering content.

main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#gl-canvas");
  // Initialize the GL context, we try to get a WebGLRenderingContext for it by calling getContext() and passing it the string "webgl"
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
