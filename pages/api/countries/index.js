import Countries from "../../../data/countries.json"

export default function handler(req, res) {
    res.status(200).send({ countries: Countries })
}