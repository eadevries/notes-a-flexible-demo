import { connect } from "react-redux";
import Switch from "react-switch";

import Header from "../components/Header";
import Layout from "../components/Layout";
import { sortOptions } from "../lib/sortOptions";
import { loadUserFromDB, updateUserInDB } from "../state/actions";
import { colors, fonts, sizes } from "../styles/base";

class Preferences extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        if (!this.props.userIsStale) {
            this.state.defaultSort = this.props.user.defaultSort;
            this.state.saveSort = this.props.user.saveSort;
            this.state.saveFilter = this.props.user.saveFilter;
        }
    }

    async componentDidMount() {
        // load user preferences if not loaded by SSR.
        if (this.props.userIsStale) {
            await this.props.loadUser();
            this.setState({
                defaultSort: this.props.user.defaultSort,
                saveSort: this.props.user.saveSort,
                saveFilter: this.props.user.saveFilter
            });
        }
    }

    onDefaultSortChanged = event => {
        const defaultSort = event.target.value;
        this.setState({
            defaultSort
        });
        this.props.updateUser({ defaultSort });
    };

    onSaveFilterChanged = checked => {
        this.setState({
            saveFilter: checked
        });
        const updates = { saveFilter: checked };
        if (!checked) {
            updates.filter = undefined;
        }
        this.props.updateUser(updates);
    };

    onSaveSortChanged = checked => {
        this.setState({
            saveSort: checked
        });
        const updates = { saveSort: checked };
        if (!checked) {
            updates.filter = undefined;
        }
        this.props.updateUser(updates);
    };

    render() {
        return (
            <Layout>
                <Header text="preferences" fontSize="3.2rem" />
                <div className="preferences-list">
                    <label className="default-sort" htmlFor="defaultSort">
                        Default sort:
                    </label>
                    {this.props.user && this.state.defaultSort !== undefined && (
                        <select
                            className="sort-select"
                            name="defaultSort"
                            value={this.state.defaultSort}
                            onChange={this.onDefaultSortChanged}
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
                    )}
                    <label className="save-sort" htmlFor="saveSort">
                        Save selected sort (ignoring default):
                    </label>
                    {this.props.user && this.state.saveSort !== undefined && (
                        <Switch
                            checked={this.state.saveSort}
                            className="save-sort-input"
                            id="saveSort"
                            onChange={this.onSaveSortChanged}
                            onColor={colors.tr}
                        />
                    )}
                    <label className="save-filter" htmlFor="saveFilter">
                        Save filter value:
                    </label>
                    {this.props.user && this.state.saveFilter !== undefined && (
                        <Switch
                            checked={this.state.saveFilter}
                            className="save-filter-input"
                            id="saveFilter"
                            onChange={this.onSaveFilterChanged}
                            onColor={colors.tr}
                        />
                    )}
                </div>
                <style jsx>{`
                    h2 {
                        color: ${colors.tr};
                        font-family: ${fonts.fancy};
                    }
                    .preferences-list {
                        align-items: center;
                        display: grid;
                        font-size: 1.4rem;
                        grid-column-gap: ${sizes.md};
                        grid-row-gap: ${sizes.sm};
                        grid-template-areas:
                            "default-sort ."
                            "sort-select sort-select"
                            "save-sort ."
                            "save-sort-input save-sort-input"
                            "save-filter ."
                            "save-filter-input save-filter-input";
                        padding: ${sizes.md} 0 ${sizes.md} ${sizes.sm};
                    }
                    select {
                        background-color: #dddddd;
                        border: none;
                        font-family: ${fonts.main};
                        font-size: 1.4rem;
                        justify-self: start;
                    }

                    .default-sort {
                        grid-area: default-sort;
                    }
                    .sort-select {
                        grid-area: sort-select;
                    }
                    .save-sort {
                        grid-area: save-sort;
                        margin-top: ${sizes.md};
                    }

                    .save-filter {
                        grid-area: save-filter;
                        margin-top: ${sizes.md};
                    }

                    @media (min-width: ${sizes.breakpoint}) {
                        .preferences-list {
                            align-items: center;
                            display: grid;
                            font-size: 1.8rem;
                            grid-column-gap: ${sizes.md};
                            grid-row-gap: ${sizes.lg};
                            grid-template-columns: 1fr 1fr;
                            grid-template-areas:
                                "default-sort sort-select"
                                "save-sort save-sort-input"
                                "save-filter save-filter-input";
                            padding: ${sizes.md} 0;
                        }

                        .default-sort {
                            justify-self: end;
                        }
                        .sort-select {
                            font-size: 1.8rem;
                        }
                        .save-sort {
                            margin: 0;
                            justify-self: end;
                        }
                        .save-filter {
                            margin: 0;
                            justify-self: end;
                        }
                    }
                `}</style>
                {/* Global styles needed for checkbox widget */}
                <style global jsx>{`
                    .save-sort-input {
                        grid-area: save-sort-input;
                    }
                    .save-filter-input {
                        grid-area: save-filter-input;
                    }
                `}</style>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadUser: () => dispatch(loadUserFromDB()),
    updateUser: updates => dispatch(updateUserInDB(updates))
});

const mapStateToProps = state => ({
    user: state.user,
    userIsStale: state.user.stale
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Preferences);
