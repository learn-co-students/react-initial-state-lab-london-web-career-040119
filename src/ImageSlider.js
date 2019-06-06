import React from 'react'

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialCount: 0,
            currentSlideIndex: 0
        }
    }

    render() {
        return (
        <div>
            <p>I am on slide {this.state.currentSlideIndex}</p>
        </div>
        )
    }
}