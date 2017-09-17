var products = [
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

var cart = [];

var count = 0;

function renderCart() {
  var $content = $('#cart-content');

  if (cart && cart.length > 0) {
    var ans = '';
    cart.forEach(function(item, index) {
      ans += `
        <div class="removeFromCart cursor" data="${index}">
          <i class="fa fa-times"></i>
        </div>
        <h4 class="blue-text">${item.title}</h4>
        <p class="blue-gray-text">${item.body}</p>
      `;
      if (index !== cart.length - 1) {
        ans += '<div class="line-1 light-line"></div>';
      }
    });
    $content.html(ans);
  } else {
    $content.html('There are no items in your cart yet, explore our products and add some!');
  }

  var $count = $('#count');
  $count.html('' + count);
  if (count == 0) {
    $count.hide(200);
  } else {
    $count.show(200);
  }
}

function renderProducts() {
  var ans = '';
  products.forEach(function(product, index) {
    ans += `
      <div class="product col-12 col-md-6 col-lg-4" id=${index}>
        <div class="white round-2 shade-2 hover pad-1">
          <h3 class="blue-text">
            ${product.title}
          </h3>
          <p class="marg-bot-05 blue-gray-text">
            ${product.body}
          </p>
          <div class="space-1"></div>
          <div class="cursor addToCart bold" data=${index}>
            <i class="fa fa-plus fa-lg"></i>
          </div>
        </div>
      </div>
    `;
  });
  $('#root').html(ans);
}

function clickListeners() {
  var $add = $('.addToCart');
  var $remove = $('.removeFromCart');

  $add.click(function() {
    var i = $(this).attr('data');
    var obj = products.splice(i, 1);
    cart.push(obj[0]);
    count++;
    renderCart();
    renderProducts();
    clickListeners();
  });

  $remove.click(function() {
    var i = $(this).attr('data');
    var obj = cart.splice(i, 1);
    products.push(obj[0]);
    count--;
    renderCart();
    renderProducts();
    clickListeners();
  });
}

// Render the products on page load
$(function() {
  renderProducts();
  clickListeners();
});

$(document).ready(function() {
  var $btn = $('#cart-button');
  var $cart = $('#cart');
  var $icon = $('#cart-button .fa');

  $btn.click(function() {
    if ($cart.hasClass('show')) {
      $btn.removeClass('show');
      $cart.removeClass('show').hide(200);
      $cart.css('color', 'white');
    } else {
      $btn.addClass('show');
      $cart.addClass('show').show(200);
      setTimeout(function() {
        $($cart).css('color', 'black');
      }, 200);
    }
  });

  $('.checkout').click(function() {
    $(this).html('Mmmmaybe later &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>');
    setTimeout(function() {
      $('.checkout').html('Checkout &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>');
    }, 600);
  });
});
