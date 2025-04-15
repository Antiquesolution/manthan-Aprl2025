export default function handler(req, res) {
    res.status(200).json({
        "banner": {
            "maintitle": "Working Method",
            "title": "A deep dive into our innovative working methods",
            "subtitle": "At Manthan Technologies, we ensure peace of mind with a transparent process and 7+ years of global expertise. Your satisfaction and confidence are our top priorities throughout the project journey.",
            "button": {
                "url": "#",
                "title": "Get Started",
                "target": ""
            },
            "image": {
                "url": "/images/workingmethod-banner.jpg",
                "alt": "workingmethod-banner"
            }
        },
        "workingmethod":{
            "maintitle":"Success Through Collaboration",
		    "title":"How Can We Collaborate Together?",
			"subtitle":"Over the years of its working, Manthantech has gathered trust and goodwill apart from a long line-up of clientele.",
            "workingmethodlist":[
                {
                    "image":{
                        "url":"/images/nice-to-meet-you.svg",
                        "alt":"nice-to-meet-you"
                    },
                    "content":"<h2>Nice to Meet You</h2><p>Welcome & Thanks to choose us! You can reach to us by email, chat or direct calling for your project. We let you request a quote and download the project questionnaire and submit it to help us to know your project needs. Once we get your questionnaire, we will give you best proposal and estimate price within your budget. Let's move for online business or presence with Digital Innovation.</p><ul><li>Email / Chat / Call</li><li>Project Questionnaire</li><li>Proposal</li><li>Estimate</li></ul>"
                },
                {
                    "image":{
                        "url":"/images/awesome-design-creation.svg",
                        "alt":"awesome-design-creation"
                    },
                    "content":"<h2>Awesome Design Creation</h2><p>Once we know your business needs exactly, we move to industry research which gives market idea and what your business will need to beat your rivals. Then we create Sketches & Wireframe for genuine feedback which will help us directly in development process. As per wireframe, we start designing task and take design approval of client, if not satisfied, revision comes in.</p><ul><li>Industry Research</li><li>Sketches</li><li>Wireframe</li><li>Design Creation</li><li>Design Approval</li></ul>"
                },
                {
                    "image":{
                        "url":"/images/well-structured-development.svg",
                        "alt":"well-structured-development"
                    },
                    "content":"<h2>Well Structured Development</h2><p>For responsive and functional site, better HTML coding is mandatory and we give our best for unique HTML coding. Static site review will tell us we are going in right direction or not. Then we will move for CMS Development and once it's done perfectly, we will do content input given by client's side.</p><ul><li>HTML Coding</li><li>Static Site Review</li><li>CMS Development</li><li>Content Input</li></ul>"
                },
                {
                    "image":{
                        "url":"/images/taking-a-closer-look.svg",
                        "alt":"weltaking-a-closer-look"
                    },
                    "content":"<h2>Taking a Closer Look</h2><p>At the end of web or application development process, we will do code testing, usability testing, device testing, and browser testing to make sure we deliver error-free site. We will check all essential things before go live.</p><ul><li>Content Input</li><li>Code Testing</li><li>Usability Testing</li><li>Device Testing</li><li>Browser Testing</li></ul>"
                },
                {
                    "image":{
                        "url":"/images/deliver-or-go-live.svg",
                        "alt":"deliver-or-go-live"
                    },
                    "content":"<h2>Deliver or Go Live</h2><p>After in-depth analysis, we will go for final revision and changes, and then you will get final live demo, if you agree, then due payment is completed and we will make your site live. Go live, that’s not over. We will give one month free support and during this one month if you found any query regarding our work, we will solve it instantly.</p><ul><li>Revision & Changes</li><li>Due Payment</li><li>Deliver / Go Live</li><li>One Month Free Support</li></ul>"
                },
                {
                    "image":{
                        "url":"/images/reach-your-audience.svg",
                        "alt":"reach-your-audience"
                    },
                    "content":"<h2>Reach Your Audience</h2><p>After in-depth analysis, we will go for final revision and changes, and then you will get final live demo, if you agree, then due payment is completed and we will make your site live. Go live, that’s not over. We will give one month free support and during this one month if you found any query regarding our work, we will solve it instantly.</p><ul><li>Promote</li><li>Analytics</li><li>SEO</li><li>SMO</li></ul>"
                }
            ]
        }
    });
}