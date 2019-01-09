import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import Layout from "../components/Layout";
import {
    addNoteToDB,
    refreshNotesFromDB,
    removeNoteFromDB,
    updateNoteInDB,
    loadUserFromDB,
    updateUserInDB
} from "../state/actions";
import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import { sortOptions, sortFuncs } from "../lib/sortOptions";
import { colors, fonts, sizes } from "../styles/base";
import "../styles/fontawesome";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        let sort = sortOptions.CREATED_DESC;
        if (this.props.user.saveSort && this.props.user.sort) {
            sort = this.props.user.sort;
        } else if (this.props.user.defaultSort) {
            sort = this.props.user.defaultSort;
        }
        this.state = {
            addingNote: false,
            filter:
                (this.props.user.saveFilter && this.props.user.filter) || "",
            newNote: {
                name: "",
                content: ""
            },
            sort
        };
    }

    async componentDidMount() {
        // Primarily needed because when localStorage is used for persistance,
        // it creates an issue with hydrating SSR'd HTML if data is included
        // on very first render. Not applicable when persistant storage is
        // available server-side as well (in this case this.props.notesAreStale
        // will evaluate to false).
        if (this.props.notesAreStale) {
            this.props.refreshNotes();
        }
        if (this.props.userIsStale) {
            await this.props.loadUser();
        }

        if (this.props.user.saveSort && this.props.user.sort) {
            this.setState({ sort: this.props.user.sort });
        } else if (this.props.user.defaultSort) {
            this.setState({ sort: this.props.user.defaultSort });
        }

        if (this.props.user.saveFilter && this.props.user.filter) {
            this.setState({ filter: this.props.user.filter });
        }
    }

    onAddClicked = () => {
        this.setState({
            addingNote: true,
            newNote: { name: "Enter Title", content: "Enter Note" }
        });
    };

    onNewNoteCanceled = () => {
        this.setState({
            addingNote: false,
            newNote: {
                name: "",
                content: ""
            }
        });
    };

    onNewNoteSaved = () => {
        this.props.onNoteAdded({ ...this.state.newNote });
        this.setState({
            addingNote: false,
            newNote: {
                name: "",
                content: ""
            }
        });
    };

    onNewNoteEdited = async updates => {
        // This function awaits the setState callback before
        // returning so that the calling code can make sure
        // state is up to date before the new note is saved.
        await new Promise(resolve => {
            this.setState(
                {
                    newNote: {
                        ...this.state.newNote,
                        ...updates
                    }
                },
                resolve
            );
        });
    };

    onFilterBlur = event => {
        const filter = event.target.value;
        if (this.props.user.saveFilter) {
            this.props.updateUser({ filter });
        }
    };

    onFilterChanged = event => {
        const filter = event.target.value;
        this.setState({ filter });
    };

    onSortChanged = event => {
        const sort = event.target.value;
        this.setState({ sort });
        if (this.props.user.saveSort) {
            this.props.updateUser({ sort });
        }
    };

    render() {
        const sort =
            sortFuncs[this.state.sort] || sortFuncs[sortOptions.CREATED_DESC];
        const noteListProps = {
            notes: this.props.notes
                .filter(note => {
                    const filter = this.state.filter.trim().toLowerCase();
                    return (
                        note.content.toLowerCase().includes(filter) ||
                        note.name.toLowerCase().includes(filter)
                    );
                })
                .sort((note1, note2) => sort(note1, note2))
                .map(note => ({
                    ...note,
                    onDelete: () => this.props.onNoteDeleted(note.id),
                    onEdit: updates => this.props.onNoteEdited(note, updates)
                }))
        };

        const newNoteProps = {
            ...this.state.newNote,
            editing: true,
            onCancel: this.onNewNoteCanceled,
            onEdit: this.onNewNoteEdited,
            onSave: this.onNewNoteSaved
        };

        return (
            <Layout>
                <Header text="dashboard" fontSize="3.2rem" />
                <div className="list-controls">
                    <div className="left-controls">
                        <button
                            className="add-button"
                            disabled={this.state.addingNote}
                            onClick={this.onAddClicked}
                        >
                            <FontAwesomeIcon
                                className={"add-icon"}
                                icon={"plus-circle"}
                            />
                            <div className="add-text">Add a note</div>
                        </button>
                    </div>
                    <div className="right-controls">
                        <div className={"filter-control"}>
                            <label>
                                Filter{" "}
                                <input
                                    type="text"
                                    onBlur={this.onFilterBlur}
                                    onChange={this.onFilterChanged}
                                    value={this.state.filter}
                                />
                            </label>
                        </div>
                        <div className={"sort-control"}>
                            <label>
                                Sort{" "}
                                <select
                                    disabled={
                                        !(
                                            this.props.user &&
                                            this.props.user.defaultSort
                                        )
                                    }
                                    value={this.state.sort}
                                    onChange={this.onSortChanged}
                                >
                                    <option value={sortOptions.CREATED_DESC}>
                                        Created (Newest-Oldest)
                                    </option>
                                    <option value={sortOptions.CREATED_ASC}>
                                        Created (Oldest-Newest)
                                    </option>
                                    <option value={sortOptions.TITLE_A_Z}>
                                        Title (A-Z)
                                    </option>
                                    <option value={sortOptions.TITLE_Z_A}>
                                        Title (Z-A)
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <NoteList {...noteListProps}>
                    {this.state.addingNote && (
                        <React.Fragment>
                            <NewNote {...newNoteProps} />
                        </React.Fragment>
                    )}
                </NoteList>
                <style jsx>{`
                    .list-controls {
                        align-items: center;
                        // border: 1px solid gray;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: ${sizes.md};
                        margin-top: ${sizes.lg};
                        padding: ${sizes.sm};
                    }
                    .right-controls {
                        align-items: center;
                        display: flex;
                        font-size: 1.8rem;
                        justify-content: flex-end;
                    }
                    .filter-control {
                        padding-right: ${sizes.sm};
                    }
                    .filter-control input {
                        border: none;
                        background: #dddddd;
                        font-family: ${fonts.main};
                        padding: ${sizes.xs};
                    }
                    .sort-control select {
                        background: #dddddd;
                        border: none;
                        font-family: ${fonts.main};
                        padding: ${sizes.xs};
                    }
                    .add-button {
                        align-items: center;
                        border: none;
                        background: ${colors.bg};
                        color: ${colors.fg};
                        cursor: pointer;
                        display: flex;
                        font-family: ${fonts.main};
                        font-size: 2.5rem;
                        justify-content: flex-start;
                    }
                    .add-button:hover {
                        color: ${colors.tr};
                    }
                    .add-button:disabled {
                        color: gray;
                        cursor: not-allowed;
                    }
                    .add-text {
                        font-size: 1.8rem;
                    }
                `}</style>
                {/* Global (non-scoped) CSS needed for the FontAwesome icon: */}
                <style global jsx>{`
                    .add-icon {
                        color: ${colors.sd};
                        display: block;
                        margin-right: ${sizes.sm};
                        padding: 0;
                    }
                    .add-button:hover .add-icon {
                        color: ${colors.tr};
                    }
                    .add-button:disabled .add-icon {
                        color: gray;
                    }
                `}</style>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadUser: () => dispatch(loadUserFromDB()),
    onNoteAdded: note => dispatch(addNoteToDB(note)),
    onNoteDeleted: noteId => dispatch(removeNoteFromDB(noteId)),
    onNoteEdited: (note, updates) => dispatch(updateNoteInDB(note, updates)),
    refreshNotes: () => dispatch(refreshNotesFromDB()),
    updateUser: updates => dispatch(updateUserInDB(updates))
});

const mapStateToProps = state => ({
    notes: state.notes.notes,
    notesAreStale: state.notes.stale,
    user: state.user,
    userIsStale: state.user.stale
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
