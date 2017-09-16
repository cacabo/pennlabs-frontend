const products = [
  {
    "title": "Full-stack development",
    "body": "The full works",
  },
  {
    "title": "Static websites",
    "body": "Websites and forms to effectively pitch your business",
  },
  {
    "title": "API development",
    "body": "Standalone Node and Express API",
  },
  {
    "title": "Cross-platform front-end",
    "body": "React and React-Native applications",
  },
  {
    "title": "iOS devlopment",
    "body": "Swift mobile app for iPhones",
  },
  {
    "title": "Android devlopment",
    "body": "Java mobile app for Android phones",
  },
];

const cart = [];

function renderProducts() {
  let ans = '';
  products.forEach(function(product, index) {
    ans += `
      <div class="product col-12 col-md-6 col-lg-4" id=${index}>
        <div class="white round-2 shade-2 hover pad-1">
          <h3>
            ${product.title}
          </h3>
          <p>
            ${product.body}
          </p>
        </div>
      </div>
    `;
  });
  $('#root').html(ans);
}

$(function() {
  renderProducts();
});

$(document).ready(function() {
  const $btn = $('#cart-button');
  const $cart = $('#cart');

  $btn.click(function() {
    if ($cart.hasClass('show')) {
      $btn.removeClass('show');
      $cart.removeClass('show').hide(200);
      $cart.css('color','white');
    } else {
      $btn.addClass('show');
      $cart.addClass('show').show(200);
      setTimeout(function() {
        $($cart).css('color','black');
      }, 200);
    }
  });
});
