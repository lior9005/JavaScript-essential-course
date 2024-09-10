var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    // Retrieve the articles from the server response.
    var articles = xhr.response.articles;
    
    // Get the div element where the articles will be displayed.
    var articlesDiv = document.getElementById('articles');

    // Loop through each article in the articles array.
    articles.forEach(function(article) {
        // Create a new div element to hold the article content.
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');  // Add a class 'article' for styling purposes.

        // Create an h2 element for the article title and set its text content.
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Create a paragraph element for the article description and set its text content.
        var description = document.createElement('p');
        description.textContent = article.description;

        // Create a header (h3) for the section listing "Ways to Achieve".
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        // Create an unordered list (ul) to list the "Ways to Achieve".
        var waysList = document.createElement('ul');
        // Loop through each "way" in the article's ways_to_achieve array.
        article.ways_to_achieve.forEach(function(way) {
            // Create a list item (li) for each way and add it to the unordered list.
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Create a header (h3) for the "Benefits" section.
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // Create an unordered list (ul) to list the "Benefits".
        var benefitsList = document.createElement('ul');
        // Loop through each "benefit" in the article's benefits array.
        article.benefits.forEach(function(benefit) {
            // Create a list item (li) for each benefit and add it to the unordered list.
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Append the title, description, ways header/list, and benefits header/list to the article div.
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Finally, append the article div to the main articles div.
        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();