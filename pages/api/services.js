const posts = [
    {
        "slug":"web-app-development",
        "title":"Web Application Development",
        "subtitle":"At Manthan Technologies, we specialize in providing custom web app development services tailored to meet the unique needs of each client. Our team is proficient in a wide range of technologies, including HTML5, CSS3, JavaScript, jQuery, React, Less/Sass, and more. We offer a comprehensive suite of services to build featured-rich secure web applications and Software development.",
        "whychoose":{
            "maintitle":"Why Choose",
            "title":"Why Choose Manthan Technologies for Web App Development Services?",
            "subtitle":"Manthan Technologies excels in designing tailored web app development solutions. With track records of web application services, thousands of businesses for various industries count on us.",
            "whychooselist":"<li>7+ Years of Experience in Various Web App Development</li><li>35+ Completed Web App Development Projects</li><li>Prioritize Usability and Intuitive Interfaces For User-Centric Design</li><li>Understanding Client Requirements Thoroughly</li><li>Agile Team With Weekly Sprint Progress Updates</li><li>Seamlessly Integrate With Other Systems Or Apis As Needed</li><li>Prioritizing Security, Quality Assurance, and Speed Optimization</li><li>Build Web Apps That Can Accommodate Future Growth and Expansion</li><li>Providing Documentation For Easy Maintenance and Updates</li>"
        },
        "keytakeaway":{
            "title":"Key take away from Manthan Technologies",
            "subtitle":"<li>Industry Expertise</li><li>Quality Assurance</li><li>Competitive Pricing</li><li>On-time Delivery</li><li>Strict NDA Policy</li><li>No Hidden Costs</li><li>Quick Support</li>"
        },
        "services":{
            "maintitle":"Services",
            "title":"Why Choose Manthan Technologies for Web App Development Services?",
            "subtitle":"Manthan Technologies excels in designing tailored web app development solutions. With track records of web application services, thousands of businesses for various industries count on us.",
            "list":[
                {
                    "title":"Custom Web Development Services",
                    "subtitle":"Our team employs the best web development practices and user experience (UX) principles to ensure your application is highly engaging, intuitive, and provides seamless experiences. We are dedicated to staying updated on emerging technologies and creating interactive apps through our comprehensive services."
                },
                {
                    "title":"E-commerce Web Development",
                    "subtitle":"Our E-commerce experts are dedicated to helping you launch and manage a thriving online store. We know the value of an efficient, user-friendly E-commerce website in reinforcing your brand and expanding your sales potential."
                },
                {
                    "title":"Custom Web Design & Development",
                    "subtitle":"Our custom web design and development services empower businesses to create a distinctive website that embodies their brand and achieves their goals. Our team excels in developing portals with bespoke features, interactive elements, responsive layouts, and integrated data sets."
                },
                {
                    "title":"Custom Web App Development",
                    "subtitle":"Our development team possesses the expertise to craft custom web app solutions, ensuring seamless performance across all devices, from desktops to smartphones. We have successfully developed Single-Page Applications (SPAs), Progressive Web Apps (PWAs), and cross-platform experiences."
                },
                {
                    "title":"Backend Development",
                    "subtitle":"At Manthantech, we excel in backend development, database management, and API design. Leveraging cutting-edge technologies and our seasoned expertise in back-end programming, rest assured that your website will operate seamlessly, providing your visitors with an exceptional experience."
                },
                {
                    "title":"Website Maintenance & Support",
                    "subtitle":"Alongside our custom development solutions, we specialize in website upgrades and maintenance services. Whether you're seeking to enhance your website's functionality or improve its performance and security, we've got you covered. From bug fixes and updates to performance optimization and security enhancements, we provide comprehensive assistance to help you get the most out of your website."
                }
            ]
        }
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