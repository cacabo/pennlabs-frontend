const $form = $('#form');

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
    $form.slideUp(200);

    let ans = `
      <p class="bigger">
        Hi ${name}! We've leveraged machine learning to match you with your Star Wars friend: ${res.name}. Have a good time.
      </p>
    `;

    console.log(ans);

    const $content = $('#content');
    $content.html(ans);
    $content.delay(200).slideDown(200);
  });
});
