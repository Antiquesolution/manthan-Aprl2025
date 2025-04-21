export default function handler(req, res) {
    res.status(200).json({
        "seo":{
            "title":"Career Opportunities at Manthan Technologies - Join Our Team",
            "discripion":"Website Design,  Web Development, PSD to HTML, Responsive HTML5, Ecommerce Web Development, Mobile App Development, Hubspot Web Development, Wordpress Development, PHP Development, HTML Development, CMS Development",
            "keywords":"career, job at Manthan Technologies, job openings in Manthan Technologies, web developer career, app developer opening, job opportunity, web developer job opening",
            "image": "/images/meta/career-meta-image.jpg"
        },
        "banner": {
            "title": "Join Our Team! Where Growth & Fun Awaits You!",
            "subtitle": "Manthantech Technologies creates a growth journey for you by providing a creative environment to express your ideas. Your career progression is in capable hands with opportunity for learning, getting mentored and receiving exposure to important aspects of your job roles. Join us to begin your journey of professional and personal growth today!",
            "image": {
                 "url": "/images/career-banner.svg",
                "alt": "career-banner"
            },
            "button": {
                "url": "#openings",
                "target": "_self",
                "title": "View All Openings"
            }
        },
        "opening":{
            "maintitle":"Make Your Mark",
            "title":"Current Job Opening",
            "subtitle":"Explore our open positions and build your future with us",
            "image":{
                "url":"/images/not-find-opening-icon.svg",
                "alt":"not-find-opening-icon"
            },
            "findtitle":"Can't find opening?",
            "button":{
                "url":"/",
                "title":"Click Here",
                "target":"_self",
            },
            "googleimage":{
                "url":"/images/google-review.svg",
                "alt":"google-review"
            }
        },
        "hiringprocess":{
            "maintitle":"Streamlined And Seamless",
            "title":"Hiring Process",
            "processlist":[
                {
                    "title":"Application"
                },
                {
                    "title":"Technical Round"
                },
                {
                    "title":"Practical Round"
                },
                {
                    "title":"Final Meeting"
                }
            ]
        },
        "whatwe":[
            {
                "title":"What We Do",
                "subtitle":"<li>Go above and beyond in everything</li><li>Creativity before monotony</li><li>Attention to details & rewards to deserving</li><li>Customer relationships above everything</li><li>All work and no play, makes Jack a dull boy</li><li>We love Chai and Coffee too</li>",
                "image":{
                    "url":"/images/right-icon.svg",
                    "alt":"right-icon"
                }
            },
            {
                "title":"What We Don't",
                "subtitle":"<li>We don't overpromise and underdeliver</li><li>Never neglect employee feedback</li><li>Big no to setting unrealistic deadlines</li><li>Don't allow unprofessionalism</li><li>Never ignore employee well-being</li><li>No cut down on employee fun activities</li>",
                "image":{
                    "url":"/images/close-icon.svg",
                    "alt":"close-icon"
                }
            }
        ],
        "benefits":{
            "maintitle":"Great",
            "title":"Perks & Benefits",
            "subtitle":"Find the challenge and inspiration to grow further to achieve next milestone in your career.",
            "button":{
                "url":"/contact-us",
                "target":"_self",
                "title":"Let's Connect"
            },
            "benefitsinfo":[
                {
                    "title":"Top Talent",
                    "subtitle":"Opportunity to Work with Top Technical Talent Pool"
                },
                {
                    "title":"Professional Growth",
                    "subtitle":"Recognizing one's abilities and encouraging professionals to come up ahead."
                },
                {
                    "title":"Medical Benefits/Reimbursements",
                    "subtitle":"We provide Medical Insurance policies to every employee."
                },
                {
                    "title":"Training",
                    "subtitle":"We believe in training people to help reach a level instead of eliminating them."
                },
                {
                    "title":"Leaves Benefits",
                    "subtitle":"Leave encashment and Annual Leaves; For better family time and social life balance. Leave comp-off available against work done on weekends or holiday"
                },
                {
                    "title":"Referral Bonus",
                    "subtitle":"Employee Referral Bonus, Reward as appreciation for referrals."
                },
                {
                    "title":"Gratuity Benefit",
                    "subtitle":"Gratuity Benefit after completion of one year of service"
                },
                {
                    "title":"Incentives",
                    "subtitle":"Better Performance-based Incentives"
                },
                {
                    "title":"Team Activity",
                    "subtitle":"Annual Functions/Tours/Picnics/Outings/Get-togethers"
                },
                {
                    "title":"Open Work Policy",
                    "subtitle":"Open Door Policy with Transparent and Open Work Culture"
                }
            ]
        },
        "hrspeaks":{
            "maintitle":"Opportunities",
            "title":"HR Speaks",
            "name":"Vibhu Patel",
            "position":"Hr Manager",
            "subtitle":"I've always worked on creating a positive and inclusive work-culture that values and appreciates every employee. I firmly believe that when HR prioritizes both employee comfort and company growth, it enables everyone to unleash their full potential, leading to sustainable and long-term success. Every member of our organization plays a significant role, and we consistently ensure that they feel recognized for their contributions.",
            "email":"hr@manthantech.in"
        },
        "bannerpost": {
            "image": {
                 "url": "/images/career-post-banner.svg",
                "alt": "careerpost-banner"
            }
        },
        "formbanner": {
            "title": "Career And Culture",
            "subtitle": "We're always excited to welcome good talent in the company. If you have great passion with exceptional skills & can't find your desired job position listed, knock the door. Apply now!",
            "image": {
                 "url": "/images/application-banner.svg",
                "alt": "application-banner"
            }
        },
        "formseo":{
            "title":"Can't find opening? - Manthan Technologes",
            "discripion":"Website Design,  Web Development, PSD to HTML, Responsive HTML5, Ecommerce Web Development, Mobile App Development, Hubspot Web Development, Wordpress Development, PHP Development, HTML Development, CMS Development",
            "image": "/images/meta/career-meta-image.jpg"
        },
        "form":{
            "maintitle":"Application",
            "title":"Apply For Job",
            "subtitle":"You are just a single step away from joining the best team to work with, look for a perfect opportunity with us and become a part of the Manthan Technologies family."
        }
    }); 
}