import React from 'react';
import Calendar from "../index";
import '../style/index.css'

export default {
    title: 'FocusDateInput',
    component: FocusDateInput,
};

class FocusDateInput extends React.Component {

    state = {focused: false}

    render() {
        const {focused} = this.state
        return (
            <div>
                <Calendar
                    focused={focused}
                    format="DD/MM/YYYY"
                    date="01/01/2016"
                    onBlur={() => {
                        this.setState({...this.state, focused: false})
                    }}
                />
                <input
                    type="button"
                    value="Focus date input with a button"
                    onClick={() => {
                        this.setState({...this.state, focused: true})
                    }}
                />
                <div
                    onClick={() => {
                        this.setState({...this.state, focused: true})
                    }}
                >
                    Focus date input with a div
                </div>
            </div>
        )
    }
}

export const FocusDateInputStory = () => <FocusDateInput/>

FocusDateInputStory.story = {
    title: 'FocusDateInput'
}
