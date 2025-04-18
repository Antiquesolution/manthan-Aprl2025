export default function handler(req, res) {
    res.status(200).json({
        "banner": {
            "title": "About Manthan Technologies",
            "subtitle": "Discover the power of creativity and technology with Manthan Technologies. We craft cutting-edge digital solutions that elevate your brand and drive success.",
            "image": {
                 "url": "/images/aboutus-banner.svg",
                "alt": "aboutus-banner"
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
        "mission":{
            "maintitle":"Vision - Mission",
            "title":"Our IT Service Provider Journey Since 2017",
            "subtitle":"As we delved into the depths of coding and design, we discovered the magic of collaboration - the synergy that arises when minds unite in pursuit of a common goal. Each line of code, each pixel perfected, was a testament to our commitment to excellence and innovation.",
            "missionlist":[
                {
                    "title":"Our Mission",
                    "content":"To be the trusted partner for our clients, offering reliable IT services and expert guidance to help them achieve their goals, secure their data, and navigate the ever-changing tech landscape.",
                    "image":{
                        "url":"/images/mission.svg",
                        "alt":"mission"
                    }
                },
                {
                    "title":"Our Vision",
                    "content":"To revolutionize the IT landscape by consistently delivering innovative, sustainable, and customer-centric solutions that exceed expectations. To be the catalyst for digital transformation, inspiring businesses worldwide to embrace change and seize new opportunities.",
                    "image":{
                        "url":"/images/vision.svg",
                        "alt":"vision"
                    }
                }
            ]
        },
        "ourvalue":{
            "maintitle":"Our Values",
            "title":"Manthan Technologies Core Values",
            "subtitle":"Manthan Technologies is a premier design agency transforming dreams into reality with high-quality, visually stunning designs. Our skilled team ensures excellence in every project, offering innovative branding, elegant websites, and compelling graphics to help businesses stand out.",
            "image":{
                "url":"/images/core-value.svg",
                "alt":"core-value"
            }
        },
        "businesshelp":{
            "maintitle":"Growth Partner",
            "title":"How can we help your business",
            "subtitle":"Explore customized solutions to boost your business's growth, productivity, and success. Let's achieve your goals together with our expertise and support.",
            "details":[
                {
                    "title":"Tailored Branding Solutions",
                    "subtitle":"Our team specializes in crafting bespoke branding strategies that resonate with your target audience. From logo design to brand guidelines, we ensure consistency across all touchpoints, fostering brand loyalty and recognition."
                },
                {
                    "title":"Focusing on minute details",
                    "subtitle":"We understand the importance of deadlines and the impact of attention to detail. Count on us to deliver high-quality work on time and within budget, with a meticulous focus on every aspect of your project."
                },
                {
                    "title":"User-Centric Web Design",
                    "subtitle":"Your website is often the first interaction customers have with your brand. Our web design services focus on creating seamless user experiences that drive conversions and leave a lasting impression."
                },
                {
                    "title":"Strategic Marketing Collateral",
                    "subtitle":"Elevate your marketing efforts with professionally crafted collateral that communicates your message effectively. From brochures and flyers to social media graphics and advertisements, we help you stand out in croweded place."
                },
                {
                    "title":"Ongoing Support and Collaboration",
                    "subtitle":"We believe in building long-term partnerships with our clients. Beyond the initial project, we offer ongoing support and collaboration to adapt to your evolving needs and ensure continued success."
                },
                {
                    "title":"Creative Consultation",
                    "subtitle":"Unsure about the best design direction for your business? Our team of experts is here to provide creative consultation and strategic guidance every step of the way, helping you make informed decisions that drive results."
                }
            ]
        }
    });
}