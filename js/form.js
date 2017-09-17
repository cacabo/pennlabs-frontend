var $form = $('#form');
var $name = $('#name');
var $project = $('#project');
var $email = $('#email');
var $alt = $('#alt');
var $button = $('#submit');

$('.form-control').keypress(function() {
  disable();
});

function disable() {
  console.log('Called disable');
  if (
    $name.val().length &&
    $project.val().length &&
    $email.val().length &&
    $alt.val().length
  ) {
    $button.removeClass('disabled');
  } else {
    $button.addClass('disabled');
  }
}

$form.submit(function(e) {
  // Stop redirect
  e.preventDefault();

  // Find a random number
  var num = Math.floor(Math.random() * 51);

  $.ajax({
    url: `https://swapi.co/api/people/${num}`,
  }).done(function(res) {
    console.dir(res.name);
    // Find the passed in name
    var name = $('#name').val();

    // Hide the form
    $form.slideUp(200);

    var ans = `
      <p class="bigger">
        Hi <span class="underline">${name}!</span> We've leveraged machine learning to match you with your Star Wars friend: <span class="underline">${res.name}.</span> Have a good time meeting your new pal!
      </p>
    `;

    console.log(ans);

    var $content = $('#content');
    $content.html(ans);
    $content.delay(200).slideDown(200);
  });
});
