import React, { useLayoutEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import '../scss/achievements.scss';

const Achievements = () => {

    const [show, setShow] = useState(true);

    const showContent = () => {
        setShow(!show)
    }

    useLayoutEffect(() => {
        showContent();
        // eslint-disable-next-line
    }, [])

    return (
        <Fade bottom duration={2000}>
            <div className='stats-container'>
                <div class="stats-heading">📊 Stats.</div>
                <div class="github-text">Github</div>
                <div class="github">
                    <div class="contributions">
                        <CountUp
                            start={0}
                            end={2165}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="contributions-text">
                            🔥 Contributions
                        </div>
                    </div>
                    <div class="stars">
                        <CountUp
                            start={0}
                            end={16}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="stars-text">
                            🌟 Stars
                        </div>
                    </div>
                    <div class="repos">
                        <CountUp
                            start={0}
                            end={21}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="repos-text">
                            📁 Repos
                        </div>
                    </div>
                    <div class="prs">
                        <CountUp
                            start={0}
                            end={232}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="prs-text">
                            👇 Pulls
                        </div>
                    </div>
                </div>
                <div class="stack-text">Stackoverflow</div>
                <div class="stack">
                    <div class="reputation">
                        <CountUp
                            start={0}
                            end={165}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="reputation-text">💯 Reputation</div>
                    </div>
                    <div class="gold">
                        <CountUp
                            start={0}
                            end={1}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="gold-text">
                            🥇 Gold
                        </div>
                    </div>
                    <div class="silver">
                        <CountUp
                            start={0}
                            end={2}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="silver-text">🥈 Silver</div>
                    </div>
                    <div class="bronze">
                        <CountUp
                            start={0}
                            end={14}
                            separator=','
                            duration={2.75}
                            redraw={true}
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>

                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <div class="bronze-text">🥉 Bronze</div>
                    </div>
                </div>

            </div>

        </Fade >
    )
}

export default Achievements
