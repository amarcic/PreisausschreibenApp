import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout; 

export default function AboutPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/about">Über das Projekt</Link></Breadcrumb.Item>
                </Breadcrumb>
            
                <Layout style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div>
                    <p>Ermöglicht durch die Deutsche Forschungsgemeinschaft (DFG) </p>
                    <br />
                    <p>Beginn: Januar 2016</p>
                    <br />
                    <p>
                        Leiter: Prof. Dr. Frank Hentschel (Musikwissenschaftliches Institut)<br />
                        Beteiligt: Dr. Andreas Domann <br />
                        MirarbeiterInnen: Dr. Carola Bebermeier, Clemens Kreutzfeldt, Aleksander Marcic (CCeH), Jonas Traudes <br />
                    </p>
                    <br />
                    <p>
                        Das Projekt beabsichtigt, musikalische Preisausschreiben aus der Zeit von 1766 bis 1870 für die Forschung zu erschließen. Das damit angesprochene Material ist aus mehreren Gründen höchst relevant: Erstens ermöglicht es der Musikwissenschaft den Anschluss an die in anderen Fächern derzeit geführte Diskussion über Konkurrenz, zweitens liefert es späteren Studien einen Wegweiser zu zentralem Material im Hinblick auf die Politik und Soziologie des ästhetischen (musikalischen) Urteils, und drittens rückt es musikalische Praktiken, Inhalte, Werke und Objekte in den Fokus, die in den herkömmlichen Meistererzählungen keine oder keine nennenswerte Rolle gespielt haben (und vielfach unbekannt sind), obwohl sie für eine kulturwissenschaftliche Betrachtung der Musik substanziell sein können. Das Projekt konzentriert sich auf einen Quellentypus, der eine möglichst ausführliche Übersicht über das Material ermöglicht: musikbezogene Periodika. Angestrebt wird eine auf dieser Grundlage komplette Erfassung des Materials in einer Datenbank (1), eine Bibliografie theoretischer Aufsätze und Kommentare über Preisausschreiben (2) sowie die Erarbeitung eines darstellenden Grundrisses musikalischer Preisausschreiben des genannten Zeitraums (3). Das Projekt versteht sich entsprechend als Grundlagenforschung, die auf der Basis des umfassendsten Quellenkorpus Material sichten, erschließen und skizzieren möchte.
                    </p>
                    <br />
                    <p>
                        The project aims at gathering comprehensive information about music related competitions from 1766 to 1870. The source material in question is for several reasons highly instructive: 1. It allows musicology to take up the discussions about the broader issues of competition in society recently being lead in other disciplines of the humanities. 2. It offers a guide to important material for later studies on the politics and sociology of aesthetic (musical) judgment. 3. It focusses on musical practices, contents and objects that have not yet been considered in traditional master narratives of music history and that are often unknown although they are of substantial significance from a cultural-historical point of view. The project concentrates on a source type that allows a survey over musical competitions as broad as possible (while at the same time being methodologically consistent and manageable): music periodicals. The concrete goal is threefold: a complete capture of the material in the database (1), a bibliography of theoretical articles and commentaries on competitions (2) and a descriptive outline of music related competitions of the period mentioned (3). The project aims at fundamental research in that it intends to detect, open up and describe the main features of a specific (important, yet unknown) topic using a clearly defined source material.
                    </p>
                </div>
                </Layout>
            </Content>
        </Layout>
    );
} 

