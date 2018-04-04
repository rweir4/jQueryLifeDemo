<h1>Parks and Recreation jQueryLife Demo</h1>
<img src="https://img.shields.io/badge/NPM%20Version-3.10.10-blue.svg"/>

<p>This Demo uses the <a href="https://github.com/rweir4/jqueryLife">jQueryLife</a> library I made to send off AJAX requests to Giphy and display them in different formats based on event listeners.</p>


<img src="./images/parksAndRecGiphyDemo.gif"></img>

<h3>Query Selection:</h3>

<p>Use $l in lieu of $ to wrap elements.</p>

  ```
  const generate = $l('.generate');
  const image = $l('.image-to-be-gen');

  const small = $l('.small');
  const normal = $l('.normal');
  const large = $l('.large');
  ```

<h3>AJAX Request:</h3>

<p>Use the Giphy API for the url, then execute code upon success, and utilize the promise functionality to handle async.</p>

  ```
  generate.on("click", e => {
    $l.ajax({
      url:
      `https://api.giphy.com/v1/gifs/random?tag=parks+and+rec&api_key=L2yCnV4B058nsp7fHBXAtCUhXKIa6A8v&rating=G`,
      success(img) {
        image.attr('src', `${JSON.parse(img).data.images.original.url}`);
      }
    }).then(() => {
      CLASSLIST.forEach(className => {
        image.removeClass(className);
      });

      image.addClass("normal");
      small.addClass("show");
      normal.addClass("show");
      large.addClass("show");
    });
  });
  ```

  <h3>Event Listener Example:</h3>

  <p>Wipe all classes from the element and then add the desired class based on the button pressed.</p>

  ```
  small.on("click", e => {
    CLASSLIST.forEach(className => {
      image.removeClass(className);
    });
    image.addClass("small");
  });
  ```
