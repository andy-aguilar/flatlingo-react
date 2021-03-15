import { connect } from 'react-redux';

const Test = (props) => {

    return(
        <div>
            You Logged in, you crazy son of a bitch!
        </div>
    )
}

const mapStateToProps = (state) => {
    return {users: state.users};
};

export default connect(mapStateToProps)(Test)