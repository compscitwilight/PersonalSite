import Cities from "../../../data/cities.json"

export default function handler(req, res) {
    const cityValues = Object.values(Cities)
    const randomNumber = Math.floor(Math.random() * cityValues.length)
    const randomCity = cityValues[randomNumber]

    if (!randomCity) {
        res.status(500).send({ error: "Error on server side" })
        return
    }

    res.status(200).send({ city: randomCity })
}