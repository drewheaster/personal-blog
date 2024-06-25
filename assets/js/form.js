const blogPost = $('#blog-post-form');
const backButton = $('#back-btn');
const mainPage = $('section[class="writing-container"]');
const blogPage = $('section[class="blog-post-container"]');
const blogSection = $('section[class="blog-post-section"]');
const themeButton = $('input[id="dark-light-mode-btn"]');

let posts = [];

function handleFormSubmit(event) {
    event.preventDefault();

    let userBlogEntry = {
        username: '',
        title: '',
        content: '',
    }

    const userName = $("input[id='username']");
    const blogTitle = $("input[id='blog-title']");
    const blogContent = $("textarea[id='post-content']");

    if (!blogContent) {
        console.log('Must include username, title, and content in order to publish')
        return;
    };

    userBlogEntry.username = userName.val();
    userBlogEntry.title = blogTitle.val();
    userBlogEntry.content = blogContent.val();

    posts.push(userBlogEntry);

    localStorage.setItem('listofobjects', JSON.stringify(posts));

    mainPage.hide();
    blogPage.show();

    userName.val('');
    blogTitle.val('');
    blogContent.val('');

    newPosts = localStorage.getItem('listofobjects');
    newBlogPosts = JSON.parse(newPosts);

    blogSection.empty();

    newBlogPosts.forEach(post => {
        const blogPostItem = `
        <div class="blog-post">
            <h2 class="blog-post-title">${post.title}</h2>
            <p class="blog-post-content">${post.content}</p>
            <footer class="blog-post-footer">${post.username}</footer>
        </div>`;

        blogSection.append(blogPostItem);
    });
};

blogPost.on('submit', handleFormSubmit)

function handleReturnToMain (event) {
    event.preventDefault();

    blogPage.hide();
    mainPage.show();
}

backButton.on('click', handleReturnToMain)

themeButton.on("click", function() {
    if ($(".title-section").hasClass("dark")) {
        $(".title-section").removeClass("dark");
    } else {
        $(".title-section").addClass("dark")
    }
    if ($(".writing-container").hasClass("secondary-dark")) {
        $(".writing-container").removeClass("secondary-dark");
    } else {
        $(".writing-container").addClass("secondary-dark")
    }
    if ($(".blog-post-container").hasClass("secondary-dark")) {
        $(".blog-post-container").removeClass("secondary-dark");
    } else {
        $(".blog-post-container").addClass("secondary-dark")
    }
    if ($(".footer-title").hasClass("text-dark")) {
        $(".footer-title").removeClass("text-dark");
    } else {
        $(".footer-title").addClass("text-dark")
    }
})