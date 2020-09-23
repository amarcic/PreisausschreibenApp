/*import React from 'react';
import { Map as LeafletMap, TileLayer, Popup, Marker, GeoJSON } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';

class ResultMap extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("daten sind hier");
        console.log(this.props.data);

        return (
            <LeafletMap
                center={[50, 10]}
                zoom={6}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                //{<TileLayer
                  //  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                // />}
                <GeoJSON
                    data={worldGeoJSON}
                    style={() => ({
                        color: '#4a83ec',
                        weight: 0.5,
                        fillColor: "#1a1d62",
                        fillOpacity: 1,
                    })}
                />
                <Marker position={[50, 10]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default ResultMap;*/
