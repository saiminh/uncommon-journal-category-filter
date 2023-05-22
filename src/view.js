let activeFilters = [];

function showCategory(category) {
  const filterclass = 'category-' + category;
  activeFilters.push(filterclass);
  appyFilters();
}
function hideCategory(category) {
  const filterclass = 'category-' + category;
  activeFilters.splice(activeFilters.indexOf(filterclass), 1);
  appyFilters();
}

function appyFilters(){
  document.querySelectorAll('.filtered').forEach((post) => {
    post.classList.remove('filtered'); 
  })
  activeFilters.forEach((filter) => {
    console.log(filter);
    document.querySelectorAll('.wp-block-post').forEach((post) => {
      if (post.classList.contains(filter)) {
        post.classList.add('filtered');
      } 
    })
  })
}

window.addEventListener('DOMContentLoaded', function() {
  const posts = document.querySelectorAll('.wp-block-post');
  posts.forEach((post) => {
    post.classList.add('filtered');
  })
  const filter = document.querySelector('.uncommon-journal-category-filter');
  const toggler = document.querySelector('.uncommon-journal-category-filter-toggler');
  document.querySelector(':root').style.setProperty('--toggler-height', toggler.offsetHeight + 'px');
  document.querySelector(':root').style.setProperty('--filter-height', filter.offsetHeight + 'px');

  toggler.addEventListener('click', function() {
    filter.classList.toggle('uncommon-journal-category-filter--active')
  })

  const filterItems = document.querySelectorAll('.uncommon-journal-category-filter-list .cat-item a');
  filterItems.forEach((item) => {
    const categoryPos = item.getAttribute('href').search('/category/');
    const category = item.getAttribute('href').slice(categoryPos + 10, item.getAttribute('href').length - 1);
    
    item.addEventListener('click', function(e) {

      e.preventDefault();
      
      if ( activeFilters.length === 0 ) {
        posts.forEach((post) => {
          post.classList.remove('filtered');
        })
        showCategory(category);
      }
      else if ( activeFilters.includes('category-' + category) && activeFilters.length === 1 ) {
        posts.forEach((post) => {
          post.classList.add('filtered');
          activeFilters = [];
        })
      }
      else if (item.parentElement.classList.contains('cat-item--active')) {
        hideCategory(category);
      }
      else {
        showCategory(category);
      }

      item.parentElement.classList.toggle('cat-item--active');
      
      console.log(activeFilters);
    })
  })

})