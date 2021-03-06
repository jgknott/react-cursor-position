import React, { Component } from 'react';
import { Link } from 'react-router';
import {
    Col,
    Grid,
    Jumbotron,
    Row
} from 'react-bootstrap';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import ActivationByClick from '../components/ActivationByClick';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css';

export default class extends Component {
    render() {
        return (
            <div>
                <Helmet title="Class Name | React Cursor Position" />
                <Header {...this.props}/>
                <Jumbotron>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h2>Click to Activate - Example</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5}>
                                <ul className="summary__list">
                                    <li>
                                        Interaction: Click to activate.
                                    </li>
                                    <li>
                                    See Related:&nbsp;
                                        <Link to="activate-by-hover">
                                            Activate by Hover
                                        </Link>,&nbsp;
                                        <Link to="activate-by-press">
                                            Activate by Press
                                        </Link>,&nbsp;
                                        <Link to="activate-by-tap">
                                            Activate by Tap
                                        </Link>,&nbsp;
                                        <Link to="activate-by-touch">
                                            Activate by Touch
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={5}>
                                <ul className="summary__list">
                                    <li>Prop: activationInteractionMouse</li>
                                    <li>Type: One of [INTERACTIONS.HOVER, INTERACTIONS.CLICK]</li>
                                    <li>Default: INTERACTIONS.HOVER</li>
                                    <li>Import INTERACTIONS from react-cursor-position (see code example below)</li>
                                    <li>
                                        <a href="https://github.com/ethanselzer/react-cursor-position/blob/master/example/src/components/ActivationByClick.js">
                                            Example Code
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={6} md={4}>
                            <ActivationByClick />
                        </Col>
                        <Col
                            sm={6}
                            md={8}
                            className="example__source-container"
                            style={{ height: '280px' }}
                        >
                            <iframe title="example"
                                src="activation-click.html"
                                frameBorder="0"
                                className="code-frame"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
