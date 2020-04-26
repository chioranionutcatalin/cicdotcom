import {Row, Col, Container, Jumbotron} from 'react-bootstrap';
import React from 'react';
import {RetroWrapper, RetroHeader, RetroFooter} from './styled';
import {RetroMenu} from './RetroMenu';

export const RetroVibe = () => {
    return (
        <RetroWrapper>
            <RetroHeader>
            `   <div>Just a retro/vintage 90s early 2000 look alike portofolio website? </div>
            </RetroHeader>
            <Container fluid={true}>
                <Row>
                    <Col sm={4}>
                        <RetroMenu/>
                    </Col>
                </Row>
            </Container>
                <RetroFooter>
                    <h2>
                        Copyright © 2018 - 2020 Chioran Ionut Catalin.
                    </h2>
                </RetroFooter>
            </RetroWrapper>
    );
};