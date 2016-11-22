# CAVOK-server

Backend services for [CAVOK app](https://github.com/skarppi/cavok). Provides REST-API for Finnish airspaces implemented with [finnish-aip](https://github.com/skarppi/finnish-aip) library.

## REST-API

This service is available for testing purposes at [http://tusina.net:8000/aip](http://tusina.net:8000/aip).

#### [/aip](http://tusina.net:8000/aip)
All unfiltered data.
#### [/aip/tma](http://tusina.net:8000/aip/tma)
TMA airspace in GeoJSON collection
#### [/aip/tma](http://tusina.net:8000/aip/tma)
CTR airspace in GeoJSON collection
#### [/aip/prohibitedAreas](http://tusina.net:8000/aip/tma)
Prohibited areas in GeoJSON collection

## Installation

[Node 6.x](https://nodejs.org) is required.

You must have the 7z executable available in your PATH or in the same directory of your package.json file. Check [node-7z](https://www.npmjs.com/package/node-7z) for more detailed instructions.

## Usage

```bash
npm install
npm start
```

## Docker deployment

```bash
./docker-build.sh

./docker-run.sh

docker logs --tail=1000 -f cavok
docker exec -it cavok bash
```