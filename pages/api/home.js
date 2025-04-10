export default function handler(req, res) {
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
            "maintitle":"About Us",
            "title":"Technology That Drives Progress.",
            "subtitle":"We are honored to be considered among the Best Web & App Development Agencies in India, offering Creative Web Designs, top Website Development, unique Mobile App, and SEO Services to global clients.",
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
        },
        "partner":{
            "maintitle":"Partner",
            "title":"Laying a solid foundation for digital core transformation for startups, SMEs, and enterprises with our pre-vetted resources and next-gen <span style=\"color:#DC1D47;\">ui/ux design</span>, <span style=\"color:#DC1D47;\">website development</span>, and <span style=\"color:#DC1D47;\">application development</span> services"
        },
        "services":{
            "maintitle":"Our Services",
            "title":"We're committed to delivering the best services to help your business grow",
            "subtitle":"At Manthan Technologies, we merge technical expertise with creativity and innovation to build solutions that are robust, scalable, and user-friendly. Our goal is to meet the unique and diverse needs of your business, helping you succeed in an ever-evolving digital landscape.",
            "button":{
                "url":"/contact-us",
                "target":"_self",
                "title":"Contact Us"
            },
            "serviceslist":[
                {
                    "title":"Web & App Development",
                    "subtitle":"Manthan Technologies delivers innovative solutions with expert precision, ensuring client satisfaction in websites, apps, and software.",
                    "image":{
                        "url":"/images/web-app-development.svg",
                        "alt":"web-app-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"Web Design",
                    "subtitle":"Manthan Technologies transforms your ideas into exceptional designs that elevate your brand and vision.",
                    "image":{
                        "url":"/images/web-design.svg",
                        "alt":"web-design"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"Frontend Development",
                    "subtitle":"Manthan Technologies crafts engaging and custom frontend solutions to deliver exceptional user experiences and drive business success.",
                    "image":{
                        "url":"/images/frontend-development.svg",
                        "alt":"frontend-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"Mobile App Development",
                    "subtitle":"Manthan Technologies delivers innovative mobile app solutions, from user-centric designs to enterprise-class development, with ongoing support for all businesses.",
                    "image":{
                        "url":"/images/mobile-app-development.svg",
                        "alt":"mobile-app-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"CMS Development",
                    "subtitle":"Manthan Technologies provides custom CMS solutions with seamless functionality, security, and scalability to streamline your workflows.",
                    "image":{
                        "url":"/images/cms-development.svg",
                        "alt":"cms-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"eCommerce Website Development",
                    "subtitle":"Manthan Technologies delivers end-to-end eCommerce solutions to power your business and excel in the competitive online marketplace.",
                    "image":{
                        "url":"/images/ecommerce-development.svg",
                        "alt":"ecommerce-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                },
                {
                    "title":"Backend Development",
                    "subtitle":"Manthan Technologies provides cutting-edge backend development services to boost your app's performance, security, and reliability.",
                    "image":{
                        "url":"/images/backend-development.svg",
                        "alt":"backend-development"
                    },
                    "button":{
                        "url": "#",
                        "target": "_self",
                        "title": "Learn More",
                    }
                }
            ]
        }
    });
}