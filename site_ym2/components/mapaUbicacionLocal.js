import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import meIcon from '@/public/img/bleue.png';

export function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 12);
    return null;
  }



export default function MapaUbicacionLocal() {
    const [geoData, setGeoData] = useState({ lat: 10.4960721, lng: -66.8533307 });

    const center = [geoData.lat, geoData.lng];

    // useEffect(() => {
    //   delete L.Icon.Default.prototype._getIconUrl;
  
    //   L.Icon.Default.mergeOptions({
    //     iconUrl: meIcon,
    //   });
    // }, []);

    return (
      <MapContainer center={center} zoom={17} scrollWheelZoom={true} markerZoomAnimation={true} style={{ height: '100%' }} className="rounded-2xl z-10 pt-5">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} icon={
            // L.divIcon({
            //   iconSize:     [38, 95],
            //   shadowSize:   [50, 64],
            //   iconAnchor:   [22, 94],
            //   html: "😁",
            // })
            L.icon({
              iconUrl: '/img/bleue.png',
              iconSize: [50, 50],
            })
          }/>
        )}
        <ChangeView coords={center} />
      </MapContainer>
    );
  }