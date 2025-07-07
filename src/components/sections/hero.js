import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Typewriter from 'typewriter-effect';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);import { View, Text } from 'react-native'
    import React from 'react'
    
    type Props = {}
    
    const hero = (props: Props) => {
      return (
        <View>
          <Text>hero</Text>
        </View>
      )
    }
    
    export default hero
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1>
      <Typewriter
        options={{
          strings: ['Hi, my name is'],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </h1>
  );
  const two = <h2 className="big-heading">Santheesh A</h2>;
  const three = <h3 className="big-heading">I develop and integrate APIs.</h3>;
  const four = (
    <>
      <p>
        I’m a Full Stack Developer passionate about crafting seamless, scalable digital experiences.
        I specialize in building and integrating robust APIs, with a strong foundation in Java,
        Spring Boot, ReactJS, and microservices architecture. Currently, I'm focused on integrating
        Identity and Access Management systems at{' '}
        <a href="https://zoho.com/" target="_blank" rel="noreferrer">
          Zoho Corporation
        </a>
        ,enhancing security and enabling smooth user experiences across platforms. I thrive in
        fast-paced environments where I can apply clean code practices, system design, and
        algorithmic thinking to build reliable, high-impact solutions.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="./SantheeshFSD.pdf" target="_blank" rel="noreferrer">
      Check out my resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
