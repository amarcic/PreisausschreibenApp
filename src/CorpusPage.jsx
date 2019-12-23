import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout; 

export default function CorpusPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/bibliographie">Ausgewertete Zeitschriften</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                    <h1 style={{fontSize: "2rem"}}><a id="0"></a>Zeitschriftenkorpus</h1>
                    <p id="line2">Die folgende Übersicht verzeichnet sämtliche Zeitschriften, die für die Datenbank ausgewertet wurden. Die Auswahl erfolgte entsprechend den Erläuterungen über die <a href="http://musical-competitions.uni-koeln.de/app/methodik">Methodik</a>. Die Zeitschriften werden chronologisch aufgelistet. Zeitschriften, die aufgrund von Fusionen oder Umbenennungen als Einheit betrachtet wurden, werden als Block aufgeführt; die alphabetische Einordnung erfolgt nach der ältesten Bezeichnung.</p>
                    <p id="line5"><b> Allgemeine musikalische Zeitung </b> (1798-1848, 1863-1882, Leipzig)<br />
                        Auswertung: 1820-1848, 1863-1870</p>
                    <p id="line8"><b> L’Art musical </b> (1860-1870, 1872-1894, Paris)<br />
                        Auswertung: 1860-1870</p>
                    <p id="line11"><b> L’Avenir musical </b> (1865-1870, 1875-1914, Paris)<br />
                        Auswertung: 1865-1868</p>
                    <p id="line14"><b> Barbiere di Siviglia, Il </b> (1832-1834, Mailand)<br />
                        Figaro, Il (1835-1848, Mailand)<br />
                        Auswertung: 1832-1848</p>
                    <p id="line18"><b> Berliner Musikalische Zeitung </b>(1844-1847, Berlin)<br />
                        <b> Neue Berliner Musikzeitung </b>(1847-1896, Berlin)<br />
                        Auswertung: 1844-1870</p>
                    <p id="line22"><b> Blätter für Musik, Theater und Kunst </b> (1855-1873, Wien)<br />
                        Auswertung: 1855-1870</p>
                    <p id="line25"><b> Boccherini </b> (1862-1882, Florenz)<br />
                        Auswertung: 1862-1870</p>
                    <p id="line28"><b> Brainard’s Musical World </b>(1863-1890, Cleveland)<br />
                        Auswertung:</p>
                    <ul id="line30">
                        <li id="line30">1865: Vol. 2 / 11</li>
                        <li id="line31">1866: Vol. 3 / 1-10 und 12</li>
                        <li id="line32">1869: Vol. 6 / 1, 3-5, 7-9, 11-12</li>
                        <li id="line33">1870: Vol. 7 / 1-10 und 12</li>
                    </ul>
                    <p id="line35"><b> Cäcilia, eine Zeitschrift für die musikalische Welt</b> (1824-1848, Mainz)<br />
                        Auswertung: 1824-1848</p>
                    <p id="line38"><b> Dalibor</b> (1858-1927, Prag)<br />
                        Auswertung: 1858-1864, 1869</p>
                    <p id="line41"><b> Dwight’s Journal of Music</b> (1852-1881, Boston)<br />
                        Auswertung: 1852-1870</p>
                    <p id="line44"><b> France Musicale, La</b> (1837-1848, 1851-1870, Paris)<br />
                        <b> Musique, La</b> (1849-1850, Paris)<br />
                        Auswertung: 1838, 1840-1846, 1848-1849, 1851, 1855-1864, 1868-1870</p>
                    <p id="line48"><b> Gazzetta Musicale di Milano</b> (1842-1862, 1866-1902, Mailand)<br />
                        Auswertung: 1842-1862, 1866-1870</p>
                    <p id="line51"><b> Gazzetta Musicale di Napoli</b> (1852-1868, Neapel)<br />
                        <b> Napoli Musicale</b> (1868-1886, Neapel)<br />
                        Auswertung: 1852-1870</p>
                    <p id="line55"><b> Guide musical, Le</b> (1855-1918, Brüssel)<br />
                        Auswertung: 1855-1870</p>
                    <p id="line58"><b> L’Italia musicale</b> (1847-1859, Mailand)<br />
                        Auswertung: 1847-1859</p>
                    <p id="line61"><b> Ménestrel, Le</b> (1833-1914, Paris)<br />
                        Auswertung: 1833-1870</p>
                    <p id="line64"><b> Mondo Artistico, Il</b> (1867-1914, Mailand)<br />
                        Auswertung: 1867-1870</p>
                    <p id="line67"><b> Musical Standard, The</b> (1862-1933, London)<br />
                        Auswertung: 1862-1870</p>
                    <p id="line70"><b> Musical Times, The</b> (1844-, London)<br />
                        Auswertung: 1844-1870</p>
                    <p id="line73"><b> Musical World, The</b> (1836-1891, London)<br />
                        Auswertung: 1836-1870</p>
                    <p id="line76"><b> Musikalisches Wochenblatt</b> (1870-1910, Leipzig)<br />
                        Auswertung: 1870</p>
                    <p id="line79"><b> Nederlandsch Muzikaal Tijdschrift</b> (1839-1848, Utrecht)<br />
                        <b> Caecilia. Algemeen Muzikaal Tijdschrift van Nederland</b> (1844-1944, Utrecht, Rotterdam, Den Haag)<br />
                        Auswertung: 1839-1870</p>
                    <p id="line83"><b> Neue Zeitschrift für Musik</b> (1834- , Leipzig)<br />
                        Auswertung: 1834-1870</p>
                    <p id="line86"><b> Niederrheinische Musik-Zeitung</b> (1853-1867, Köln)<br />
                        Auswertung: 1853-1867</p>
                    <p id="line89"><b> Orchestra, The</b> (1863-1874, London)<br />
                        Auswertung: 1863-1870</p>
                    <p id="line92"><b> Revue Musicale</b> (1827-1835, Paris)<br />
                        <b> Gazette musicale de Paris</b> (1834-1835, Paris)<br />
                        <b> Revue et Gazette musicale de Paris</b> (1835-1880, Paris)<br />
                        Auswertung: 1827-1870</p>
                    <p id="line97"><b> Saroni’s Musical Times</b> (1849-1852, New York)<br />
                        <b> The Musical World and New York Musical Times</b> (1852-1854, New York)<br />
                        <b> The Musical Review and Musical World</b> (1860-1864, New York)<br />
                        Auswertung: 1849-1852, 1860-1864</p>
                    <ul id="line101">
                        <li id="line101">1853: Vol. 7 / 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18 (31.12.1853)</li>
                        <li id="line102">1854: Vol. 8 / 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 (29.04.1854)</li>
                        <li id="line103">1854: Vol. 9 / 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 (26.08.1854)</li>
                        <li id="line104">1854: Vol. 10 / 1 (02.09.1854)</li>
                    </ul>
                    <p id="line106"><b> Signale für die musikalische Welt</b> (1843-1941, Leipzig)<br />
                        Auswertung: 1843-1870</p>
                    <p id="line109"><b> Süddeutsche Musikzeitung</b> (1852-1869, Mainz)<br />
                        Auswertung: 1852-1869</p>
                    <p id="line112"><b> Zenészeti Lapok</b> (1860-1876, Budapest)<br />
                        Auswertung 1860-1870</p>

                    {/*<p  ><span  >Allgemeine musikalische Zeitung</span> (1798-1848, 1863-1882, Leipzig)</p><p  >Auswertung: 1820-1848, 1863-1870</p><p  > </p><p  ><span  >Cäcilia, eine Zeitschrift für die musikalische Welt</span> (1824-1848, Mainz)</p><p  >Auswertung: 1824-1848</p><p  > </p><p  ><span  >Revue Musicale</span> (1827-1835, Paris)</p><p  ><span  >Gazette musicale de Paris</span> (1834-1835, Paris)</p><p  ><span  >Revue et Gazette musicale de Paris</span> (1835-1880, Paris)</p><p  >Auswertung: 1827-1870</p><p  > </p><p  ><span  >Il Barbiere di Siviglia</span> (1832-1834, Mailand)</p><p  ><span  >Il Figaro</span> (1835-1848, Mailand)</p><p  >Auswertung: 1832-1848</p><p  > </p><p  ><span  >Le Ménestrel</span> (1833-1914, Paris)</p><p  >Auswertung: 1833-1870</p><p  > </p><p  ><span  >Neue Zeitschrift für Musik</span> (1834- , Leipzig)</p><p  >Auswertung: 1834-1870</p><p  > </p><p  ><span  >The Musical World</span> (1836-1891, London)</p><p  >Auswertung: 1836-1870</p><p  > </p><p  ><span  >La France Musicale</span> (1837-1848, 1851-1870, Paris)</p><p  ><span  >La Musique</span> (1849-1850, Paris)</p><p  >Auswertung: 1838, 1840-1846, 1848-1849, 1851, 1855-1864, 1868-1870</p><p  > </p><p  ><span  >Nederlandsch Muzikaal Tijdschrift</span> (1839-1848, Utrecht)</p><p  ><span  >Caecilia. Algemeen Muzikaal Tijdschrift van Nederland</span> (1844-1944, Utrecht, Rotterdam, Den Haag)</p><p  >Auswertung: 1839-1870</p><p  > </p><p  ><span  >The Musical Times</span> (1844- , London)</p><p  >Auswertung: 1844-1870</p><p  > </p><p  ><span  >Gazzetta musicale di Milano</span> (1842-1862, 1866-1902, Mailand)</p><p  >Auswertung: 1842-1862, 1866-1870</p><p  > </p><p  ><span  >Signale für die musikalische Welt</span> (1843-1941, Leipzig)</p><p  >Auswertung: 1843-1870</p><p  > </p><p  ><span  >Berliner Musikalische Zeitung</span> (1844-1847, Berlin)</p><p  ><span  >Neue Berliner Musikzeitung</span> (1847-1896, Berlin)</p><p  >Auswertung: 1844-1870</p><p  > </p><p  ><span  >L'Italia musicale</span> (1847-1859, Mailand)</p><p  >Auswertung: 1847-1859</p><p  > </p><p  ><span  >Saroni's Musical Times</span> (1849-1852, New York)</p><p  ><span  >The New York Musical World</span> (1852-1860, New York)</p><p  ><span  >The Musical Review and Musical World</span> (1860-1864, New York)</p><p  >Auswertung: 1849-1854, 1860-1864</p><p  > </p><p  ><span  >Dwight's Journal of Music</span> (1852-1881, Boston)</p><p  >Auswertung: 1852-1870</p><p  > </p><p  ><span  >Gazzetta Musicale di Napoli</span> (1852-1868, Neapel)</p><p  ><span  >Napoli Musicale</span> (1868-1886, Neapel)</p><p  >Auswertung: 1852-1870</p><p  > </p><p  ><span  >Süddeutsche Musikzeitung</span> (1852-1869, Mainz)</p><p  >Auswertung: 1852-1869</p><p  > </p><p  ><span  >Niederrheinische Musik-Zeitung </span>(1853-1867, Köln)</p><p  >Auswertung: 1853-1867</p><p  > </p><p  ><span  >Blätter für Musik, Theater und Kunst</span> (1855-1873, Wien)</p><p  >Auswertung: 1855-1870</p><p  > </p><p  ><span  >Le Guide musical</span> (1855-1918, Brüssel)</p><p  >Auswertung: 1855-1870</p><p  > </p><p  ><span  >Dalibor</span> (1858-1927, Prag)</p><p  >Auswertung: 1858-1864, 1869</p><p  > </p><p  ><span  >L'Art musical</span> (1860-1870, 1872-1894, Paris)</p><p  >Auswertung: 1860-1870</p><p  > </p><p  ><span  >Zenészeti Lapok</span> (1860-1876, Budapest)</p><p  ><span  >Auswertung noch ausstehend</span></p><p  > </p><p  ><span  >Boccherini</span> (1862-1882, Florenz)</p><p  >Auswertung: 1862-1870</p><p  > </p><p  ><span  >The Musical Standard</span> (1862-1933, London)</p><p  >Auswertung: 1862-1870</p><p  > </p><p  ><span  >Brainard's Musical World</span> (1863-1890, Cleveland)</p><p  >Auswertung: 1863-1870</p><p  > </p><p  ><span  >The Orchestra</span> (1863-1874, London)</p><p  ><span  >The Orchestra and the Choir</span> (1874-1881, London)</p><p >Auswertung: 1863-1870</p><p  > </p><p  ><span  >L'Avenir musical</span> (1865-1870, 1875-1914, Paris)</p><p  >Auswertung: 1865-1868</p><p  /><p  ><span  >Il Mondo Artistico</span> (1867-1914, Mailand)</p><p  >Auswertung: 1867-1870</p><p  > </p><p  ><span  >Musikalisches Wochenblatt</span> (1870-1910, Leipzig)</p><p  >Auswertung: 1870</p>*/}
                </div>
                </Layout>
            </Content>
        </Layout>
    );
} 

