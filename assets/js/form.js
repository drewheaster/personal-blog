const blogPost = $('#blog-post-form');

let userBlogEntry = {
    username: '',
    title: '',
    content: '',
}

function handleFormSubmit(event) {
    event.preventDefault();

    console.log('cheerio')

    const userName = $("input[id='username']").val();
    const blogTitle = $("input[id='blog-title']").val();
    const blogContent = $("input[id='post-content']").val();

    if (!userName || blogTitle || !blogContent) {
        console.log('Must include username, title, and content in order to publish')
        return;
    };

    localStorage.setItem('username', userName)
}

blogPost.on('submit', handleFormSubmit)