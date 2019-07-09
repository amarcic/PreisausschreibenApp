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
                <div>
                    <p  ><span  >Allgemeine musikalische Zeitung</span> (1798-1848, 1863-1882, Leipzig)</p><p  >Auswertung: 1820-1848, 1863-1870</p><p  > </p><p  ><span  >Cäcilia, eine Zeitschrift für die musikalische Welt</span> (1824-1848, Mainz)</p><p  >Auswertung: 1824-1848</p><p  > </p><p  ><span  >Revue Musicale</span> (1827-1835, Paris)</p><p  ><span  >Gazette musicale de Paris</span> (1834-1835, Paris)</p><p  ><span  >Revue et Gazette musicale de Paris</span> (1835-1880, Paris)</p><p  >Auswertung: 1827-1870</p><p  > </p><p  ><span  >Il Barbiere di Siviglia</span> (1832-1834, Mailand)</p><p  ><span  >Il Figaro</span> (1835-1848, Mailand)</p><p  >Auswertung: 1832-1848</p><p  > </p><p  ><span  >Le Ménestrel</span> (1833-1914, Paris)</p><p  >Auswertung: 1833-1870</p><p  > </p><p  ><span  >Neue Zeitschrift für Musik</span> (1834- , Leipzig)</p><p  >Auswertung: 1834-1870</p><p  > </p><p  ><span  >The Musical World</span> (1836-1891, London)</p><p  >Auswertung: 1836-1870</p><p  > </p><p  ><span  >La France Musicale</span> (1837-1848, 1851-1870, Paris)</p><p  ><span  >La Musique</span> (1849-1850, Paris)</p><p  >Auswertung: 1838, 1840-1846, 1848-1849, 1851, 1855-1864, 1868-1870</p><p  > </p><p  ><span  >Nederlandsch Muzikaal Tijdschrift</span> (1839-1848, Utrecht)</p><p  ><span  >Caecilia. Algemeen Muzikaal Tijdschrift van Nederland</span> (1844-1944, Utrecht, Rotterdam, Den Haag)</p><p  >Auswertung: 1839-1870</p><p  > </p><p  ><span  >The Musical Times</span> (1844- , London)</p><p  >Auswertung: 1844-1870</p><p  > </p><p  ><span  >Gazzetta musicale di Milano</span> (1842-1862, 1866-1902, Mailand)</p><p  >Auswertung: 1842-1862, 1866-1870</p><p  > </p><p  ><span  >Signale für die musikalische Welt</span> (1843-1941, Leipzig)</p><p  >Auswertung: 1843-1870</p><p  > </p><p  ><span  >Berliner Musikalische Zeitung</span> (1844-1847, Berlin)</p><p  ><span  >Neue Berliner Musikzeitung</span> (1847-1896, Berlin)</p><p  >Auswertung: 1844-1870</p><p  > </p><p  ><span  >L'Italia musicale</span> (1847-1859, Mailand)</p><p  >Auswertung: 1847-1859</p><p  > </p><p  ><span  >Saroni's Musical Times</span> (1849-1852, New York)</p><p  ><span  >The New York Musical World</span> (1852-1860, New York)</p><p  ><span  >The Musical Review and Musical World</span> (1860-1864, New York)</p><p  >Auswertung: 1849-1854, 1860-1864</p><p  > </p><p  ><span  >Dwight's Journal of Music</span> (1852-1881, Boston)</p><p  >Auswertung: 1852-1870</p><p  > </p><p  ><span  >Gazzetta Musicale di Napoli</span> (1852-1868, Neapel)</p><p  ><span  >Napoli Musicale</span> (1868-1886, Neapel)</p><p  >Auswertung: 1852-1870</p><p  > </p><p  ><span  >Süddeutsche Musikzeitung</span> (1852-1869, Mainz)</p><p  >Auswertung: 1852-1869</p><p  > </p><p  ><span  >Niederrheinische Musik-Zeitung </span>(1853-1867, Köln)</p><p  >Auswertung: 1853-1867</p><p  > </p><p  ><span  >Blätter für Musik, Theater und Kunst</span> (1855-1873, Wien)</p><p  >Auswertung: 1855-1870</p><p  > </p><p  ><span  >Le Guide musical</span> (1855-1918, Brüssel)</p><p  >Auswertung: 1855-1870</p><p  > </p><p  ><span  >Dalibor</span> (1858-1927, Prag)</p><p  >Auswertung: 1858-1864, 1869</p><p  > </p><p  ><span  >L'Art musical</span> (1860-1870, 1872-1894, Paris)</p><p  >Auswertung: 1860-1870</p><p  > </p><p  ><span  >Zenészeti Lapok</span> (1860-1876, Budapest)</p><p  ><span  >Auswertung noch ausstehend</span></p><p  > </p><p  ><span  >Boccherini</span> (1862-1882, Florenz)</p><p  >Auswertung: 1862-1870</p><p  > </p><p  ><span  >The Musical Standard</span> (1862-1933, London)</p><p  >Auswertung: 1862-1870</p><p  > </p><p  ><span  >Brainard's Musical World</span> (1863-1890, Cleveland)</p><p  >Auswertung: 1863-1870</p><p  > </p><p  ><span  >The Orchestra</span> (1863-1874, London)</p><p  ><span  >The Orchestra and the Choir</span> (1874-1881, London)</p><p >Auswertung: 1863-1870</p><p  > </p><p  ><span  >L'Avenir musical</span> (1865-1870, 1875-1914, Paris)</p><p  >Auswertung: 1865-1868</p><p  /><p  ><span  >Il Mondo Artistico</span> (1867-1914, Mailand)</p><p  >Auswertung: 1867-1870</p><p  > </p><p  ><span  >Musikalisches Wochenblatt</span> (1870-1910, Leipzig)</p><p  >Auswertung: 1870</p>
                </div>
                </Layout>
            </Content>
        </Layout>
    );
} 

