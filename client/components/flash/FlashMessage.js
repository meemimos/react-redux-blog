import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const { id, type, text } = this.props.message;
        console.log(text);
        return(
            <div className="ui container" style={{marginTop: "5px"}}>
                <div className="ui centered grid">
                    <div className="six wide tablet eight wide computer column">
                        <div className={classnames('ui message', {
                            'success': type === 'success',
                            'negative': type === 'error'
                        })}>
                            <i  onClick={this.onClick} className="close icon"></i>
                            <div>{text}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;