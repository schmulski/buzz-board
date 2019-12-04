import React from 'react';

export default function Sort({children}) {
    return React.Children.toArray(children).sort((a, b) => (a.props.event.nextOccurence > b.props.event.nextOccurence ? 1 : -1));

}