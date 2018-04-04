$l(playDemo);

function playDemo() {
  const generate = $l('.generate');
  const image = $l('.image-to-be-gen');

  const small = $l('.small');
  const normal = $l('.normal');
  const large = $l('.large');

  const CLASSLIST = ['small', 'normal', 'large'];

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

  small.on("click", e => {
    CLASSLIST.forEach(className => {
      image.removeClass(className);
    });
    image.addClass("small");
  });


  normal.on("click", e => {
    CLASSLIST.forEach(className => {
      image.removeClass(className);
    });
    image.addClass("normal");
  });

  large.on("click", e => {
    CLASSLIST.forEach(className => {
      image.removeClass(className);
    });
    image.addClass("large");
  });
}
