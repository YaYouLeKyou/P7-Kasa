import React from 'react';
import Banner from '../components/Banner';
import CardLocation from '../components/CardLocation';
import Properties from '../data/logements';
import BGHome from '../assets/home_bg_banner.png'


export default function Home() {
    document.title = "Kasa - Acceuil";
    return (
        <main className="home">
            <Banner img={BGHome} text1={'Chez vous,'} text2={'partout et ailleurs'} />
            <div className="content_wrapper">
                {Properties.map((property) => (
                    <CardLocation property={property} key={property.id} />
                ))}
            </div>
        </main>
    );
}