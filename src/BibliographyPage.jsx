import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
//import Markdown from "markdown-to-jsx";

const { Content } = Layout; 

export default function BibliographyPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/bibliographie">Bibliographie</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                    <h1 style={{fontSize: "1.7rem"}}><a id="0"></a>Schriften über musikalische Preisausschreiben, 1820-1870</h1>
                    <h1 style={{fontSize: "1.7rem"}}><a id="2"></a>Bibliografie</h1>
                    <p id="line4">Die Bibliografie strebt an, alle Texte zu verzeichnen, die sich mit musikalischen Preisausschreiben befassen, im definierten Korpus vorkommen und nicht in der Datenbank bereits als Quelle genannt sind. Die Autorennamen wurden nicht angeglichen oder vervollständigt, sondern erscheinen wie in den Zeitschriften. Die Systematisierung soll die Orientierung erleichtern, stellt aber selbstverständlich nur eine mögliche Ordnung dar.</p>
                    <h3><a id="7"></a>Sinn und Zweck von Preisausschreiben</h3>
                    <ul>
                        <li>J. P. Schmidt, „Ueber den Nutzen musikalischer Preis-Aufgaben“, in: <i>Allgemeine musikalische Zeitung</i> 38/44 (2. November 1836), S. 717f.</li>
                        <li>J. F., „Ueber den Nutzen musikalischer Preis-Aufgaben. Zu dem Aufsatze von J. P. Schmidt in No. 44“, in: <i>Allgemeine musikalische Zeitung</i> 38/46 (16. November 1836), S. 749f.
                        </li><li>G. W. Fink, „Gedanken über den vorigen Aufsatz und meine Meinung über musikalische Preisaufgaben“, in: <i>Allgemeine musikalische Zeitung</i> 38/46 (16. November 1836), S. 752-758.
                    </li><li>Sebald v. Walde, „Ueber musikalische Preisaufgaben“, in: <i>Neue Zeitschrift für Musik</i> 4/26 (31. März 1837), S. 104f. [Opernkompositionspreisausschreiben]
                    </li><li>LL., „Ueber die von der königl. Akademie in Berlin gekrönte Preiscomposition“, in: <i>Neue Zeitschrift für Musik</i> 7/2 (7. Juli 1837), S. 7f., 7/3 (11. Juli 1837), S. 10f.
                    </li><li>Miltitz, „Noch ein Wort über den Nutzen der musikalischen Preisaufgaben“, in: <i>Cäcilie, eine Zeitschrift für die musicalische Welt</i> 19/74 (1837), S. 131f. [Kritik zu Kompositionspreisausschreiben].
                    </li><li>K. Stein, „Noch ein Wort über musikalische Preisaufgaben“, in: <i>Cäcilie, eine Zeitschrift für die musicalische Welt</i> 19/75 (1837), S. 252f. [mit Bezug auf die Wiener Preissinfonie].
                    </li><li>Flodoard Geyer, „Ueber Preisbewerbungen. Mit besonderer Rücksicht auf die in Hechingen“, in: <i>Berliner Musikalische Zeitung</i> 3/28 (11. Juli 1846), S. [1-2].
                    </li><li>[Anon.], „Eine Preisrichter-Sitzung in Paris“, in: <i>Berliner Musikalische Zeitung</i> 3/31 (1. August 1846), S. [1-2].
                    </li><li>Henri Blanchard, „Mon livre ou souvenirs pour servir à l'histoire littéraire et musicale de la première moitié de ce siècle. (Troisième article.)“, in: <i>Revue et Gazette musicale de Paris</i> 15/44 (29. Oktober 1848), S. 336-338 [Kritischer Aufsatz zum allgemeinen Nutzen von Preisausschreiben, am Beispiel der Ausschreibungen französischer Nationallieder sowie dem Prix de Rome].
                    </li><li>A. Tschirch, „Feuilleton. Über einige Mittel, Compositionen jüngerer Tonkünstler in die Öffentlichkeit einzuführen“, in: <i>Neue Berliner Musikzeitung</i> 6/33 (18. August 1852), S. 261 [zu Vorzügen musikalischer Preisausschreiben].
                    </li><li>[Anon.], „Ueber Preisausschreiben für musikalische Kompositionen (I)“, in: <i>Süddeutsche Musikzeitung</i> 1/38 (20. Dezember 1852), S. 149f.
                    </li><li>[Anon.], „Ueber Preisausschreiben (Schluss)“, in: <i>Süddeutsche Musikzeitung</i> 1/39 (27. Dezember 1852), S. 154.
                    </li><li>F. P., „Cose teatrali di Torino“, in: <i>L'Italia musicale</i> 6/102 (23. Dezember 1854), S. 406f. [Wettbewerbe allgemein].
                    </li><li>[Anon.], „Der Musik-Verlag in Deutschland“, in: <i>Niederrheinische Musik-Zeitung</i> 4/10 (15. März 1856), S. 81f. [u. a. auch darüber, dass Kompositionspreisausschreiben das allgemeine Niveau musikalischer Kompositionen nicht heben würden].
                    </li><li>F. Brendel, „Statuten des Allgemeinen deutschen Musikvereins“, in: <i>Neue Zeitschrift für Musik</i> 53/11 (7. September 1860), S. 89f. [Kompositionspreisausschreiben hätten sich als weniger sinnvoll und ergiebig herausgestellt als musikhistorische Preisausschreiben.].
                    </li><li>[Anon.], „Society for the Encouragement of the Fine Arts“, in: <i>The Musical World</i> 38/1 (7. Januar 1860), S. 5-7 [Berichterstattung über die Vollversammlung der „Society for the Encouragement of the Fine Arts“: Wiedergabe der Diskussion über Preisausschreiben in den Künsten im Allgemeinen sowie in der Musik im Speziellen].
                    </li><li>Alex T. Teetjen, „Prize for Stringed Quartets“, in: <i>The Musical World</i> 40/48 (29. November 1862), S. 765 [Wunsch nach einem Kompositionspreisausschreiben].
                    </li><li>Otto Beard, „o. T. Titel“, in: <i>The Musical World</i> 42/17 (23. Mai 1864), S. 264f. [Kritik an einem geplanten Preisausschreiben des neugegründeten College of Organists. Die Kritik enthält eine detaillierte Abhandlung über die Gestaltung von Preisausschreiben allgemein.].
                    </li><li>[Anon.], „Ueber Preis-Aufgaben“, in: <i>Neue Berliner Musikzeitung</i> 20/28 (11. Juli 1866), S. 219f.
                    </li><li>G. Roores, „o. T.“, in: <i>The Musical World</i> 44/29 (21. Juli 1866), S. 459f. [zu musikalischen Preisausschreiben und ihren Nutzen für MusikerInnen allgemein].
                    </li><li>[Anon.], „Gesang und Oper“, in: <i>Niederrheinische Musik-Zeitung</i> 15/22 (1. Juni 1867), S. 169f. [Ablehnung von Preissingen].
                    </li><li>P. Lacome, „Trop de concours“, in: <i>Revue et Gazette musicale de Paris</i> 37/10 (6. März 1870), S. 73-74 [Aufsatz zum Nutzen von Kompositionspreisausschreiben als Kommentar zu einem veröffentlichten Brief von Amaury Duval. Plädoyer, Preisausschreiben durch das Prinzip der Ausstellung aus der bildenden Kunst zu ersetzen, bei dem die Öffentlichkeit urteilt.].
                    </li></ul>
                    <h3><a id="34"></a>Werturteile und ihre Probleme</h3>
                    <ul>
                        <li>Fétis, „Nouvelles de Paris. Institut de France. Séance publique annuelle de l'Académie Royale des Beaux-Arts, (samedi 6 octobre.)“, in: <i>Revue Musicale</i> 1/[35] ([Oktober] 1827), S. 253-260 [inkl. genereller Problematisierung der Beurteilung durch Jurys].
                        </li><li>[Anon.], [o.T.], in: <i>Revue Musicale</i> 4/[1] (1828), S. 18-20 [zum Nutzen von Musikwettbewerben allgemein sowie im Besonderen im Militär].
                    </li><li>[Anon.], „Rhapsodien“, in: <i>Neue Zeitschrift für Musik</i> 1/33 (24. Juli 1834), S. 130 [über das Vergleichen und Bewerten in der Kunst].
                    </li><li>Fétis père, „Que peut-on faire pour améliorer la condition des jeunes compositeurs et pour Porter remède à la décadence de la musique? (5e et dernier article) (1)“, in: <i>Revue et Gazette musicale de Paris</i> 25/13 (28. März 1858), S. 101-103 [Aufruf an Jurymitglieder von Kompositionswettbewerben, die sich an den Nachwuchs richten, zur Strenge der Bewertung].
                    </li><li>[Anon.], „o. T.“, in: <i>The Musical World</i> 39/15 (13. April 1861), S. 232f. [Vergleich von Werturteilen in Musik und Bildender Kunst].
                    </li><li>[Anon.], „Society for the Encouragement of the Fine Arts“, in: <i>The Musical World</i> 40/11 (15. März 1862), S. 165 [zur Society, die Preise in den verschiedenen Künsten vergibt und zu den Problemen bei der Verteilung der Musikpreise].
                    </li><li>B. Congreve, „Prize Competitions“, in: <i>The Musical World</i> 47/8 (20. Februar 1869), S. 119 [Autor plädiert dafür, das Ranking der TeilnehmerInnen eines Preisausschreibens zu veröffentlichen, anstatt nur die SiegerInnen bekannt zu geben.].
                    </li></ul>
                    <h3><a id="45"></a>Forderungen, Wünsche, Ideen</h3>
                    <ul>
                        <li>[Anon.], „Nouvelles de Paris“, in: <i>Revue Musicale</i> 8/46 (16. November 1834), S. 365-366 [Vorschlag zu einem französischen Verbund zwischen der Athénée musicale de Paris und Musikgesellschaften der Départements, dessen Zweck neben Aufführungen und der Herausgabe einer Zeitschrift ein jährlicher Kompositionswettbewerb sein solle].
                        </li><li>F. Liszt, „De la situation des artistes, et de leur condition dans la société. (Dernier article.)“, in: <i>Gazette musicale de Paris</i> 2/41 (11. Oktober 1835), S. 332f. [Utopie einer „société universelle“ aller Musiker, die als erste Maßnahme alle fünf Jahre einen Kompositionswettbewerb – siehe Übersetzung als „Wettbewerb“ in Kleinertz (Hg.), <i>Frühe Schriften (2000)</i>, S. 63 – abhalten soll, bei dem die besten religiösen, dramatischen und sinfonischen Werke feierlich im Louvre aufgeführt und dann auf Kosten der Regierung veröffentlicht werden sollen].
                    </li><li>[Anon.], „Musical Art-Unions“, in: <i>Saroni’s Musical Times</i> I 23 (2. März 1850), S. 266 [zur Gründung der Musical Art-Union mit der Empfehlung, Preise auszuschreiben].
                    </li><li>G. Bénédit, „De la décentralisation artistique“, in: <i>Revue et Gazette musicale de Paris</i> 17/32 (11. August 1850), S. 267-268 [Aufsatz, der u. a. das Thema der Nachwuchsförderung durch Kompositionspreise und die mangelnden Chancen der Preisträger an den Pariser Opernbühnen berührt, sowie außerdem den Vorschlag jährlicher, in allen französischen Städten stattfindender Preisausschreiben für Opernlibretti unterbreitet].
                    </li><li>L.D., „Vorschlag“, in: <i>Süddeutsche Musikzeitung</i> 1/10 (7. Juni 1852), S. 37 [Vorschlag für ein Preisausschreiben zur Musiktheorie].
                    </li><li>Ernest Lépine, „Projet. Audition périodique des œuvres des artistes vivants. Réponse aux réclamations de la Société Sainte-Cécile et de la Société des Jeunes-Artistes“, in: <i>Le Ménestrel</i> 22/7 (14. Januar 1855), S. 2f. [Bekräftigung der Idee eines nationalen Musikwettbewerbs].
                    </li><li>X., „Anregung zu einem allgemein deutschen Sänger-Concurs“, in: <i>Niederrheinische Musik-Zeitung</i> 6/31 (31. Juli 1858), S. 243f. [Ideen zu einem Gesangswettbewerb für SolistInnen].
                    </li><li>[Anon.], „‘Antigone’ at the Crystal Palace”, in: <i>The Musical Standard</i> 2/28 (15. September 1863), S. 53 [Wunsch nach einem musikalischen Preisausschreiben, an dem nur Engländer teilnehmen dürfen].
                    </li><li>[„Rusticus“], „Musical prizes. To the Editor of The Musical World“, in: <i>The Musical World</i> 41/15 (11. April 1863), S. 231 [Wunsch nach einem Kompositionspreisausschreiben].
                    </li><li>Roberts, Valentine, „Musical Prizes. To the Editor of the Musical World“, in: <i>The Musical World</i> 41/16 (18. April 1863), S. 246 [Wunsch nach einem Kompositionspreisausschreiben].
                    </li><li>[„Musicus“], „Musical Prizes. To the Editor of The Musical World“, in: <i>The Musical World</i> 41/17 (25. April 1863), S. 262 [Wunsch nach einem Kompositionspreisausschreiben].
                    </li><li>[„Ragd. A. Mus.“], „Pools. To the Editor of The Musical World“, in: <i>The Musical World</i> 41/18 (2. Mai 1863), S. 278 [Vorschlag für eine Lotterie musikalischer Preisausschreiben].
                    </li><li>[„A Professor“], „Musical Prizes. To the Editor of The Musical World“, in: <i>The Musical World</i> 41/23 (6. Juni 1863), S. 359 [Wunsch nach einem Kompositionspreisausschreiben].
                    </li><li>E. l'Épine, „Audition périodiques des œuvres musicales des artistes vivants“, in: <i>Le Ménestrel</i> 30/46 (18. Oktober 1863), S. 368 [Überarbeiteter Vorschlag eines staatlichen Kompositionswettbewerbs für eine aus 14 Konzerten bestehende große „audition“ von Vokal- und Instrumentalmusik].
                    </li><li>Paul Smith, „Projet d'auditions périodiques. D'oeuvres musicales d'artistes viants“, in: <i>Revue et Gazette musicale de Paris</i> 30/45 (8. November 1863), S. 355-356 [Kommentar u. a. zu den von Fétis geforderten regelmäßigen (staatlich subventionierten) Preisausschreiben für Opernlibretti und -partituren sowie zum Prix de Rome].
                    </li><li>Enderby Jackson, „Letters to the Editor“, in: <i>The Musical World</i> 42/2 (9. Januar 1864), S. 29 [Vorschlag für einen großen Musikwettbewerb zwischen Frankreich und England].
                    </li><li>[Anon.], „To the Editor of The Orchestra“, in: <i>The Orchestra</i> 3/64 (17. Dezember 1864), S. 188 [Leserbrief mit Wunsch zur Preisvergabe an Sänger].
                    </li><li>[Anon.], „A New Object for a Prize“, in: <i>The Musical Standard</i> 5/107 (18. August 1866), S. 102 [Leserbrief mit Wunsch nach einem Preisausschreiben für eine Kammerorgel].
                    </li></ul>
                    <h3><a id="67"></a>Ankündigungen und Pläne</h3>
                    <ul>
                        <li>Eduard Freiherr von Lannoy u.a., „Aufforderung an die Herren Componisten“, in: <i>Neue Zeitschrift für Musik</i> 26/31 (16. April 1847), S. 134 [Ankündigung, dass die Concert Spirituels nun jährlich eine Komposition ausschreiben].
                        </li><li>Ernest l'Épine, „Projet. Auditions musicales d'œuvres des artistes vivants“, in: <i>Le Ménestrel</i> 22/3 (17. Dezember 1854), S. 3f. [Entwurf eines von der französischen Regierung ausgeschriebenen, breit angelegten jährlichen Kompositionswettbewerbs für Vokal- und Instrumentalmusik analog zur staatlichen Förderung der bildenden Künste (gemeint war vermutlich der Salon de peinture et de sculpture); Vorschlag zum Auftakt bei der Pariser Weltausstellung 1855 die Musik gleichberechtigt neben den anderen Künsten teilhaben zu lassen; notwendige „audition“ analog zur „exposition“].
                    </li><li>[Anon.], „Tages- und Unterhaltungsblatt“, in: <i>Niederrheinische Musik-Zeitung</i> 10/15 (12. April 1862), S. 120 [Planung österreichischer Staatsstipendien für KünsterInnen].
                    </li><li>[Anon.], „Royal Academy of Music“, in: <i>The Musical World</i> 47/21 (22. Mai 1869), S. 359, 47/24 (12. Juni 1869), S. 418 [In Gedenken an den verstorbenen Charles Lucas soll an der Royal Academy of Music jährlich eine Goldmedaille für Komposition verliehen werden.].
                    </li></ul>
                    <h3><a id="75"></a>Beschwerden, Klagen und Scherze</h3>
                    <ul>
                        <li>[Anon.], „Novitäten“, in: <i>Signale für die musikalische Welt</i> 2/9 (März 1844), S. 69 [Witz über Preisausschreiben].
                        </li><li>Anon.], „Ueber Preisaufgaben“, in: <i>Neue Zeitschrift für Musik</i> 35/5 (1. August 1851), S. 48 [Beschwerde über den Umgang Ferdinand Hillers mit den nicht-ausgezeichneten Konkurrenten eines Kölner Kompositionspreisausschreibens].
                    </li><li>[Anon.], „Literatur“, in: <i>Süddeutsche Musikzeitung</i> 12/35 (31. August 1863), S. 137 [Auszug aus einem Brief Felix Mendelssohn-Bartholdys an seine Mutter, in dem er erklärt und begründet, nie wieder Jurymitglied bei einem musikalischen Preisausschreiben sein zu wollen].
                    </li><li>[Anon.], „Alla onorevole Commissione esaminatrice dei Concorsi“, in: <i>Gazzetta musicale di Milano</i> 23/10 (8. März 1868), S. 75f. [Leserbrief (Beschwerde) eines nicht-preisgekürten Teilnehmers eines Preisausschreibens der „Società del Quartetto di Milano“].
                    </li></ul>
                    <h3><a id="83"></a>Übersichten</h3>
                    <ul>
                        <li>[Anon.], „Nachrichten“, in: <i>Süddeutsche Musikzeitung</i> 14/14 (3. April 1865), S. 56 [Anzahl von Gesangvereinen, Musikvereinen, Musikfesten und Wettbewerben in Frankreich 1865].
                        </li><li>W., „Les concours de musique en Belgique“, in: <i>Le Guide musical</i> 11/16 (20. Mai 1865), S. 65 [Musikwettbewerbe in Belgien].
                    </li><li>[Anon.], „The One-Eyed Perch in Paris“, in: <i>The Orchestra</i> 7/180 (9. März 1867), S. 378f. [zu Preisausschreiben in Frankreich].
                    </li></ul>
                    <h3><a id="90"></a>Prix de Rome</h3>
                    <ul>
                        <li>[Anon.], „Correspondance“, in: <i>Revue Musicale</i> 1/1 (Februar 1827), S. 44-47 [Anonymer Brief eines „pauvre musicien“ mit Kritik an den mangelnden Karrierechancen im Opernbetrieb für Rompreisträger].
                        </li><li>Stéphen, „Projet d'Association Musicale. Société du Gymnase lyrique“, in: <i>Revue Musicale</i> 4/[13] ([Oktober] 1828), S. 289-296 [Versprechen von Aufführungsmöglichkeiten für die Rompreisträger in der gegründeten Konzertreihe Gymnase lyrique].
                    </li><li>Fétis, „De la commission pour la réorganisation des théâtres, de sa mission, et de l'importance de ses travaux“, in: <i>Revue Musicale</i> 9/[4] (4. September 1830), S. 97-111 [zu den Komplikationen bei der Umsetzung eines königlichen Erlasses, der die Académie des Beaux-Arts dazu verpflichtete, den Rompreisträgern bei ihrer Rückkehr nach Paris ein Libretto zu Verfügung zu stellen, sowie die Opéra, deren Opern aufzuführen].
                    </li><li>[Anon.], „Pétition présentée au ministre de l'intérieur par les artistes de Paris“, in: <i>Revue Musicale</i> 9/[4] (4. September 1830), S. 112-117 [Forderungen einer Musikerkommission nach Liberalisierung des Musikbetriebs, u.a. vereinfachtem Zugang zu den Opernbühnen für die Rompreisträger und einer ausschließlich durch Musikkenner besetzten Jury des Prix de Rome].
                    </li><li>[Anon.], „Nouvelles de Paris. Théâtre de l'Opéra-comique. Le grand prix, ou le voyage à frais communs [...]“, in: <i>Revue Musicale</i> 5/24 (16. Juli 1831), S. 190-192 [Rezension einer Opéra-comique, deren Handlung auf die Italienreisen der Rompreisträger Bezug nimmt].
                    </li><li>[Anon.], „Nouvelles de Paris“, in: <i>Revue Musicale</i> 6/47 (22. Dezember 1832), S. 375 [Nachricht über Gratiseintritt in die Opéra, den der Direktor Véron Zweitplatzierten des Rompreises gewähren wolle].
                    </li><li>H. Berlioz, „Institut. Concours de musique et voyage d'Italie du lauréat“, in: <i>Gazette musicale de Paris</i> 1/5 (2. Februar 1834), S. 35f. [satirischer Aufsatz zum Rompreis und der Italienreise].
                    </li><li>[Anon.], „Correspondenz“, in: <i>Neue Zeitschrift für Musik</i> 1/33 (24. Juli 1834), S. 132 [Prix de Rome: allgemeiner Ablauf].
                    </li><li>Germanus le Pic, „De l'éducation de compositeurs de musique. (Suite et fin.)“, in: <i>Gazette musicale de Paris</i> 2/43 (25. Oktober 1835), S. 348f.
                    </li><li>Hector Berlioz, „Concours annuel de composition musicale à l'Institut“, in: <i>Revue et Gazette musicale de Paris</i> 3/25 (19. Juni 1836), S. 203f.
                    </li><li>Germanus Le Pic, „Du concours pour le grand prix de musique, et du voyage des musiciens lauréats“, in: <i>Revue et Gazette musicale de Paris</i> 3/41 (9. Oktober 1836), S. 353f.
                    </li><li>Hector Berlioz, „Encore un mot sur le concours de composition musicale à l'Institut, en réponse au dernier article de M. Germanus Lepic“, in: <i>Revue et Gazette musicale de Paris</i> 3/43 (23. Oktober 1836), S. 370f.
                    </li><li>[Anon.], „French Encouragement of young Musicians“, in: <i>The Musical World</i> 3/33 (28. Oktober 1836), S. 101-103.
                    </li><li>H. Berlioz, „Théatre de l'Opéra-Comique. Première représentation de la Dame-d'Honneur, poëme de MM. E. Monnais et Paul Duport, musique de M. Despéraux“, in: <i>Revue et Gazette musicale de Paris</i> 5/40 (7. Oktober 1838), S. 397f.
                    </li><li>T., „Conservatoire de musique. Quelques mots sur le système d'enseignement suivi dans les classes de composition idéale“, in: <i>Revue musicale, journal des artistes, des amateurs et des théâtres</i> 6/23 (6. Juni 1839), S. 181f.
                    </li><li>Francis Wey, „Les dangers du Prix de Rome“, in: <i>La France musicale</i> 4/14 (4. April 1841), S. 116f. [zur Karriere eines Prix de Rome-Preisträgers].
                    </li><li>Hippolyte Prévost, „Quelques réflexions“, in: <i>La France musicale</i> 4/42 (17. Oktober 1841), S. 359f.
                    </li><li>Edmond Viel, „Les pensionnaires de Rome“, in: <i>Le Ménestrel</i> 8/46 (17. Oktober 1841 / 24. Oktober 1841), o. S. [Aufsatz mit kritischer Stellungnahme zur Pension des Prix de Rome und des damit verbundenen Auslandaufenthaltes in Italien].
                    </li><li>Paul Smith, „Dix années lyriques en France. (Quatrième et dernier article.)“, in: <i>Revue et Gazette musicale de Paris</i> 9/44 (30. Oktober 1842), S. 425f.
                    </li><li>[Anon.], „Notizie musicale varie“, in: <i>Gazzetta musicale di Milano</i> 3/23 (9. Juni 1844), S. 95
                    </li><li>A. Elwart, „De la position des jeunes compositeurs français. (Premier article.)“, in: <i>Revue et Gazette musicale</i> 13/18 (3. Mai 1846), S. 141f.
                    </li><li>A. Elwart, „De la position des jeunes compositeurs français. (Suite et fin.)“, in: <i>Revue et Gazette musicale</i> 13/20 (17. Mai 1846), S. 154f.
                    </li><li>J. Martin d'Angers, „De la musique sacrée“, in: <i>Revue et Gazette musicale</i> 13/25 (21. Juni 1846), S. 193f.
                    </li><li>Edouard Fétis, „Revue d'un demi-siècle. L'Opéra-comique de 1815 à 1830“, in: <i>Revue et Gazette musicale de Paris</i> 17/45 (10. November 1850), S. 371-374 [Aufsatz u. a. über den Erfolg der Rompreisträger als Komponisten der Opéra-comique].
                    </li><li>Edouard Fétis, „Revue d'un demi-siècle. L'Opéra-Comique de 1830 à 1850“, in: <i>Revue et Gazette musicale de Paris</i> 17/46 (17. November 1850), S. 377-381 [Aufsatz u.a. über den Erfolg der Rompreisträger als Komponisten der Opéra-comique].
                    </li><li>Aug. Gathy, „Die Pariser Prämianten und ihre Geschicke“, in: <i>Neue Zeitschrift für Musik</i> 34/17 (25. April 1851), S. 178f. [Prix de Rome: Karrieren der Preisträger]
                    </li><li>[Anon.], „Die Pariser Prämianten und ihre Geschicke“, in: <i>Neue Zeitschrift für Musik</i> 34/19 (9. Mai 1851), S. 195f. [Prix de Rome: Ablauf].
                    </li><li>[Anon.], „French Encouragement of Young Musicians“, in: <i>Dwight’s Journal of Music</i> 2/24 (19. März 1853), S. 187 [Kritischer Bericht zum Prix de Rome, in dem der Journalist die Urteilsfindung der Jury sowie die Leistungen während der Romreise kritisiert].
                    </li><li>Fétis père, „Que peut-on faire pour améliorer la condition des jeunes compositeurs et pour Porter remède à la décadence de la musique! (Premier article.)“, in: <i>Revue et Gazette musicale de Paris</i> 25/4 (24. Januar 1858), S. 25-27 [Kritik an den Auslandsreisen des französischen sowie belgischen Rompreises sowie am Mangel an Karrierechancen im Opernbetrieb bei der Rückkehr der Preisträger; Aufforderung zur Reform des Preises].
                    </li><li>[Anon.], „Die Ausbildung und Unterstützung junger Musiker“, in: <i>Süddeutsche Musikzeitung</i> 7/33 (16. August 1858), S. 129f. [zur Musikerausbildung, u. a. auch zu Preisausschreiben (Prix de Rome) und Stipendien].
                    </li><li>Ralph, „Prix de Rome“, in: <i>L'Art musical</i> 2/10 (6. Februar 1862), S. 73f. [sehr ausführlicher Bericht über den Prix de Rome allgemein].
                    </li><li>A. Suttner, „Musikalische Skizzen aus Paris“, in: <i>Signale für die musikalische Welt</i> 21/30 (25. Juni 1863), S. 481f.
                    </li><li>[Anon.], „France“, in: <i>Le Guide musical</i> 10/20 (12. Mai 1864), S. 79 [neue Regularien zum Prix de Rome].
                    </li><li>Vaillant / Napoleon, „Rapport à l'Empereur“, in: <i>L'Art musical</i> 4/24 (12. Mai 1864), S. 190 [Bericht der Académie des Beaux-Arts an König Napoleon III. zu Änderungen der Organisation des Prix de Rome und Dekret Napoleons III.].
                    </li><li>Gustave Bertrand, „Semaine théâtrale“, in: <i>Le Ménestrel</i> 31/24 (15. Mai 1864), S. 187f. [Rom-Aufenthalt der Rompreisträger; deren Aufführungsmöglichkeiten in Paris; Reform des Rompreises].
                    </li><li>Ralph, „Les prix de Rome“, in: <i>L'Art musical</i> 4/49 (3. November 1864), S. 397f.
                    </li><li>Ralph, „Encore les prix de Rome“, in: <i>L'Art musical</i> 4/51 (17. November 1864), S. 411f.
                    </li><li>Gustave Bertrand, „Semaine théâtrale“, in: <i>Le Ménestrel</i> 34/19 (7. April 1867), S. 146f. [Kritische Stellungnahme zum Rom-Aufenthalt der Rompreisträger, den mangelnden Aufführungsmöglichkeiten in Paris und den Verpflichtungen der Opéra-comique und des Théâtre-lyrique zur Aufführung ihrer Stücke].
                    </li><li>Albert Vizentini, „Courrier musical“, in: <i>L'Art musical</i> 7/32 (11. Juli 1867), S. 253f. [zur Orphéons-Bewegung in Frankreich sowie dem Prix de Rome allgemein].
                    </li><li>Albéric Second, „Miséres d'un prix de Rome“, in: <i>Le Ménestrel</i> 35/30 (21. Juni 1868), S. 235f. [Abdruck von Auszügen aus dem gleichnamigen komischen Roman von Albéric Second mit kurzer einleitender Bemerkung].
                    </li><li>Gustave Bertrand, „Semaine théâtrale“, in: <i>Le Ménestrel</i> 35/30 (21. Juni 1868), S. 235 [Besprechung des komischen Romans „Misères d'un Prix de Rome“ von Albéric Second und dessen Topos der mangelnden Chancen der aus Italien nach Paris zurückkehrenden Rompreisträger zu Auftritten und Veröffentlichungen].
                    </li><li>Em. Mathieu de Monter, „Bibliographie musicale. Misères d'un prix de Rome, Par Albéric Second“, in: <i>Revue et Gazette musicale de Paris</i> 35/30 (26. Juli 1868), S. 235f. [Rezension des satirischen Romans von Second].
                    </li><li>Jules Ruelle, „France“, in: <i>Le Guide musical</i> 15/1 (7. Januar 1869), S. 6 [über den Prix de Rome, der sich im Niedergang befinden würde].
                    </li><li>A. A., „Carteggi“, in: <i>Gazzetta musicale di Milano</i> 24/4 (24. Januar 1869), S. 29f.
                    </li><li>Th. De Lajarte, „Cantates et Prix de Rome“, in: <i>La France musicale</i> 33/4 (24. Januar 1869), S. 25f.
                    </li><li>Gustave Chouquet, „Poètes et musiciens“, in: <i>L'Art musical</i> 9/14 (4. März 1869), S. 105f. [zum Prix de Rome allgemein].
                    </li><li>Mathieu de Monter, „Études biographiques et critiques“, in: <i>Revue et gazette musicale de Paris</i> 36/32 (8. August 1869), S. 258f., 36/33 (15. August 1869), S. 265f. [Hector Berlioz und der Prix de Rome].
                    </li><li>Ralph, „Le couteau à Janot“, in: <i>L'Art musical</i> 9/39 (26. August 1869), S. 317f. [Satire auf den Prix de Rome].
                    </li><li>Jules Ruelle, „France“, in: <i>Le Guide musical</i> 16/9 (3. März 1870), S. 69 [Teilnahme am Prix de Rome bis zum 30. Lebensjahr].
                    </li><li>[Anon.], „Faits divers“, in: <i>L'Art musical</i> 10/17 (24. März 1870), S. 134 [neue Teilnahmeregelungen für den Prix de Rome],
                    </li><li>A. v. Cz., „Correspondenzen“, in: <i>Neue Berliner Musikzeitung</i> 24/13 (30. März 1870), S. 101 [Altersbeschränkung für die Teilnahme am Prix de Rome von 15-25 Jahren auf 15-30 Jahren erweitert].
                    </li><li>Gustave Bertrand, „Semaine théâtrale. La question du prix de Rome“, in: <i>Le Ménestrel</i> 37/33 (17. Juli 1870), S. 259f. [Vorschlag erneuter Reform des Prix de Rome bezüglich Juryzusammensetzung, Aufgabenstellung und Aufführung vor der Jury].
                    </li><li>Fétis père, „Que peut-on faire pour améliorer la condition des jeunes compositeurs et pour Porter remède à la décadence de la musique! (Premier article.)“, in: <i>Revue et Gazette musicale de Paris</i> 25/4 (24. Januar 1858), S. 25-27 [Kritik an den Auslandsreisen des französischen sowie belgischen Rompreises sowie am Mangel an Karrierechancen im Opernbetrieb bei der Rückkehr der Preisträger; Aufforderung zur Reform des Preises].
                    </li></ul>
                    <h3><a id="147"></a>Prix de Rome Belge</h3>
                    <ul>
                        <li>[Anon.], „Correspondance“, in: <i>Revue et Gazette musicale de Paris</i> 21/43 (22. Oktober 1854), S. 345f. [zur öffentlichen Diskussion zwischen Ministerium um Académie de Belgique über die Karrierechancen der belgischen Rompreisträger als Komponisten im Opernbetrieb].
                        </li><li>Adolphe Samuel, „Le Conservatoire royale de Musique“, in: <i>Le Guide musical</i> 4/34 (21. Oktober 1858), S. 1 [allgemein über den Prix de Rome Belge].
                    </li><li>[Anon.], „Belgique“, in: <i>Le Guide musical</i> 13/23 (6./13. Juni 1867), S. 181 [Klage, dass die Preisträger des Prix de Rome Belge sich nicht an die mit Erhalt des Stipendiums verbundenen Auflagen halten würden].
                    </li><li>[Anon.], „Belgique“, in: <i>Le Guide musical</i> 13/31 /1./8. August 1867), S. 213 [Überlegungen zur Reform des Prix de Rome Belge].
                    </li><li>[Anon.], „Belgique“, in: <i>Le Guide musical</i> 15/31 (5./12. August 1869), S. 211 [Es kommt vor, dass die Preisträger nicht, wie es vorgesehen ist, mit dem Stipendium durch Europa reisen, sondern in Belgien bleiben. Neue Regularien sollen dem entgegenwirken.].
                    </li></ul>
                    <h3><a id="156"></a>Chorgesang / Glees</h3>
                    <ul>
                        <li>Th., „Aus London“, in: <i>Neue Zeitschrift für Musik</i> 3/40 (17. November 1835), S. 160 [Londoner „Glee-Club“, „Madrigal-Club", „Melodists-Club“ und deren jährliche Preisausschreiben für Vokalkompositionen].
                        </li><li>[Anon.], „Distribution of prizes by musical clubs“, in: <i>The Musical World</i> 10/137 (25. Oktober 1838), S. 120f. [allgemeine Kritik zu musikalischen Preisausschreiben (Fokus auf Glee Clubs)].
                    </li><li>[Anon.], „The Liverpool Beefsteak Club. To the Editor of the Musical World“, in: <i>The Musical World</i> 6/108 (23. Januar 1840), S. 55f. [Ausführliche Kritik der Wertungsinstanzen beim Preisausschreiben des Beef Steak Club].
                    </li><li>[Anon.], „The Liverpool Beefsteak Club. To the Editor of the Musical World“, in: <i>The Musical World</i> 6/109 (30. Januar 1840), S. 71f. [Leserbrief zur Kritik der Wertungsinstanzen beim Preisausschreiben des Beef Steak Club].
                    </li><li>[Anon.], „The Liverpool Beef Steak-Club, To the Editor of the Musical World“, in: <i>The Musical World</i> 6/111 (13. Februar 1840), S. 61f. [Leserbrief zur Kritik der Wertungsinstanzen beim Preisausschreiben des Beef Steak Club].
                    </li><li>[Anon.], „Mr. Gauntlett’s Prize Anthem. To the Editor of the Musical World“, in: <i>The Musical World</i> 8/165 (25. Februar 1841), S. 121 [Leserbrief zur Kritik der Wertungsinstanzen beim Preisausschreiben des Beef Steak Club].
                    </li><li>Sylvain Saint-Étienne, „De l'état de la musique en province. (Quatrième article)“, in: <i>Revue et Gazette musicale</i> 13/44 (1. November 1846), S. 345-348 [Aufsatz über französische Gesangvereine, auch über die Rolle der Wettbewerbe].
                    </li><li>[Anon.], „Correspondance“, in: <i>Revue et Gazette musicale de Paris</i> 19/27 (4. Juli 1852), S. 221f. [Ausführungen zu Chorwettbewerben in Belgien bzw. im internationalen Vergleich mit Frankreich und Deutschland].
                    </li><li>[Anon.], „Über die Preisconcurrenz bei Gesangfesten“, in: <i>Süddeutsche Musikzeitung</i> 1/15 (12. Juli 1852), S. 57f. [Plädoyer für die Abschaffung der Wettgesänge, da diese dem vereinigenden und auf Geselligkeit ausgerichteten Wesens des Männergesangs widersprächen].
                    </li><li>B-n., „Über das niederrheinische Gesangfest in Cleve“, in: <i>Niederrheinische Musik-Zeitung</i> 1/8 (20. August 1853), S. 62f. [auch allgemein zu deutschen Männergesangsfesten und zum Preissingen].
                    </li><li>Dz., „Schweizerbriefe“, in: <i>Neue Zeitschrift für Musik</i> 41/8 (18. August 1854), S. 81f. [Kritik an Verfahrensweisen der Männerchorwettbewerbe; vor allem an den Preisverleihungen und der Urteilsfindung der Jury].
                    </li><li>L.B., „Zur Geschichte des Männergesangs“, in: <i>Niederrheinische Musik-Zeitung</i> 3/35 (1. September 1855), S. 273f. [zu Männergesangsvereinen in Deutschland inkl. Gesangswettstreite, die hier jedoch „undeutsch“ genannt werden].
                    </li><li>[Anon.], „Allemagne“, in: <i>Le Guide musical</i> 2/14 (5. Juni 1856), S. 3 [Planung eines Wettbewerbs für Chorgesang durch M. Sachse in Hamburg].
                    </li><li>J. B. Rongé, „Les sociétés chorales en Belgique“, in: <i>Revue et Gazette musicale de Paris</i> 25/44 (31. Oktober 1858), S. 359-360 [Aufsatz zum belgischen Chorvereinswesen und seinen Wettbewerben].
                    </li><li>[Anon.], „Le Società corale nel Belgio“, in: <i>Gazzetta Musicale di Napoli</i> 8/8 (24. Februar 1859), S. 59f. [Bericht über belgische Gesangsvereinen und Chorwettbewerbe].
                    </li><li>Redaktion, „Návrh k stanovám“, in: <i>Dalibor</i> 5/14 (10. Mai 1862), S. 106, 5/15 (20. Mai 1862), S. 113 [Preisausschreiben des Gesangsvereins „Matice pěvecká“: Information zu Regularien und Preisen].
                    </li><li>[Anon.], „Aus der Schweiz“, in: <i>Süddeutsche Musikzeitung</i> 11/35 (1. September 1862), S. 139 [zu geplanten Reformen bei den Chorwettbewerben der eidgenössischen Gesangsfeste].
                    </li><li>[Anon.], „Kunstnotizen“, in: <i>Blätter für Musik, Theater und Kunst</i> 8/72 (5. September 1862), S. 288 [Eidgenössisches Sängerfest: Änderung der Statuten, v.a. im Hinblick auf die Profile der Teilwettbewerbe „Kunstgesang“ und „Volksgesang“].
                    </li><li>[Anon.], „Eine Stimme aus Frankreich über Musik- und Gesang-Vereine“, in: <i>Niederrheinische Musik-Zeitung</i> 10/40 (4. Oktober 1862), S. 318f. [Männergesangsvereine in Frankreich, inkl. Gesangswettbewerbe].
                    </li><li>[Anon.], „Allemagne“, in: <i>Le Guide musical</i> 8/35 (30. Oktober 1862), S. 139 [Dachverband der Gesangvereine in Deutschland organisiert alle 4 Jahre ein Festival und alle 2 Jahre einen Gesangswettbewerb].
                    </li><li>Camille de Vos, „Les Sociétés Chorales“, in: <i>La France musicale</i> 27/23 (7. Juni 1863), S. 173f. [zu Chorwettbewerben].
                    </li><li>Camille de Vos, „Les Sociétés Chorales“, in: <i>La France musicale</i> 26/26 (29. Juni 1862), S. 201 [zu Gesangs- und Orphéonwettbewerben].
                    </li><li>Camille de Vos, „Les Sociétés Chorales“, in: <i>La France musicale</i> 27/28 (12. Juli 1863), S. 213f. [zu Chorwettbewerben].
                    </li><li>[Anon.], „Dur und Moll“, in: <i>Signale für die musikalische Welt</i> 23/10 (3. Februar 1865), S. 154 [zu den Wettsingen bei den eidgenössischen Sängerfesten in der Schweiz].
                    </li><li>[Anon.], „Nachrichten“, in: <i>Neue Berliner Musikzeitung</i> 19/12 (22. März 1865), S. 95 [Anzahl von Gesangvereinen, Chorwettbewerben und Musikfesten in Frankreich].
                    </li><li>Blaise Lyon, „Le chant a première vue“, in: <i>L'Avenir musical</i> 2/6 (15. März 1866), S. 45ff. [zum Blattsingen bei Chorwettbewerben]
                    </li><li>Jean-Pierre, „Récit d'un campagnard“, in: <i>L'Avenir musical</i> 2/7 (1. April 1866), S. 49 ff. [Bericht eines Landbewohners über seine Erfahrungen im Gesangverein und bei Gesangswettbewerben].
                    </li><li>Blaize-Lyon, „La lecture e vue“, in: <i>L'Avenir musical</i> 2/10 (15. Mai 1866), S. 61 [zum Blattsingen bei Chorwettbewerben].
                    </li><li>Abel Pagès, „Du règlement“, in: <i>L'Avenir musical</i> 2/10 (15. Mai 1866), S. 62 [Reglementvorschläge zu Blattsingwettbewerben].
                    </li><li>G. Sylvain, „Règles de concours à vue“, in: <i>L'Avenir musical</i> 2/12 (15. Juni 1866), S. 70 [Regeln für Blattsingwettbewerbe].
                    </li><li>[Anon.], „Die Preis-Aufgaben des Rheinischen Sängervereins“, in: <i>Niederrheinische Musik-Zeitung</i> 14/27 (7. Juli 1866), S. 209f. [zu den Kompositionspreisausschreiben des Rheinischen Sängervereins / Vergleich zwischen Preisen für die Nachwuchsförderung und Preisen zur Förderung bestimmter musikalischer Gattungen].
                    </li><li>Abel Pagès, „Les programmes de lecture à vue“, in: <i>L'Avenir musical</i> 2/19 (1. Oktober 1866), S. 99 [zum Blattsingen bei Chorwettbewerben].
                    </li><li>Gustave Chouquet, „L'Orphéon“, in: <i>Le Ménestrel</i> 34/28 (9. Juni 1867), S. 219f. [Verweis auf „concours annuel de poésie et de musique chorale“ der Stadt Paris].
                    </li><li>[Anon.], „Scraps of Musical News“, in: <i>Western Musical World</i> 4/9 (September 1867), S. 133 [Preissingen finde bei nordamerikanischen Sängerfesten nicht statt, da diese Wettbewerbe ‚Unzufriedenheit‘ bei den TeilnehmerInnen auslösten.]
                    </li><li>Charles Rousselle, „Protestation“, in: <i>L'Avenir musical</i> 4/15 (15. Juni 1868), S. 263 [zur Verwendung neuer Notationssysteme bei Blattsingwettbewerben].
                    </li><li>[Anon.], „Our Amateurs“, in: <i>Dwight's Journal of Music</i> 29/22 (15. Januar 1870), S. 173 [u.a. zum deutschsprachigen Chorwesen und ihren Wettbewerben in den USA].
                    </li></ul>
                    <h3><a id="196"></a>Orphéons</h3>
                    <ul>
                        <li>Georges Bousquet, „Concours d'Orphéons et de musiques d'harmonie à Fontainebleau, le dimanche 19 juin“, in: <i>Revue et Gazette musicale de Paris</i> 20/26 (26. Juni 1853), S. 227f. [auch allgemeine Äußerungen zu Orphéon-Wettbewerben im Zusammenhang der Volksbildung].
                        </li><li>P. S., „Association des artistes musiciens de France. Assemblée générale annuelle“, in: <i>Revue et Gazette musicale de Paris</i> 24/14 (5. April 1857), S. 107f. [Abdruck des Berichts von Jean-Louis Le Bel mit Betonung der wichtigen Rolle der Association des artistes musiciens bei der Ausrichtung von Orphéon-Wettbewerben].
                    </li><li>Ém.-Mathieu de Monter, „Les orphéons du temps passé“, in: <i>Revue et Gazette musicale de Paris</i> 25/28 (11. Juli 1858), S. 229f., 25/30 (25. Juli 1858), S. 245-247, 25/33 (15. August 1858), S. 269f., 25/38 (19. September 1858), S. 309f. [zu Chorwettbewerben und ihren historischen Vorläufern].
                    </li><li>[Anon.], „Nouvelles“, in: <i>L'Art musical</i> 2/13 (27. Februar 1862), S. 103f. [zu Orphéon-Festen und -Wettbewerben].
                    </li><li>J.F. Vaudin, „Des jurys“, in: <i>L'Art musical</i> 2/17 (27. März 1862), S. 132f. [zu den Jurys bei Orphéon-Wettbewerben].
                    </li><li>Gamma, „Des concours orphéoniques“, in: <i>L'Art musical</i> 2/24 (15. Mai 1862), S. 188f.
                    </li><li>[Anon.], „France“, in: <i>Le Guide musical</i> 8/40 (20. November 1862), S. 161 [1862 gab es 24 Orpheón-Wettbewerbe in Frankreich; insgesamt 700 Musikvereine mit 19.240 Orphéonisten nahmen teil].
                    </li><li>Sextius Durand, „Les Concours d'Orphéons“, in: <i>La France musicale</i> 27/28 (12. Juli 1863), S. 215f. [zu Orphéon-Wettbewerben].
                    </li><li>[Anon.], „Nouvelles“, in: <i>Revue et Gazette musicale de Paris</i> 31/1 (3. Januar 1864), S. 7 [Bericht zu den Orphéon-Wettbewerben in Frankreich. Im Jahr 1863 fanden insgesamt 38 dieser Wettbewerbe statt].
                    </li><li>[Anon.], „France“, in: <i>Le Guide musical</i> 11/10 (9. März 1865), S. 43 [1864 gab es 58 Orphéon-Wettbewerbe in Frankreich; insgesamt 1.500 Musikvereine mit 60.000 Orphéonisten nahmen teil].
                    </li><li>[Anon.], „De l'organisation des concours“, in: <i>L'Avenir musical</i> 2/16 (15. August 1866), S. 87 [zur Organisation von Orphéon-Wettbewerben].
                    </li><li>J.-P. Moschelès, „A propos des concours“, in: <i>L'Avenir musical</i> 4/6 (15. März 1868), S. 239 [Bericht zu Orphéon-Wettbewerben].
                    </li><li>Th. de Lajarte, „Les sociétés chorales et instrumentales“, in: <i>Le Ménestrel</i> 35/43 (20. September 1868), S. 341f. [Auszug aus der Zeitung „La Patrie“: Artikel zur Orphéon-Bewegung, u.a. zur Rolle der Wettbewerbe im Blattlesen].
                    </li><li>Th. De Lajarte, „Les sociétés chorales et instrumentales“, in: <i>L'Avenir musical</i> 4/20 (15. Oktober 1868), S. 296 [zur Geschichte der Orphéon-Wettbewerbe in Frankreich].
                    </li><li>[Anon.], „De l'unité du jury“, in: <i>L'Avenir musical</i> 4/20 (15. Oktober 1868), S. 299 [zu Orphéon-Wettbewerben].
                    </li><li>Sylvain St-Étienne, „Les concours d'Orphéons“, in: <i>La France musicale</i> 34/17 (24. April 1870), S. 127f. [zu Orphéon-Wettbewerben].
                    </li></ul>
                    <h3><a id="216"></a>Blasmusik</h3>
                    <ul>
                        <li>[Anon.], „Gegenwärtiger Zustand der Musik in dem südlichen Theile des Königreichs der Niederlande“, in: <i>Allgemeine musikalische Zeitung</i> 25/49 (3. Dezember 1823), S. 803-809, hier 807f. [zu Blasmusikwettbewerben in Belgien].
                        </li><li>Fétis, „Deuxième lettre à M. Édouard Fétis. Sur l'état actuel de la musique dans la Belgique, et sur son avenir dans ce pays“, in: <i>Revue Musicale</i> 7/22 (29. Juni 1833), S. 169-172 [zu Blasmusikvereinen in Belgien und deren regelmäßigen Wettbewerben, die Fétis als nationales Phänomen beurteilt].
                    </li><li>A. de M..., „La musique en Belgique. Les concerts. – Les concours de musique.“, in: <i>Revue et Gazette musicale de Paris</i> 7/38 (31. Mai 1840), S. 320 [umfassend zu Wettbewerben belgischer Blasmusikvereine allgemein].
                    </li><li>A. S., „De Paris à Rome et de Rome à Paris. 20 mars 1841“, in: <i>Revue et Gazette musicale de Paris</i> 8/26 (1. April 1841), S. 201f. [zu Wettbewerben belgischer Blasmusikvereine].
                    </li><li>A. Elwart, „Projet relatif à l'organisation d'une chapelle-musique municipale de la ville de Paris“, in: <i>Revue et Gazette musicale</i> 13/23 (7. Juni 1846), S. 180f. [Entwurf zur Einrichtung einer städtisch-geistlichen Kapelle in Paris mit dem Plan der Ausrichtung eines jährlichen Preisausschreibens einer Messe].
                    </li><li>[Anon.], „Des Concours“, in: <i>La France musicale</i> 15/19 (11. Mai 1851), S. 147f. [zu Chor- und Blaskapellenwettbewerben, v. a. in Belgien und Deutschland].
                    </li><li>[Anon.], „Correspondance“, in: <i>Revue et Gazette musicale de Paris</i> 18/29 (20. Juli 1851), S. 239 [Allgemeine Ausführungen zum etablierten musikalischen Wettbewerbswesen in Belgien, bezogen auf Blaskapellen- und Chorwettbewerbe sowie diverse Preisausschreiben für Komposition].
                    </li><li>Th. De Lajarte, „Les Sociétés Chorales et Instrumentales“, in: <i>La France musicale</i> 32/38 (20. September 1868), S. 295f. [zu Gesangsvereinen und Blaskapellen und den entsprechenden Wettbewerben].
                    </li></ul>
                    <h3><a id="228"></a>Oper</h3>
                    <ul>
                        <li>[Anon.], „American Opera“, in: <i>Saroni’s Musical Times I</i> 46 (10. August 1850), S. 542 [Diskussion zu einem Preisausschreiben für eine amerikanische Oper].
                        </li><li>[Anon.], „Notizie Italiane“, in: <i>Boccherini</i> 3/11 (16. August 1864), S. 46 [Kritik am Opernkompositionswettbewerb Concorso della Pergola].
                    </li><li>[Anon.], „Notizie Italiane“, in: <i>Boccherini</i> 5/8 (10. Juli 1866), S. 59 [Änderungsvorschläge zum Opernkompositionswettbewerb Concorso della Pergola].
                    </li></ul>
                    <h3><a id="235"></a>Opernlibretti</h3>
                    <ul>
                        <li>[Anon.], „Die Anforderungen der Gegenwart an einen guten Operntext“, in: <i>Süddeutsche Musikzeitung</i> 2/32 (8. August 1853), S. 125f. 2/33 (15. August 1853), S. 129f., 2/34 (22. August 1853), S. 133f., 2/35 (29. August 1853), S. 137f., 2/36 (5. September 1853), S. 141f., 2/37 (12. September 1853), S. 145f., 2/38 (19. September 1853), S. 149f., 2/39 (26. September 1853), S. 153f., 2/40 (3. Oktober 1853), S. 157f. [Ausgangspunkt ist das Preisausschreiben für ein Opernlibretto, dessen Vorgaben hier reflektiert und präzisiert werden sollen].
                        </li><li>[Anon.], „Die blutige Nonne von Scribe und Gounod“, in: <i>Süddeutsche Musikzeitung</i> 3/45 (6. November 1854), S. 178 [Misslingen eines Preisausschreibens für ein Opernlibretto].
                    </li><li>[Anon.], „Noch ein Wort über das Preisausschreiben auf einen guten Opertext“, in: <i>Süddeutsche Musikzeitung</i> 3/46 (13. November 1854), S. 181 [Kommentar zum Misslingen des Preisausschreibens der Kanitz'schen Buchhandlung in Gera].
                    </li><li>Fétis père, „Que peut-on faire pour améliorer la condition des jeunes compositeurs et pour Porter remède à la décadence de la musique? (4e article) (1)“, in: <i>Revue et Gazette musicale de Paris</i> 25/11 (14. März 1858), S. 81-83 [Forderung nach einem staatlich geförderten Preisausschreiben und dessen Entwurf für Libretti und Komposition von Opern zur Aufführung an den Theatern von Lyon, Marseille, Bordeaux, Rouen und Straßburg, wobei sich der Kompositions-Teilwettbewerb an die Rompreisträger richten soll].
                    </li><li>W. Lackowitz, „Ein Blick auf die komische Oper“, in: <i>Süddeutsche Musikzeitung</i> 18/49 (6. Dezember 1869), S. 192f. [zu Preisausschreiben für Opernlibretti].
                    </li></ul>
                    <h3><a id="244"></a>Symphonien</h3>
                    <ul>
                        <li>Gottschalk Wedel [= Zuccalmaglio], „Die Preissymphonie 1“, in: <i>Neue Zeitschrift für Musik</i> 5/37 (4. November 1836), S. 147f.
                        </li><li>Die Redaction [= Robert Schumann], „Die Preissymphonie 2“, in: <i>Neue Zeitschrift für Musik</i> 5/38 (8. November 1838), S. 151f.
                    </li><li>G. W. Fink, „Die Preis-Symphonie von Franz Lachner“, in: <i>Allgemeine musikalische Zeitung</i> 39/13 (29. März 1837), S. 201-209, 39/14 (5. April 1837), S. 217-222.
                    </li><li>[Anon], „Académie royale de Belgique“, in: <i>Le Guide musical</i> 1/24 (9. August 1855), S. 1 [Planung eines Wettbewerbs für eine Sinfonie].
                    </li><li>[Justus], „One Thousand Florins for a Symphony. To the Editor of the Musical World“, in: <i>The Musical World</i> 35/7 (14. Februar 1857), S. 103 [Aufforderung an die Philharmonic Society, einen Preis für eine Sinfonie auszuschreiben].
                    </li></ul>
                    <h3><a id="253"></a>Kirchenmusik</h3>
                    <ul>
                        <li>H. J. Gauntlett, „The Gresham Prize“, in: <i>The Musical World</i> 2/19 (22. Juli 1836), S. 81f., 2/20 (29. Juli 1836), S. 97f.
                        </li><li>Fétis père, „Que peut-on faire pour améliorer la condition des jeunes compositeurs et pour Porter remède à la décadence de la musique! (3e article) (1)“, in: <i>Revue et Gazette musicale de Paris</i> 25/8 (21. Februar 1858), S. 57-59 [Forderung nach einem Preisausschreiben und dessen Entwurf für Kirchenmusik, um an einen geeigneten Kapellmeister einer reformierten Domkapelle zu kommen].
                    </li><li>[Anon.]: „Prizes for Church Music“, in: <i>The Orchestra</i> 11/282 (20. Februar 1869), S. 346 [zu Preisausschreiben im Kontext von Kirchenmusik].
                    </li></ul>
                    <h3><a id="260"></a>Weltausstellungen</h3>
                    <ul>
                        <li>[Anon.], „Faites divers“, in: <i>L'Art musical</i> 6/51 (22. November 1866), S. 408 [Ankündigung, dass es auf der Weltausstellung 1867 Chorwettbewerbe geben wird].
                        </li><li>[Anon.], „Nachrichten“, in: <i>Neue Berliner Musikzeitung</i> 21/8 (20. Februar 1867), S. 63 [zu den Vorbereitungen der Musikwettbewerbe rund um die Pariser Weltausstellung 1867].
                    </li><li>[Anon.], „Nachrichten“, in: <i>Neue Berliner Musikzeitung</i> 21/11 (13. März 1867), S. 87 [zu den Vorbereitungen der Chorwettbewerbe rund um die Pariser Weltausstellung 1867].
                    </li><li>[Anon.], „Pariser Briefe“, in: <i>Niederrheinische Musik-Zeitung</i> 15/13 (30. März 1867), S. 97f. [zu den musikalischen Aktivitäten (Preisausschreiben / Wettbewerbe und Konzerte) während der Pariser Weltausstellung 1867].
                    </li><li>H.E., „Die französische Weltausstellung und ihre Bedeutung für die Tonkunst“, in: <i>Neue Berliner Musikzeitung</i> 21/25 (19. Juni 1867), S. 194 [musikalische Wettbewerbe während der Weltausstellung 1867].
                    </li><li>Ralph, „La fête au palais de l'Industrie“, in: <i>L'Art musical</i> 7/31 (4. Juli 1867), S. 241f. [feierliche Preisverleihung (Ausstellung) mit musikalischer Untermalung auf der Weltausstellung 1867].
                    </li><li>[Anon.], „Faits divers“, in: <i>L'Art musical</i> 7/31 (4. Juli 1867), S. 247 [Preisträger Instrumentenbau auf der Weltausstellung 1867].
                    </li><li>[Anon.], „Faits divers“, in: <i>L'Art musical</i> 7/32 (11. Juli 1867), S. 255 [Liste der Preisträger der Kategorie Instrumentenbau bei der Weltausstellung 1867].
                    </li><li>M. de Pontécoulant, „La musique à l'Exposition universelle XIV“, in: <i>L'Art musical</i> 7/34 (25. Juli 1867), S. 265f. [Preisträger Instrumentenbau auf der Weltausstellung 1867].
                    </li><li>M. de Pontécoulant, „La musique à l'Exposition universelle XVI“, in: <i>L'Art musical</i> 7/36 (8. August 1867), S. 281f. [Klavierbau, Jury].
                    </li><li>[Anon.], „Zerstreute Betrachtungen über den Nutzen, welchen die Pariser Weltausstellung der Tonkunst gebracht hat“, in: <i>Neue Berliner Musikzeitung</i> 21/35 (28. August 1867), S. 276f. [musikalische Wettbewerbe während der Weltausstellung 1867].
                    </li><li>[Anon.], „Chronique musicale“, in: <i>L'Avenir musical</i> 3/10 (1. September 1867), S. 186 [Bericht zu den Orphéon-Wettbewerben der Pariser Weltausstellung 1867].
                    </li><li>M. de Pontécoulant, „La musique à l'Exposition universelle XXII“, in: <i>L'Art musical</i> 7/42 (19. September 1867), S. 329f. [Preisverleihung, Blasinstrumente].
                    </li></ul>
                    <h3><a id="277"></a>Florenz</h3>
                    <ul>
                        <li>P. Sc., „Courier musical“, in: <i>L'Art musical</i> 2/26 (29. Mai 1862), S. 201f. [Bericht u.a. über die verschiedenen Musikvereine in Florenz, inkl. deren Preisausschreiben (Basevi u.a.)]
                        </li><li>J. d'Ortigue, „Concerts populaires à Florence“, in: <i>Le Ménestrel</i> 30/37 (16. August 1863), S. 296 [zur Pflege der Instrumentalmusik in Florenz; u.a. zu diversen Gesellschaften und ihren Kompositionswettbewerben].
                    </li><li>Giuseppe Mascia, „Osservazioni sul Concorso del Quartetto“, in: <i>Gazzetta Musicale di Napoli</i> 11/31 (16. August 1863), S. 121f. [Beobachtungen zum Concorso Basevi und Vergleich mit neapolitanischen Kompositionswettbewerben].
                    </li><li>Giuseppe Masela, Luigi Mazzone, „Osservazioni aggiunte su di un foglio pervenuto da Firenze intorno al Concorso del Quartetto“, in: <i>Gazzetta Musicale di Napoli</i> 11/39 (11. Oktober 1863), S. 158 [kritischer Bericht zum Concorso Basevi].
                    </li></ul>
                    <h3><a id="285"></a>Neapel</h3>
                    <ul>
                        <li>L. Mazzone, „Protesta“, in: <i>Gazzetta Musicale di Napoli</i> 12/17 (1. Mai 1864), S. 73f. [zu den Regularien der Preisausscheiben des „Circolo Artistico-Musicale Bonamici“].
                        </li><li>[Anon.], „Atti del Circolo Bonamici“, in: <i>Gazzetta Musicale di Napoli</i> 13/4 (9. Februar 1865), S. 4ff. [zu Preisausschreiben in Neapel].
                    </li><li>Luigi Mazzone, „Concorsi di composizione musicale“, in: <i>Gazzetta Musicale di Napoli</i> 13/5 (19. Februar 1865), S. 2f. [Regularien von Kompositionswettbewerben in Neapel].
                    </li><li>[Anon.], „Miscellanea“, in: <i>Gazzetta Musicale di Napoli</i> 13/17 (10. Juni 1865), S. 4 [der „Circolo Artistico-Musicale Bonamici“ entwirft ein Regelwerk zu Kompositions- und Instrumentalwettbewerben].
                    </li><li>F. Bonamici, M.C. Caputo, „Regolamento pe’Concorsi nel Circolo-Bonamici“, in: <i>Gazzetta Musicale di Napoli</i> 13/25 und 26 (17. September 1865), S. 7 [Regelwerk für Kompositions-, Performance- und Schulwettbewerbe des „Circolo Artistico-Musicale Bonamici“].
                    </li></ul>
                    <h3><a id="294"></a>Deutsche Tonhalle</h3>
                    <ul>
                        <li>[Anon.], „Nachrichten“, in: <i>Süddeutsche Musikzeitung</i> 2/17 (25. April 1853), S. 68 [Kassenbericht des Vereins „Deutsche Tonhalle Mannheim“ inkl. Ausgaben für Preise].
                        </li><li>[Anon.], „Deutsche Tonhalle“, in: <i>Niederrheinische Musik-Zeitung</i> 2/19 (13. Mai 1854), S. 150f. [Jahresbericht des Vereins „Deutsche Tonhalle Mannheim“ mit Angabe der Ein- und Ausgaben, inkl. der auf Preise verwendeten Gelder]
                    </li><li>[Anon.], „Einige Worte über die niederländische Gesellschaft zur Beförderung der Tonkunst verbunden mit einigen Worten an die Deutsche Tonhalle in Mannheim“, in: <i>Süddeutsche Musikzeitung</i> 5/2 (8. Januar 1856), S. 5f. [Kritik an der Tonhalle, die sich zu einseitig auf Preisausschreiben verlege, die angesichts der vielen Komponisten in Deutschland hier doch gar nicht nötig seien].
                    </li><li>Der Vereins-Vorstand, „Deutsche Tonhalle Mannheim“, in: <i>Niederrheinische Musik-Zeitung</i> 9/29 (20. Juli 1861), S. 231 [Jahresberichte des Vereins inkl. Preisausschreiben].
                    </li><li>Der Vereis-Vorstand, „Deutsche Tonhalle“, in: Süddeutsche Musikzeitung 10/30 (29. Juli 1861), S. 120 [Jahresbericht 1860 der Deutschen Tonhalle Mannheim inkl. Auflistung der Ausgaben für Preisausschreiben].
                    </li></ul>
                    <h3><a id="303"></a>Eisteddfod</h3>
                    <ul>
                        <li>Abel of Aberystwyth, „The Welsh Eisteddfod“, in: <i>The Musical World</i> 43/40 (7. Oktober 1865), S. 625 [Leserbrief zur Geschichte des Eisteddfod in Wales].
                        </li><li>[Musicus], „Welsh Grand National Eisteddfod“, in: <i>The Musical Standard</i> 7/164 (21. September 1867), S. 181f.
                    </li></ul>
                    <b>Welsh Harp</b>
                    <ul>
                        <li>Brinley Richards, „The Welsh Harp. To the Editor of the 'Musical World'“, in: <i>The Musical World</i> 47/12 (20. März 1869), S. 195 [Zur kulturellen Bewahrung der „Welsh Harp“ fordert der Verfasser dazu auf, Preise für das Harfenspiel auszuschreiben.].
                        </li><li>William Rees, „The Welsh Harp. To the Editor of the ‘Musical World’“, in: <i>The Musical World</i> 47(15 (10. April 1869), S. 248.
                    </li><li>[A Welshman], „The Welsh Harp. To the Editor of the ‘Musical World’“, in: <i>The Musical World</i> 47/23 (5. Juni 1869), S. 405.
                    </li></ul>
                    <h3><a id="315"></a>Niederländischer Verein zur Beförderung der Tonkunst</h3>
                    <ul>
                        <li>[Anon.], „Ueber die Wirksamkeit der holländischen Gesellschaft zur Beförderung der Tonkunst“, in: <i>Süddeutsche Musikzeitung</i> 5/51 (15. Dezember 1856), S. 201f. [Bericht von der Generalversammlung des Vereins inkl. Erwähnung von Preisausschreiben].
                        </li><li>L.B., „Der Verein zur Beförderung der Tonkunst in den Niederlanden“, in: <i>Niederrheinische Musik-Zeitung</i> 9/3 (19. Januar 1861), S. 21f. [Jahresbericht des Vereins inkl. Preisausschreiben].
                    </li><li>Dr. V., „Ueber die Wirksamkeit der niederländischen Societät zur Beförderung der Tonkunst während des Jahres 1860“, in: <i>Süddeutsche Musikzeitung</i> 10/7 (18. Februar 1861), S. 25 [Jahresbericht des niederländischen Vereins zur Beförderung der Tonkunst inkl. Preisausschreiben].
                    </li></ul>
                    <h3><a id="322"></a>Meyerbeers Erbe</h3>
                    <ul>
                        <li>[Anon.], „France“, in: <i>Le Guide musical</i> 10/27 (30. Juni / 7. Juli 1864), S. 109 [Nachlass Meyerbeers: der ‚Société des auteurs et compositeurs dramatiques‘ (Paris) 10.000 fr.; für ein Preisausschreiben in Paris 37.500 fr.; einer Krankenversicherung für MusikerInnen in Berlin 1.125 fr.].
                        </li><li>[Anon.], „Meyerbeer-Stipendium“, in: <i>Neue Berliner Musikzeitung</i> 18/25 (22. Juni 1864), S. 195 [zum Meyerbeer Kompositionsstipendium (inkl. Testament-Text Giacomo Meyerbeers)].
                    </li><li>[Anon.], „Bestimmungen Meyerbeer's über seine Stiftung für Tonkünstler“, in: <i>Niederrheinische Musik-Zeitung</i> 12/30 (23. Juli 1864), S. 239 [zu Meyerbeers Stiftung mit Stipendienvergabe].
                    </li></ul>
                    <h3><a id="329"></a>Mozart-Stiftung</h3>
                    <ul>
                        <li>Der Verwaltungs-Ausschuss der Mozart-Stiftung, „Die Mozart-Stiftung in Frankfurt am Main“, in: <i>Niederrheinische Musik-Zeitung</i> 9/46 (16. November 1861), S. 365 [zur Mozart-Stiftung; auch zu den Karrieren ehemaliger und derzeitiger Stipendiaten].
                        </li><li>Prof. L. Bischoff, „Die Mozart-Stiftung in Frankfurt am Main“, in: <i>Niederrheinische Musik-Zeitung</i> 11/28 (11. Juli 1863), S. 217f. [Überblick über die Geschichte der Mozart-Stiftung].
                    </li><li>Dr. Bonfick, Dr. Eckhard, „27. Jahresbericht des Verwaltungs-Ausschusses der Mozart-Stiftung“, in: <i>Niederrheinische Musik-Zeitung</i> 13/46 (18. November 1865), S. 365f.
                    </li></ul>
                    <h3><a id="336"></a>Vögel</h3>
                    <ul>
                        <li>[Anon.], „Causeries musicales“, in: <i>Le Ménestrel</i> 17/27 (2. Juni 1850), o. S. [Detaillierter Bericht über jährliche Wettbewerbe des Gesangs von Buchfinken in Belgien].
                        </li><li>[Anon.], „o. T. “, in: <i>The Orchestra</i> 7/180 (18. Juli 1868), S. 265 [zu Vogelgesangswettbewerben in Nordfrankreich und Belgien].
                    </li></ul>
                    <h3><a id="342"></a>Diverses</h3>
                    <ul>
                        <li>[Anon.], „Discours prononcé par M. Fétis, comme directeur de la classe des beaux-arts de l'Académie royale de Belgique“, in: <i>Revue et Gazette musicale de Paris</i> 19/39 (26. September 1852), S. 322f.  [Bericht Fétis zur jährlichen Sitzung der Brüsseler Classe des Beaux-Arts, in dem er unter anderem auf die Rolle staatlicher Akademien bei musikalischen Preisausschreiben eingeht].
                        </li><li>[Anon.], „Correspondance“, in: <i>Revue et Gazette musicale de Paris</i> 21/6 (5. Februar 1854), S. 45f. [Bemerkung über Förderung des Musiklebens durch den belgischen Staat u. a. durch Kompositions-Preisausschreiben].
                    </li><li>[Anon.], „La cornemuse en Angleterre“, in: <i>Le Ménestrel</i> 21/50 (12. November 1854), S. 3 [jährliche Dudelsackwettbewerbe eines schottischen Musikvereins].
                    </li><li>[Anon.], „Prize Songs“, in: <i>Dwight’s Journal of Music</i> 8/26 (29. März 1856, S. 204 [kritische Auseinandersetzung mit musikalischen Preisausschreiben in den USA].
                    </li><li>Bischoff, „Der Mozart-Verein“, in: <i>Niederrheinische Musik-Zeitung</i> 4/29 (19. Juli 1856), S. 232f. [zum Mozart-Verein, inkl. der von ihm ausgeschrieben Preise/Stipendien].
                    </li><li>[Anon.], „Società Russa di musica“, in: <i>Gazzetta Musicale di Napoli</i> 8/26 (14. Juli 1859), S. 181 [Gründung des russischen Musikfördervereins am 1. Mai 1859; u. a. wird ein jährlicher Kompositionspreis ausgeschrieben].
                    </li><li>[Anon.], „The True Duty of Amateurs”, in: <i>The Musical Standard</i> 1/16 (16. März 1863), S. 217-219 [zu musizierenden Laien und Preisausschreiben].
                    </li><li>[Anon.], „The Rossini Prize“, in: <i>Dwight’s Journal of Music</i> 28/21 (2. Januar 1869), S. 371 [zum geplanten Rossini-Preis in Frankreich].
                    </li><li>[Anon.], „Kunstnotizen“, in: <i>Blätter für Musik, Theater und Kunst</i> 16/51 (28. Juni 1870), S. 182 [„Pianoforte-Wettrennen“ in Cedar Rapids (Iowa): Anscheinend handelt es sich hierbei um ein Klavier-Duell, bei dem es um die Schnelligkeit des Vortrags ging].
                    </li></ul>
                </div>
                </Layout>
            </Content>
        </Layout>
    );
} 

