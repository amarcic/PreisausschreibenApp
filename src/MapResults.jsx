import React from 'react';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Popup, Marker, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

const osmTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const mapCenter = [50,10];
const zoomLevel = 4;

class ResultMap extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("daten sind hier");
        console.log(this.props.requestData);

        return (
            <LeafletMap
                className="markercluster-map"
                center={mapCenter}
                zoom={zoomLevel}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    attribution={osmAttr}
                    url={osmTiles}
                    noWrap={true}
                />
                />
                <MarkerClusterGroup>
                    {
                        this.props.requestData.map( result =>
                            result.fields && result.fields.esGeoP
                                && <Marker
                                        key={result._id}
                                        position={result.fields.esGeoP[0].split(",")}
                                    >
                                <Popup><Link to={"/dokumente/"+result._id}>zum Preisausschreiben in {result.fields.esPlacename[0]}</Link></Popup>
                            </Marker>
                        )
                    }
                {/*this.props.data.map( result =>
                    result.coordinates&&<Marker key={result.identifier} position={result.coordinates.split(",")}>
                        <Popup>{result.placename}</Popup>
                    </Marker>
                        )*/}
                </MarkerClusterGroup>
            </LeafletMap>
        );
    }
}

export default ResultMap;
