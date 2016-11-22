const path = require('path')
const eaip = require('finnish-aip')
const turf = require('turf')

const DATA_DIR = path.join(__dirname, '../data/eaip_finland')

eaip.init(DATA_DIR)

const flatten = (nested) =>
  nested.reduce((prev, next) =>
    (next ? prev.concat(next) : prev), []
  )

module.exports = {
	get: (req, res) => {
		eaip.current().then(json => {
			if (!req.params.dataset) {
				res.send(json)
			} else if (req.params.dataset === 'ctr') {
				const ctr = flatten(json['aerodromes'].map(aerodrome => aerodrome.airspaces))
				res.send(turf.featureCollection(ctr))
			} else if (['tma', 'prohibitedAreas'].includes(req.params.dataset)) {
				res.send(json[req.params.dataset])
			} else {
				res.sendStatus(404)
			}
		}).catch( err => {
			console.log(err, err.stack)
			res.sendStatus(503)
		})
	}
}