export default function handler(req, res) {
    res.status(200).json({
        "businessmodel":{
			"maintitle": "Business Model",
            "title": "Engagement Model Differences",
            "subtitle": "Every business has its unique objectives, goals, and challenges. Understanding all, we have set up three exclusive business models for you. You can pick the best one as per your budget, project timeline, and requirements.",
			"businessmodellist":[
                {
                    "discription":"<h2>Fixed Cost</h2><p>The Fixed Price Model is a popular engagement model in which the cost and timeline of a project are agreed upon in advance, ensuring a clear understanding of project deliverables and budget constraints. This model offers a predictable outcome and peace of mind for clients.</p><ul><li>Assured timely delivery as agreed upon at the beginning</li><li>The project is completed on time and under budget.</li><li>A risk-free model because the cost and timeline are fixed.</li><li>Once a milestone is achieved, billing is done.</li></ul>",
                    "image":{
                        "url":"/images/fixed-cost.svg",
                        "alt":"fixed-cost"
                    },
                    "button":{
                        "url":"#",
                        "title":"Get a Quote Today",
                        "target":""
                    }
                },
                {
                    "discription":"<h2>Hourly Price Model</h2><p>This model is used when the scope and specifications of the project are either no determined or changed frequently. Also, when the volume of allocated resources varies constantly during the entire lifecycle. When it’s impossible to divide a project into multiple phases, the hourly price model comes in handy. It lets clients change the timeline, team, and resources in response to market trends. Hourly or monthly billing options are available.</p><ul><li>Billing can be hourly or monthly based on resources</li><li>Ideal for projects with frequent modifications.</li><li>The flexibility allows experiments with new trends.</li><li>Allows to change resources according to the project lifecycle.</li></ul>",
                    "image":{
                        "url":"/images/hourly-price.svg",
                        "alt":"hourly-price"
                    },
                    "button":{
                        "url":"#",
                        "title":"Get Pricing Details",
                        "target":""
                    }
                },
                {
                    "discription":"<h2>Dedicated Team Model</h2><p>The dedicated engagement model is ideal for projects that require long-term expertise and need to scale quickly. It's frequently used on off-shore or near-shore projects where the client must manage the team. The model provides instant flexibility, especially when there is a tight deadline and a sudden team expansion or a new developer is required owing to evolving technologies. The client also controls the allocation of tasks, resources, and methodology.</p><ul><li>Assured timely delivery as agreed upon at the beginning</li><li>The project is completed on time and under budget.</li><li>A risk-free model because the cost and timeline are fixed.</li><li>Once a milestone is achieved, billing is done</li></ul>",
                    "image":{
                        "url":"/images/dedicated-team.svg",
                        "alt":"dedicated-team"
                    },
                    "button":{
                        "url":"#",
                        "title":"Hire Our Experts",
                        "target":""
                    }
                }
            ]
		},
        "modeldifferences": {
            "maintitle": "Model Differences",
            "title": "Understand which working model suits best to your needs",
            "table":[
                ["", "Fixed Cost", "Hourly Based", "Dedicated"],
                ["Suitable For", "Small projects", "Medium & large projects", "Large projects"],
                ["Requirements", "Clear & pre-determined", "Not set", "Evolving"],
                ["Flexibility", "Low", "High", "Medium"],
                ["Client's Involvement", "Little", "Significant", "Full or Partial"],
                ["Budget", "Fixed Budget", "Fixed Price/hour", "Fixed Price/hour"],
                ["Deadline & Timeframe", "Defined", "Unclear", "Unclear"]
            ]
        }
    });
}