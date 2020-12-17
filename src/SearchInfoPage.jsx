import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Breadcrumb, Row, Col} from 'antd';

const { Content } = Layout; 

export default function SearchInfoPage( props ) {
    return(
        <Layout>
            <Content style={{ marginLeft: "50px", marginTop: "20px" }}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/credits">Über die Suche</Link></Breadcrumb.Item>
                </Breadcrumb>

                <Layout style={{ marginTop: "20px", marginBottom: "20px" }} >
                    <Row>
                        <Col offset={2} style={{ maxWidth: "800px", marginLeft: "100px", marginRight: "100px"}}>
                            <h1 style={{fontSize: "1.7rem"}}>Anleitung zu den Suchfunktionen:</h1>
                            <p>
                                Die Verknüpfung von Begriffen mit + wird für den Operator UND verwendet, d. h.
                                wenn alle Preisausschreiben gefunden werden sollen, die &lt;Beethoven&gt; UND
                                &lt;Symphonie&gt; enthalten, dann muss in die Suchzeile &lt;Beethoven + Symphonie&gt;
                                eingegeben werden.
                            </p>
                            <p>Achtung: Bei der Suche nach Worten müssen Akzente / Sonderzeichen berücksichtigt
                                werden! Ggf. kann es daher sinnvoll sein, unterschiedliche Schreibweisen zu versuchen oder
                                einen Unschärfefaktor einzubeziehen (s. u.).</p>
                            <p>
                                Die Suche kann auf verschiedene Weise spezifiziert werden:
                                <ul>
                                    <li>
                                        Die Verknüpfung von Begriffen mit + wird für den Operator UND verwendet, d. h.
                                        wenn alle Preisausschreiben gefunden werden sollen, die &lt;Beethoven&gt; UND
                                        &lt;Symphonie&gt; enthalten, dann muss in die Suchzeile &lt;Beethoven + Symphonie&gt;
                                        eingegeben werden.</li>
                                    <li>
                                        Die Verknüpfung von Begriffen mit | wird für den Operator ODER verwendet. Da die
                                        Suche automatisch Begriffe mit ODER verknüpft, ist dies z. B. dann wichtig, wenn
                                        UND und ODER kombiniert werden sollen. Wenn nach &lt;Beethoven&gt; UND
                                        &lt;Streichquartett&gt; ODER &lt;Symphonie&gt; (also alle Preisausschreiben, in denen
                                        entweder &lt;Beethoven&gt; und &lt;Symphonie&gt; oder &lt;Beethoven&gt; und &lt;Streichquartett&gt;
                                        vorkommt), dann wäre einzugeben &lt;Beethoven + Symphonie | Streichquartett&gt;.
                                    </li>
                                    <li>
                                        Mit - lässt sich ein Begriff gezielt ausschließen. Sollen also alle Einträge, die einen
                                        Begriff NICHT aufweisen, gefunden werden, wird unmittelbar vor den Begriff ein -
                                        gesetzt. &lt;-Beethoven&gt; zeigt sämtliche Preisausschreiben an, in denen Beethoven nicht
                                        vorkommt.
                                    </li>
                                    <li>
                                        Durch die Kombination von + und - lassen sich genaue Spezifikationen vornehmen:
                                        Sollen etwa sämtliche Preisausschreiben gefunden werden, die &lt;Beethoven&gt;, aber
                                        NICHT &lt;Symphonie&gt;, also &lt;Beethoven&gt; UND &lt;NICHT Symphonie&gt; aufweisen,
                                        dann ist einzugeben &lt;Beethoven + -Symphonie&gt;. (Bitte an das + denken, denn sonst
                                        werden sämtliche Preisausschreiben angezeigt: &lt;Beethoven -Symphonie&gt; ruft alle
                                        Ergebnisse auf, die &lt;Beethoven&gt; oder &lt;NICHT Symphonie&gt; enthalten.
                                    </li>
                                    <li>
                                        Durch „“ kann nach einer bestimmten Phrase gesucht werden, z. B. „im ungarischen
                                        Stil“.
                                    </li>
                                    <li>
                                        Ein * erlaubt die Präfixsuche, d. h. mit diesem Zeichen kann nach Wortanfängen
                                        gesucht werden. Eine Suche nach &lt;Beethoven*&gt; findet auch &lt;Beethovens&gt; usw.
                                        (Beachten Sie, dass die Suche sonst nur &lt;Beethoven&gt; findet.)
                                    </li>
                                    <li>
                                        Soll die Suche mehr Unschärfe zulassen, z. B. um differierende Schreibweisen zu
                                        erlauben (Müller, Muller, Mullen), so kann das Symbol ~N an das Wort angehängt
                                        werden, wobei N für eine Ziffer steht, die die Anzahl der Buchstaben signalisiert, um
                                        die der Eintrag differieren darf. Sucht man nach &lt;Müller~1&gt;, so erhält man
                                        Ergebnisse für Müller, Muller, Mullen etc. Eine Suche nach &lt;Müller~2&gt; erbringt
                                        bereits sehr viel mehr Resultate, etwa auch Mollier, Liller etc.
                                    </li>
                                    <li>
                                        Suche mit Unschärfe ist auch bei Phrasen möglich. Hier signalisiert N die Anzahl von
                                        Wörtern, um die Phrasen voneinander abweichen dürfen. &lt;„Komposition eines
                                        Vokalstücks“~1&gt; findet auch &lt;Komposition eines vierstimmigen Vokalstücks&gt; und
                                        &lt;Komposition eines geistlichen Vokalstücks&gt; etc.
                                    </li>
                                    <li>
                                        Durch ( ) kann die Rangfolge der Suchbestandteile definiert werden, wenn mehrere
                                        Operatoren verbunden werden: Wird beispielsweise nach &lt;Beethoven +
                                        (Streichquartett | Symphonie)&gt; gesucht, so werden alle Ergebnisse angezeigt, die
                                        &lt;Beethoven&gt; entweder zusammen mit &lt;Streichquartett&gt; oder zusammen mit
                                        &lt;Symphonie&gt; aufweisen. Wird aber nach &lt;(Beethoven + Symphonie) |
                                        Streichquartett&gt; gesucht, so erhalten die Suchenden alle Resultate, in denen entweder
                                        &lt;Beethoven&gt; zusammen mit &lt;Symphonie&gt; auftaucht oder in denen &lt;Streichquartett&gt;
                                        auftaucht.
                                    </li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Layout>
            </Content>
        </Layout>
    );
}