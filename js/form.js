let name = "";
const $form = $('#form');
const $content = $('#content');

$form.submit(function(e) {
  // Stop redirect
  e.preventDefault();

  // Find a random number
  const num = Math.floor(Math.random() * 51);

  $.ajax({
    url: `https://swapi.co/api/people/${num}`,
  }).done(function(res) {
    console.dir(res.name);
    // Find the passed in name
    const name = $('#name').val();

    // Hide the form
    $form.delay(200).slideUp(200);
  });
});
