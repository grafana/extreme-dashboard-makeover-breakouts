import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import useBaseUrl from '@docusaurus/useBaseUrl';

function AssistantAdmonition(props) {
    return (
        <div className={'admonition-custom'}>
            <div className={'icon-container'}>
                <img src={useBaseUrl('/img/assistant.svg')} alt="Grafana Assistant"/>
            </div>
            <div>
                <div className={'heading'}>{props.title}</div>
                <div className={'content'}>{props.children}</div>
            </div>
        </div>
    )
}

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,
    'assistant-tip': AssistantAdmonition,
};

export default AdmonitionTypes;
