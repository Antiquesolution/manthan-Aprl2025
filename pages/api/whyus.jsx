export default function handler(req, res) {
    res.status(200).json({
        "whyus":{
			"maintitle":"Why us",
			"title":"Access the strategic, technological, and sectorial expertise",
			"subtitle":"Backed by 7+ years of experience and 75+ resources, at Manthan Technologies, we offer bespoke solutions, ensuring sustainable business growth and innovation",
			"whyuslist":[
				{
					"title":"Solution Delivered",
					"counter":"700",
					"symbol":"+"
				},
				{
					"title":"24/7 Technical Support",
					"image":{
						"url":"/images/technical-support.svg",
						"alt":"technical-support"
					}
				},
				{
					"title":"On-time Delivery",
					"image":{
						"url":"/images/on-time-delivery.svg",
						"alt":"on-time-delivery"
					}
				},
				{
					"title":"India Development Center",
					"image":{
						"url":"/images/development-center.svg",
						"alt":"development-center"
					}
				},
				{
					"title":"Pre-vetted Resources",
					"image":{
						"url":"/images/pre-vetted-resources.svg",
						"alt":"pre-vetted-resources"
					}
				},
				{
					"title":"Onshore/Offshore Teams",
					"image":{
						"url":"/images/onshore-offshore-teams.svg",
						"alt":"onshore-offshore-teams"
					}
				},
				{
					"title":"85% NPS",
					"image":{
						"url":"/images/nps.svg",
						"alt":"nps"
					}
				},
				{
					"title":"Pleased Client",
					"counter":"200",
					"symbol":"+"
				},
			],
			"image":{
				"url":"/images/whyus.svg",
				"alt":"Whyus"
			}
		}
    });
}