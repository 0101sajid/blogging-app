document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.'
        },
        {
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.'
        },
        {
            title: 'Third Blog Post',
            content: 'This is the content of the third blog post.'
        }
    ];

    const postsContainer = document.getElementById('posts');
    const postForm = document.getElementById('post-form');
    const postTitleInput = document.getElementById('post-title');
    const postContentInput = document.getElementById('post-content');

    function renderPosts() {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            
            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;
            postElement.appendChild(postTitle);
            
            const postContent = document.createElement('p');
            postContent.textContent = post.content;
            postElement.appendChild(postContent);
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                deletePost(index);
            });
            postElement.appendChild(deleteButton);
            
            postsContainer.appendChild(postElement);
        });
    }

    function deletePost(index) {
        posts.splice(index, 1);
        renderPosts();
    }

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPost = {
            title: postTitleInput.value,
            content: postContentInput.value
        };
        posts.push(newPost);
        renderPosts();
        postForm.reset();
    });

    renderPosts();
});
