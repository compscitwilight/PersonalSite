import Cities from "../../../data/cities.json"

export default function handler(req, res) {
    res.status(200).send({ cities: Cities })
}