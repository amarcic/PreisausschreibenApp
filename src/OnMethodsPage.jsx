import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col } from 'antd';

const { Content } = Layout; 

export default function OnMethodsPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/methodik">Methodik</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <h1 style={{fontSize: "1.7rem"}}>Methodik</h1>
                            <br />
                            <p> 
                                Im Rahmen des DFG-Forschungsprojekts <Link to="/about">Musikalische Preisausschreiben 1820-1870</Link> wurden 
                                Musikzeitschriften in Hinblick auf das
                                Projektthema ausgewertet und die vorgefundenen Informationen in 
                                einer <Link to="/prosearch">Datenbank</Link> strukturiert in deutscher Sprache erfasst. Beiträge in diesen 
                                Zeitschriften, in denen auf das Thema allgemeiner, und nicht nur auf ein einzelnes
                                Preisausschreiben, Bezug genommen wird, sind zusätzlich in einer 
                                entsprechenden <Link to="/bib">Bibliographie</Link> festgehalten. Die erhobenen Daten 
                                dienen schließlich als Grundlage eines historischen <Link to="/ ">Grundrisses</Link> zu
                                musikalischen Preisausschreiben im 19. Jahrhundert.
                            </p>
                            <br />
                            <h2>Quellenkorpus</h2>
                            <p>
                                Das ausgewertete <Link to="/">Korpus</Link> besteht aus internationalen Musikperiodika,
                                die innerhalb des Untersuchungszeitraums zwischen 1820 und 1870 erschienen
                                sind. Dabei sind solche Zeitschriften berücksichtigt, von denen mindestens 12
                                vollständige oder angebrochene Jahrgänge existierten, wobei Unterbrechungen der
                                Herausgabe bis zu fünf Jahren akzeptiert werden. Beschränkt wird sich dabei auf
                                Ausgaben, die zum Zeitpunkt des ersten Projektjahres 2016 in digitalisierter Form
                                online verfügbar waren. Unter Musikperiodika werden hier Zeitschriften mit primärem
                                Interesse an Musik verstanden, die unter anderem eine Funktion der
                                Anzeigenschaltung, Nachrichtenvermittlung und kritischen Berichterstattung des
                                Musiklebens für ein öffentliches Lesepublikum erfüllten. Für das Projekt sind nur
                                Periodika mit einem allgemeinen Bezug zur Musik und entsprechender thematischer
                                Breite ausgewertet, spezialisierte Blätter (etwa zur Orphéon-Bewegung, zur
                                Kirchenmusik, Schulmusik, Kammermusik, zum Instrumentenbau oder zur
                                Musikgeschichte) dagegen nicht.
                            </p>
                            <br />
                            <p>
                                Die Suche erfolgte mit dem Zugang über gängige digitale Archive und Datenbanken
                                wie <i>Retrospective Index to Music Periodicals (RIPM), Wikisource, Internet Archive,
                                ProQuest Periodicals, Journal STORage (JSTOR), HathiTrust, Gallica, Centro
                                Internazionale di Ricerca sui Periodici Musicali (CIRPeM), Delpher Platform Digitale
                                Publicaties, Münchener DigitalisierungsZentrum (MDZ), AustriaN Newspapers Online
                                (ANNO), Blue Mountain Project und American Antiquarian Society (AAS) Historical
                                Periodicals Collection</i>. Wenn die jeweilig vorhandenen digitalen Ressourcen diese
                                Option anboten, wurde auf eine komplexe Volltextsuche mit signifikanten Wortfeldern
                                zurückgegriffen. Andernfalls wurden die vorhandenen Ausgaben vollständig manuell
                                ausgewertet. Deutsch-, englisch-, französisch- und italienischsprachigen Zeitschriften
                                wurden vom festen Projektteam ausgewertet, Periodika anderer Sprachen im
                                Rahmen von Werkverträgen von externen MitarbeiterInnen nach demselben Schema
                                bearbeitet.
                            </p>
                            <br />
                            <p>
                                Die Auswertung konzentrierte sich auf die aktuelle Anzeige und Berichterstattung in
                                den Periodika. Zeitschriftenbeiträge, die eher der retrospektive Rezeption eines
                                Preisausschreibens zuzurechnen sind (solche, die in einem zeitlichen Abstand von
                                mehr als zwei Jahren zu den letzten Ereignissen dieses Preisausschreibens
                                erschienen sind), wurden nur dann berücksichtigt, wenn in dem Artikel noch neue
                                Informationen zu finden waren, die nicht von den anderen Quellen bereits abgedeckt
                                werden.
                            </p>
                            <br />
                            <h2>Gegenstand</h2>
                            <p>
                                Gegenstand der Auswertung sind alle öffentlich ausgeschriebenen und über einen
                                regelhaften Wettbewerb zu erringenden Preise, die in der Aufgabenstellung einen
                                unmittelbaren Bezug zur Musik aufweisen. In der Datenbank erfasst sind
                                Preisausschreiben für Komposition, Instrumentalspiel und Gesang, musikbezogenes
                                Schrifttum, Libretti- und Liedtextdichtung, Instrumentenbau sowie andere Objekte
                                und performative Leistungen. Dabei ist das Spektrum weder auf bestimmte
                                Gattungen oder Stile, noch etwa auf professionelle oder laienhafte Musikausübung
                                beschränkt. Um musikalische Preisausschreiben im engeren Sinne von anderen
                                Formen der Konkurrenzaustragung beziehungsweise Auszeichnungs- und
                                Belohnungspraktiken des 19. Jahrhunderts abgrenzen zu können, wurde auf
                                Grundlage des Materials folgende Definition entwickelt: Die Preisausschreiben
                                müssen öffentlich ausgeschrieben (1), formalisiert und regelbasiert sein (2) sowie
                                einen oder mehrere Preise bzw. Auszeichnungen in Aussicht stellen (3).
                            </p>
                            <br />
                            <p>
                                Zu 1) <u>Öffentliche Ausschreibung</u>: Der Wettbewerb muss für eine prinzipiell
                                unbegrenzte Gruppe an Personen ausgeschrieben sein. Das schließt nicht aus, dass
                                dennoch allgemeine Teilnahmebedingungen (wie eine bestimmte Nationalität, ein
                                bestimmtes Alter o.ä.) gestellt werden. Im Umkehrschluss folgt aus diesem Kriterium,
                                dass die Teilnahme aufgrund eigener Initiative (einer Anmeldung, Bewerbung,
                                Einreichung o.ä.) zustande kommt. Förder- und Ehrenpreise, die an ausgewählte
                                Personen ohne deren eigene Initiative vergeben wurden, sind nach dieser Definition
                                keine Preisausschreiben. Auch obligatorische Wettbewerbs- und Prüfungsmodi für
                                die feste Gruppe der Schülerschaft musikalischer Ausbildungsstätten stellen somit
                                grundsätzlich eine andere Form der Konkurrenzaustragung dar.
                            </p>
                            <br />
                            <p>
                                Zu 2) <u>Formalisierung</u> und Regeln: Es existiert ein formalisiertes und regelhaftes
                                Wettbewerbsverfahren, das von einer dritten (ausschreibenden) Institution oder
                                Person festgelegt beziehungsweise offiziell vertreten wird. Eine von dieser Institution
                                oder Person eingesetzte Jury entscheidet über die Preisvergabe. Als Richtlinie für die
                                TeilnehmerInnen ebenso wie für die Juroren muss eine hinreichend konkretisierte
                                Wettbewerbsaufgabe gestellt sein. Informelle Wettstreite jeglicher Art (etwa solche,
                                die aus persönlichen Herausforderungen resultierten) sind nach diesem Kriterium
                                von Preisausschreiben zu unterscheiden. Bei den Prämien für auf Industrie- und
                                Weltausstellungen vorgestellte Instrumente, die sicherlich einen Grenzfall zu
                                musikalischen Preisausschreiben darstellen, fehlt zumindest die konkrete
                                Aufgabenstellung.
                            </p>
                            <br />
                            <p>
                                Zu 3) <u>Preis</u>: Das Preisausschreiben verspricht den TeilnehmerInnen die Aussicht auf
                                einen oder mehrere Preise beziehungsweise Auszeichnungen materiellen und/oder
                                immateriellen Wertes. Die Vergabe eines einmaligen Auftrags (etwa
                                Kompositionsauftrag mit den damit verbundenen Privilegien des Drucks, der
                                Aufführung o.ä.) genügt hier der Definition eines Preises im weiteren Sinne. Die
                                Annahme an einer musikalischen Ausbildungsinstitution nach bestandener
                                Aufnahmeprüfung oder die Vergabe einer Stelle nach einem wettbewerbsmäßigen
                                Auswahlverfahren dagegen nicht, und zwar primär aus dem Grund, dass in diesen
                                Fällen eher ein durch Prüfung begründeter Vertrauensvorschuss für noch zu
                                erbringende Leistungen gegeben wird anstatt, wie bei Preisausschreiben, der
                                Honorierung einer bereits erbrachten Leistung.
                            </p>
                            <h2>Datenschema</h2>
                            <p>
                                In der Datenbank sind umfassende Informationen zu musikbezogenen
                                Preisausschreiben im Zeitraum 1820-1870 in strukturierter Weise erfasst, um
                                entsprechend komplexe und systematische Suchabfragen zu ermöglichen. Das
                                angelegte Datenschema erlaubt unter anderem den Zugriff auf den zeitlich-örtlichen
                                Rahmen von Preisausschreiben samt ihrer Einzelereignisse, auf Aufgabenstellungen,
                                Teilnahmebedingungen und andere formale Richtlinien der Ausschreibung, auf

                                Rangfolgen und die zugehörigen Auszeichnungen, auf beteiligte Personen und
                                Körperschaften in ihrer genauen Funktion und Wirkung innerhalb des
                                Preisausschreibens beziehungsweise ihr Verhältnis zu anderen AkteurInnen in einer
                                Konkurrenzsituation. Da Musikperiodika des 19. Jahrhunderts ihre
                                Informationsvermittlung zu musikalischen Preisausschreiben über diverse
                                Ankündigungen, Nachrichten und Berichte nicht in einheitlicher Weise praktizierten,
                                liegen die entsprechenden Daten auch in der Datenbank nur lückenhaft vor. Zudem
                                traten in den Quellen gelegentlich Widersprüche und Unstimmigkeiten auf, die durch
                                Ergänzungen und Kommentare entsprechend kenntlich gemacht werden, sofern sie
                                nicht aufgelöst werden konnten.
                            </p>
                            <br />
                            <p>
                                <u>Datenstruktur der Dokumentenstapel</u>: Datensätze zu Preisausschreiben sowie solche
                                zu Personen, zu Körperschaften und zu Serien wiederholter Preisausschreiben
                                wurden in jeweils eigenen Dokumentenstapeln abgelegt und dort, wo entsprechende
                                Zusammenhänge existieren, mit Dokumenten der anderen Stapel verlinkt. Diese
                                Datenstruktur ermöglicht es unter anderem, im Wettbewerbsgeschehen mehrfach
                                beteiligte AkteurInnen als solche zu identifizieren und ihre Aktivitäten über ein
                                einzelnes Preisausschreiben hinaus nachzuverfolgen, oder die wiederholte
                                Ausschreibung eines Preises derselben ausschreibenden Institution erkennbar zu
                                machen.
                            </p>
                            <br />
                            <p>
                                <u>Daten zu Personen und Körperschaften</u>: Ein Schwerpunkt der Datenbank liegt auf
                                den AkteurInnen von Preisausschreiben. Jede unmittelbar an einem
                                Preisausschreiben beteiligte Institution und Person wurde, wenn nötig durch
                                zusätzliche Recherche, identifiziert und zu ihr ein eigener Datensatz angelegt. Die
                                Personendaten enthalten zudem in Fällen, wo eine Zuordnung zumindest sehr
                                wahrscheinlich war, eine Verlinkung zu den Normdaten der Virtual International
                                Authority File (VIAF).
                            </p>
                            <br />
                            <p>
                                <u>Modellierung von Wettbewerb und Konkurrenz</u>: Für typische Informationen zur
                                Konkurrenzaustragung in Preisausschreiben wurden in der Datenstruktur eigene
                                Felder angelegt und diese zueinander in Beziehung gesetzt. Dazu zählen die
                                Aufgabenstellung, die Teilnahmebedingungen, Rangfolgen und Auszeichnungen,
                                Zahl der TeilnehmerInnen sowie Formalia des Wettbewerbs. Darüber hinaus geben
                                die Daten im Einzelfall soweit als möglich die exakte Wettbewerbsstruktur wieder,
                                d.h. die Unterteilung in mehrere Teilwettbewerbe samt der ihr inhärenten
                                Konkurrenzverhältnisse. Teilwettbewerbe zeichnen sich durch eine jeweils eigene
                                Konkurrenzgruppe aus, d.h. TeilnehmerInnen eines Teilwettbewerbs konkurrieren
                                nicht mit denen eines anderen Teilwettbewerbs. Teilwettbewerbe konnten innerhalb
                                eines Preisausschreibens in der Abfolge aufeinander aufbauen (wie bei
                                Teilwettbewerben für Textdichtungen, deren Siegertext in einem weiteren
                                Teilwettbewerb vertont wird), oder nebeneinander herlaufen (wie bei den
                                verschiedenen Ligen und Sektionen von Wettbewerben für Chöre oder Blaskapellen).
                                Die Datenbank enthält mit der genauen Modellierung dieser Verhältnisse zahlreiche
                                Informationen darüber, wer welche Wettbewerbsaufgabe zu erfüllen hatte, gegen
                                wen er oder sie angetreten ist, von wem er oder sie beurteilt, welcher Rang belegt
                                und welche Auszeichnung ihm oder ihr schließlich zugedacht wurde. Schließlich sind
                                auch kollaborative Teilnahmen mehrerer Personen und Körperschaften als solche
                                erfasst (d.h. etwa Teilnahmen von DirigentInnen mit ihren Ensembles oder
                                gemeinsame Einreichungen von Vokalkompositionen von DichterInnen und
                                KomponistInnen). Bei einem bestimmten Typ musikalischer Preisausschreiben
                                musste aus pragmatischen Gründen allerdings von vornherein auf diese Komplexität
                                verzichtet werden. Es handelt sich dabei um solche Fälle, bei denen Gruppen (in der
                                Regel Chöre oder Blaskapellen des Laienmusikwesens) in Musizierwettbewerben
                                gegeneinander angetreten sind und die einen erheblichen Anteil der musikalischen
                                Preisausschreiben im Untersuchungszeitraum insgesamt ausmachen. Sie wiesen
                                nicht nur meist eine verhältnismäßig große Anzahl an Teilwettbewerben und
                                teilnehmenden Gruppen auf, sondern die Quellen lieferten über die Beschaffenheit
                                der Wettbewerbsstruktur sowie die Identität der Gruppen auch häufig nur sehr vage
                                Informationen. Solche Preisausschreiben wurden zu einem Großteil daher nur in
                                reduzierter Weise erfasst, d.h. sich auf Rahmendaten, die ausschreibende
                                Institution/Person sowie die Jurymitglieder beschränkt. Beim Aufruf eines
                                Datensatzes dieses Preisausschreiben-Typs wird oben ein entsprechender Hinweis
                                gegeben.
                            </p>
                            <br />
                            <p>
                                <u>Abweichungen von Ankündigungen</u>: Ein zentrales Problem der Datenmodellierung
                                ergab sich daraus, dass in manchen Fällen von in den Zeitschriften zunächst
                                angekündigten Vorgehensweisen, die einer offiziellen Ausschreibung des
                                Preisausschreibens entnommen sein konnten oder nicht, später abgewichen wurde.
                                Als pragmatische Lösung lässt das Datenmodell unterschiedslos sowohl
                                Informationen zu, die auf Ankündigungen beruhen, als auch solche, die durch die

                                nachträgliche Berichterstattung übermittelt wurden. Ist bekannt, dass Ereignisse
                                eines Preisausschreibens abgesagt oder verschoben wurden, sind diese
                                entsprechend gekennzeichnet. Auch Auszeichnungen, gegen deren Verleihung sich
                                die Jury oder die ausschreibende Institution/Person am Ende entschied, sind mit
                                einem Hinweis versehen und können gezielt abgefragt werden.
                            </p>
                            <br />
                            <p>
                                <u>Typisierung und Kategorisierung</u>: An einigen Stellen bot es sich an, in den Quellen
                                enthaltene Informationen nach bestimmten Typen oder Kategorien zu
                                systematisieren, um somit an diesen Stellen komfortablere Suchabfragen zur
                                Verfügung zu stellen, die etwa auch verlässliche Aussagen über Teilmengen
                                innerhalb der Daten zulassen. In dieser Hinsicht wurden erstens alle Aufgaben von
                                Preisausschreiben beziehungsweise Teilwettbewerben jeweils einem der folgenden
                                Typen zugeordnet: Komposition, Instrumentalspiel/Gesang, Dichtung zur Vertonung,
                                Schrift über Musik, Sonstiges. Ähnlich verhält es sich zweitens mit
                                Auszeichnungsarten, für die folgende Kategorien angelegt wurden: Preisgeld,
                                Medaille, Pokal, Fahne, Instrument/Musikalie, Aufführung, Stipendium, Urkunde,
                                Ehrennennung, Sonstiges. Drittens wurden bestimmte Rollen der an einem
                                Preisausschreiben beteiligten Personen und Körperschaften wie folgt kategorisiert:
                                ausschreibende Institution/Person, TeilnehmerIn, Jurymitglied,
                                OrganisatorIn/RepräsentantIn, LehrerIn von TeilnehmerIn, InterpretIn, AutorIn,
                                KomponistIn, JournalistIn, MäzenIn, sonstige Rolle. Viertens wurden
                                Teilnahmevoraussetzungen eingeteilt in solche, die sich auf die Herkunft, das Alter,
                                die Angehörigkeit zu einer bestimmten Institution oder auf sonstige Eigenschaften
                                der TeilnehmerInnen beziehen. Bei den Personendaten wurden fünftens in den
                                Quellen explizit genannte adlige, geistliche, militärische und/oder politische
                                Namenszusätze entsprechend erfasst. Körperschaften wurden sechstens nach
                                Gesellschaften, Regierungen/Behörden, Städten/Gemeinden, Schulen/Hochschulen,
                                Theatern/Konzerthäuser, Verlage/Zeitschriften, kirchlichen Institutionen, militärischen
                                Institutionen und sonstigen Körperschaften unterteilt. Um verschiedene Phasen von
                                Preisausschreiben und ihre Dauern bestimmen zu können, wurden siebtens
                                Ereignisse folgendermaßen kategorisiert: Bekanntgabe der Aufgabenstellung,
                                Einsendeschluss, Austragung des Wettbewerbs, Juryentscheidung, Preisverleihung,
                                Sonstiges.
                            </p>
                            <br />
                            <p>
                                <u>Verschlagwortung</u>: Jedes Preisausschreiben wurde, insoweit die Quellen die
                                entsprechenden Informationen hergaben, unter drei Gesichtspunkten
                                verschlagwortet. Dazu zählen erstens die in ihm enthaltene Aufgabenstellungen.
                                Zweitens wurde, wenn bekannt, der konkrete Anlass oder auch entsprechend
                                explizite ideologische Intentionen und Beweggründe in Schlagworten festgehalten.
                                Drittens wurde gegebenenfalls das soziale Milieu des Preisausschreibens insgesamt
                                oder auch die gesellschaftliche Zugehörigkeit der ausschreibenden Institution/Person
                                und/oder der Gruppe der TeilnehmerInnen verschlagwortet. Schlagworte stehen
                                prinzipiell im Singular.
                            </p>
                            <br />
                            <p>
                                <u>Bezeichnungen</u>: Die Preisausschreiben trugen in den seltensten Fällen feste
                                Eigennamen. Stattdessen wurden verschiedene Bezeichnungen verwendet, die in
                                der Datenbank in der Originalsprache der jeweiligen Quelle festgehalten sind.
                            </p>
                            <br />
                            <p>
                                <u>Kommentare und Ergänzungen</u>: Mit dieser Funktion sind weiterführende
                                Informationen und kritische Anmerkungen des Forschungsteams zur jeweiligen
                                Thematik erfasst.
                            </p>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
} 

