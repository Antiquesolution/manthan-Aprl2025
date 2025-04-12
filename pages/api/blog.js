const posts = [
    {
        "id": 2451,
        "Date": "March 19, 2025",
        "slug": "top-software-development-technologies-to-watch-out-in-2025",
        "Title": "Top Software Development Technologies To Watch Out in 2025",
        "Content": "<p>In the dynamic world of technology, businesses rely on custom software development to stay competitive and efficient. The software development landscape is evolving</p>",
        "Tags": [ "HTML", "CSS"],
        "author": {
            "Name": "Rahul Patidar",
            "Bio": "Rahul Patidar - UI/UX Designer"
        }
    },
    {
        "id": 2459,
        "Date": "March 28, 2025",
        "slug": "top-software-development-technologies-to-watch-out-in-20251",
        "Title": "Top Software Development Technologies To Watch Out in 20251",
        "Content": "<p>In the dynamic world of technology, businesses rely on custom software development to stay competitive and efficient. The software development landscape is evolving232</p>",
        "Tags": ["Design", "Development"],
        "author": {
            "Name": "Rahul Patidar1",
            "Bio": "Rahul Patidar - UI/UX Designer12"
        }
    },
    {
        "id": 2459,
        "Date": "March 28, 2025",
        "slug": "top-software-development-technologies-to-watch-out-in-20250",
        "Title": "Top Software Development Technologies To Watch Out in 20250",
        "Content": "<p>In the dynamic world of technology, businesses rely on custom software development to stay competitive and efficient. The software development landscape is evolving230</p>",
        "Tags": ["Design", "Development"],
        "author": {
            "Name": "Rahul Patidar1",
            "Bio": "Rahul Patidar - UI/UX Designer12"
        }
    },
    {
        "id": 2460,
        "Date": "March 29, 2025",
        "slug": "design-trends-to-watch-in-20253",
        "Title": "Design Trends to Watch in 20253",
        "Content": "<p>Design is constantly evolving. In 2025, we expect a lot of new trends to shape the future of design and technology.</p>",
        "Tags": ["UI/UX", "CSS"],
        "author": {
            "Name": "John Doe",
            "Bio": "John Doe - UI/UX Specialist"
        }
    }
];

export default function handler(req, res) {
    const { slug, tag, author } = req.query;
    let filteredPosts = posts;
    if (slug) {
        filteredPosts = filteredPosts.filter(post => post.slug.toLowerCase() === slug.toLowerCase());
    }
    if (tag) {
        filteredPosts = filteredPosts.filter(post => 
            post.Tags && post.Tags.some(t => t.toLowerCase().replace('-', '/').replace('/', '-') === tag.toLowerCase().replace('-', '/').replace('/', '-'))
        );
    }
    if (author) {
        filteredPosts = filteredPosts.filter(post => 
            post.author && post.author.Name.toLowerCase().replace(' ', '-').replace('-', '/').replace('/', '-') === author.toLowerCase().replace(' ', '-').replace('-', '/').replace('/', '-')
        );
    }

    if (filteredPosts.length > 0) {
        res.status(200).json(filteredPosts);
    } else {
        res.status(404).json({ error: 'No posts found' });
    }
}