import Countries from "../../../data/countries.json"

export default function handler(req, res) {
    const keys = Object.values(Countries)
    const randomNumber = Math.floor(Math.random() * keys.length)
    const country = keys[randomNumber]

    if (!country) {
        res.status(500).send({ error: "Error on server side" })
        return
    }

    res.status(200).send({ country: country })
}