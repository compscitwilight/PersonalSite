import Countries from "../../../data/countries.json"

export default function handler(req, res) {
    let { country } = req.query
    country = country.toLowerCase()

    const countryName = Countries[country]

    if (!countryName) {
        res.status(404).json({ error: "Country not found" })
        return
    }

    res.status(200).json({ country: countryName })
}