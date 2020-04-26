import {Row, Col, Container} from 'react-bootstrap';
import React from 'react';
import {RetroWrapper, RetroHeader, RetroFooter} from './styled';
import {RetroMenu} from './RetroMenu';
//inspiration
//https://www.hover.com/blog/10-things-that-used-to-be-on-every-website-that-you-totally-forgot-about/
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
                    <div>
                        Copyright © 2020 - {new Date().getFullYear()} Chioran Ionut Catalin.
                    </div>
                </RetroFooter>
            </RetroWrapper>
    );
};