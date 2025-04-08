export default function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.status(200).json({
        "banner": {
            "heading": "Top Rated Web Design & Development Company",
            "subheading": "We craft high-performing websites and SaaS products by combining data-driven CRO, user research, and pixel-perfect design to deliver exceptional digital experiences.",
            "image": {
                 "url": "/images/hero-banner.svg",
                "alt": "hero-banner"
            },
            "button": {
                "url": "/contact-us",
                "target": "_self",
                "title": "Get a Quote"
            }
        },
        "counter":[
            {
                "number":"7+",
                "title":"Years Of Experience"
            },
            {
                "number":"200+",
                "title":"Pleased Clients"
            },
            {
                "number":"700+",
                "title":"Solutions Delivered"
            },
            {
                "number":"75+",
                "title":"Expert Professionals"
            }
        ],
        "aboutus":{
            "headingtag":"About",
            "heading":"Flexible ways we can work with you.",
            "subheading":"At Manthan Technologies., a Web development company, we believe in working the way that works best for you. We offer flexible, customized solutions to meet your unique needs. Our passionate team of tech enthusiasts, dreamers, and problem solvers is driven by innovation, using the latest in AI technology to reshape the IT landscape. Whether it's crafting dynamic software, building stunning websites, creating transformative mobile apps, or leveraging AI-powered innovations, our mission is simple: to bring your vision to life.",
            "aboutinfo":[
                {
                    "image":{
                        "url":"/images/manthan-story.svg",
                        "alt":"manthan-story"
                    },
                    "title":"The Manthantech Story"
                },
                {
                    "image":{
                        "url":"/images/digital-services.svg",
                        "alt":"digital-services"
                    },
                    "title":"Elevate Your Digital Presence"
                },
                {
                    "image":{
                        "url":"/images/expert-team.svg",
                        "alt":"expert-team"
                    },
                    "title":"Partner with Our Expert Team"
                },
                {
                    "image":{
                        "url":"/images/future.svg",
                        "alt":"future"
                    },
                    "title":"Shape Your Future with Us"
                }
            ]
        }
    });
}
  