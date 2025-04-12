export default function handler(req, res) {
    res.status(200).json({
        "testimonials":{
			"maintitle":"Our Testimonials",
			"title":"See what our clients are saying",
			"subtitle":"Our clients world over love our work & don't stay back from saying it loud. Check how much they appreciate our work & processes.",
			"clienttestimonials":[
				{
					"title":"The website received positive feedback from users, thanks to Manthan Technologies’ diligence. They were accommodating, responsive, and organized.",
					"name":"John B",
					"country":"USA"
				},
				{
					"title":"The peace of mind associated with having a reliable development partner is highly valuable. Manthan Technologies provides consistent communication and exceeds expectations regularly.",
					"name":"Sell D",
					"country":"Sell D"
				},
				{
					"title":"Thanks so much for your quick service! It looks great. We should have something more for you in the next few weeks.",
					"name":"Marry S",
					"country":"Canada"
				},
				{
					"title":"I enjoyed working with Manthan Technologies and their team on a design update and html/CSS assets for betterpack.in paper product. They were very fast on turn around time and were able to execute perfectly what I asked for.",
					"name":"Pankaj Patel",
					"country":"India"
				}
			]
		}
    });
}