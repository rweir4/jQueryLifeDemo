//have a button to make the image larger or smaller or normal with remove and add class

$l(playDemo);

function playDemo() {
  const button = $l('button');
  button.on("click", e => {
    $l.ajax({
      url:
      `https://api.giphy.com/v1/gifs/random?tag=parks+and+rec&api_key=L2yCnV4B058nsp7fHBXAtCUhXKIa6A8v&rating=G`,
      success(img) {
        const image = $l('section').find('img');
        image.attr('src', `${JSON.parse(img).data.images.downsized_large.url}`);
      }
    });
  });
}
