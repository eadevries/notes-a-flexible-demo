import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Note from "./Note";
import { sizes } from "../styles/base";

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <div>
                    {this.props.notes.length > 0 || this.props.children ? (
                        this.props.notes.map(note => (
                            <Note key={note.id} {...note} />
                        ))
                    ) : (
                        <div className="empty-list">
                            <p>No notes found!</p>
                            <p>
                                <em>
                                    You can always add one by clicking the{" "}
                                    <FontAwesomeIcon icon={"plus-circle"} />{" "}
                                    icon above— or if you've already added some,
                                    try changing your filter.
                                </em>
                            </p>
                        </div>
                    )}
                </div>
                <style jsx>{`
                    .empty-list {
                        background-color: #333;
                        padding: ${sizes.md};
                    }
                    .empty-list p {
                        line-height: 1.5;
                        margin-bottom: ${sizes.md};
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default NoteList;
