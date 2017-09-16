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

$(function() {
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
});
