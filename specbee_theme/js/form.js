document.addEventListener('DOMContentLoaded', function() {
  var titleElements = document.querySelectorAll('.views-field-title');
  for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].classList.add('new-class-article');
  }
});

(function() {
  Drupal.behaviors.addArticleClass = {
    attach: function (context, settings) {
      var titleElements = document.querySelectorAll('.views-field-title');
      for (var i = 0; i < titleElements.length; i++) {
        titleElements[i].classList.add('new-class-article-2');
      }
    }
  };
})();
