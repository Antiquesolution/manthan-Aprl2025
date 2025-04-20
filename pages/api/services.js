const posts = [
    {
        "slug":"php-team-lead",
        "title":"PHP Team Lead",
        "subtitle":"If you think you can do team management & you have good knowledge of PHP, apply now.",
        "experience":"4+ Years",
        "jobtype":"Full Time",
        "location":"ahmedabad",
        "openings":"1",
        "jobdiscription":{
            "title":"Job Description",
            "subtitle":"The role includes overseeing and guiding a team of PHP developers in the development and maintenance of PHP-based web applications and systems. This role combines technical expertise in PHP programming with leadership and project management skills."
        },
        "qualifications":{
            "title":"Minimum Qualifications",
            "subtitle":"B.E/B.Tech/M.E/M.Tech in CS or IT/ BCA/ MCA"
        },
        "roles_responsibilities":[
            {
                "content":"<ul><li>Preferred candidate should be confident and should have willingness to undertake multiple challenges and should have strong desire to emerge as winner in handling crucial situations.</li><li>Should be capable of handling multiple projects.</li><li>Should have a good knowledge and experience of Ajax, jQuery, WordPress, Core PHP, Laravel, Shopify etc.</li><li>Should be efficient enough to utilize the resources available to him.</li><li>Analyze client requirements and prepare scope of work and time frame accordingly.</li><li>Can handle and plan project milestones and deadlines.</li><li>Should be able to interact with client during entire project development life cycle.</li></ul>"
            },
            {
                "content":"<ul><li>Should have an excellent communication and leadership skills.</li><li>Should have good analytical and problem solving skills.</li><li>Knowledge of open source ecommerce softwares.</li><li>Ability to motivate staff in a team- oriented, collaborative environment.</li><li>Should eager to learn new things and take up challenges.</li><li>Self Learn and career oriented.</li><li>Enthusiastic, energetic, detail oriented, and self-Motivated.</li><li>Should be able to interact with client during entire project development life cycle and able to manage project delivery on time.</li><li>Should be able to Improve the technical competence of the team through training development of existing and new team members.</li><li>Must be productive, self-disciplined, and capable of managing team productivity and result-oriented work quality.</li></ul>"
            }
        ]
    }
    
    
];

export default function handler(req, res) {
    const {slug} = req.query;
    let filteredPosts = posts;
    if (slug) {
        filteredPosts = filteredPosts.filter(post => post.slug.toLowerCase() === slug.toLowerCase());
    }
    if (filteredPosts.length > 0) {
        res.status(200).json(filteredPosts);
    } else {
        res.status(404).json({ error: 'No posts found' });
    }
}