import Cities from "../../../data/cities.json"

export default function handler(req, res) {
    let { city } = req.query
    city = city.toLowerCase()

    const cityData = Cities[city]

    if (!cityData) {
        res.status(404).send({ error: "City cannot be found." })
        return
    }

    res.status(200).send({ city: cityData })
}